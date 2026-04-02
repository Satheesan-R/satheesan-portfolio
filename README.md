# Rajasekar Portfolio - Professional Portfolio Website

A modern, responsive, and interactive portfolio website showcasing projects, skills, and professional experience built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Hero Section**: Eye-catching landing area with profile photo and professional introduction
- **About Section**: Detailed background and professional narrative
- **Skills Showcase**: Organized by categories (Languages, Frontend, Backend, Databases, Tools) with visual representations
- **Projects Gallery**: Featured projects with images, descriptions, and GitHub links
- **All Projects Page**: Dedicated page displaying comprehensive project portfolio (8+ projects)
- **Contact Form**: Functional email contact form integrated with EmailJS for direct messaging
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations for scroll effects and transitions
- **Dark Mode Ready**: Modern UI with customizable theme variables

## 🛠 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **Component Library**: shadcn/ui
- **Animation**: Framer Motion 11
- **Routing**: React Router DOM 6.30.1
- **Email Service**: EmailJS for contact form
- **Icons**: Lucide React
- **Package Manager**: npm / bun

## 📋 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form with EmailJS
│   ├── Experience.tsx     # Experience section
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero/landing section
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx       # Featured projects showcase
│   ├── Skills.tsx         # Skills section by category
│   └── ui/                # shadcn/ui components
├── pages/
│   ├── Index.tsx          # Home page
│   ├── AllProjects.tsx    # All projects dedicated page
│   └── NotFound.tsx       # 404 page
├── hooks/
│   ├── use-mobile.tsx     # Mobile detection hook
│   └── use-toast.ts       # Toast notifications
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main app component with routing
└── main.tsx               # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ or Bun
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Satheesan-R/rajasekar-portfolio-pro.git
cd rajasekar-portfolio-pro
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Create `.env` file with EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start development server:
```bash
npm run dev
# or
bun run dev
```

5. Visit `http://localhost:5173` in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm test` - Run tests (Vitest)
- `npm run type-check` - Run TypeScript type checking

## 🎨 Key Components

### Hero Section
- Circular profile photo on left side
- Professional heading and introduction
- Call-to-action button
- Gradient background

### Projects Section
- Featured projects with images
- Tech stack tags
- GitHub links
- "See All My Projects" button linking to dedicated page

### All Projects Page
- 8+ project showcases
- Project images and descriptions
- Technology stack for each project
- Direct GitHub repository links
- Responsive grid layout

### Contact Form
- Name, email, and message input fields
- Real-time validation
- EmailJS integration for email delivery
- Success/error feedback
- Timestamp included in messages

## 🌐 Sections

1. **Hero** - Landing section with profile introduction
2. **About** - Professional background and experience
3. **Skills** - Categorized technical skills with visuals
4. **Projects** - Featured projects showcase
5. **All Projects** - Comprehensive project portfolio (separate page route `/all-projects`)
6. **Contact** - Email contact form

## 🔧 Configuration

### Tailwind CSS
Customize theme in `tailwind.config.ts`:
- Primary color: HSL 175° 80% 45%
- Accent color: HSL 175° 80% 45%
- Secondary color: HSL 220° 20% 14%

### Fonts
- **Heading Font**: Space Grotesk
- **Body Font**: DM Sans

## 📦 Environment Variables

Required for email functionality:
- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key

## 🚢 Deployment

The project is ready to deploy on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build and deploy:
```bash
npm run build
```

The `dist` folder contains the production-ready build.

## 📱 Responsive Breakpoints

- Mobile: 0px (default)
- Tablet: 768px (md)
- Desktop: 1024px (lg)
- Large Desktop: 1280px (xl)

## 🔗 Links

- **GitHub**: [Satheesan-R](https://github.com/Satheesan-R)
- **Portfolio**: [Live Link](https://rajasekar-portfolio-pro.vercel.app)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rajasekar** - Full Stack Developer

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
