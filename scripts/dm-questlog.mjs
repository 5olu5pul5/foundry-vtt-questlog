const MODULE_ID = "dm-questlog";
const SOCKET = `module.${MODULE_ID}`;
const STATE_SETTING = "state";
const INSPIRATION_MODE_SETTING = "inspirationMode";
const LANGUAGE_SETTING = "language";
const OPACITY_SETTING = "windowOpacity";
const FIRST_RUN_SETTING = "firstRunNoticeShown";
const SO_INSPIRED_ID = "so-inspired";

const LOCAL_STORAGE_KEYS = {
  open: `${MODULE_ID}.open`,
  compact: `${MODULE_ID}.compact`,
  layout: `${MODULE_ID}.layout`,
  gmFilter: `${MODULE_ID}.gmFilter`
};

const SOUND_SETTINGS = {
  accept: "soundAccept",
  success: "soundSuccess",
  failure: "soundFailure"
};

const INSPIRATION_MODES = {
  auto: "Automatisch: So Inspired bevorzugen, sonst D&D-5e-Standard",
  standard: "D&D-5e-Standard: Boolean-Inspiration",
  soInspired: "So Inspired: Inspiration stapeln"
};

const LANGUAGE_CHOICES = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français"
};

const STATUS_CLASSES = {
  draft: "is-draft",
  offered: "is-offered",
  accepted: "is-accepted",
  declined: "is-declined",
  success: "is-success",
  failed: "is-failed"
};

