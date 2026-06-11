const MODULE_ID = "dm-questlog";
const SOCKET = `module.${MODULE_ID}`;
const STATE_SETTING = "state";
const SOUND_SETTINGS = {
  accept: "soundAccept",
  success: "soundSuccess",
  failure: "soundFailure"
};

const STATUS_LABELS = {
  draft: "Entwurf",
  offered: "Aktiv",
  accepted: "Angenommen",
  declined: "Abgelehnt",
  success: "Erfolgreich",
  failed: "Fehlgeschlagen"
};

const STATUS_CLASSES = {
  draft: "is-draft",
  offered: "is-offered",
  accepted: "is-accepted",
  declined: "is-declined",
  success: "is-success",
  failed: "is-failed"
};

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, STATE_SETTING, {
    name: "Questlog-Daten",
    hint: "Interne Speicherung der Questdaten.",
    scope: "world",
    config: false,
    type: Object,
    default: { quests: [] },
    onChange: () => window.dmQuestLog?.render()
  });

  game.settings.register(MODULE_ID, SOUND_SETTINGS.accept, {
    name: "Sound: Quest angenommen",
    hint: "Pfad zu einem kurzen Sound, relativ zum Foundry public-Verzeichnis.",
    scope: "world",
    config: true,
    type: String,
    default: `modules/${MODULE_ID}/sounds/accept.wav`
  });

  game.settings.register(MODULE_ID, SOUND_SETTINGS.success, {
    name: "Sound: Quest erfolgreich",
    hint: "Pfad zu einem kurzen Sound, relativ zum Foundry public-Verzeichnis.",
    scope: "world",
    config: true,
    type: String,
    default: `modules/${MODULE_ID}/sounds/success.wav`
  });

  game.settings.register(MODULE_ID, SOUND_SETTINGS.failure, {
    name: "Sound: Quest fehlgeschlagen",
    hint: "Pfad zu einem kurzen Sound, relativ zum Foundry public-Verzeichnis.",
    scope: "world",
    config: true,
    type: String,
    default: `modules/${MODULE_ID}/sounds/failure.wav`
  });
});

Hooks.once("ready", async () => {
  game.socket.on(SOCKET, handleSocketMessage);

  await preloadConfiguredSounds();

  window.dmQuestLog = new DMQuestLogPanel();
  window.dmQuestLog.render();

  Hooks.on("updateUser", () => window.dmQuestLog?.render());
  Hooks.on("updateActor", () => window.dmQuestLog?.render());
});

function clone(value) {
  if (foundry.utils.deepClone) return foundry.utils.deepClone(value);
  return JSON.parse(JSON.stringify(value));
}

function getState() {
  const state = game.settings.get(MODULE_ID, STATE_SETTING);
  if (!state || !Array.isArray(state.quests)) return { quests: [] };
  return clone(state);
}

async function setState(state) {
  if (!game.user.isGM) {
    ui.notifications.warn("Nur der Spielleiter kann das Questlog speichern.");
    return;
  }
  await game.settings.set(MODULE_ID, STATE_SETTING, state);
}

function sortNewestFirst(quests) {
  return [...quests].sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
}

function isResponsibleGM() {
  if (!game.user.isGM) return false;
  const activeGM = game.users.activeGM;
  return !activeGM || activeGM.id === game.user.id;
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.innerText = String(value ?? "");
  return div.innerHTML;
}

function formatDate(timestamp) {
  if (!timestamp) return "—";
  return new Date(timestamp).toLocaleString(game.i18n.lang || navigator.language, {
    dateStyle: "short",
    timeStyle: "short"
  });
}

function getPlayerUsers() {
  return game.users.contents.filter(user => !user.isGM);
}

function getUserLabel(userId) {
  const user = game.users.get(userId);
  if (!user) return "Unbekannter Spieler";
  const character = user.character?.name ? ` – ${user.character.name}` : "";
  return `${user.name}${character}`;
}

