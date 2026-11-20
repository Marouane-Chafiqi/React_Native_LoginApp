# Login App – Lab 7

Application mobile simple développée avec **React Native** et **Expo**.
Elle contient un écran d'accueil avec un champ « First Name » et un écran de connexion avec email et mot de passe.

## Captures d'écran

| Écran 1 | Écran 2 |
| :-----: | :-----: |
| ![Écran 1](screenshots/1.JPEG) | ![Écran 2](screenshots/2.JPEG) |

## Fonctionnalités

- Composant `TextInput` pour saisir du texte
- Stockage du texte saisi avec `useState`
- Props utilisées : `placeholder`, `keyboardType`, `secureTextEntry`
- Écran d'accueil (`WelcomeScreen`) avec le champ « First Name »
- Écran de connexion (`LoginScreen`) avec email (clavier adapté) et mot de passe (texte masqué)
- En-tête (`AppHeader`) et pied de page (`AppFooter`)

## Structure du projet

```
MyLoginApp/
├── App.js
└── src/
    ├── app/
    │   └── index.tsx          # Point d'entrée Expo Router
    └── components/
        ├── AppHeader.js
        ├── AppFooter.js
        ├── WelcomeScreen.js
        └── LoginScreen.js
```

## Installation et lancement

1. Aller dans le dossier du projet :

   ```bash
   cd MyLoginApp
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer l'application :

   ```bash
   npx expo start
   ```

4. Scanner le QR code avec l'application **Expo Go** sur le téléphone.

## Technologies

- React Native
- Expo (Expo Router)
- JavaScript / TypeScript

## Auteur

Marouane Chafiqi