const TRANSLATIONS = {
  de: {
    questlog: "Questlog",
    questsToggle: "Quests",
    close: "Schließen",
    compact: "Kompakt",
    expand: "Erweitern",
    moduleConfiguration: "Modulkonfiguration",
    inspirationSystem: "Inspirations-System",
    language: "Sprache",
    windowOpacity: "Fenstertransparenz",
    windowOpacityValue: "{value}% sichtbar",
    soundAccept: "Sound: Quest angenommen",
    soundSuccess: "Sound: Quest erfolgreich",
    soundFailure: "Sound: Quest fehlgeschlagen",
    saveSettings: "Einstellungen speichern",
    backupTitle: "Export / Import",
    exportData: "Questlog exportieren",
    importData: "Questlog importieren",
    importFile: "Backup-Datei",
    resetWindow: "Fensterposition zurücksetzen",
    newQuest: "Neue Quest anlegen",
    player: "Spieler",
    title: "Titel",
    shortDescription: "Kurzbeschreibung",
    activeImmediately: "Quest sofort aktiv anbieten",
    createQuest: "Quest erstellen",
    fullQuestlog: "Gesamtes Questlog",
    filter: "Filter",
    filterAll: "Alle Quests",
    filterActive: "Aktive Quests",
    filterInactive: "Inaktive Quests",
    filterPlayerPrefix: "Spieler: {name}",
    noPlayerUsers: "Es gibt aktuell keine Spieler-User in dieser Welt.",
    noQuests: "Noch keine Quests vorhanden.",
    noFilteredQuests: "Keine Quests für diesen Filter.",
    activeQuests: "Aktive Quests",
    yourActiveQuests: "Deine aktiven Quests",
    noActiveQuests: "Du hast aktuell keine aktiven Quests.",
    noActiveQuestsGM: "Aktuell gibt es keine aktiven Quests.",
    visible: "sichtbar",
    inactive: "inaktiv",
    created: "Erstellt",
    acceptedAt: "Angenommen",
    completedAt: "Abgeschlossen",
    setInactive: "Inaktiv",
    setActive: "Aktiv stellen",
    successful: "Erfolgreich",
    failed: "Fehlgeschlagen",
    delete: "Löschen",
    accept: "Annehmen",
    decline: "Ablehnen",
    questSuccessfulResult: "Quest erfolgreich abgeschlossen. Inspiration erhalten.",
    statusDraft: "Entwurf",
    statusOffered: "Aktiv",
    statusAccepted: "Angenommen",
    statusDeclined: "Abgelehnt",
    statusSuccess: "Erfolgreich",
    statusFailed: "Fehlgeschlagen",
    modeAuto: "Automatisch: So Inspired bevorzugen, sonst D&D-5e-Standard",
    modeStandard: "D&D-5e-Standard: Boolean-Inspiration",
    modeSoInspired: "So Inspired: Inspiration stapeln",
    unknownPlayer: "Unbekannter Spieler",
    exportDescription: "Exportiert Quests, Soundpfade, Sprache, Transparenz und Inspirationsmodus als JSON-Datei. Beim Import werden vorhandene Quests ersetzt.",
    importConfirm: "Vorhandenes Questlog durch die importierte Datei ersetzen?",
    importSuccess: "Questlog-Backup wurde importiert.",
    exportSuccess: "Questlog-Backup wurde erstellt.",
    invalidImport: "Diese Datei enthält kein gültiges DM-Questlog-Backup.",
    onlyGMCanSave: "Nur der Spielleiter kann das Questlog speichern.",
    settingsSaved: "DM-Questlog-Einstellungen gespeichert.",
    invalidInspirationMode: "Ungültiger Inspirationsmodus.",
    invalidLanguage: "Ungültige Sprache.",
    invalidOpacity: "Ungültiger Transparenzwert.",
    questCreated: "Quest „{title}“ wurde erstellt.",
    fillRequired: "Bitte Spieler, Titel und Kurzbeschreibung ausfüllen.",
    playerAcceptedQuest: "{player} hat die Quest „{title}“ angenommen.",
    playerDeclinedQuest: "{player} hat die Quest „{title}“ abgelehnt.",
    deleteConfirm: "Quest „{title}“ wirklich löschen?",
    successNotification: "Quest „{title}“ wurde als erfolgreich markiert.{awardText}",
    awardGiven: " Inspiration wurde vergeben.",
    awardFailed: " Inspiration konnte nicht erhöht werden.",
    failureNotification: "Quest „{title}“ wurde als fehlgeschlagen markiert.",
    noCharacter: "{player} hat keinen Charakter zugewiesen. Inspiration konnte nicht vergeben werden.",
    alreadyInspired: "{actor} hatte bereits Inspiration. Der D&D-5e-Standardwert kann nicht stapeln.",
    soInspiredFallback: "So Inspired ist nicht aktiv oder nicht bereit. DM Questlog fällt für diese Vergabe auf den D&D-5e-Standardwert zurück.",
    soInspiredAddFailed: "So Inspired konnte keine Inspiration hinzufügen: {message}",
    soInspiredAddError: "So Inspired konnte keine Inspiration hinzufügen. Details stehen in der Browser-Konsole.",
    soInspiredMax: "{player} hat bereits die maximale So-Inspired-Inspiration ({current}/{max}).",
    soInspiredNotInstalled: "So Inspired ist nicht installiert.",
    soInspiredInactive: "So Inspired ist installiert, aber in dieser Welt nicht aktiv.",
    soInspiredStatus: "So Inspired aktiv ({api}, {max}, {pool}).",
    soInspiredApiReady: "API bereit",
    soInspiredApiNotReady: "API noch nicht bereit",
    soInspiredMaxUnknown: "Max unbekannt",
    soInspiredMaxValue: "Max: {max}",
    soInspiredSharedPool: "gemeinsamer Pool",
    soInspiredPerPlayer: "pro Spieler",
    firstRunNotice: "DM Questlog eingerichtet. Inspirationsmodus: {mode}. {soInspiredText} Sounds, Sprache, Export/Import und Modus kannst du in den Moduleinstellungen oder im Questlog-GM-Panel ändern.",
    firstRunSoInspiredDetected: "So Inspired wurde erkannt. Der Auto-Modus nutzt es für stapelbare Inspiration.",
    firstRunSoInspiredMissing: "So Inspired wurde nicht als aktives Modul erkannt. Der Auto-Modus nutzt die normale D&D-5e-Inspiration.",
    dragHint: "Fenster per Kopfzeile ziehen; Größe unten rechts ändern.",
    placeholderTitle: "z. B. Der verschwundene Kurier",
    placeholderDescription: "Was soll der Charakter tun?",
    chooseSound: "Sound auswählen",
    clearSound: "Sound entfernen",
    noSoundSelected: "Kein Sound ausgewählt",
    selectedSound: "Ausgewählter Sound",
    filePickerUnavailable: "Dateibrowser nicht verfügbar oder keine Berechtigung."
  },
  en: {
    questlog: "Quest Log",
    questsToggle: "Quests",
    close: "Close",
    compact: "Compact",
    expand: "Expand",
    moduleConfiguration: "Module configuration",
    inspirationSystem: "Inspiration system",
    language: "Language",
    windowOpacity: "Window transparency",
    windowOpacityValue: "{value}% visible",
    soundAccept: "Sound: quest accepted",
    soundSuccess: "Sound: quest successful",
    soundFailure: "Sound: quest failed",
    saveSettings: "Save settings",
    backupTitle: "Export / Import",
    exportData: "Export quest log",
    importData: "Import quest log",
    importFile: "Backup file",
    resetWindow: "Reset window position",
    newQuest: "Create new quest",
    player: "Player",
    title: "Title",
    shortDescription: "Short description",
    activeImmediately: "Offer quest as active immediately",
    createQuest: "Create quest",
    fullQuestlog: "Complete quest log",
    filter: "Filter",
    filterAll: "All quests",
    filterActive: "Active quests",
    filterInactive: "Inactive quests",
    filterPlayerPrefix: "Player: {name}",
    noPlayerUsers: "There are currently no player users in this world.",
    noQuests: "No quests yet.",
    noFilteredQuests: "No quests match this filter.",
    activeQuests: "Active quests",
    yourActiveQuests: "Your active quests",
    noActiveQuests: "You currently have no active quests.",
    noActiveQuestsGM: "There are currently no active quests.",
    visible: "visible",
    inactive: "inactive",
    created: "Created",
    acceptedAt: "Accepted",
    completedAt: "Completed",
    setInactive: "Inactive",
    setActive: "Set active",
    successful: "Successful",
    failed: "Failed",
    delete: "Delete",
    accept: "Accept",
    decline: "Decline",
    questSuccessfulResult: "Quest completed successfully. Inspiration received.",
    statusDraft: "Draft",
    statusOffered: "Active",
    statusAccepted: "Accepted",
    statusDeclined: "Declined",
    statusSuccess: "Successful",
    statusFailed: "Failed",
    modeAuto: "Automatic: prefer So Inspired, otherwise D&D 5e default",
    modeStandard: "D&D 5e default: boolean inspiration",
    modeSoInspired: "So Inspired: stack inspiration",
    unknownPlayer: "Unknown player",
    exportDescription: "Exports quests, sound paths, language, transparency and inspiration mode as a JSON file. Import replaces the current quests.",
    importConfirm: "Replace the current quest log with the imported file?",
    importSuccess: "Quest log backup imported.",
    exportSuccess: "Quest log backup created.",
    invalidImport: "This file does not contain a valid DM Questlog backup.",
    onlyGMCanSave: "Only the GM can save the quest log.",
    settingsSaved: "DM Questlog settings saved.",
    invalidInspirationMode: "Invalid inspiration mode.",
    invalidLanguage: "Invalid language.",
    invalidOpacity: "Invalid transparency value.",
    questCreated: "Quest “{title}” was created.",
    fillRequired: "Please fill in player, title and short description.",
    playerAcceptedQuest: "{player} accepted the quest “{title}”.",
    playerDeclinedQuest: "{player} declined the quest “{title}”.",
    deleteConfirm: "Really delete quest “{title}”?",
    successNotification: "Quest “{title}” was marked successful.{awardText}",
    awardGiven: " Inspiration was awarded.",
    awardFailed: " Inspiration could not be increased.",
    failureNotification: "Quest “{title}” was marked failed.",
    noCharacter: "{player} has no assigned character. Inspiration could not be awarded.",
    alreadyInspired: "{actor} already had inspiration. The D&D 5e default value cannot stack.",
    soInspiredFallback: "So Inspired is not active or not ready. DM Questlog falls back to the D&D 5e default value for this award.",
    soInspiredAddFailed: "So Inspired could not add inspiration: {message}",
    soInspiredAddError: "So Inspired could not add inspiration. Details are in the browser console.",
    soInspiredMax: "{player} already has the maximum So Inspired inspiration ({current}/{max}).",
    soInspiredNotInstalled: "So Inspired is not installed.",
    soInspiredInactive: "So Inspired is installed, but not active in this world.",
    soInspiredStatus: "So Inspired active ({api}, {max}, {pool}).",
    soInspiredApiReady: "API ready",
    soInspiredApiNotReady: "API not ready yet",
    soInspiredMaxUnknown: "Max unknown",
    soInspiredMaxValue: "Max: {max}",
    soInspiredSharedPool: "shared pool",
    soInspiredPerPlayer: "per player",
    firstRunNotice: "DM Questlog set up. Inspiration mode: {mode}. {soInspiredText} Sounds, language, export/import and mode can be changed in module settings or in the GM quest log panel.",
    firstRunSoInspiredDetected: "So Inspired was detected. Auto mode uses it for stackable inspiration.",
    firstRunSoInspiredMissing: "So Inspired was not detected as an active module. Auto mode uses normal D&D 5e inspiration.",
    dragHint: "Drag the window by its header; resize it from the lower-right corner.",
    placeholderTitle: "e.g. The Missing Courier",
    placeholderDescription: "What should the character do?",
    chooseSound: "Choose sound",
    clearSound: "Remove sound",
    noSoundSelected: "No sound selected",
    selectedSound: "Selected sound",
    filePickerUnavailable: "File browser unavailable or missing permission."
  },
  es: {
    questlog: "Registro de misiones",
    questsToggle: "Misiones",
    close: "Cerrar",
    compact: "Compacto",
    expand: "Expandir",
    moduleConfiguration: "Configuración del módulo",
    inspirationSystem: "Sistema de inspiración",
    language: "Idioma",
    windowOpacity: "Transparencia de la ventana",
    windowOpacityValue: "{value}% visible",
    soundAccept: "Sonido: misión aceptada",
    soundSuccess: "Sonido: misión completada",
    soundFailure: "Sonido: misión fallida",
    saveSettings: "Guardar configuración",
    backupTitle: "Exportar / Importar",
    exportData: "Exportar registro",
    importData: "Importar registro",
    importFile: "Archivo de copia",
    resetWindow: "Restablecer posición de ventana",
    newQuest: "Crear nueva misión",
    player: "Jugador",
    title: "Título",
    shortDescription: "Descripción breve",
    activeImmediately: "Ofrecer misión como activa inmediatamente",
    createQuest: "Crear misión",
    fullQuestlog: "Registro completo",
    filter: "Filtro",
    filterAll: "Todas las misiones",
    filterActive: "Misiones activas",
    filterInactive: "Misiones inactivas",
    filterPlayerPrefix: "Jugador: {name}",
    noPlayerUsers: "Actualmente no hay usuarios jugadores en este mundo.",
    noQuests: "Todavía no hay misiones.",
    noFilteredQuests: "No hay misiones para este filtro.",
    activeQuests: "Misiones activas",
    yourActiveQuests: "Tus misiones activas",
    noActiveQuests: "Actualmente no tienes misiones activas.",
    noActiveQuestsGM: "Actualmente no hay misiones activas.",
    visible: "visible",
    inactive: "inactiva",
    created: "Creada",
    acceptedAt: "Aceptada",
    completedAt: "Completada",
    setInactive: "Inactiva",
    setActive: "Activar",
    successful: "Completada",
    failed: "Fallida",
    delete: "Eliminar",
    accept: "Aceptar",
    decline: "Rechazar",
    questSuccessfulResult: "Misión completada con éxito. Inspiración recibida.",
    statusDraft: "Borrador",
    statusOffered: "Activa",
    statusAccepted: "Aceptada",
    statusDeclined: "Rechazada",
    statusSuccess: "Completada",
    statusFailed: "Fallida",
    modeAuto: "Automático: preferir So Inspired, si no D&D 5e estándar",
    modeStandard: "D&D 5e estándar: inspiración booleana",
    modeSoInspired: "So Inspired: inspiración acumulable",
    unknownPlayer: "Jugador desconocido",
    exportDescription: "Exporta misiones, rutas de sonido, idioma, transparencia y modo de inspiración como archivo JSON. La importación reemplaza las misiones actuales.",
    importConfirm: "¿Reemplazar el registro actual por el archivo importado?",
    importSuccess: "Copia del registro importada.",
    exportSuccess: "Copia del registro creada.",
    invalidImport: "Este archivo no contiene una copia válida de DM Questlog.",
    onlyGMCanSave: "Solo el DJ puede guardar el registro.",
    settingsSaved: "Configuración de DM Questlog guardada.",
    invalidInspirationMode: "Modo de inspiración no válido.",
    invalidLanguage: "Idioma no válido.",
    invalidOpacity: "Valor de transparencia no válido.",
    questCreated: "La misión “{title}” fue creada.",
    fillRequired: "Completa jugador, título y descripción breve.",
    playerAcceptedQuest: "{player} aceptó la misión “{title}”.",
    playerDeclinedQuest: "{player} rechazó la misión “{title}”.",
    deleteConfirm: "¿Eliminar realmente la misión “{title}”?",
    successNotification: "La misión “{title}” fue marcada como completada.{awardText}",
    awardGiven: " Se otorgó inspiración.",
    awardFailed: " No se pudo aumentar la inspiración.",
    failureNotification: "La misión “{title}” fue marcada como fallida.",
    noCharacter: "{player} no tiene personaje asignado. No se pudo otorgar inspiración.",
    alreadyInspired: "{actor} ya tenía inspiración. El valor estándar de D&D 5e no se puede acumular.",
    soInspiredFallback: "So Inspired no está activo o no está listo. DM Questlog usa el valor estándar de D&D 5e para esta recompensa.",
    soInspiredAddFailed: "So Inspired no pudo añadir inspiración: {message}",
    soInspiredAddError: "So Inspired no pudo añadir inspiración. Los detalles están en la consola del navegador.",
    soInspiredMax: "{player} ya tiene la inspiración máxima de So Inspired ({current}/{max}).",
    soInspiredNotInstalled: "So Inspired no está instalado.",
    soInspiredInactive: "So Inspired está instalado, pero no activo en este mundo.",
    soInspiredStatus: "So Inspired activo ({api}, {max}, {pool}).",
    soInspiredApiReady: "API lista",
    soInspiredApiNotReady: "API aún no lista",
    soInspiredMaxUnknown: "Máximo desconocido",
    soInspiredMaxValue: "Máx: {max}",
    soInspiredSharedPool: "reserva compartida",
    soInspiredPerPlayer: "por jugador",
    firstRunNotice: "DM Questlog configurado. Modo de inspiración: {mode}. {soInspiredText} Puedes cambiar sonidos, idioma, exportación/importación y modo en los ajustes del módulo o en el panel del DJ.",
    firstRunSoInspiredDetected: "So Inspired fue detectado. El modo automático lo usa para inspiración acumulable.",
    firstRunSoInspiredMissing: "So Inspired no fue detectado como módulo activo. El modo automático usa la inspiración normal de D&D 5e.",
    dragHint: "Arrastra la ventana por la cabecera; cambia su tamaño desde la esquina inferior derecha.",
    placeholderTitle: "p. ej. El mensajero desaparecido",
    placeholderDescription: "¿Qué debe hacer el personaje?",
    chooseSound: "Elegir sonido",
    clearSound: "Quitar sonido",
    noSoundSelected: "Ningún sonido seleccionado",
    selectedSound: "Sonido seleccionado",
    filePickerUnavailable: "Navegador de archivos no disponible o sin permiso."
  },
  fr: {
    questlog: "Journal de quêtes",
    questsToggle: "Quêtes",
    close: "Fermer",
    compact: "Compact",
    expand: "Développer",
    moduleConfiguration: "Configuration du module",
    inspirationSystem: "Système d'inspiration",
    language: "Langue",
    windowOpacity: "Transparence de la fenêtre",
    windowOpacityValue: "{value}% visible",
    soundAccept: "Son : quête acceptée",
    soundSuccess: "Son : quête réussie",
    soundFailure: "Son : quête échouée",
    saveSettings: "Enregistrer les paramètres",
    backupTitle: "Exporter / Importer",
    exportData: "Exporter le journal",
    importData: "Importer le journal",
    importFile: "Fichier de sauvegarde",
    resetWindow: "Réinitialiser la position",
    newQuest: "Créer une nouvelle quête",
    player: "Joueur",
    title: "Titre",
    shortDescription: "Description courte",
    activeImmediately: "Proposer la quête comme active immédiatement",
    createQuest: "Créer la quête",
    fullQuestlog: "Journal complet",
    filter: "Filtre",
    filterAll: "Toutes les quêtes",
    filterActive: "Quêtes actives",
    filterInactive: "Quêtes inactives",
    filterPlayerPrefix: "Joueur : {name}",
    noPlayerUsers: "Il n'y a actuellement aucun utilisateur joueur dans ce monde.",
    noQuests: "Aucune quête pour le moment.",
    noFilteredQuests: "Aucune quête pour ce filtre.",
    activeQuests: "Quêtes actives",
    yourActiveQuests: "Tes quêtes actives",
    noActiveQuests: "Tu n'as actuellement aucune quête active.",
    noActiveQuestsGM: "Il n'y a actuellement aucune quête active.",
    visible: "visible",
    inactive: "inactive",
    created: "Créée",
    acceptedAt: "Acceptée",
    completedAt: "Terminée",
    setInactive: "Inactive",
    setActive: "Activer",
    successful: "Réussie",
    failed: "Échouée",
    delete: "Supprimer",
    accept: "Accepter",
    decline: "Refuser",
    questSuccessfulResult: "Quête terminée avec succès. Inspiration reçue.",
    statusDraft: "Brouillon",
    statusOffered: "Active",
    statusAccepted: "Acceptée",
    statusDeclined: "Refusée",
    statusSuccess: "Réussie",
    statusFailed: "Échouée",
    modeAuto: "Automatique : préférer So Inspired, sinon D&D 5e standard",
    modeStandard: "D&D 5e standard : inspiration booléenne",
    modeSoInspired: "So Inspired : inspiration cumulable",
    unknownPlayer: "Joueur inconnu",
    exportDescription: "Exporte les quêtes, chemins de sons, langue, transparence et mode d'inspiration en fichier JSON. L'import remplace les quêtes actuelles.",
    importConfirm: "Remplacer le journal actuel par le fichier importé ?",
    importSuccess: "Sauvegarde du journal importée.",
    exportSuccess: "Sauvegarde du journal créée.",
    invalidImport: "Ce fichier ne contient pas une sauvegarde DM Questlog valide.",
    onlyGMCanSave: "Seul le MJ peut enregistrer le journal.",
    settingsSaved: "Paramètres de DM Questlog enregistrés.",
    invalidInspirationMode: "Mode d'inspiration invalide.",
    invalidLanguage: "Langue invalide.",
    invalidOpacity: "Valeur de transparence invalide.",
    questCreated: "La quête « {title} » a été créée.",
    fillRequired: "Veuillez renseigner joueur, titre et description courte.",
    playerAcceptedQuest: "{player} a accepté la quête « {title} ».",
    playerDeclinedQuest: "{player} a refusé la quête « {title} ».",
    deleteConfirm: "Supprimer vraiment la quête « {title} » ?",
    successNotification: "La quête « {title} » a été marquée comme réussie.{awardText}",
    awardGiven: " Inspiration accordée.",
    awardFailed: " L'inspiration n'a pas pu être augmentée.",
    failureNotification: "La quête « {title} » a été marquée comme échouée.",
    noCharacter: "{player} n'a aucun personnage assigné. Inspiration impossible à accorder.",
    alreadyInspired: "{actor} avait déjà l'inspiration. La valeur standard de D&D 5e ne peut pas se cumuler.",
    soInspiredFallback: "So Inspired n'est pas actif ou pas prêt. DM Questlog utilise la valeur standard D&D 5e pour cette récompense.",
    soInspiredAddFailed: "So Inspired n'a pas pu ajouter l'inspiration : {message}",
    soInspiredAddError: "So Inspired n'a pas pu ajouter l'inspiration. Les détails sont dans la console du navigateur.",
    soInspiredMax: "{player} a déjà l'inspiration maximale de So Inspired ({current}/{max}).",
    soInspiredNotInstalled: "So Inspired n'est pas installé.",
    soInspiredInactive: "So Inspired est installé, mais pas actif dans ce monde.",
    soInspiredStatus: "So Inspired actif ({api}, {max}, {pool}).",
    soInspiredApiReady: "API prête",
    soInspiredApiNotReady: "API pas encore prête",
    soInspiredMaxUnknown: "Maximum inconnu",
    soInspiredMaxValue: "Max : {max}",
    soInspiredSharedPool: "réserve partagée",
    soInspiredPerPlayer: "par joueur",
    firstRunNotice: "DM Questlog configuré. Mode d'inspiration : {mode}. {soInspiredText} Les sons, la langue, l'export/import et le mode peuvent être modifiés dans les paramètres du module ou dans le panneau MJ.",
    firstRunSoInspiredDetected: "So Inspired a été détecté. Le mode auto l'utilise pour l'inspiration cumulable.",
    firstRunSoInspiredMissing: "So Inspired n'a pas été détecté comme module actif. Le mode auto utilise l'inspiration normale D&D 5e.",
    dragHint: "Déplace la fenêtre par son en-tête ; redimensionne-la depuis le coin inférieur droit.",
    placeholderTitle: "p. ex. Le courrier disparu",
    placeholderDescription: "Que doit faire le personnage ?",
    chooseSound: "Choisir un son",
    clearSound: "Retirer le son",
    noSoundSelected: "Aucun son sélectionné",
    selectedSound: "Son sélectionné",
    filePickerUnavailable: "Navigateur de fichiers indisponible ou permission manquante."
  }
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

  game.settings.register(MODULE_ID, INSPIRATION_MODE_SETTING, {
    name: "Inspirations-System",
    hint: "Legt fest, ob erfolgreiche Quests die normale D&D-5e-Inspiration oder So Inspired verwenden. Auto nutzt So Inspired, sobald es aktiv und bereit ist, sonst den Standardwert.",
    scope: "world",
    config: true,
    type: String,
    choices: INSPIRATION_MODES,
    default: "auto",
    onChange: () => window.dmQuestLog?.render()
  });

  game.settings.register(MODULE_ID, LANGUAGE_SETTING, {
    name: "DM Questlog – Sprache / Language",
    hint: "Sprache der DM-Questlog-Oberfläche.",
    scope: "world",
    config: true,
    type: String,
    choices: LANGUAGE_CHOICES,
    default: "de",
    onChange: () => window.dmQuestLog?.render()
  });

  game.settings.register(MODULE_ID, OPACITY_SETTING, {
    name: "DM Questlog – Fenstertransparenz",
    hint: "Legt fest, wie sichtbar das Questlog-Fenster ist. 100 % ist vollständig deckend, niedrigere Werte machen es transparenter.",
    scope: "world",
    config: true,
    type: Number,
    range: { min: 0.35, max: 1, step: 0.05 },
    default: 0.97,
    onChange: () => window.dmQuestLog?.render()
  });

  game.settings.register(MODULE_ID, FIRST_RUN_SETTING, {
    name: "Erststart-Hinweis angezeigt",
    hint: "Interner Marker, damit der kurze Setup-Hinweis nur einmal angezeigt wird.",
    scope: "world",
    config: false,
    type: Boolean,
    default: false
  });

  game.settings.register(MODULE_ID, SOUND_SETTINGS.accept, {
    name: "DM Questlog – Sound: Quest angenommen",
    hint: "Pfad zu einem kurzen Sound, z. B. modules/dm-questlog/sounds/accept.wav oder ein eigener Sound aus deiner Foundry-Data-Struktur.",
    scope: "world",
    config: true,
    type: String,
    filePicker: "audio",
    default: `modules/${MODULE_ID}/sounds/accept.wav`,
    onChange: () => preloadConfiguredSounds()
  });

  game.settings.register(MODULE_ID, SOUND_SETTINGS.success, {
    name: "DM Questlog – Sound: Quest erfolgreich",
    hint: "Pfad zu einem kurzen Sound, z. B. modules/dm-questlog/sounds/success.wav oder ein eigener Sound aus deiner Foundry-Data-Struktur.",
    scope: "world",
    config: true,
    type: String,
    filePicker: "audio",
    default: `modules/${MODULE_ID}/sounds/success.wav`,
    onChange: () => preloadConfiguredSounds()
  });

  game.settings.register(MODULE_ID, SOUND_SETTINGS.failure, {
    name: "DM Questlog – Sound: Quest fehlgeschlagen",
    hint: "Pfad zu einem kurzen Sound, z. B. modules/dm-questlog/sounds/failure.wav oder ein eigener Sound aus deiner Foundry-Data-Struktur.",
    scope: "world",
    config: true,
    type: String,
    filePicker: "audio",
    default: `modules/${MODULE_ID}/sounds/failure.wav`,
    onChange: () => preloadConfiguredSounds()
  });
});

