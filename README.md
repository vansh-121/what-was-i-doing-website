# What Was I Doing? - Website

<div align="center">

<img src="https://raw.githubusercontent.com/vansh-121/What-Was-I-Doing-Extension/master/icon.png" alt="WWID Logo" width="128" height="128">

### Never Lose Your Coding Context

[![Live Website](https://img.shields.io/badge/🌐_Live-www.whatwasidoing.dev-4CAF50?style=for-the-badge)](https://www.whatwasidoing.dev)
[![VS Code Extension](https://img.shields.io/visual-studio-marketplace/v/VanshSethi.what-was-i-doing?style=for-the-badge&logo=visualstudiocode&label=VS%20Code)](https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/VanshSethi.what-was-i-doing?style=for-the-badge&logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing)
[![Rating](https://img.shields.io/visual-studio-marketplace/stars/VanshSethi.what-was-i-doing?style=for-the-badge&logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing)

**Official marketing website for the "What Was I Doing?" VS Code extension**

[🚀 Visit Website](https://www.whatwasidoing.dev) • [💻 Install Extension](https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing) • [📦 Extension Repo](https://github.com/vansh-121/What-Was-I-Doing-Extension)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [About the Extension](#-about-the-extension)
- [Website Features](#-website-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Related Links](#-related-links)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 About the Project

This is the **official marketing website** for the "What Was I Doing?" VS Code extension. Built with modern web technologies, it provides comprehensive information about the extension, installation guides, features, and documentation.

**🌐 Live Website:** [www.whatwasidoing.dev](https://www.whatwasidoing.dev)

The website features:
- 📱 Fully responsive design for all devices
- 🎨 Beautiful UI with smooth animations
- 🌙 Dark/Light theme support
- ⚡ Lightning-fast page loads with Vite
- 🎯 Comprehensive extension documentation
- 📊 Real-time stats from VS Code Marketplace

---

## 💡 About the Extension

**"What Was I Doing?"** is a productivity-focused VS Code extension that automatically tracks your coding context and helps you resume work seamlessly after breaks.

### Extension Features:

🔍 **Smart Context Tracking**
- Automatically saves file name, function/class name, line number, and TODOs
- Works silently in the background with zero performance impact

⏰ **Inactivity Detection**
- Detects when you step away from your desk
- Configurable idle time threshold (default: 5 minutes)

💬 **Helpful Reminders**
- Popup notification when you return with your last work context
- One-click navigation back to exact position

⚙️ **Fully Customizable**
- Exclude specific file patterns (node_modules, .git, etc.)
- Custom TODO keywords (TODO, FIXME, HACK, etc.)
- Toggle auto-popup on/off

### Links:
- **VS Code Marketplace:** [Install Extension](https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing)
- **Extension Source Code:** [GitHub Repo](https://github.com/vansh-121/What-Was-I-Doing-Extension)
- **Report Issues:** [Issue Tracker](https://github.com/vansh-121/What-Was-I-Doing-Extension/issues)

---

## ✨ Website Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Beautiful components with shadcn-ui and Tailwind CSS
- 📱 **Fully Responsive** - Works perfectly on all devices and screen sizes
- 🔒 **Type Safe** - Written in TypeScript for robust, maintainable code
- 🎯 **Component Based** - Modular architecture with reusable components
- 🌙 **Theme Support** - Seamless dark/light mode toggle
- 🎬 **Smooth Animations** - Framer Motion for delightful interactions
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 📊 **Interactive Sections** - Features, FAQ, testimonials, and more


---

## ✨ Website Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Beautiful components with shadcn-ui and Tailwind CSS
- 📱 **Fully Responsive** - Works perfectly on all devices and screen sizes
- 🔒 **Type Safe** - Written in TypeScript for robust, maintainable code
- 🎯 **Component Based** - Modular architecture with reusable components
- 🌙 **Theme Support** - Seamless dark/light mode toggle
- 🎬 **Smooth Animations** - Framer Motion for delightful interactions
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 📊 **Interactive Sections** - Features, FAQ, testimonials, and more

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.3.1 | UI Library for building interactive components |
| **TypeScript** | 5.6.2 | Type safety and better developer experience |
| **Vite** | 6.0.1 | Ultra-fast build tool and dev server |
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework for styling |
| **shadcn/ui** | Latest | High-quality, customizable UI components |
| **Framer Motion** | Latest | Animation library for smooth transitions |
| **Bun** | Latest | Fast JavaScript runtime and package manager |
| **React Router** | Latest | Client-side routing |
| **React Helmet** | Latest | SEO management |

---

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Bun** (recommended) or npm - [Install Bun](https://bun.sh/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vansh-121/WWID-Website.git
   ```

2. **Navigate to project directory**
   ```bash
   cd WWID-Website
   ```

3. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

4. **Start development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Open your browser**
   
   Visit `http://localhost:5173` to see the application running.

---

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
bun run dev

# Build for production
bun run build

# Preview production build locally
bun run preview

# Run ESLint for code quality
bun run lint
```

### Project Structure

```
WWID-Website/
├── public/                 # Static assets (robots.txt, etc.)
├── src/
│   ├── assets/            # Images, logos, fonts
│   ├── components/        # React components
│   │   ├── ui/           # shadcn-ui base components
│   │   ├── Hero.tsx      # Landing section
│   │   ├── Features.tsx  # Extension features showcase
│   │   ├── HowItWorks.tsx # Step-by-step guide
│   │   ├── Installation.tsx # Installation methods
│   │   ├── FAQ.tsx       # Frequently asked questions
│   │   └── ...           # Other components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Route pages
│   │   ├── Index.tsx     # Homepage
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

### Key Components

- **Hero**: Main landing section with CTA buttons
- **Features**: Extension capabilities and benefits
- **HowItWorks**: 4-step guide for getting started
- **Installation**: Multiple installation methods
- **Commands**: Available VS Code commands
- **Configuration**: Extension settings guide
- **FAQ**: Common questions and answers
- **Testimonials**: User reviews and feedback

---

## 🚀 Deployment

The website is deployed and live at **[www.whatwasidoing.dev](https://www.whatwasidoing.dev)**

### Build for Production

```bash
bun run build
```

The optimized production build will be generated in the `dist/` directory with:
- Minified JavaScript and CSS
- Optimized images and assets
- Code splitting for faster loads
- Service worker for offline support

### Deploy Platforms

This project can be deployed to:

**Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Netlify**
1. Connect your GitHub repository
2. Build command: `bun run build`
3. Publish directory: `dist`
4. Deploy!

**Other Platforms**
- GitHub Pages
- Cloudflare Pages
- AWS Amplify
- Firebase Hosting

---

## 🔗 Related Links

### Extension
- 💻 [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing) - Install the extension
- 📦 [Extension Repository](https://github.com/vansh-121/What-Was-I-Doing-Extension) - Source code
- 🐛 [Report Bug](https://github.com/vansh-121/What-Was-I-Doing-Extension/issues) - Issue tracker
- ✨ [Request Feature](https://github.com/vansh-121/What-Was-I-Doing-Extension/issues/new) - Feature requests

### Website
- 🌐 [Live Website](https://www.whatwasidoing.dev) - Official website
- 📄 [Website Repository](https://github.com/vansh-121/WWID-Website) - This repository

---

## 🤝 Contributing

Contributions to improve the website are welcome! Here's how you can help:

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Add new features or fix bugs
   - Update documentation as needed
   - Follow the existing code style

4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Link any related issues

### Areas for Contribution
- 🎨 UI/UX improvements
- 📝 Documentation updates
- 🐛 Bug fixes
- ✨ New features or sections
- 🌍 Internationalization (i18n)
- ♿ Accessibility improvements

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Vansh Sethi**

- 🌐 Website: [whatwasidoing.dev](https://www.whatwasidoing.dev)
- 💼 GitHub: [@vansh-121](https://github.com/vansh-121)
- 📧 Email: vansh.sethi98760@gmail.com
- 💻 VS Code: [Extension Profile](https://marketplace.visualstudio.com/publishers/VanshSethi)

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vite](https://vitejs.dev/) - Build tool

---

<div align="center">

### 💖 Made with passion for developers who value productivity

**If you find this project helpful, please consider:**

⭐ **[Starring the repo](https://github.com/vansh-121/WWID-Website)**

📦 **[Installing the extension](https://marketplace.visualstudio.com/items?itemName=VanshSethi.what-was-i-doing)**

🌐 **[Visiting the website](https://www.whatwasidoing.dev)**

---

© 2026 Vansh Sethi. All rights reserved.

</div>
