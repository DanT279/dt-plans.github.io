# DT-Plans Professional Portfolio 🚀

A modern, responsive portfolio website for construction drafting professionals with dynamic project management.

## ✨ Features

- **Dynamic Project Management** - Add projects via JSON without code editing
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Bilingual Support** - French/English language switching
- **Interactive Gallery** - Click-to-expand project modals
- **Modern UI** - Dark theme with ghosting effects and smooth animations
- **PWA Ready** - Progressive Web App capabilities

## 🚀 Quick Start

### Adding New Projects

**Method 1: Use the Project Adder Tool (Recommended)**
1. Open `add-project.html` in your browser
2. Fill out the form with your project details
3. Click "Generate JSON"
4. Copy the generated JSON and add it to `data/projects.json`

**Method 2: Edit JSON Directly**
1. Open `data/projects.json`
2. Add new project objects to the "projects" array
3. Follow the existing format

### Testing Locally

```bash
# If you have Python installed
python -m http.server 8000

# Or use any local server
npx serve .
```

Then visit `http://localhost:8000`

## 📁 File Structure

```
├── index.html              # Main portfolio page
├── add-project.html        # Project adder tool
├── data/
│   └── projects.json       # Project data (EDIT THIS)
├── css/
│   ├── styles.css         # Main styles
│   ├── mobile.css         # Mobile responsive
│   └── tablet.css         # Tablet responsive
├── js/
│   ├── script.js          # Main JavaScript (dynamic loader)
│   └── responsive.js      # Responsive utilities
├── assets/
│   └── images/            # Project images
├── logo.svg              # Your logo
├── manifest.json         # PWA manifest
└── favicon files         # App icons
```

## 🎨 Customization

### Adding Your Content
- **Logo**: Replace `logo.svg` with your logo
- **Images**: Add project images to `assets/images/`
- **Projects**: Use `add-project.html` or edit `data/projects.json`
- **About/Skills/Contact**: Edit the modals in `index.html`

### Styling
- **Colors**: Edit CSS custom properties in `css/styles.css`
- **Typography**: Change fonts in the HTML head section
- **Layout**: Modify grid and flexbox properties

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet Portrait**: 768px - 1023px
- **Tablet Landscape**: 1024px - 1199px
- **Desktop**: 1200px+

## 🚀 Deployment

### GitHub Pages
1. Create a new repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io/repository-name`

### Other Hosting
- Upload all files to your web server
- Ensure all file paths are correct
- Test all functionality

## 🛠️ Troubleshooting

### Projects Not Showing?
- Check browser console for errors
- Verify JSON syntax in `data/projects.json`
- Ensure image paths are correct

### Images Not Loading?
- Check file paths in JSON
- Verify images exist in `assets/images/`
- Use relative paths (e.g., `assets/images/image.jpg`)

## 📞 Support

For questions or issues:
1. Check the browser console for errors
2. Verify JSON syntax is valid
3. Test on different devices and browsers

---

**Happy Building!** 🏗️✨
