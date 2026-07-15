# Clair Courses — Version 6.0

Clair Courses reste une application simple pour préparer et cocher une liste de courses sur ordinateur et iPhone.

## Fonctions conservées

- Import d’une liste préparée avec ChatGPT.
- Classement automatique par rayons.
- Mes habituels et suggestions pendant la saisie.
- Mode Courses, grandes cases et articles achetés masqués.
- Compteur de progression et rayons terminés repliables.
- Maintien de l’écran allumé lorsque l’appareil le permet.
- Sauvegarde locale, export et import JSON.
- Fonctionnement hors connexion.

## Nouveauté principale de la V6

La mise à jour de l’application est désormais gérée par Clair Courses :

1. l’application vérifie les nouveautés au démarrage et lorsqu’elle revient au premier plan ;
2. une bannière « Une nouvelle version est disponible » apparaît ;
3. le bouton « Mettre à jour maintenant » active la nouvelle version et recharge l’application ;
4. les anciens caches sont supprimés automatiquement ;
5. les listes et les habituels restent dans le stockage local de l’iPhone.

Un bouton **Vérifier les mises à jour** est également disponible dans **Aide et sauvegarde**.

## Test sur ordinateur

Ouvrir `index.html`. Toutes les fonctions ordinaires peuvent être testées localement. La veille d’écran, le fonctionnement hors connexion et les mises à jour nécessitent une publication en HTTPS, par exemple sur GitHub Pages.

## Publication GitHub Pages

Téléverser le contenu du dossier `Clair_Courses` à la racine du dépôt :

- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `README.md`
- le dossier `assets`

Après le déploiement, ouvrir Clair Courses. Pour le passage initial d’une ancienne version à la V6, un rafraîchissement dans Safari ou une réinstallation unique de l’icône peut encore être nécessaire si un très ancien service worker bloque la page. Les mises à jour suivantes seront ensuite proposées directement dans l’application.

## Données

Les données restent enregistrées dans `localStorage`, sous la clé `clairCourses.state`. La V6 conserve cette clé et migre automatiquement les données des versions précédentes.
