# DM Questlog

Ein kleines Foundry-VTT-Modul für D&D 5e.

## Funktionen

- Spielleiter können pro Spieler Quests mit Titel und Kurzbeschreibung anlegen.
- Quests können aktiv/inaktiv gestellt werden.
- Spieler sehen rechts ein ausklappbares Questlog.
- Spieler können aktive Quests annehmen oder ablehnen.
- Beim Annehmen wird ein kurzer Ton abgespielt.
- Der Spielleiter kann angenommene Quests als erfolgreich oder fehlgeschlagen markieren.
- Erfolgreiche Quests werden grün markiert und vergeben dem zugeordneten Charakter Inspiration.
- Fehlgeschlagene Quests werden rot im GM-Log markiert und aus dem Spielerlog entfernt.
- Der GM sieht immer alle Quests, neueste zuerst.
- Sounds, Sprache, Fenstertransparenz und Inspirationsmodus sind im GM-Questlog-Panel und in den Foundry-Moduleinstellungen bearbeitbar.
- Der GM kann das Questlog filtern: alle Quests, aktive Quests, inaktive Quests oder einzelne Spieler.
- Das Questlog kann verschoben, in der Größe verändert, kompakt angezeigt oder vollständig minimiert werden.
- Export und Import sichern Quests inklusive wichtiger Moduleinstellungen als JSON-Datei. Dazu gehören auch die Soundpfade, Sprache, Fenstertransparenz und der Inspirationsmodus.

## Neu in Version 0.5.2

- Die Soundauswahl im GM-Konfigurationsbereich verwendet jetzt Foundrys nativen FilePicker für Audiodateien.
- Die Soundeinstellungen in Foundrys Moduleinstellungen sind ebenfalls als Audio-FilePicker registriert.
- Im GM-Panel werden keine frei editierbaren Pfad-Textboxen mehr angezeigt; stattdessen gibt es pro Sound einen Button „Sound auswählen“ und eine reine Pfadanzeige.
- Wenn der FilePicker nicht verfügbar ist oder keine Berechtigung besteht, werden die Soundauswahl-Buttons deaktiviert.
- Uploads laufen vollständig über den Foundry-FilePicker. In Foundry v13 können Uploads je nach Zielordner geschützt oder deaktiviert sein; wähle dann einen erlaubten Ordner, z. B. `assets` oder einen Weltordner.

## Neu in Version 0.5.1

- Transparenzslider für das Questlog-Fenster im GM-Konfigurationsbereich.
- Zusätzliche Foundry-Moduleinstellung „Fenstertransparenz“ mit Bereich von 35 % bis 100 %.
- Der Transparenzwert wird im Export/Import-Backup mitgesichert.

## Neu in Version 0.5.0

- Version auf `0.5.0` gesetzt.
- Filter-Dropdown im GM-Questlog:
  - Alle Quests
  - Aktive Quests
  - Inaktive Quests
  - Einzelne Spieler
- Export-/Importfunktion im GM-Konfigurationsbereich.
- Backup enthält:
  - Questdaten
  - Inspirationsmodus
  - Sprache
  - Soundpfade
  - Fenstertransparenz
- Import ersetzt das vorhandene Questlog nach Bestätigung.
- Fenster ist per Kopfzeile verschiebbar.
- Fenster ist per Resize-Griff unten rechts in der Größe veränderbar.
- Kompaktmodus zeigt dem GM nur die Titel aktiver Quests an.
- Vollständiges Minimieren ist weiterhin über den Schließen-Button möglich; der Quest-Button bleibt rechts sichtbar.
- Sprachauswahl im Modul:
  - Deutsch
  - Englisch
  - Spanisch
  - Französisch

## Inspiration / So Inspired

Das Modul unterstützt drei Modi:

1. **Automatisch**  
   Nutzt So Inspired, wenn das Modul in der Welt aktiv ist. Falls nicht, wird die normale D&D-5e-Inspiration verwendet.

2. **D&D-5e-Standard**  
   Setzt `system.attributes.inspiration` auf `true`. Wenn dieses Feld durch ein anderes Modul numerisch ist, wird es um 1 erhöht.

