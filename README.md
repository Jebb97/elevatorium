# ELEVATORIUM

Site statique pour l’organisation de formation et de développement professionnel ELEVATORIUM.

## 1. Lancer le site localement

1. Ouvrez le dossier du projet dans votre éditeur de code.
2. Lancez un serveur local simple, par exemple :
   ```bash
   python3 -m http.server 8000
   ```
3. Ouvrez dans votre navigateur :
   ```text
   http://localhost:8000
   ```

Vous pouvez aussi ouvrir directement `index.html` dans le navigateur, mais un petit serveur local est conseillé pour éviter certains comportements de navigation.

## 2. Modifier les couleurs

Les couleurs de marque sont définies dans `style.css` à l’aide de variables CSS :

```css
:root {
  --color-primary: #182B09;
  --color-accent: #B4DE00;
  --color-accent-secondary: #D4DE0C;
  --color-white: #FFFFFF;
}
```

Vous pouvez modifier ces variables sans changer l’identité générale du site.

## 3. Modifier les formations

Les formations sont visibles dans `index.html` dans la section `#formations`.

Chaque carte est un article avec :
- un titre
- une description
- un bouton “En savoir plus”

Pour ajouter ou modifier une formation, modifiez les éléments dans cette section et/ou les données dans `script.js` si vous souhaitez personnaliser le contenu de la modale.

## 4. Modifier les liens sociaux

Dans `index.html`, vérifiez les liens suivants :

- WhatsApp
- Facebook
- TikTok
- Tally

Exemples :

```html
<a href="https://wa.me/243840599200" target="_blank" rel="noopener noreferrer">WhatsApp</a>
```

Pour ajouter un futur lien Telegram, remplacez le texte placé dans le bloc contact :

```html
<span>TELEGRAM_URL_TO_BE_ADDED</span>
```

par un vrai lien quand la valeur sera disponible.

## 5. Modifier le lien Tally

Le lien d’inscription est configuré dans plusieurs endroits :

```html
https://tally.so/r/3qxNJk?transparentBackground=1
```

À remplacer uniquement si le lien officiel change.

## 6. Remplacer les images

Le site a été conçu pour être compatible avec des images locales. Les emplacements à prévoir sont :

- `assets/images/hero.webp`
- `assets/images/about.webp`
- `assets/images/training.webp`
- `assets/images/community.webp`

Pour l’instant, le design utilise des blocs visuels lisibles et propres. Vous pouvez remplacer ces zones par des images locales plus tard.

## 7. Publier sur GitHub Pages

1. Pousser tous les fichiers du projet sur le dépôt GitHub.
2. Dans le dépôt, allez dans :
   - `Settings`
   - `Pages`
3. Sélectionnez la branche principale (`main`).
4. Choisissez le dossier racine.
5. Enregistrez.

Le site sera alors disponible selon une URL de type :

```text
https://<votre-utilisateur>.github.io/elevatorium/
```

Le site a été conçu avec des chemins relatifs pour rester compatible avec GitHub Pages, y compris si le dépôt est publié dans un sous-chemin.

## 8. Ajouter le futur lien Telegram

Dans `index.html`, la section Contact contient actuellement :

```html
<span>TELEGRAM_URL_TO_BE_ADDED</span>
```

Quand le vrai lien Telegram sera connu, remplacez cette ligne par :

```html
<a href="VOTRE_LIEN_TELEGRAM" target="_blank" rel="noopener noreferrer">Telegram</a>
```

## 9. Ajouter ultérieurement des ressources et articles

La structure est prête pour recevoir plus tard :

- articles
- vidéos
- guides
- tutoriels
- checklists
- ressources professionnelles
- ressources IA
- ressources entrepreneuriales

Vous pouvez étendre la section `#ressources` ou ajouter un blog plus tard sans refaire toute l’interface.

Les éléments existants sont déjà organisés pour faciliter l’ajout d’une structure CMS, d’une API ou d’un système de recherche.

---

## Structure du projet

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

## À retenir

- le site est statique ;
- compatible GitHub Pages ;
- sans backend requis ;
- entièrement en français ;
- conçu pour la conversion vers l’inscription via Tally.
