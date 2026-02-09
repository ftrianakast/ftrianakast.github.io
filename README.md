# Felipe Triana - Personal Website

A modern, professional personal website built with Astro and Tailwind CSS.

## Features

- 🚀 Built with Astro for blazing-fast performance
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🎯 SEO-friendly
- 🎵 Unique sections showcasing both tech and music
- 📝 Blog-ready structure
- 🌐 GitHub Pages deployment ready

## Project Structure

```
personal-website/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout with navigation and footer
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── about.astro          # About page
│   │   ├── work.astro           # Work experience
│   │   ├── music.astro          # Music section
│   │   ├── blog.astro           # Blog listing
│   │   └── contact.astro        # Contact page
│   └── styles/
│       └── global.css           # Global styles with Tailwind
├── public/                      # Static assets
└── .github/
    └── workflows/
        └── deploy.yml           # GitHub Actions deployment
```

## Development

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:4321`

## Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub (e.g., `ftrianakast.github.io` for user site or any name for project site)

2. If using a project site (not username.github.io), update `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://ftrianakast.github.io',
     base: '/repository-name', // Uncomment and update this line
     // ...
   })
   ```

3. Initialize git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   git branch -M main
   git remote add origin https://github.com/ftrianakast/your-repo-name.git
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to your repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

5. The site will automatically deploy on every push to main branch

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# The dist/ folder contains your built site
```

## Customization

### Colors

The site uses a Colombian-inspired color palette with amber and slate tones. To customize:

- Primary color: `amber-600` (modify in Tailwind classes)
- Accent colors: `blue`, `green`, `slate`

### Content

- Update your information in each page file under `src/pages/`
- Modify navigation links in `src/layouts/BaseLayout.astro`
- Add your social media links in footer and contact page

### Blog Posts

To add blog posts, create markdown files in `src/content/blog/` (you'll need to set up Astro Content Collections for this).

## Technologies

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

MIT License - feel free to use this as a template for your own website!

## Contact

- Email: ftrianakast@gmail.com
- GitHub: [@ftrianakast](https://github.com/ftrianakast)
- LinkedIn: [ftrianakast](https://linkedin.com/in/ftrianakast)