async function handleSocketMessage(data) {
  if (!data || typeof data !== "object") return;

  if (data.type === "playSound") {
    if (!data.userId || data.userId === game.user.id) playSound(data.kind);
    return;
  }

  if (data.type !== "playerDecision") return;
  if (!isResponsibleGM()) return;

  const { questId, decision, userId } = data;
  const state = getState();
  const quest = state.quests.find(q => q.id === questId);
  if (!quest) return;

  if (quest.userId !== userId) return;
  if (!quest.active) return;
  if (!["offered", "accepted"].includes(quest.status)) return;

  const now = Date.now();

  if (decision === "accept") {
    quest.status = "accepted";
    quest.acceptedAt = now;
    quest.updatedAt = now;
    await setState(state);
    ui.notifications.info(`${getUserLabel(userId)} hat die Quest „${quest.title}“ angenommen.`);
    return;
  }

  if (decision === "decline") {
    quest.status = "declined";
    quest.active = false;
    quest.declinedAt = now;
    quest.updatedAt = now;
    await setState(state);
    ui.notifications.info(`${getUserLabel(userId)} hat die Quest „${quest.title}“ abgelehnt.`);
  }
}

async function preloadConfiguredSounds() {
  for (const key of Object.values(SOUND_SETTINGS)) {
    const src = game.settings.get(MODULE_ID, key);
    if (!src) continue;
    try {
      await foundry.audio.AudioHelper.preloadSound(src);
    } catch (error) {
      console.warn(`${MODULE_ID} | Sound konnte nicht vorgeladen werden:`, src, error);
    }
  }
}

function playSound(kind) {
  const settingKey = SOUND_SETTINGS[kind];
  if (!settingKey) return;

  const src = game.settings.get(MODULE_ID, settingKey);
  if (!src) return;

  try {
    foundry.audio.AudioHelper.play({
      src,
      volume: 0.75,
      autoplay: true,
      loop: false
    }, false);
  } catch (error) {
    console.warn(`${MODULE_ID} | Sound konnte nicht abgespielt werden:`, src, error);
  }
}

function playSoundForUser(userId, kind) {
  game.socket.emit(SOCKET, { type: "playSound", userId, kind });
  if (game.user.id === userId) playSound(kind);
}

async function awardInspiration(userId) {
  const user = game.users.get(userId);
  const actor = user?.character;

  if (!actor) {
    ui.notifications.warn(`${getUserLabel(userId)} hat keinen Charakter zugewiesen. Inspiration konnte nicht vergeben werden.`);
    return false;
  }

  const path = "system.attributes.inspiration";
  const current = foundry.utils.getProperty(actor, path);

  if (typeof current === "number") {
    await actor.update({ [path]: current + 1 });
  } else {
    await actor.update({ [path]: true });
  }

  return true;
}

class DMQuestLogPanel {
  constructor() {
    this.isOpen = localStorage.getItem(`${MODULE_ID}.open`) === "true";
  }

  render() {
    this._ensureShell();
    const panel = document.getElementById("dmql-panel");
    const body = panel.querySelector(".dmql-body");

    panel.classList.toggle("dmql-open", this.isOpen);
    panel.classList.toggle("dmql-collapsed", !this.isOpen);

    body.innerHTML = game.user.isGM ? this._renderGMView() : this._renderPlayerView();
    this._activateListeners(panel);
  }

  _ensureShell() {
    if (document.getElementById("dmql-panel")) return;

    const toggle = document.createElement("button");
    toggle.id = "dmql-toggle";
    toggle.type = "button";
    toggle.innerHTML = `<i class="fas fa-scroll"></i><span>Quests</span>`;
    toggle.addEventListener("click", () => this.toggle());

    const panel = document.createElement("aside");
    panel.id = "dmql-panel";
    panel.className = "dmql-panel dmql-collapsed";
    panel.innerHTML = `
      <header class="dmql-header">
        <h2>Questlog</h2>
        <button type="button" class="dmql-close" data-action="close" title="Schließen">
          <i class="fas fa-xmark"></i>
        </button>
      </header>
      <div class="dmql-body"></div>
    `;

    document.body.append(toggle, panel);
  }

  toggle() {
    this.isOpen = !this.isOpen;
    localStorage.setItem(`${MODULE_ID}.open`, String(this.isOpen));
    this.render();
  }

  close() {
    this.isOpen = false;
    localStorage.setItem(`${MODULE_ID}.open`, "false");
    this.render();
  }