Hooks.once("ready", async () => {
  game.socket.on(SOCKET, handleSocketMessage);

  await preloadConfiguredSounds();
  await showFirstRunNotice();

  window.dmQuestLog = new DMQuestLogPanel();
  window.dmQuestLog.render();

  Hooks.on("updateUser", () => window.dmQuestLog?.render());
  Hooks.on("updateActor", () => window.dmQuestLog?.render());
  Hooks.on("updateSetting", () => window.dmQuestLog?.render());
  window.addEventListener("resize", () => window.dmQuestLog?.keepOnScreen());
});

function clone(value) {
  if (foundry.utils.deepClone) return foundry.utils.deepClone(value);
  return JSON.parse(JSON.stringify(value));
}

function getLanguage() {
  try {
    const lang = game.settings.get(MODULE_ID, LANGUAGE_SETTING);
    return Object.hasOwn(LANGUAGE_CHOICES, lang) ? lang : "de";
  } catch (_error) {
    return "de";
  }
}

function tr(key, replacements = {}) {
  const lang = getLanguage();
  const table = TRANSLATIONS[lang] ?? TRANSLATIONS.de;
  let text = table[key] ?? TRANSLATIONS.de[key] ?? key;
  for (const [name, value] of Object.entries(replacements)) {
    text = text.replaceAll(`{${name}}`, String(value ?? ""));
  }
  return text;
}

