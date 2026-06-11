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

## Installation

1. Ordner `dm-questlog` nach `FoundryVTT/Data/modules/` kopieren.
2. Foundry neu starten.
3. Welt öffnen und das Modul unter „Manage Modules“ aktivieren.
4. Rechts auf den Button „Quests“ klicken.

## Hinweis zu Inspiration

Das aktuelle D&D-5e-System speichert Inspiration standardmäßig als Boolean unter `system.attributes.inspiration`. Das Modul setzt dieses Feld bei Erfolg auf `true`. Falls ein anderes Modul daraus einen Zahlenwert macht, wird der Wert um 1 erhöht.

## Version

Entwickelt als Startversion für Foundry VTT v13 und D&D 5e v5.x.
