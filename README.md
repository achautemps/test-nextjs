# nextjs

Avant de commencer la présentation de mon projet, je souhaite introduire en annonçant que je n'ai travaillé que sur React purement client associé à une API REST via express. je découvre donc next.js avec ce projet.

## Installation

1. Générer les variables d'environemnt: `npm run init`
2. Token pour l'API à mettre dans `.env.local`: b987916093854e9ccf1bbc69bd425600
3. Token pour les cookies à mettre dans `.env.local` : 5kbWIuTHKDSRGqXOjdul0uQQyCIa5NBL (n'importe quelle chaine de 32 caractères fonctionne)
4. Base Url à mettre dans `.env.local` selon votre environnement.
5. `npm i` (necessite Node.js 16.x)
6. `npm run dev`

## Dépendances

- [sass](https://www.npmjs.com/package/sass) : Permet d'utiliser la syntaxe SCSS dans le projet
- [@styled-jsx/plugin-sass](https://www.npmjs.com/package/@styled-jsx/plugin-sass) : Permet d'utiliser SCSS dans les styles JSX
- [clsx](https://www.npmjs.com/package/clsx) : permet de faire des conditions dans les attributs classname sans faire de ternaires à tout va.
- [axios](https://github.com/axios/axios) : Librairie pour faire des requêtes HTTP. Je la préfère à la méthode Fetch de JS, car axios me permet de globaliser les options génériques de l'API et de découper en "Model" mes requêtes facilement.
- [splidejs](https://splidejs.com/integration/react-splide/) : Librairie légère pour faire les carousels.
- [iron-session](https://github.com/vvo/iron-session) : Librairie pour gérer les sessions via cookies sécurisés
- eslint : Pour linter mon code.

## API utilisée

**[The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)**

J'ai choisi cette API car elle est vraiment très fournie en terme de fonctionnalités et de contenu. J'aime également beaucoup le cinéma et j'avais déjà une clé API pour ma veille personnelle. C'était donc un choix logique pour moi.

### Fonctionnement de l'API

Chaque appel à l'API se fait via une url du type `https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>`.
Je devais donc envoyer la clé API dans les paramètres de chaques appels. J'utilise les variables d'environnement pour cacher mes clés API. Je me suis retrouvé coincé pour faire le systeme de pagination côté client, j'ai donc décidé de partir sur une "API proxy" via les [API routes](https://nextjs.org/docs/api-routes/introduction) que propose next.js.
En faisant ainsi je peux appeler ma propre API qui ira se servir dans celle de The Movie Database sans montrer le moindre token.

De plus, cette méthode me permet de choisir mes propres noms de routes et me retourner ce dont j'ai besoin. Je peux maintenant faire un seul appel depuis mes pages pour appeler 2 endpoints de l'API The Movie Database.
La page detail d'un film est un bon example. Il me faut pour cette page des données de deux différents endpoint de l'API The Movie Database (un pour les détails du film et un pour avoir la liste des acteurs). En créant ma propre route api `/api/movies/:id` mon component ne fait qu'un appel et c'est l'api route qui se charger de faire les deux appels à l'API The Movie Database.

### Guest session id

Afin de pouvoir noter un film, l'API Movie Database demande un guest session token afin de pouvoir identifier la personne qui fait la requete. Ensuite il ajoute ou met à jour la note selon si l'utilisateur a déjà noté ou non un film.

Pour cela, j'ai décidé de faire un mini systeme de session via un cookie de navigation. Quand l'utilisateur note un film, je vais regarder si le cookie existe et contient un guest session id, si c'est le cas, je l'utilise pour faire la requete à l'API Movie Database sinon je fait une requete au préalable pour recevoir un guest session id et l'ajoute dans un cookie qui sera retourné au navigateur une fois que la requete à l'API Movie Database pour noté le film est terminée.

### Diagrame de l'api

Un bon exemple vaut mieux qu'un long discours, voici un diagramme du fonctionnement de l'api sur mon app.
![diagrame](/docs/diagramme-api.png)

## Style JSX vs CSS Module

Avec React, j'ai toujours utilisé l'import des fichiers scss à même les composants et je me suis rendu compte qu'avec la version 12.0.7 de next.js, cette métode est obsolète. Je devais donc, soit, importer mes css au global du site (méthode de facilité au détriment de la perf, car pas besoin de charger le CSS d'un component si je ne l'ai pas sur la page actuelle) ou utiliser une des 2 solutions que nextJs propose. Pour me faire mon propre avis je me suis lancé dans le test des 2 options à ma disposition.

### Style JSX

Cette méthode consiste à écrire le CSS dans le JS à même le JSX du component
J'ai installé le package [@styled-jsx/plugin-sass](https://www.npmjs.com/package/@styled-jsx/plugin-sass) afin de pouvoir utiliser la syntaxe SCSS.
C'est la méthode la plus simple de faire du CSS dans les components.

### CSS Module

Cette méthode consiste à créer un fichier CSS avec nos selecteurs uniques et l'importer en tant qu'objet comprenant une clé pour chaque selecteur dans notre component. J'ai trouvé cette méthode très intéressante.

### Mon Choix

Bien entendu, je présente 2 solutions qui pour moi étaient les plus rapides à prendre en main mais je pense que d'autres solutions dans le temps me permettront d'arriver à trouver le meilleur compromis.

Ceci étant dit, pour ce test j'ai opté pour le couple **import global des CSS / Styles JSX** et voici les raisons :

- J'utilise une méthode améliorée de BEM depuis des années. Malgré le fait que j'ai apprecié le CSS Module, je devais chambouler toutes mes syntaxes CSS pour l'utiliser. J'ai donc choisi la méthode JSX car je ne voulais pas d'une syntaxe Hybride entre ma méthode BEM dans les CSS Globaux et celle des Module CSS dans mes components.
- J'utilise également la librairie [clsx](https://www.npmjs.com/package/clsx) pour les conditions de classes. Via CSS Module, je me retrouvais avec du code trop verbeux à mon gout dans un simple "className".
- Je souhaitais vraiment garder de la cohérence entre les attributs className de mes pages et ceux de mes components

Ces raisons m'ont donc poussé à choisir les **Styles JSX** plutôt que les **CSS Modules**

## Syntaxe CSS

Comme évoqué précédement, mes classes CSS sont faites avec une méthode BEM que j'ai améliorée pour mes besoins au quotidien et avec mon expérience. Voici un petit glossaire pour vous y retrouver quand vous lirez mes classes.

### Préfixe des classes

Chaque block ou élément à un rôle dans mon projet :

- Element (pas de préfixe) : représente un element très simple (ex : titre, bouton, label).
- Component (préfixe : `c-`) : représente un groupe d'élements ou d'autres components (Ce que je vais avoir dans un component react).
- Objects (préfixe : `o-`) : Toutes les classes non visibles, souvent pour la mise en page (ex : la grille pour mettre en page).
- Utilitaires (préfixe : `u-`) : Toutes les classes utiles qui peuvent me servir au global du projet.
- Page (préfixe : `p-`) : Toutes les classes pour la page au global (Ce que je vais avoir la page next).

### Méthode BEM améliorée

J'utilise le `BE` de BEM de façon classique.
Un element séparé du block par `__`

```CSS
//Block
.block{
}

//Element du Block
.block__element{
}
```

Personnellement, j'utilise beaucoup les modifiers et avec le `M` de BEM, je me retrouvais souvent avec des attributs classes très longs.
Je me suis donc séparé du `--` et je l'ai remplacé par l'ajout d'une nouvelle classe avec un simple prefixe `-`

```CSS
//Modifier
.block__element.-modifier{
}
```

### Utilisation du double Pipe

Ma façon d'utiliser la méthode BEM provoque un petit problème de lecture lorsque nous avons un block qui possède 2 rôles.
Exemple :

```HTML
<div class="c-product">
  <button class="c-product__button button -tiny"></button>
</div>
```

En effet, On ne sait pas vraiment si le modifier `-tiny` est sur `.c-product__button` ou sur `.button`.
Dans l'exemple, il est après `.button`, donc on imagine qu'il est sur celui-ci. Mais avec un projet plus conséquent et de multiples modifiers. La logique n'est plus vraiment de mise.

Pour éviter la moindre place à l'interpretation j'utilise le `||` pour bien séparer mes classes. **Il n'est jamais utilisé dans mon CSS, il me sert juste de séparateur visuel**.
Exemple :

```HTML
<div class="c-product">
  <button class="c-product__button -tiny || button"></button>
</div>
```

Je sais maintenant que `-tiny` est sur `.c-product__button` et non sur `.button` et que le modifier est dans le component product et non dan l'élément button si j'ai à le changer.

## That's all folks !

Merci de m'avoir donné une chance et pour le temps que vous consacrez à me lire.

Alexandre
