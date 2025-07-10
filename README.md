# 🌿 Planteka - Nuxt 3 Project

A modern web application built with Nuxt 3, featuring state management with Pinia and styled with Tailwind CSS.

## 🚀 Tech Stack

### Core Framework
- **[Nuxt 3](https://nuxt.com/)** (v3.17.6) - The Intuitive Vue Framework
- **[Vue 3](https://vuejs.org/)** (v3.5.17) - The Progressive JavaScript Framework
- **[TypeScript](https://www.typescriptlang.org/)** (v5.8.3) - JavaScript with syntax for types

### State Management
- **[Pinia](https://pinia.vuejs.org/)** (v3.0.3) - The Vue Store that you will enjoy using
- **[@pinia/nuxt](https://pinia.vuejs.org/ssr/nuxt.html)** (v0.11.1) - Nuxt module for Pinia
- **[pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/)** (v4.4.1) - Persist Pinia state in localStorage

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.11) - A utility-first CSS framework
- **[@nuxt/ui](https://ui.nuxt.com/)** (v3.2.0) - A UI Library for Modern Web Apps
- **[@nuxt/icon](https://github.com/nuxt/icon)** (v1.15.0) - Icon component for Nuxt
- **[@nuxt/fonts](https://fonts.nuxt.com/)** (v0.11.4) - Web font optimization for Nuxt
- **[@nuxt/image](https://image.nuxt.com/)** (v1.10.0) - Image optimization for Nuxt

### Development Tools
- **[@nuxt/eslint](https://eslint.nuxt.com/)** (v1.5.2) - ESLint configuration for Nuxt
- **[@nuxt/test-utils](https://nuxt.com/docs/getting-started/testing)** (v3.19.2) - Testing utilities for Nuxt
- **[@vueuse/nuxt](https://vueuse.org/)** (v13.5.0) - Collection of essential Vue Composition Utilities

### Additional Features
- **[@nuxt/content](https://content.nuxt.com/)** (v3.6.3) - Content made easy for Vue developers
- **[@nuxt/scripts](https://scripts.nuxt.com/)** (v0.11.9) - Third-party script management
- **[better-sqlite3](https://github.com/WiseLibs/better-sqlite3)** (v12.2.0) - The fastest SQLite3 library for Node.js

## 📁 Project Structure

```
├── assets/          # CSS, images, and other assets
├── components/      # Reusable Vue components
├── layouts/         # Application layouts
├── pages/           # Application pages (file-based routing)
├── plugins/         # Nuxt plugins
├── middleware/      # Route middleware
├── stores/          # Pinia stores
├── composables/     # Vue composables
├── utils/           # Utility functions
├── server/          # Server-side code
└── public/          # Static assets
```

## 🛠️ Setup

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:FrankDeWitt/Planteka-Nuxt.git
cd Planteka-Nuxt
```

2. Install dependencies:
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

## 🚀 Development

Start the development server:

```bash
# Using pnpm
pnpm dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Building for Production

Build the application:

```bash
# Using pnpm
pnpm build

# Using npm
npm run build

# Using yarn
yarn build
```

Preview the production build:

```bash
# Using pnpm
pnpm preview

# Using npm
npm run preview

# Using yarn
yarn preview
```

## 📚 Key Features

- **🎯 State Management**: Pinia stores with Composition API and persistence
- **🎨 Styling**: Tailwind CSS v4 with custom Planteka color palette
- **📱 Responsive**: Mobile-first design with Tailwind CSS
- **🔧 TypeScript**: Full TypeScript support for better DX
- **🚀 Performance**: Optimized images, fonts, and scripts
- **🧪 Testing**: Built-in testing utilities
- **📖 Content**: Content management with @nuxt/content

## 🎨 Custom Theme

The project includes a custom "Planteka" color palette:

```css
planteka: {
  50: '#f0fdf4',   100: '#dcfce7',   200: '#bbf7d0',
  300: '#86efac',  400: '#4ade80',   500: '#22c55e',
  600: '#16a34a',  700: '#15803d',   800: '#166534',
  900: '#14532d',  950: '#052e16'
}
```

## 📖 Documentation

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary.
