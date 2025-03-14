# Backend Engineer Portfolio

A modern, responsive portfolio website built with Nuxt 3 and Tailwind CSS, featuring a beautiful dark/light theme.

## Features

- 🌓 Light and Dark theme with smooth transitions
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast page loads with Nuxt 3
- 🧩 Component-based architecture

## Project Structure

```
profile-me/
├── components/           # Reusable Vue components
│   ├── ProfileImage.vue
│   ├── ThemeToggle.vue
│   └── sections/        # Major page sections
│       ├── HeroSection.vue
│       ├── SkillsSection.vue
│       ├── ProjectsSection.vue
│       └── ContactSection.vue
├── layouts/             # Nuxt layouts
│   └── default.vue      # Default layout with navigation
├── pages/              # File-based routing
│   ├── index.vue       # Home page
│   ├── skills.vue
│   ├── projects.vue
│   └── contact.vue
├── public/             # Static assets
├── app.vue             # Main app component
└── tailwind.config.js  # Tailwind configuration
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Tech Stack

- [Nuxt 3](https://nuxt.com/) - Vue.js Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework

## Development

The project follows Nuxt 3's conventions for routing and component organization:

- Pages are automatically routed based on their file names in the `pages/` directory
- Components in the `components/` directory are auto-imported
- The default layout in `layouts/default.vue` provides the navigation and footer structure
- Theme switching is handled by the `ThemeToggle` component using Tailwind's dark mode

## License

MIT