function getStatusLabel(status) {
  const map = {
    draft: "statusDraft",
    offered: "statusOffered",
    accepted: "statusAccepted",
    declined: "statusDeclined",
    success: "statusSuccess",
    failed: "statusFailed"
  };
  return tr(map[status] ?? "statusDraft");
}

function getInspirationModeLabel(mode) {
  const map = {
    auto: "modeAuto",
    standard: "modeStandard",
    soInspired: "modeSoInspired"
  };
  return tr(map[mode] ?? "modeAuto");
}

function getState() {
  const state = game.settings.get(MODULE_ID, STATE_SETTING);
  if (!state || !Array.isArray(state.quests)) return { quests: [] };
  return clone(state);
}

async function setState(state) {
  if (!game.user.isGM) {
    ui.notifications.warn(tr("onlyGMCanSave"));
    return;
  }
  await game.settings.set(MODULE_ID, STATE_SETTING, normalizeState(state));
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
  if (!user) return tr("unknownPlayer");
  const character = user.character?.name ? ` – ${user.character.name}` : "";
  return `${user.name}${character}`;
}

function getSafeSetting(namespace, key, fallback = null) {
  try {
    return game.settings.get(namespace, key);
  } catch (_error) {
    return fallback;
  }
}

function getFilePickerClass() {
  const fvtt = globalThis.foundry;
  return fvtt?.applications?.apps?.FilePicker ?? globalThis.FilePicker ?? null;
}

function canUseAudioFilePicker() {
  const Picker = getFilePickerClass();
  if (!Picker) return false;
  if (game.user?.isGM) return true;

  const possiblePermissions = ["FILES_BROWSE", "FILES_UPLOAD", "FILE_PICKER"];
  return possiblePermissions.some(permission => {
    try {
      return game.user?.can?.(permission) === true;
    } catch (_error) {
      return false;
    }
  });
}

function isSoInspiredModuleActive() {
  return game.modules.get(SO_INSPIRED_ID)?.active === true;
}

function isSoInspiredApiReady() {
  return typeof game.soInspired?.AddInspiration === "function";
}

function getInspirationMode() {
  const mode = game.settings.get(MODULE_ID, INSPIRATION_MODE_SETTING);
  return Object.hasOwn(INSPIRATION_MODES, mode) ? mode : "auto";
}

function getWindowOpacity() {
  const value = Number(game.settings.get(MODULE_ID, OPACITY_SETTING));
  if (!Number.isFinite(value)) return 0.97;
  return Math.min(Math.max(value, 0.35), 1);
}

function shouldUseSoInspired() {
  const mode = getInspirationMode();
  if (mode === "standard") return false;
  if (mode === "soInspired") return true;
  return isSoInspiredModuleActive();
}

function getSoInspiredStatusText() {
  const installed = game.modules.has(SO_INSPIRED_ID);
  if (!installed) return tr("soInspiredNotInstalled");
  if (!isSoInspiredModuleActive()) return tr("soInspiredInactive");

  const max = Number(getSafeSetting(SO_INSPIRED_ID, "maxInspiration", NaN));
  const shared = getSafeSetting(SO_INSPIRED_ID, "useSharedInspiration", false);
  const api = isSoInspiredApiReady() ? tr("soInspiredApiReady") : tr("soInspiredApiNotReady");
  const maxText = Number.isFinite(max) ? tr("soInspiredMaxValue", { max }) : tr("soInspiredMaxUnknown");
  const poolText = shared ? tr("soInspiredSharedPool") : tr("soInspiredPerPlayer");
  return tr("soInspiredStatus", { api, max: maxText, pool: poolText });
}

