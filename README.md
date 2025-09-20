# Anamika Raj - MERN Stack Developer Portfolio

A modern, sleek portfolio website built with React, showcasing projects and skills with a professional black theme design.

## 🚀 Features

- **Modern Design**: Clean black theme with green accent colors
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Projects**: Dynamic filtering by Full Stack, Frontend, and Backend categories
- **Professional Typography**: Space Grotesk and JetBrains Mono fonts
- **Smooth Animations**: Hover effects and transitions throughout
- **Contact Form**: Professional contact section with form handling
- **Code Showcase**: Interactive code block visual in hero section

## 🛠️ Built With

- **React** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons
- **Space Grotesk & JetBrains Mono** - Professional typography

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd anamika-raj-portfolio
```

2. Navigate to frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
yarn install
```

4. Start the development server:
```bash
yarn start
```

5. Open your browser and visit `http://localhost:3000`

## 🏗️ Build for Production

To create a production build:

```bash
yarn build
```

The build folder will be ready to deploy to any static hosting service.

## 🚀 Deployment Options

This portfolio can be easily deployed to:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Deploy with Firebase CLI
- **AWS S3**: Upload to S3 bucket with static hosting

### Netlify Deployment
1. Run `yarn build`
2. Drag the `build` folder to Netlify
3. Your site is live!

### Vercel Deployment
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/          # Shadcn UI components
│   │   ├── Hero.jsx     # Hero section
│   │   ├── Projects.jsx # Projects showcase
│   │   ├── Footer.jsx   # Contact section
│   │   └── Portfolio.jsx # Main component
│   ├── data/
│   │   └── mockData.js  # Project data
│   ├── styles/
│   │   └── portfolio.css # Custom styles
│   ├── hooks/
│   └── lib/
├── package.json
└── README.md
```

## 🎨 Customization

### Updating Personal Information
Edit the personal details in:
- `src/components/Hero.jsx` - Name, bio, skills
- `src/components/Footer.jsx` - Contact information
- `src/data/mockData.js` - Project information

### Adding New Projects
Add new projects to `src/data/mockData.js`:

```javascript
{
  id: 7,
  title: "Your Project Name",
  category: "Full Stack", // or "Frontend" or "Backend"
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  features: [
    "Feature 1",
    "Feature 2"
  ],
  github: "https://github.com/yourusername/project",
  demo: "https://yourproject.com"
}
```

### Styling Changes
- Colors: Update CSS variables in `src/styles/portfolio.css`
- Fonts: Change font imports in `src/App.css`
- Components: Modify component styles in respective files

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **Email**: anamikaraj038@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ by Anamika Raj
