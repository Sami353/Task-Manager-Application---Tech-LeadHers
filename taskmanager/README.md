# React Native App with Expo

This is a React Native application built using Expo and Expo Router. The app was created with `npx create-expo-app` and incorporates various dependencies to provide a smooth user experience. It includes functionality for tasks, location tracking, and maps.

## Features

- **Task Management**: The app allows users to manage tasks.
- **Location Tracking**: Integrated with `expo-location` to fetch and use device location.
- **Maps**: Display maps using `react-native-maps`.
- **Toast Notifications**: Shows notifications using `react-native-toast-message`.
  
## Technologies Used

- [Expo](https://expo.dev/) for easy React Native development.
- [Expo Router](https://github.com/expo/expo-router) for file-based routing.
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) for integrating maps.
- [React Native Toast Message](https://github.com/caljex/react-native-toast-message) for displaying toast notifications.
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) for handling location services.
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) for vector icons.

## Screens

- **Add Task** (`add-task.js`): A screen for adding new tasks.
- **Tasks** (`tasks.js`): A screen to display and manage your list of tasks.
- **Map** (`map.js`): A screen that integrates maps using `react-native-maps` to show locations.

## Utility Functions

- **Location Utilities** (`location.utils.js`): Helper functions for managing location-related functionality, such as fetching the device's current location.