  _renderGMView() {
    const state = getState();
    const quests = sortNewestFirst(state.quests);
    const players = getPlayerUsers();

    const options = players.map(user => {
      const character = user.character?.name ? ` (${escapeHTML(user.character.name)})` : "";
      return `<option value="${user.id}">${escapeHTML(user.name)}${character}</option>`;
    }).join("");

    return `
      <section class="dmql-card dmql-create">
        <h3>Neue Quest anlegen</h3>
        ${players.length ? `
          <form data-action="createQuest">
            <label>
              Spieler
              <select name="userId" required>${options}</select>
            </label>
            <label>
              Titel
              <input type="text" name="title" maxlength="80" required placeholder="z. B. Der verschwundene Kurier">
            </label>
            <label>
              Kurzbeschreibung
              <textarea name="description" rows="4" required placeholder="Was soll der Charakter tun?"></textarea>
            </label>
            <label class="dmql-checkbox">
              <input type="checkbox" name="active" checked>
              Quest sofort aktiv anbieten
            </label>
            <button type="submit" class="dmql-primary">Quest erstellen</button>
          </form>
        ` : `<p class="dmql-muted">Es gibt aktuell keine Spieler-User in dieser Welt.</p>`}
      </section>

      <section class="dmql-log">
        <h3>Gesamtes Questlog</h3>
        ${quests.length ? quests.map(q => this._renderGMQuest(q)).join("") : `<p class="dmql-muted">Noch keine Quests vorhanden.</p>`}
      </section>
    `;
  }

  _renderGMQuest(quest) {
    const status = quest.status ?? "draft";
    const statusClass = STATUS_CLASSES[status] ?? "is-draft";
    const activeBadge = quest.active ? `<span class="dmql-badge is-active">sichtbar</span>` : `<span class="dmql-badge is-inactive">inaktiv</span>`;
    const canComplete = quest.status === "accepted" || quest.status === "offered" || quest.status === "success";

    return `
      <article class="dmql-card dmql-quest ${statusClass}" data-quest-id="${quest.id}">
        <div class="dmql-quest-head">
          <h4>${escapeHTML(quest.title)}</h4>
          <div class="dmql-badges">
            ${activeBadge}
            <span class="dmql-badge">${STATUS_LABELS[status] ?? status}</span>
          </div>
        </div>
        <p class="dmql-desc">${escapeHTML(quest.description)}</p>
        <dl class="dmql-meta">
          <div><dt>Spieler</dt><dd>${escapeHTML(getUserLabel(quest.userId))}</dd></div>
          <div><dt>Erstellt</dt><dd>${formatDate(quest.createdAt)}</dd></div>
          ${quest.acceptedAt ? `<div><dt>Angenommen</dt><dd>${formatDate(quest.acceptedAt)}</dd></div>` : ""}
          ${quest.completedAt ? `<div><dt>Abgeschlossen</dt><dd>${formatDate(quest.completedAt)}</dd></div>` : ""}
        </dl>
        <div class="dmql-actions">
          ${quest.active ? `<button type="button" data-action="deactivate" data-quest-id="${quest.id}">Inaktiv</button>` : `<button type="button" data-action="activate" data-quest-id="${quest.id}">Aktiv stellen</button>`}
          ${canComplete ? `<button type="button" data-action="success" data-quest-id="${quest.id}">Erfolgreich</button>` : ""}
          ${canComplete ? `<button type="button" data-action="failure" data-quest-id="${quest.id}">Fehlgeschlagen</button>` : ""}
          <button type="button" data-action="delete" data-quest-id="${quest.id}" class="dmql-danger">Löschen</button>
        </div>
      </article>
    `;
  }

  _renderPlayerView() {
    const state = getState();
    const quests = sortNewestFirst(state.quests).filter(q => q.userId === game.user.id && q.active);

    return `
      <section class="dmql-log">
        <h3>Deine aktiven Quests</h3>
        ${quests.length ? quests.map(q => this._renderPlayerQuest(q)).join("") : `<p class="dmql-muted">Du hast aktuell keine aktiven Quests.</p>`}
      </section>
    `;
  }

