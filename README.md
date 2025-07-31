# Lummy Marketing - Enhanced Website

A modern, professional digital marketing agency website built with React, featuring a multi-page structure, beautiful animations, and a responsive design.

## Features

- **Multi-page Structure**: Home, Services, Portfolio, About, and Contact pages
- **Modern Design**: Lighter blue and grey color scheme with professional aesthetics
- **Interactive Elements**: Contact form popup, smooth animations, and hover effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading with efficient React components

## Technology Stack

- **React 19**: Modern React with hooks and functional components
- **React Router**: Client-side routing for seamless navigation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide Icons**: Beautiful, customizable icons
- **Vite**: Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MoneychasingLT/lummy-marketing-website.git
cd lummy-marketing-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

This website can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use the built files in the `dist` directory

### Netlify Deployment Settings

- **Build Command**: `pnpm run build`
- **Publish Directory**: `dist`
- **Node Version**: 20 (set as environment variable)

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── ContactModal.jsx # Contact form popup
│   └── ui/             # UI components (buttons, cards, etc.)
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Services.jsx    # Services page
│   ├── Portfolio.jsx   # Portfolio/case studies
│   ├── About.jsx       # About us page
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component with routing
├── App.css             # Global styles and animations
└── main.jsx            # Application entry point
```

## Customization

### Colors

The website uses a lighter blue and grey color scheme. To modify colors, update the CSS custom properties in `src/App.css`:

```css
:root {
  --primary: oklch(0.7 0.08 220);  /* Lighter blue */
  --secondary: oklch(0.95 0.01 220); /* Light grey */
}
```

### Content

- Update company information in the respective page components
- Modify contact details in `src/pages/Contact.jsx`
- Update team information in `src/pages/About.jsx`
- Customize services in `src/pages/Services.jsx`

## Contact Information

**Lummy Marketing**
- Address: 1000 Main Street, Suite 200, Houston, TX 77002, USA
- Phone: +1 (713) 555-0123
- Email: hello@lummymarketing.com

## License

© 2025 Lummy Marketing. All rights reserved.