3. **So Inspired**  
   Verwendet die So-Inspired-API (`game.soInspired.AddInspiration`), wenn verfügbar. Falls die API nicht bereit ist, versucht DM Questlog eine direkte Vergabe über die So-Inspired-Werte. Ist So Inspired nicht aktiv, fällt das Modul mit Warnung auf den Standardwert zurück.

Wichtig: So Inspired erwartet, dass der jeweilige Spieler in der User-Konfiguration einen Charakter zugewiesen hat. DM Questlog verwendet ebenfalls den zugewiesenen Charakter (`user.character`) für die Vergabe.

## Fenstertransparenz

Im GM-Questlog unter **Modulkonfiguration** gibt es einen Slider „Fenstertransparenz“.

- 100 % bedeutet vollständig sichtbar.
- Niedrigere Werte machen das Questlog-Fenster transparenter.
- Der Wert wird als Welt-Einstellung gespeichert und im Export/Import-Backup mitgesichert.

## Sounds anpassen

Die drei Sounds können entweder über **Configure Settings > Module Settings > DM Questlog** oder direkt im Questlog-Panel des Spielleiters unter **Modulkonfiguration** geändert werden.

Ab Version 0.5.2 wird dafür Foundrys nativer Audio-FilePicker verwendet. Im GM-Panel gibt es keine frei editierbaren Textboxen mehr: Du klickst auf **Sound auswählen**, wählst eine Audiodatei aus oder lädst über den Foundry-FilePicker eine Datei hoch. Der gewählte Pfad wird nur angezeigt und beim Speichern übernommen.

Standardpfade:

- `modules/dm-questlog/sounds/accept.wav`
- `modules/dm-questlog/sounds/success.wav`
- `modules/dm-questlog/sounds/failure.wav`

Hinweise:

- Unterstützte Audioformate hängen von Foundry ab, typischerweise z. B. `.ogg`, `.mp3`, `.wav`, `.flac`, `.m4a` und `.webm`.
- Falls der FilePicker nicht verfügbar ist oder die Berechtigung fehlt, werden die Auswahlbuttons deaktiviert.
- Falls der Upload-Button im FilePicker ausgegraut ist, ist der aktuelle Zielordner geschützt. Wähle oder erstelle dann einen erlaubten Ordner, z. B. `assets` oder einen Ordner innerhalb der aktiven Welt.

## Export / Import

Im GM-Questlog unter **Modulkonfiguration > Export / Import** kann eine JSON-Datei exportiert und wieder importiert werden.

Beim Import werden vorhandene Questdaten ersetzt. Vor einem Modulupdate empfiehlt es sich, eine Backup-Datei zu exportieren.

## Fensterbedienung

- **Verschieben:** Kopfzeile mit gedrückter linker Maustaste ziehen.
- **Größe ändern:** Resize-Griff unten rechts nutzen.
- **Kompaktmodus:** Button „Kompakt“ in der Kopfzeile. Der GM sieht dann nur die Titel aktiver Quests.
- **Ganz minimieren:** X-Button in der Kopfzeile. Der kleine Quest-Button bleibt sichtbar.
- **Layout zurücksetzen:** Im GM-Konfigurationsbereich über „Fensterposition zurücksetzen“.

## Installation

1. Ordner `dm-questlog` nach `FoundryVTT/Data/modules/` kopieren.
2. Foundry neu starten.
3. Welt öffnen und das Modul unter „Manage Modules“ aktivieren.
4. Optional: So Inspired aktivieren, falls du stapelbare Inspiration nutzen möchtest.
5. Rechts auf den Button „Quests“ klicken.

## Versionen

- 0.5.2: Soundauswahl über Foundrys Audio-FilePicker, inklusive deaktivierter Buttons bei fehlender Verfügbarkeit/Berechtigung.
- 0.5.1: Transparenzslider für das Questlog-Fenster, inklusive Export/Import.
- 0.5.0: Filter, Export/Import, verschiebbares und skalierbares Fenster, Kompaktmodus, Sprachauswahl Deutsch/Englisch/Spanisch/Französisch.
- 0.2.0: So-Inspired-Kompatibilität, auswählbarer Inspirationsmodus, editierbare Soundpfade im GM-Panel.
- 0.1.0: Startversion für Foundry VTT v13 und D&D 5e v5.x.