async function showFirstRunNotice() {
  if (!game.user.isGM) return;
  if (game.settings.get(MODULE_ID, FIRST_RUN_SETTING)) return;

  const mode = game.settings.get(MODULE_ID, INSPIRATION_MODE_SETTING);
  const soInspiredText = isSoInspiredModuleActive()
    ? tr("firstRunSoInspiredDetected")
    : tr("firstRunSoInspiredMissing");

  ui.notifications.info(tr("firstRunNotice", {
    mode: getInspirationModeLabel(mode),
    soInspiredText
  }));
  await game.settings.set(MODULE_ID, FIRST_RUN_SETTING, true);
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
    ui.notifications.info(tr("playerAcceptedQuest", { player: getUserLabel(userId), title: quest.title }));
    return;
  }

  if (decision === "decline") {
    quest.status = "declined";
    quest.active = false;
    quest.declinedAt = now;
    quest.updatedAt = now;
    await setState(state);
    ui.notifications.info(tr("playerDeclinedQuest", { player: getUserLabel(userId), title: quest.title }));
  }
}

async function preloadConfiguredSounds() {
  if (!game?.settings) return;

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

function buildSpeaker(actor) {
  return {
    actor: actor?.id,
    alias: actor?.name,
    scene: game.scenes?.active?.id,
    token: actor?.token?.id
  };
}

function sendSoInspiredMessage(message, actor) {
  if (!message) return;

  try {
    game.soInspired?.MessageHandler?.toChat?.({
      speaker: buildSpeaker(actor),
      message
    });
  } catch (error) {
    console.warn(`${MODULE_ID} | So-Inspired-Chatnachricht konnte nicht erstellt werden:`, error);
  }
}

async function awardInspiration(userId) {
  const user = game.users.get(userId);
  const actor = user?.character;

  if (!user || !actor) {
    ui.notifications.warn(tr("noCharacter", { player: getUserLabel(userId) }));
    return false;
  }

  if (shouldUseSoInspired()) {
    const result = await awardSoInspiredInspiration(user, actor);
    if (result.usedSoInspired) return result.awarded;

    if (getInspirationMode() === "soInspired") {
      ui.notifications.warn(tr("soInspiredFallback"));
    }
  }

  return awardStandardDnd5eInspiration(actor);
}

async function awardSoInspiredInspiration(user, actor) {
  if (!isSoInspiredModuleActive()) return { usedSoInspired: false, awarded: false };

  if (isSoInspiredApiReady()) {
    try {
      const message = await game.soInspired.AddInspiration(user, actor.sheet);
      sendSoInspiredMessage(message, actor);
      ui.players?.render?.();
      actor.sheet?.render?.(false);
      return { usedSoInspired: true, awarded: true };
    } catch (messageOrError) {
      if (typeof messageOrError === "string") {
        sendSoInspiredMessage(messageOrError, actor);
        ui.notifications.warn(tr("soInspiredAddFailed", { message: messageOrError }));
      } else {
        console.warn(`${MODULE_ID} | Fehler beim Aufruf von So Inspired:`, messageOrError);
        ui.notifications.warn(tr("soInspiredAddError"));
      }
      return { usedSoInspired: true, awarded: false };
    }
  }

  return awardSoInspiredDirectly(user, actor);
}

async function awardSoInspiredDirectly(user, actor) {
  try {
    const maxInspiration = Number(getSafeSetting(SO_INSPIRED_ID, "maxInspiration", 1));
    const useSharedInspiration = getSafeSetting(SO_INSPIRED_ID, "useSharedInspiration", false) === true;
    const currentInspiration = useSharedInspiration
      ? Number(getSafeSetting(SO_INSPIRED_ID, "sharedInspiration", 0) ?? 0)
      : Number(user.getFlag(SO_INSPIRED_ID, "inspirationCount") ?? 0);

    if (currentInspiration >= maxInspiration) {
      ui.notifications.warn(tr("soInspiredMax", {
        player: getUserLabel(user.id),
        current: currentInspiration,
        max: maxInspiration
      }));
      return { usedSoInspired: true, awarded: false };
    }

    if (useSharedInspiration) {
      await game.settings.set(SO_INSPIRED_ID, "sharedInspiration", currentInspiration + 1);
    } else {
      await user.setFlag(SO_INSPIRED_ID, "inspirationCount", currentInspiration + 1);
    }

    ui.players?.render?.();
    actor.sheet?.render?.(false);
    return { usedSoInspired: true, awarded: true };
  } catch (error) {
    console.warn(`${MODULE_ID} | Direkte So-Inspired-Vergabe fehlgeschlagen:`, error);
    return { usedSoInspired: false, awarded: false };
  }
}

async function awardStandardDnd5eInspiration(actor) {
  const path = "system.attributes.inspiration";
  const current = foundry.utils.getProperty(actor, path);

  if (typeof current === "number") {
    await actor.update({ [path]: current + 1 });
    return true;
  }

  await actor.update({ [path]: true });

  if (current === true) {
    ui.notifications.info(tr("alreadyInspired", { actor: actor.name }));
  }

  return true;
}

function normalizeQuest(raw) {
  if (!raw || typeof raw !== "object") return null;

  const validStatuses = new Set(Object.keys(STATUS_CLASSES));
  const status = validStatuses.has(raw.status) ? raw.status : (raw.active ? "offered" : "draft");
  const now = Date.now();

  return {
    id: String(raw.id ?? foundry.utils.randomID(16)),
    userId: String(raw.userId ?? ""),
    title: String(raw.title ?? "").trim(),
    description: String(raw.description ?? "").trim(),
    active: Boolean(raw.active),
    status,
    createdAt: Number(raw.createdAt ?? now),
    updatedAt: Number(raw.updatedAt ?? raw.createdAt ?? now),
    acceptedAt: raw.acceptedAt ? Number(raw.acceptedAt) : null,
    declinedAt: raw.declinedAt ? Number(raw.declinedAt) : null,
    completedAt: raw.completedAt ? Number(raw.completedAt) : null
  };
}

function normalizeState(raw) {
  const source = Array.isArray(raw?.quests)
    ? raw
    : Array.isArray(raw?.state?.quests)
      ? raw.state
      : null;

  if (!source) return { quests: [] };

  const quests = source.quests
    .map(normalizeQuest)
    .filter(q => q && q.userId && q.title && q.description);

  return { quests };
}

function getExportData() {
  return {
    schema: "dm-questlog-backup",
    moduleId: MODULE_ID,
    version: "0.5.1",
    exportedAt: new Date().toISOString(),
    state: getState(),
    settings: {
      inspirationMode: game.settings.get(MODULE_ID, INSPIRATION_MODE_SETTING),
      language: game.settings.get(MODULE_ID, LANGUAGE_SETTING),
      windowOpacity: getWindowOpacity(),
      sounds: {
        accept: game.settings.get(MODULE_ID, SOUND_SETTINGS.accept),
        success: game.settings.get(MODULE_ID, SOUND_SETTINGS.success),
        failure: game.settings.get(MODULE_ID, SOUND_SETTINGS.failure)
      }
    }
  };
}

async function applyImportedSettings(importData) {
  const settings = importData?.settings;
  if (!settings || typeof settings !== "object") return;

  if (Object.hasOwn(INSPIRATION_MODES, settings.inspirationMode)) {
    await game.settings.set(MODULE_ID, INSPIRATION_MODE_SETTING, settings.inspirationMode);
  }

  if (Object.hasOwn(LANGUAGE_CHOICES, settings.language)) {
    await game.settings.set(MODULE_ID, LANGUAGE_SETTING, settings.language);
  }

  const importedOpacity = Number(settings.windowOpacity ?? settings.opacity);
  if (Number.isFinite(importedOpacity)) {
    await game.settings.set(MODULE_ID, OPACITY_SETTING, Math.min(Math.max(importedOpacity, 0.35), 1));
  }

  const sounds = settings.sounds ?? settings;
  const soundMap = {
    accept: SOUND_SETTINGS.accept,
    success: SOUND_SETTINGS.success,
    failure: SOUND_SETTINGS.failure
  };

  for (const [kind, settingKey] of Object.entries(soundMap)) {
    const value = sounds[kind] ?? sounds[settingKey];
    if (typeof value === "string") {
      await game.settings.set(MODULE_ID, settingKey, value);
    }
  }
}

class DMQuestLogPanel {
  constructor() {
    this.isOpen = localStorage.getItem(LOCAL_STORAGE_KEYS.open) === "true";
    this.isCompact = localStorage.getItem(LOCAL_STORAGE_KEYS.compact) === "true";
    this._resizeObserver = null;
    this._isDragging = false;
    this._isApplyingLayout = false;
  }

  render() {
    this._ensureShell();
    const panel = document.getElementById("dmql-panel");
    const body = panel.querySelector(".dmql-body");
    const title = panel.querySelector(".dmql-title");
    const compactButton = panel.querySelector("[data-action='toggleCompact']");

    title.textContent = tr("questlog");
    compactButton.title = this.isCompact ? tr("expand") : tr("compact");
    compactButton.innerHTML = this.isCompact
      ? `<i class="fas fa-up-right-and-down-left-from-center"></i><span>${escapeHTML(tr("expand"))}</span>`
      : `<i class="fas fa-down-left-and-up-right-to-center"></i><span>${escapeHTML(tr("compact"))}</span>`;

    panel.classList.toggle("dmql-open", this.isOpen);
    panel.classList.toggle("dmql-collapsed", !this.isOpen);
    panel.classList.toggle("dmql-compact", this.isCompact);
    panel.style.setProperty("--dmql-window-opacity", String(getWindowOpacity()));

    this._applyStoredLayout(panel);

    body.innerHTML = game.user.isGM ? this._renderGMView() : this._renderPlayerView();
    this._activateBodyListeners(body);
  }

  _ensureShell() {
    if (document.getElementById("dmql-panel")) return;

    const toggle = document.createElement("button");
    toggle.id = "dmql-toggle";
    toggle.type = "button";
    toggle.innerHTML = `<i class="fas fa-scroll"></i><span>${escapeHTML(tr("questsToggle"))}</span>`;
    toggle.addEventListener("click", () => this.toggle());

    const panel = document.createElement("aside");
    panel.id = "dmql-panel";
    panel.className = "dmql-panel dmql-collapsed";
    panel.innerHTML = `
      <header class="dmql-header dmql-drag-handle" title="${escapeHTML(tr("dragHint"))}">
        <h2 class="dmql-title">${escapeHTML(tr("questlog"))}</h2>
        <div class="dmql-window-actions">
          <button type="button" class="dmql-header-button" data-action="toggleCompact" title="${escapeHTML(tr("compact"))}">
            <i class="fas fa-down-left-and-up-right-to-center"></i><span>${escapeHTML(tr("compact"))}</span>
          </button>
          <button type="button" class="dmql-header-button" data-action="close" title="${escapeHTML(tr("close"))}">
            <i class="fas fa-xmark"></i>
          </button>
        </div>
      </header>
      <div class="dmql-body"></div>
    `;

    panel.querySelector("[data-action='toggleCompact']").addEventListener("click", () => this.toggleCompact());
    panel.querySelector("[data-action='close']").addEventListener("click", () => this.close());

    document.body.append(toggle, panel);
    this._enableDragging(panel);
    this._enableResizePersistence(panel);
  }

  toggle() {
    this.isOpen = !this.isOpen;
    localStorage.setItem(LOCAL_STORAGE_KEYS.open, String(this.isOpen));
    this.render();
  }

  close() {
    this.isOpen = false;
    localStorage.setItem(LOCAL_STORAGE_KEYS.open, "false");
    this.render();
  }

  toggleCompact() {
    this.isCompact = !this.isCompact;
    localStorage.setItem(LOCAL_STORAGE_KEYS.compact, String(this.isCompact));
    this.render();
  }

  keepOnScreen() {
    const panel = document.getElementById("dmql-panel");
    if (!panel || !this.isOpen) return;
    const rect = panel.getBoundingClientRect();
    const { left, top } = this._clampPosition(rect.left, rect.top, rect.width, rect.height);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
    panel.style.right = "auto";
    this._saveLayout(panel);
  }

  _readLayout() {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEYS.layout);
      return raw ? JSON.parse(raw) : null;
    } catch (_error) {
      return null;
    }
  }

  _saveLayout(panel) {
    const rect = panel.getBoundingClientRect();
    const data = {
      left: Math.round(rect.left),
      top: Math.round(rect.top),
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    };
    localStorage.setItem(LOCAL_STORAGE_KEYS.layout, JSON.stringify(data));
  }

  _applyStoredLayout(panel) {
    const layout = this._readLayout();
    if (!layout) return;

    this._isApplyingLayout = true;
    const width = Number(layout.width);
    const height = Number(layout.height);
    const safeWidth = Number.isFinite(width) ? Math.min(Math.max(width, 260), Math.max(280, window.innerWidth - 24)) : null;
    const safeHeight = Number.isFinite(height) ? Math.min(Math.max(height, 160), Math.max(180, window.innerHeight - 24)) : null;

    if (safeWidth) panel.style.width = `${safeWidth}px`;
    if (safeHeight) panel.style.height = `${safeHeight}px`;

    const { left, top } = this._clampPosition(Number(layout.left), Number(layout.top), safeWidth ?? panel.offsetWidth, safeHeight ?? panel.offsetHeight);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
    panel.style.right = "auto";
    this._isApplyingLayout = false;
  }

  _clampPosition(left, top, width, height) {
    const safeWidth = Number.isFinite(width) ? width : 380;
    const safeHeight = Number.isFinite(height) ? height : 420;
    const maxLeft = Math.max(8, window.innerWidth - safeWidth - 8);
    const maxTop = Math.max(8, window.innerHeight - safeHeight - 8);
    return {
      left: Math.min(Math.max(Number.isFinite(left) ? left : maxLeft, 8), maxLeft),
      top: Math.min(Math.max(Number.isFinite(top) ? top : 88, 8), maxTop)
    };
  }

  _enableDragging(panel) {
    const handle = panel.querySelector(".dmql-drag-handle");
    handle.addEventListener("pointerdown", event => {
      if (event.button !== 0) return;
      if (event.target.closest("button, input, select, textarea, a, label")) return;

      const rect = panel.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      this._isDragging = true;
      panel.classList.add("dmql-dragging");
      panel.style.left = `${rect.left}px`;
      panel.style.top = `${rect.top}px`;
      panel.style.right = "auto";

      const move = moveEvent => {
        const { left, top } = this._clampPosition(
          moveEvent.clientX - offsetX,
          moveEvent.clientY - offsetY,
          rect.width,
          rect.height
        );
        panel.style.left = `${left}px`;
        panel.style.top = `${top}px`;
      };

      const up = () => {
        this._isDragging = false;
        panel.classList.remove("dmql-dragging");
        this._saveLayout(panel);
        window.removeEventListener("pointermove", move);
      };

      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up, { once: true });
    });
  }

  _enableResizePersistence(panel) {
    if (typeof ResizeObserver !== "function") return;
    this._resizeObserver = new ResizeObserver(() => {
      if (!this.isOpen || this._isDragging || this._isApplyingLayout) return;
      this._saveLayout(panel);
    });
    this._resizeObserver.observe(panel);
  }

  _resetLayout() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.layout);
    const panel = document.getElementById("dmql-panel");
    if (panel) {
      panel.style.left = "";
      panel.style.top = "";
      panel.style.right = "";
      panel.style.width = "";
      panel.style.height = "";
    }
    this.render();
  }

  _getGMFilter() {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.gmFilter) ?? "all";
  }

  _setGMFilter(value) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.gmFilter, value || "all");
  }

  _renderGMView() {
    return this.isCompact ? this._renderGMCompactView() : this._renderGMFullView();
  }

  _renderGMFullView() {
    const state = getState();
    const quests = sortNewestFirst(state.quests);
    const filteredQuests = this._filterGMQuests(quests);
    const players = getPlayerUsers();

    const options = players.map(user => {
      const character = user.character?.name ? ` (${escapeHTML(user.character.name)})` : "";
      return `<option value="${user.id}">${escapeHTML(user.name)}${character}</option>`;
    }).join("");

    return `
      ${this._renderSettingsCard()}

      <section class="dmql-card dmql-create">
        <h3>${escapeHTML(tr("newQuest"))}</h3>
        ${players.length ? `
          <form data-action="createQuest">
            <label>
              ${escapeHTML(tr("player"))}
              <select name="userId" required>${options}</select>
            </label>
            <label>
              ${escapeHTML(tr("title"))}
              <input type="text" name="title" maxlength="80" required placeholder="${escapeHTML(tr("placeholderTitle"))}">
            </label>
            <label>
              ${escapeHTML(tr("shortDescription"))}
              <textarea name="description" rows="4" required placeholder="${escapeHTML(tr("placeholderDescription"))}"></textarea>
            </label>
            <label class="dmql-checkbox">
              <input type="checkbox" name="active" checked>
              ${escapeHTML(tr("activeImmediately"))}
            </label>
            <button type="submit" class="dmql-primary">${escapeHTML(tr("createQuest"))}</button>
          </form>
        ` : `<p class="dmql-muted">${escapeHTML(tr("noPlayerUsers"))}</p>`}
      </section>

      <section class="dmql-log">
        <div class="dmql-log-header">
          <h3>${escapeHTML(tr("fullQuestlog"))}</h3>
          ${this._renderGMFilter(players)}
        </div>
        ${quests.length
          ? (filteredQuests.length ? filteredQuests.map(q => this._renderGMQuest(q)).join("") : `<p class="dmql-muted">${escapeHTML(tr("noFilteredQuests"))}</p>`)
          : `<p class="dmql-muted">${escapeHTML(tr("noQuests"))}</p>`}
      </section>
    `;
  }

  _renderGMCompactView() {
    const activeQuests = sortNewestFirst(getState().quests).filter(q => q.active);
    return `
      <section class="dmql-card dmql-compact-card">
        <h3>${escapeHTML(tr("activeQuests"))}</h3>
        ${activeQuests.length ? `
          <ul class="dmql-title-list">
            ${activeQuests.map(q => `
              <li class="${STATUS_CLASSES[q.status] ?? ""}">
                <span class="dmql-title-list-title">${escapeHTML(q.title)}</span>
                <span class="dmql-title-list-player">${escapeHTML(getUserLabel(q.userId))}</span>
              </li>
            `).join("")}
          </ul>
        ` : `<p class="dmql-muted">${escapeHTML(tr("noActiveQuestsGM"))}</p>`}
      </section>
    `;
  }

  _renderGMFilter(players) {
    const current = this._getGMFilter();
    const option = (value, label) => `<option value="${escapeHTML(value)}" ${current === value ? "selected" : ""}>${escapeHTML(label)}</option>`;
    return `
      <label class="dmql-filter">
        <span>${escapeHTML(tr("filter"))}</span>
        <select data-action="filterQuestLog">
          ${option("all", tr("filterAll"))}
          ${option("active", tr("filterActive"))}
          ${option("inactive", tr("filterInactive"))}
          ${players.map(user => option(`player:${user.id}`, tr("filterPlayerPrefix", { name: getUserLabel(user.id) }))).join("")}
        </select>
      </label>
    `;
  }

  _filterGMQuests(quests) {
    const filter = this._getGMFilter();
    if (filter === "active") return quests.filter(q => q.active);
    if (filter === "inactive") return quests.filter(q => !q.active);
    if (filter.startsWith("player:")) return quests.filter(q => q.userId === filter.slice(7));
    return quests;
  }

  _renderSettingsCard() {
    const mode = getInspirationMode();
    const modeOptions = Object.keys(INSPIRATION_MODES).map(key => {
      const selected = key === mode ? "selected" : "";
      return `<option value="${key}" ${selected}>${escapeHTML(getInspirationModeLabel(key))}</option>`;
    }).join("");

    const currentLanguage = getLanguage();
    const languageOptions = Object.entries(LANGUAGE_CHOICES).map(([key, label]) => {
      const selected = key === currentLanguage ? "selected" : "";
      return `<option value="${key}" ${selected}>${escapeHTML(label)}</option>`;
    }).join("");
    const opacity = getWindowOpacity();
    const opacityPercent = Math.round(opacity * 100);

    return `
      <section class="dmql-card dmql-settings">
        <details>
          <summary>${escapeHTML(tr("moduleConfiguration"))}</summary>
          <p class="dmql-muted">${escapeHTML(getSoInspiredStatusText())}</p>
          <form data-action="saveSettings">
            <label>
              ${escapeHTML(tr("language"))}
              <select name="${LANGUAGE_SETTING}">${languageOptions}</select>
            </label>
            <label>
              ${escapeHTML(tr("inspirationSystem"))}
              <select name="inspirationMode">${modeOptions}</select>
            </label>
            <label class="dmql-range-label">
              <span>${escapeHTML(tr("windowOpacity"))}</span>
              <input type="range" name="${OPACITY_SETTING}" min="0.35" max="1" step="0.05" value="${opacity}">
              <small>${escapeHTML(tr("windowOpacityValue", { value: opacityPercent }))}</small>
            </label>
            ${this._renderSoundPickerField("accept", SOUND_SETTINGS.accept)}
            ${this._renderSoundPickerField("success", SOUND_SETTINGS.success)}
            ${this._renderSoundPickerField("failure", SOUND_SETTINGS.failure)}
            <button type="submit" class="dmql-primary">${escapeHTML(tr("saveSettings"))}</button>
          </form>

          <hr>

          <div class="dmql-backup">
            <h4>${escapeHTML(tr("backupTitle"))}</h4>
            <p class="dmql-muted">${escapeHTML(tr("exportDescription"))}</p>
            <div class="dmql-actions">
              <button type="button" data-action="exportData">${escapeHTML(tr("exportData"))}</button>
              <button type="button" data-action="resetLayout">${escapeHTML(tr("resetWindow"))}</button>
            </div>
            <label>
              ${escapeHTML(tr("importFile"))}
              <input type="file" name="importFile" accept="application/json,.json">
            </label>
            <button type="button" data-action="importData" class="dmql-primary">${escapeHTML(tr("importData"))}</button>
          </div>
        </details>
      </section>
    `;
  }

  _renderSoundPickerField(kind, settingKey) {
    const value = String(game.settings.get(MODULE_ID, settingKey) ?? "");
    const canBrowse = canUseAudioFilePicker();
    const labelKey = {
      accept: "soundAccept",
      success: "soundSuccess",
      failure: "soundFailure"
    }[kind] ?? "selectedSound";

    return `
      <label class="dmql-sound-field ${canBrowse ? "" : "is-disabled"}">
        <span>${escapeHTML(tr(labelKey))}</span>
        <input type="hidden" name="${settingKey}" value="${escapeHTML(value)}">
        <div class="dmql-file-picker" data-sound-kind="${escapeHTML(kind)}">
          <span class="dmql-file-value" title="${escapeHTML(value || tr("noSoundSelected"))}">${escapeHTML(value || tr("noSoundSelected"))}</span>
          <button type="button" data-action="pickSound" data-target="${settingKey}" data-type="audio" ${canBrowse ? "" : "disabled"}>
            <i class="fas fa-folder-open"></i> ${escapeHTML(tr("chooseSound"))}
          </button>
          <button type="button" data-action="clearSound" data-target="${settingKey}" ${canBrowse ? "" : "disabled"}>
            <i class="fas fa-ban"></i> ${escapeHTML(tr("clearSound"))}
          </button>
        </div>
        ${canBrowse ? "" : `<small class="dmql-muted">${escapeHTML(tr("filePickerUnavailable"))}</small>`}
      </label>
    `;
  }

  _renderGMQuest(quest) {
    const status = quest.status ?? "draft";
    const statusClass = STATUS_CLASSES[status] ?? "is-draft";
    const activeBadge = quest.active
      ? `<span class="dmql-badge is-active">${escapeHTML(tr("visible"))}</span>`
      : `<span class="dmql-badge is-inactive">${escapeHTML(tr("inactive"))}</span>`;
    const canComplete = quest.status === "accepted" || quest.status === "offered" || quest.status === "success";

    return `
      <article class="dmql-card dmql-quest ${statusClass}" data-quest-id="${quest.id}">
        <div class="dmql-quest-head">
          <h4>${escapeHTML(quest.title)}</h4>
          <div class="dmql-badges">
            ${activeBadge}
            <span class="dmql-badge">${escapeHTML(getStatusLabel(status))}</span>
          </div>
        </div>
        <p class="dmql-desc">${escapeHTML(quest.description)}</p>
        <dl class="dmql-meta">
          <div><dt>${escapeHTML(tr("player"))}</dt><dd>${escapeHTML(getUserLabel(quest.userId))}</dd></div>
          <div><dt>${escapeHTML(tr("created"))}</dt><dd>${formatDate(quest.createdAt)}</dd></div>
          ${quest.acceptedAt ? `<div><dt>${escapeHTML(tr("acceptedAt"))}</dt><dd>${formatDate(quest.acceptedAt)}</dd></div>` : ""}
          ${quest.completedAt ? `<div><dt>${escapeHTML(tr("completedAt"))}</dt><dd>${formatDate(quest.completedAt)}</dd></div>` : ""}
        </dl>
        <div class="dmql-actions">
          ${quest.active ? `<button type="button" data-action="deactivate" data-quest-id="${quest.id}">${escapeHTML(tr("setInactive"))}</button>` : `<button type="button" data-action="activate" data-quest-id="${quest.id}">${escapeHTML(tr("setActive"))}</button>`}
          ${canComplete ? `<button type="button" data-action="success" data-quest-id="${quest.id}">${escapeHTML(tr("successful"))}</button>` : ""}
          ${canComplete ? `<button type="button" data-action="failure" data-quest-id="${quest.id}">${escapeHTML(tr("failed"))}</button>` : ""}
          <button type="button" data-action="delete" data-quest-id="${quest.id}" class="dmql-danger">${escapeHTML(tr("delete"))}</button>
        </div>
      </article>
    `;
  }

  _renderPlayerView() {
    const state = getState();
    const quests = sortNewestFirst(state.quests).filter(q => q.userId === game.user.id && q.active);

    if (this.isCompact) {
      return `
        <section class="dmql-card dmql-compact-card">
          <h3>${escapeHTML(tr("yourActiveQuests"))}</h3>
          ${quests.length ? `
            <ul class="dmql-title-list">
              ${quests.map(q => `<li class="${STATUS_CLASSES[q.status] ?? ""}"><span class="dmql-title-list-title">${escapeHTML(q.title)}</span></li>`).join("")}
            </ul>
          ` : `<p class="dmql-muted">${escapeHTML(tr("noActiveQuests"))}</p>`}
        </section>
      `;
    }

    return `
      <section class="dmql-log">
        <h3>${escapeHTML(tr("yourActiveQuests"))}</h3>
        ${quests.length ? quests.map(q => this._renderPlayerQuest(q)).join("") : `<p class="dmql-muted">${escapeHTML(tr("noActiveQuests"))}</p>`}
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
          <span class="dmql-badge">${escapeHTML(getStatusLabel(status))}</span>
        </div>
        <p class="dmql-desc">${escapeHTML(quest.description)}</p>
        ${status === "success" ? `<p class="dmql-result">${escapeHTML(tr("questSuccessfulResult"))}</p>` : ""}
        ${canDecide ? `
          <div class="dmql-actions">
            <button type="button" class="dmql-primary" data-action="accept" data-quest-id="${quest.id}">${escapeHTML(tr("accept"))}</button>
            <button type="button" data-action="decline" data-quest-id="${quest.id}">${escapeHTML(tr("decline"))}</button>
          </div>
        ` : ""}
      </article>
    `;
  }

  _activateBodyListeners(body) {
    body.querySelectorAll("form[data-action]").forEach(form => {
      form.addEventListener("submit", event => {
        const action = event.currentTarget.dataset.action;
        if (action === "createQuest") return this._onCreateQuest(event);
        if (action === "saveSettings") return this._onSaveSettings(event);
      });
    });

    body.querySelectorAll("button[data-action]").forEach(button => {
      button.addEventListener("click", event => this._onAction(event));
    });

    body.querySelectorAll("select[data-action='filterQuestLog']").forEach(select => {
      select.addEventListener("change", event => {
        this._setGMFilter(event.currentTarget.value);
        this.render();
      });
    });

    body.querySelectorAll(`input[type="range"][name="${OPACITY_SETTING}"]`).forEach(input => {
      input.addEventListener("input", event => {
        const opacity = Math.min(Math.max(Number(event.currentTarget.value), 0.35), 1);
        document.getElementById("dmql-panel")?.style.setProperty("--dmql-window-opacity", String(opacity));
        const output = event.currentTarget.closest("label")?.querySelector("small");
        if (output) output.textContent = tr("windowOpacityValue", { value: Math.round(opacity * 100) });
      });
    });
  }

  async _onSaveSettings(event) {
    event.preventDefault();
    if (!game.user.isGM) return;

    const data = new FormData(event.currentTarget);
    const inspirationMode = String(data.get("inspirationMode") ?? "auto");
    const language = String(data.get(LANGUAGE_SETTING) ?? "de");
    const opacity = Number(data.get(OPACITY_SETTING));

    if (!Number.isFinite(opacity)) {
      ui.notifications.warn(tr("invalidOpacity"));
      return;
    }

    if (!Object.hasOwn(INSPIRATION_MODES, inspirationMode)) {
      ui.notifications.warn(tr("invalidInspirationMode"));
      return;
    }

    if (!Object.hasOwn(LANGUAGE_CHOICES, language)) {
      ui.notifications.warn(tr("invalidLanguage"));
      return;
    }

    await game.settings.set(MODULE_ID, LANGUAGE_SETTING, language);
    await game.settings.set(MODULE_ID, INSPIRATION_MODE_SETTING, inspirationMode);
    await game.settings.set(MODULE_ID, OPACITY_SETTING, Math.min(Math.max(opacity, 0.35), 1));

    for (const settingKey of Object.values(SOUND_SETTINGS)) {
      await game.settings.set(MODULE_ID, settingKey, String(data.get(settingKey) ?? "").trim());
    }

    await preloadConfiguredSounds();
    ui.notifications.info(tr("settingsSaved"));
    this.render();
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
      ui.notifications.warn(tr("fillRequired"));
      return;
    }

    const state = getState();
    state.quests.push(quest);
    await setState(state);
    form.reset();
    ui.notifications.info(tr("questCreated", { title: quest.title }));
  }

  async _onAction(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const action = button.dataset.action;
    const questId = button.dataset.questId;

    if (action === "pickSound") return this._openSoundPicker(button);
    if (action === "clearSound") return this._clearSoundPicker(button);
    if (action === "exportData") return this._exportData();
    if (action === "importData") return this._importData(button.closest(".dmql-settings"));
    if (action === "resetLayout") return this._resetLayout();

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
        ui.notifications.info(tr("successNotification", {
          title: quest.title,
          awardText: awarded ? tr("awardGiven") : tr("awardFailed")
        }));
        break;
      }
      case "failure": {
        quest.active = false;
        quest.status = "failed";
        quest.completedAt = now;
        quest.updatedAt = now;
        await setState(state);
        playSoundForUser(quest.userId, "failure");
        ui.notifications.info(tr("failureNotification", { title: quest.title }));
        break;
      }
      case "delete": {
        const confirmed = window.confirm(tr("deleteConfirm", { title: quest.title }));
        if (!confirmed) return;
        state.quests = state.quests.filter(q => q.id !== questId);
        await setState(state);
        break;
      }
    }
  }

  _openSoundPicker(button) {
    if (!canUseAudioFilePicker()) {
      ui.notifications.warn(tr("filePickerUnavailable"));
      return;
    }

    const Picker = getFilePickerClass();
    const settingKey = button.dataset.target;
    const field = button.closest(".dmql-sound-field");
    const input = field?.querySelector(`input[type="hidden"][name="${settingKey}"]`);
    const display = field?.querySelector(".dmql-file-value");

    if (!Picker || !input || !display) {
      ui.notifications.warn(tr("filePickerUnavailable"));
      return;
    }

    const callback = path => {
      const value = String(path ?? "");
      input.value = value;
      display.textContent = value || tr("noSoundSelected");
      display.title = value || tr("noSoundSelected");
    };

    try {
      const picker = new Picker({
        type: "audio",
        current: input.value,
        callback
      });
      picker.render(true);
    } catch (error) {
      console.warn(`${MODULE_ID} | FilePicker konnte nicht geöffnet werden:`, error);
      ui.notifications.warn(tr("filePickerUnavailable"));
    }
  }

  _clearSoundPicker(button) {
    const settingKey = button.dataset.target;
    const field = button.closest(".dmql-sound-field");
    const input = field?.querySelector(`input[type="hidden"][name="${settingKey}"]`);
    const display = field?.querySelector(".dmql-file-value");
    if (!input || !display) return;
    input.value = "";
    display.textContent = tr("noSoundSelected");
    display.title = tr("noSoundSelected");
  }

  _exportData() {
    if (!game.user.isGM) return;

    const data = getExportData();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const date = new Date().toISOString().slice(0, 10);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `dm-questlog-backup-${date}.json`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    ui.notifications.info(tr("exportSuccess"));
  }

  async _importData(settingsElement) {
    if (!game.user.isGM) return;

    const input = settingsElement?.querySelector("input[name='importFile']");
    const file = input?.files?.[0];
    if (!file) {
      ui.notifications.warn(tr("invalidImport"));
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const hasValidQuestState = parsed?.schema === "dm-questlog-backup" || Array.isArray(parsed?.quests) || Array.isArray(parsed?.state?.quests);
      if (!hasValidQuestState) throw new Error("Invalid quest state");
      const state = normalizeState(parsed);

      if (!Array.isArray(state.quests)) throw new Error("Invalid quest state");
      const confirmed = window.confirm(tr("importConfirm"));
      if (!confirmed) return;

      await setState(state);
      await applyImportedSettings(parsed);
      await preloadConfiguredSounds();
      ui.notifications.info(tr("importSuccess"));
      this.render();
    } catch (error) {
      console.warn(`${MODULE_ID} | Import fehlgeschlagen:`, error);
      ui.notifications.error(tr("invalidImport"));
    }
  }
}
