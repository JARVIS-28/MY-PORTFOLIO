# Janvii R V - Portfolio Website

A stunning, modern portfolio website built with Next.js, Three.js, and Framer Motion. Features advanced animations, a dynamic Three.js background, and showcases projects with accurate tech stacks.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and gradient overlays
- **Three.js Background**: Animated starfield with floating orbs and dynamic camera movements
- **Smooth Animations**: Framer Motion animations throughout with performance optimizations
- **Responsive Design**: Mobile-first approach with seamless responsive behavior
- **Accessibility**: WCAG compliant with focus states and reduced motion support
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Performance**: Optimized for Core Web Vitals and fast loading

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18
- **Styling**: Custom CSS with modern features
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Build Tool**: Next.js with static export
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd MY-PORTFOLIO
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out` folder.

3. Upload the contents of the `out` folder to your hosting provider.

## 📁 Project Structure

```
MY-PORTFOLIO/
├── src/
│   ├── components/
│   │   ├── Hero.js          # Hero section with animated text
│   │   ├── About.js         # About section
│   │   ├── Skills.js        # Skills with progress bars
│   │   ├── Projects.js      # Project showcase
│   │   ├── Contact.js       # Contact form
│   │   ├── Navbar.js        # Navigation
│   │   └── ThreeBackground.js # Three.js animated background
│   ├── pages/
│   │   └── index.js         # Main page
│   └── styles/
│       └── globals.css      # Global styles
├── package.json
├── next.config.js
└── README.md
```

## 🎨 Customization

### Updating Projects
Edit the `projects` array in `src/components/Projects.js` to add or modify projects.

### Changing Colors
Update the CSS custom properties in `src/styles/globals.css` to change the color scheme.

### Modifying Animations
Adjust Framer Motion variants in individual components to customize animations.

## 📧 Contact

- **Email**: janviirv777@gmail.com
- **GitHub**: [JARVIS-28](https://github.com/JARVIS-28)
- **LinkedIn**: [Your LinkedIn Profile]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Janvii R V
