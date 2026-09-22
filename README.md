# ELEVATORIUM — V2

Version publique statique du site Elevatorium, conçue pour GitHub Pages avec HTML5, CSS3 et JavaScript vanilla.

## Lancer localement

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Publier sur GitHub Pages

Dans `Settings > Pages` du dépôt `Jebb97/elevatorium` :

- Source : `Deploy from a branch`
- Branch : `main`
- Folder : `/ (root)`

L’URL attendue est `https://jebb97.github.io/elevatorium/`.

## Personnaliser

### Couleurs

Les couleurs sont dans `style.css`, au début du fichier : `--color-primary`, `--color-accent`, `--color-accent-secondary` et `--color-white`.

### Formations

Les huit cartes et leurs détails de modal sont dans `index.html`, dans `#formations`. Les attributs `data-title`, `data-summary` et `data-body` alimentent les modales.

### Inscription Tally

Le lien officiel utilisé par tous les boutons d’inscription est :

`https://tally.so/r/3qxNJk?transparentBackground=1`

Il s’ouvre dans un nouvel onglet. Le site ne crée pas de formulaire concurrent.

### Réseaux et contact

Les liens WhatsApp, Facebook et TikTok sont dans la section `#contact` et dans le footer. Telegram a été retiré du site conformément aux consignes.

## Logo officiel

Le logo Canva fourni n’a pas pu être récupéré automatiquement depuis le lien Canva. Aucun faux logo n’a été créé.

Pour utiliser le logo officiel, placez les fichiers dans :

- `assets/images/elevatorium-logo.svg` — version claire ou sombre selon le fond ;
- éventuellement `assets/images/elevatorium-logo-light.svg` pour le footer.

Puis remplacez le bloc `.brand-mark` dans `index.html` par une balise `img` avec un `alt="Elevatorium"`. Le favicon actuel est une solution temporaire basée sur la lettre E et peut être remplacé par une variante officielle appropriée.

## Images

Le dépôt contient des illustrations SVG locales et légères pour éviter toute dépendance externe instable :

- `assets/images/hero.svg`
- `assets/images/about.svg`
- `assets/images/learning.svg`
- `assets/images/contact-phone.svg`

Aucune photographie d’apprenant ou de membre d’Elevatorium n’a été inventée. Pour ajouter des photographies réelles autorisées, utilisez de préférence :

- `assets/images/hero.webp`
- `assets/images/contact-phone.webp`
- `assets/images/learning.webp`
- `assets/images/digital-skills.webp`
- `assets/images/entrepreneurship.webp`

Puis remplacez le `src` correspondant dans `index.html`. La photo de la section « Rencontrons-nous » doit être une image professionnelle autorisée d’une personne utilisant un téléphone, et non une image présentée comme un membre d’Elevatorium sans preuve.

## Ressources futures

La section `#ressources` est volontairement simple et affiche « Nos ressources arrivent bientôt. ». Elle pourra accueillir des articles, guides, tutoriels, modèles, checklists et ressources professionnelles sans refonte de la navigation.

## Accessibilité et performance

- navigation clavier et focus visible ;
- menu mobile avec `aria-expanded`, `aria-controls` et fermeture avec Escape ;
- modales de formation accessibles et fermables au clavier ;
- animations désactivées ou réduites avec `prefers-reduced-motion` ;
- images locales et chargement différé hors écran initial ;
- aucun backend ou framework requis.

## Structure

```text
elevatorium/
├── index.html
├── style.css
├── script.js
├── README.md
├── favicon.svg
└── assets/
    └── images/
```
