# Login App

A small Expo + React Native starter app that demonstrates a sign-in/sign-up flow using `expo-router` and a tabbed home screen.

https://github.com/user-attachments/assets/c4ca8e4e-0ba8-43cd-bfd9-fe9d17d104e3

## Overview

This project is a mobile-focused Expo application built with TypeScript and `expo-router`.
It includes:
- A sign-in screen with email/password input and password reveal toggle
- A sign-up screen with password confirmation validation
- Basic navigation between sign in, sign up, and example tabbed screens
- A modal screen and themed UI helpers

## Key Features

- `expo-router` navigation and route-based file system
- `@expo/vector-icons` for UI icons
- Responsive React Native styling for mobile screens
- Password validation on sign-up
- Example home screen with themed components and navigation menu actions

## Getting Started

### Install dependencies

```bash
cd project/login
npm install
```

### Run the app

```bash
npm run start
```

Then choose the platform you want:

- `npm run android`
- `npm run ios`
- `npm run web`

### Lint

```bash
npm run lint
```

## Project Structure

- `app/_layout.tsx` — main layout and stack navigation setup
- `app/index.tsx` — sign-in screen
- `app/sign-up.tsx` — sign-up screen with password confirmation
- `app/modal.tsx` — modal example screen
- `app/(tabs)/index.tsx` — tabbed home screen example
- `components/` — reusable themed UI components
- `constants/theme.ts` — project theme values
- `hooks/` — custom hooks for theming and color scheme
- `scripts/reset-project.js` — helper script to reset the app directory

## Notes

- The app uses the Expo Router convention, so routes are defined by file names in the `app` directory.
- `Sign In` currently triggers a placeholder alert; the app does not connect to a backend authentication service.
- `Sign Up` checks whether `password` and `confirm` match before navigating back to the sign-in screen.

## Resetting the project

To reset the starter app and create a fresh `app` directory, run:

```bash
npm run reset-project
```

This script can move the existing directories to `app-example` if you choose that option.

## Dependencies

- `expo`
- `expo-router`
- `react`
- `react-native`
- `@expo/vector-icons`
- `@react-navigation/native`
- `@react-navigation/bottom-tabs`
- `react-native-reanimated`
- `react-native-gesture-handler`
- `expo-image`
- `expo-haptics`

## Development

This project is set up for rapid prototyping with Expo. To extend the app, edit the screen components in `app/` and follow the file-based routing rules provided by `expo-router`.
