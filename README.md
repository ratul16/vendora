# Vendora

**Vendora** is an e-commerce platform designed for game enthusiasts. Whether you're looking to buy the latest releases or classic titles, Vendora offers a seamless shopping experience for gamers.

## Table of Contents

- [Vendora](#vendora)
  - [Table of Contents](#table-of-contents)
  - [Project Setup](#project-setup)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Development](#development)
    - [Scripts](#scripts)
    - [Post-Installation](#post-installation)

## Project Setup

To get started with Vendora, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/vendora.git
    cd vendora
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Features

- **Game Store**: Browse and purchase a wide range of games.
- **User Authentication**: Secure login and registration features.
- **Shopping Cart**: Easily manage your purchases.
- **Search & Filter**: Quickly find your favorite games using advanced search and filter options.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Nuxt 3**: The core framework for building the application.
- **Vue 3**: Used for creating the user interface components.
- **Pinia**: State management library for handling application state.
- **PrimeVue**: UI components for building responsive and elegant interfaces.
- **PrimeFlex**: Utility-first CSS framework for layout and design.
- **UUID**: Unique identifier generation for items.
- **Faker.js**: For generating fake data during development.

## Development

### Scripts

- **Development Mode**: Start the development server with hot-reloading.
    ```bash
    npm run dev
    ```

- **Build for Production**: Build the application for production.
    ```bash
    npm run build
    ```

- **Generate Static Site**: Generate a static version of the site (useful for JAMstack deployment).
    ```bash
    npm run generate
    ```

- **Preview Production Build**: Preview the production build locally.
    ```bash
    npm run preview
    ```

### Post-Installation

After installing dependencies, Nuxt automatically prepares the project by running:
```bash
npm run postinstall
