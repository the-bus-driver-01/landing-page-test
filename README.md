# Portfolio Monorepo

A modern, professional portfolio website built with TypeScript, Vite, and best practices for web development. This project demonstrates a well-organized monorepo structure with testing, type safety, and professional deployment setup.

## 🚀 Features

- **Monorepo Structure**: Unified workspace management with pnpm workspaces
- **TypeScript**: Fully typed codebase for better development experience and type safety
- **Vite**: Lightning-fast build tool and development server
- **Testing**: Comprehensive test suite with Vitest
- **Responsive Design**: Mobile-first approach with modern CSS
- **Professional Layout**: Clean, modern portfolio design with multiple sections
- **Accessible**: Built with accessibility best practices (ARIA labels, semantic HTML)

## 📋 Project Structure

```
.
├── index.html                 # Main landing page
├── apps/
│   └── web/
│       └── src/
│           └── index.html     # Portfolio page
├── package.json
├── tsconfig.json
├── vitest.config.ts
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-monorepo.git
   cd portfolio-monorepo
   ```

2. **Install dependencies** (using pnpm):
   ```bash
   pnpm install
   ```

3. **Customize with your information** (see [CUSTOMIZATION.md](./CUSTOMIZATION.md)):
   - Update personal information in `apps/web/src/index.html`
   - Update GitHub repository link in `index.html`
   - Add your social media links

4. **Run the development server**:
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:5173`

5. **Run tests**:
   ```bash
   pnpm test
   ```

6. **Build for production**:
   ```bash
   pnpm build
   ```

## 🎨 Customization

### Important: Placeholder Values

This project contains placeholder values that **must be customized** before deployment:

- **GitHub username**: Replace `username` with your actual GitHub username
- **LinkedIn username**: Replace `username` with your actual LinkedIn username
- **Email address**: Replace `your.email@example.com` with your actual email
- **Repository URL**: Replace the generic GitHub link with your actual repository URL

For detailed customization instructions, please see [CUSTOMIZATION.md](./CUSTOMIZATION.md).

## 🔄 Peer Feedback Implementation

This project incorporates feedback from code review. See [FEEDBACK.md](./FEEDBACK.md) for details on which peer suggestions were implemented and how they shaped the design decisions.

Key improvements based on feedback:
- Enhanced documentation for setup and customization
- Clear placeholder indicators with replacement instructions
- Responsive design improvements for mobile devices
- Better code organization and structure

## 📝 Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Testing
pnpm test         # Run all tests
pnpm test:ui      # Run tests with UI

# Building
pnpm build        # Build for production
pnpm preview      # Preview production build locally

# Linting
pnpm lint         # Run linting checks
```

## 🌐 Deployment

### Option 1: GitHub Pages
1. Enable GitHub Pages in your repository settings
2. Set the source to your build directory
3. Push to the `gh-pages` branch

### Option 2: Other Platforms
Deploy the `dist` folder to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

## 🏗️ Architecture Decisions

### Why Monorepo?
- Unified dependency management
- Shared build configuration
- Easier code reuse across projects
- Simplified deployment workflow

### Why TypeScript?
- Catch errors early with type safety
- Better IDE support and autocomplete
- Improved code documentation
- Enhanced developer experience

### Why Vite?
- Extremely fast development server (instant hot module replacement)
- Optimized production builds
- Minimal configuration required
- Modern ES module based approach

## 🧪 Testing

The project uses Vitest for unit and integration testing:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with UI
pnpm test:ui
```

Example test file: `index.test.ts`

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [pnpm Workspaces](https://pnpm.io/workspaces)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ❓ Questions?

If you have questions about setting up or customizing this portfolio, please refer to [CUSTOMIZATION.md](./CUSTOMIZATION.md) or open an issue on GitHub.

---

**Last Updated**: March 2026
Built with TypeScript, Vite, and modern web standards.
