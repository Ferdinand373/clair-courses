# Clair Courses — V3

Mini-application de liste de courses conçue en priorité pour Safari sur iPhone. Elle fonctionne sans compte, sans API et sans bibliothèque externe.

## Fichiers

- `index.html` : toute l’interface et la logique, y compris l’import de listes, la vérification des doublons et la sauvegarde JSON.
- `manifest.webmanifest` : installation sur l’écran d’accueil.
- `service-worker.js` : fonctionnement hors connexion après un premier chargement.
- `assets/` : icônes locales.

## Utilisation locale

L’application peut être ouverte directement avec `index.html`. Pour tester aussi l’installation et le mode hors connexion, servez plutôt le dossier avec un petit serveur local puis ouvrez l’adresse indiquée dans Safari ou un navigateur récent.

Dans **Liste de Chat**, collez une liste préparée par ChatGPT, vérifiez les articles et les rayons, puis validez. L’analyse est entièrement locale.

## Publier avec GitHub Pages

1. Ouvrir le dépôt qui héberge actuellement Clair Courses.
2. Remplacer son ancien `index.html` par celui de ce dossier.
3. Ajouter aussi `manifest.webmanifest`, `service-worker.js` et le dossier `assets`.
4. Valider les changements sur la branche publiée par GitHub Pages.
5. Ouvrir l’adresse GitHub Pages une première fois en ligne sur l’iPhone.
6. Dans Safari, toucher **Partager**, puis **Ajouter à l’écran d’accueil**.

Les chemins sont relatifs : l’application peut être publiée à la racine d’un site ou dans un sous-dossier.

## Données

La liste, les coches, les rayons, les habituels et l’option d’affichage sont enregistrés uniquement dans `localStorage`, sous la clé `clairCourses.state`. La V3 migre automatiquement les données plus anciennes vers la structure `appVersion: 3` sans changer cette clé.

Le menu **Aide et sauvegarde** permet d’exporter ou de restaurer une sauvegarde JSON. Une confirmation est demandée avant toute restauration.

Le service worker fonctionne uniquement depuis `https://` ou `localhost`, pas en ouvrant directement le fichier avec `file://`.
