# DT-Plans Portfolio Template 🚀

A professional, responsive portfolio template optimized for construction drafting professionals.

## ✨ Features

- **Dark Theme** - Professional anthracite gray with ghosting effects
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Interactive Gallery** - Click-to-expand project modals with image galleries
- **Bilingual Support** - French/English language switching
- **Modern UI** - Clean, professional design with smooth animations
- **PWA Ready** - Progressive Web App capabilities
- **Cross-Platform** - Works on all devices and screen sizes

## 🚀 Quick Start

### 1. Customize Your Content

#### Update `index.html`:
- Replace "DT-Plans" with your name/company
- Update contact information in the Contact modal
- Modify the About section with your background
- Update Skills section with your expertise

#### Update `js/script.js`:
- Replace `portfolioData` array with your projects
- Update project descriptions and images
- Modify contact information

#### Update `css/styles.css`:
- Change color scheme if desired
- Adjust typography (fonts are already optimized)
- Modify spacing and layout as needed

### 2. Add Your Assets

#### Images:
- Place project images in `assets/images/`
- Add your logo as `logo.svg` in the root directory
- Update image paths in `portfolioData`

#### Favicon:
- Replace favicon files with your own
- Update `manifest.json` with your app details

### 3. Deploy

#### GitHub Pages:
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

#### Other Hosting:
- Upload all files to your web server
- Ensure all file paths are correct

## 📁 File Structure

```
template/
├── index.html              # Main HTML file
├── manifest.json           # PWA manifest
├── logo.svg               # Your logo (replace this)
├── favicon.ico            # Favicon
├── apple-touch-icon.png   # Apple touch icon
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── css/
│   ├── styles.css         # Main styles
│   ├── mobile.css         # Mobile-specific styles
│   └── tablet.css         # Tablet-specific styles
├── js/
│   ├── script.js          # Main JavaScript
│   └── responsive.js      # Responsive utilities
└── assets/
    └── images/            # Project images
```

## 🎨 Customization Guide

### Colors
- Primary background: `#1a1a1a`
- Text: `#f5f5f5`
- Accent: `#d4d4d4`
- Header: `rgba(245, 245, 245, 0.9)`

### Typography
- Headings: Space Grotesk
- Body text: Work Sans

### Project Data Structure
```javascript
{
    id: "unique-id",
    title: "Project Title",
    titleFr: "Titre du Projet",
    category: "Category",
    categoryFr: "Catégorie",
    image: "path/to/image.jpg",
    description: "Project description...",
    descriptionFr: "Description du projet...",
    gallery: ["image1.jpg", "image2.jpg", "image3.jpg"]
}
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet Portrait**: 768px - 1023px
- **Tablet Landscape**: 1024px - 1199px
- **Desktop**: 1200px+

## 🔧 Technical Features

- **CSS Grid** for portfolio layout
- **Flexbox** for modal content
- **CSS Custom Properties** for theming
- **Intersection Observer** for scroll effects
- **Touch gestures** for mobile gallery navigation
- **Smooth scrolling** with custom easing
- **Backdrop filters** for modern glass effects

## 🚀 Performance Optimizations

- **Lazy loading** for images
- **Throttled scroll events** for smooth performance
- **Hardware acceleration** for animations
- **Optimized touch targets** for mobile
- **Reduced motion** support for accessibility

## 📞 Support

This template is designed to be easily customizable. For questions or issues, refer to the code comments or create an issue in the repository.

---

**Happy Building!** 🏗️✨