  _renderPlayerQuest(quest) {
    const status = quest.status ?? "offered";
    const statusClass = STATUS_CLASSES[status] ?? "is-offered";
    const canDecide = status === "offered";

    return `
      <article class="dmql-card dmql-quest ${statusClass}" data-quest-id="${quest.id}">
        <div class="dmql-quest-head">
          <h4>${escapeHTML(quest.title)}</h4>
          <span class="dmql-badge">${STATUS_LABELS[status] ?? status}</span>
        </div>
        <p class="dmql-desc">${escapeHTML(quest.description)}</p>
        ${status === "success" ? `<p class="dmql-result">Quest erfolgreich abgeschlossen. Inspiration erhalten.</p>` : ""}
        ${canDecide ? `
          <div class="dmql-actions">
            <button type="button" class="dmql-primary" data-action="accept" data-quest-id="${quest.id}">Annehmen</button>
            <button type="button" data-action="decline" data-quest-id="${quest.id}">Ablehnen</button>
          </div>
        ` : ""}
      </article>
    `;
  }

  _activateListeners(panel) {
    const createForm = panel.querySelector("form[data-action='createQuest']");
    if (createForm) {
      createForm.addEventListener("submit", event => this._onCreateQuest(event));
    }

    panel.querySelectorAll("button[data-action]").forEach(button => {
      button.addEventListener("click", event => this._onAction(event));
    });
  }

  async _onCreateQuest(event) {
    event.preventDefault();
    if (!game.user.isGM) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const active = data.get("active") === "on";
    const now = Date.now();

    const quest = {
      id: foundry.utils.randomID(16),
      userId: String(data.get("userId")),
      title: String(data.get("title") ?? "").trim(),
      description: String(data.get("description") ?? "").trim(),
      active,
      status: active ? "offered" : "draft",
      createdAt: now,
      updatedAt: now,
      acceptedAt: null,
      declinedAt: null,
      completedAt: null
    };

    if (!quest.userId || !quest.title || !quest.description) {
      ui.notifications.warn("Bitte Spieler, Titel und Kurzbeschreibung ausfüllen.");
      return;
    }

    const state = getState();
    state.quests.push(quest);
    await setState(state);
    form.reset();
    ui.notifications.info(`Quest „${quest.title}“ wurde erstellt.`);
  }

  async _onAction(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const action = button.dataset.action;
    const questId = button.dataset.questId;

    if (action === "close") {
      this.close();
      return;
    }

    if (!questId) return;

    if (action === "accept" || action === "decline") {
      if (action === "accept") playSound("accept");
      game.socket.emit(SOCKET, {
        type: "playerDecision",
        questId,
        decision: action,
        userId: game.user.id
      });
      return;
    }

    if (!game.user.isGM) return;

    const state = getState();
    const quest = state.quests.find(q => q.id === questId);
    if (!quest) return;

    const now = Date.now();

    switch (action) {
      case "activate": {
        quest.active = true;
        quest.status = quest.status === "accepted" ? "accepted" : "offered";
        quest.updatedAt = now;
        await setState(state);
        break;
      }
      case "deactivate": {
        quest.active = false;
        if (quest.status === "offered") quest.status = "draft";
        quest.updatedAt = now;
        await setState(state);
        break;
      }
      case "success": {
        quest.active = true;
        quest.status = "success";
        quest.completedAt = now;
        quest.updatedAt = now;
        await setState(state);
        const awarded = await awardInspiration(quest.userId);
        playSoundForUser(quest.userId, "success");
        ui.notifications.info(`Quest „${quest.title}“ wurde als erfolgreich markiert.${awarded ? " Inspiration wurde vergeben." : ""}`);
        break;
      }
      case "failure": {
        quest.active = false;
        quest.status = "failed";
        quest.completedAt = now;
        quest.updatedAt = now;
        await setState(state);
        playSoundForUser(quest.userId, "failure");
        ui.notifications.info(`Quest „${quest.title}“ wurde als fehlgeschlagen markiert.`);
        break;
      }
      case "delete": {
        const confirmed = window.confirm(`Quest „${quest.title}“ wirklich löschen?`);
        if (!confirmed) return;
        state.quests = state.quests.filter(q => q.id !== questId);
        await setState(state);
        break;
      }
    }
  }
}
