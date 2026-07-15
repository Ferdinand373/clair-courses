# Clair Courses

Mini-application de liste de courses conçue en priorité pour Safari sur iPhone.

## Fichiers

- \`index.html\` : toute l’interface et la logique, sans dépendance.
- \`manifest.webmanifest\` : installation sur l’écran d’accueil.
- \`service-worker.js\` : fonctionnement hors connexion après un premier chargement.
- \`assets/\` : icônes locales.

## Publier avec GitHub Pages

1. Ouvrir le dépôt qui héberge actuellement Clair Courses.
2. Remplacer son ancien \`index.html\` par celui de ce dossier.
3. Ajouter aussi \`manifest.webmanifest\`, \`service-worker.js\` et le dossier \`assets\`.
4. Valider les changements sur la branche publiée par GitHub Pages.
5. Ouvrir l’adresse GitHub Pages une première fois en ligne sur l’iPhone.
6. Dans Safari, toucher **Partager**, puis **Ajouter à l’écran d’accueil**.

Les chemins sont relatifs : l’application peut être publiée à la racine d’un site ou dans un sous-dossier.

## Données

La liste, les coches, les rayons, les habituels et l’option d’affichage sont enregistrés uniquement dans \`localStorage\`, sous la clé \`clairCourses.state\`. Aucun compte ni serveur n’est utilisé.

Le service worker fonctionne uniquement depuis \`https://\` ou \`localhost\`, pas en ouvrant directement le fichier avec \`file://\`.
