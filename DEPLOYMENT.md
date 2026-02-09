# Deployment Guide

This guide will help you deploy your personal website to GitHub Pages.

## Quick Start - GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to GitHub and create a new repository
2. Choose one of these options:

   **Option A: User/Organization Site (Recommended)**
   - Repository name: `ftrianakast.github.io`
   - Your site will be at: `https://ftrianakast.github.io`
   - No need to modify `astro.config.mjs`

   **Option B: Project Site**
   - Repository name: Any name (e.g., `personal-website`)
   - Your site will be at: `https://ftrianakast.github.io/personal-website`
   - You'll need to uncomment the `base` line in `astro.config.mjs`

3. Don't initialize with README (we already have one)

### Step 2: Push Your Code

Run these commands from the `personal-website` directory:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/ftrianakast/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Click on **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. That's it! GitHub Actions will automatically build and deploy your site

The deployment will start automatically. You can watch the progress:
- Go to the **Actions** tab in your repository
- You'll see the "Deploy to GitHub Pages" workflow running
- Wait for it to complete (usually 1-2 minutes)
- Your site will be live at your GitHub Pages URL

### Step 4: Visit Your Site

- For user site: `https://ftrianakast.github.io`
- For project site: `https://ftrianakast.github.io/YOUR-REPO-NAME`

## Making Updates

After the initial setup, deploying updates is simple:

```bash
# Make your changes to the code
# Then commit and push

git add .
git commit -m "Your update message"
git push
```

The site will automatically rebuild and deploy in 1-2 minutes.

## Local Development

### First Time Setup

```bash
cd personal-website
npm install
```

### Development Server

```bash
npm run dev
```

Open `http://localhost:4321` in your browser. The site will automatically reload when you make changes.

### Build Locally

```bash
npm run build
```

The built site will be in the `dist/` folder.

### Preview Production Build

```bash
npm run build
npm run preview
```

## Customizing for Project Site

If you chose **Option B** (project site) in Step 1, you need to update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://ftrianakast.github.io',
  base: '/YOUR-REPO-NAME', // Uncomment this line and add your repo name
  vite: {
    plugins: [tailwindcss()]
  }
});
```

Then commit and push:

```bash
git add astro.config.mjs
git commit -m "Configure base path for project site"
git push
```

## Troubleshooting

### Site Not Showing Up

1. Check the Actions tab - is the workflow failing?
2. Make sure GitHub Pages is enabled in Settings → Pages
3. Make sure Source is set to "GitHub Actions"
4. Wait a few minutes after the first deployment

### Styles Not Loading

1. If using a project site, make sure you set the `base` in `astro.config.mjs`
2. Clear your browser cache
3. Check the browser console for errors

### Workflow Failing

1. Check the error message in the Actions tab
2. Make sure `package.json` has all required dependencies
3. Try running `npm run build` locally to catch errors

## Next Steps

1. **Add Content**
   - Update pages with your own content
   - Add blog posts (you'll need to set up Astro Content Collections)
   - Add images to the `public/` folder

2. **Customize Design**
   - Modify colors in the Tailwind classes
   - Update the layout in `src/layouts/BaseLayout.astro`
   - Add your own favicon in `public/`

3. **SEO & Analytics**
   - Add meta tags in BaseLayout
   - Set up Google Analytics
   - Create a sitemap (Astro can generate this)

4. **Domain Name** (Optional)
   - Buy a custom domain
   - Configure it in GitHub Pages settings
   - Update the `site` in `astro.config.mjs`

## Need Help?

- Astro Documentation: https://docs.astro.build
- GitHub Pages Documentation: https://docs.github.com/en/pages
- Tailwind CSS Documentation: https://tailwindcss.com/docs

Good luck with your website! 🚀
