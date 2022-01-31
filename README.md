# FOOBARTORY

## Installation

```bash
npm install
npm run dev

# build
npm run build
```

[Demo live](https://flo-foobartory.netlify.app/)

## Technos

- React (utilisation des hooks)
- Redux (toolkit)
- Typescript
- Sass

## Quelques mots

- Utilisation de redux pour partager l'état à tous les composants et avoir une vision du stock au moment T.
- Le code a été pensé pour pouvoir très facilement faire évoluer les règles. En paramétrant et modifiant quelques variables, on a une nouvelle simulation.
- Eviter au maximum la duplication du code
- Des tests unitaires m'auraient permis de gagner du temps

## Idées d'amélioration

- Actions automatiques : (ex: Le robot 1 mine du foo jusqu'à nouvel ordre)
- Pile d'actions : (ex: Le robot 1 mine 10 foos, puis 10 bars, puis les assemble)
- Plus de stats :
  - Stock selon temps
  - Robot le plus efficace
  - ...
- Jouer avec le clavier pour aller plus vite
