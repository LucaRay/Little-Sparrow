# Little Sparrow - Official Website

A modern, responsive website built with Astro and Tailwind CSS v4, designed for deployment on Vercel.

## Features

- **Single Page Application** with smooth scrolling navigation
- **Responsive Design** - Mobile-first approach
- **Modern Stack** - Astro + Tailwind CSS v4
- **Performance Optimized** - Minimal JavaScript, fast loading
- **SEO Ready** - Sitemap generation included

## Sections

- **Hero** - Full-height landing with call-to-action buttons
- **Music** - Bandcamp embed integration
- **Live** - Bandsintown widget for upcoming shows
- **About** - Two-column layout with image and bio
- **Contact** - Email and social media links

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

## Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Astro framework
4. Deploy!

## Configuration

### Placeholders to Replace

- `PASTE_BANDCAMP_EMBED_URL_HERE` - Replace with your actual Bandcamp embed URL
- `ID_REPLACE_ME` - Replace with your Bandsintown artist ID
- `info@example.com` - Replace with your actual contact email
- Social media links - Update with your actual social media URLs
- About text - Replace with your actual bio
- `/images/about.jpg` - Replace with your actual photo

### Customization

- Colors are defined in CSS custom properties in `Base.astro`
- Main accent color: `#1b497b`
- Background: `#ffffff`
- Text: `#111111`

## Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vercel** - Deployment platform
- **Google Fonts** - Inter font family # append a blank line to README.md
