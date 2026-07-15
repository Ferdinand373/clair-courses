# Clair Courses — V5.1

Mini-application de liste de courses conçue en priorité pour l’iPhone. Elle fonctionne sans compte, sans API distante et sans bibliothèque externe.


## Amélioration V5.1

- En mode Courses, un rayon terminé se replie automatiquement au lieu de disparaître.
- Son titre reste visible avec le nombre d’articles achetés.
- Un toucher sur le rayon permet de revoir ce qui figurait sur la liste et de décocher un article en cas d’erreur.

## Nouveautés de la V5

- **Mode Courses** : interface épurée, articles achetés masqués, cases et texte agrandis.
- **Écran maintenu allumé** : bouton utilisant l’API Screen Wake Lock lorsque l’app est publiée en HTTPS et que l’iPhone la prend en charge.
- **Suggestions à la saisie** : après deux lettres, l’application propose des articles et leur rayon.
- **Progression plus lisible** : nombre d’articles achetés, articles restants et rayons restants.
- **Mes habituels** : ajout rapide des produits récurrents, déjà présent et conservé.

## Fichiers

- `index.html` : toute l’interface et la logique, y compris l’import de listes, la vérification des doublons et la sauvegarde JSON.
- `manifest.webmanifest` : installation sur l’écran d’accueil.
- `service-worker.js` : fonctionnement hors connexion après un premier chargement.
- `assets/` : icônes locales.

## Test sur ordinateur

Ouvrez `index.html` pour tester la liste, le mode Courses, les suggestions et la sauvegarde locale. Le bouton **Garder l’écran allumé** ne peut fonctionner qu’en contexte sécurisé (`https://` ou `localhost`) et doit donc être validé après publication sur GitHub Pages.

## Publier avec GitHub Pages

1. Ouvrir le dépôt qui héberge actuellement Clair Courses.
2. Remplacer les fichiers existants par ceux de ce dossier : `index.html`, `manifest.webmanifest`, `service-worker.js`, `README.md` et `assets/`.
3. Valider les changements sur la branche publiée par GitHub Pages.
4. Attendre la fin du déploiement GitHub Pages.
5. Ouvrir l’application sur l’iPhone et l’actualiser si l’ancienne version reste visible.

Les chemins sont relatifs : l’application peut être publiée à la racine d’un site ou dans un sous-dossier.

## Données

La liste, les coches, les rayons, les habituels et l’option d’affichage restent enregistrés uniquement dans `localStorage`, sous la clé `clairCourses.state`. La V5 conserve cette même clé et migre automatiquement les données de la V4.

Le menu **Aide et sauvegarde** permet d’exporter ou de restaurer une sauvegarde JSON. Une confirmation est demandée avant toute restauration.
