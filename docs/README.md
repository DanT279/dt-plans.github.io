# DT-Plans Professional Portfolio 🚀

A modern, responsive portfolio website for construction drafting professionals with **dynamic project management** and **local image support**.

## ✨ Features

- **🎯 Dynamic Project Management** - Add projects via JSON without code editing
- **🖼️ Local Image Support** - Store images offline with organized folder structure
- **📱 Responsive Design** - Mobile, tablet, and desktop optimized
- **🌐 Bilingual Support** - French/English language switching
- **🖱️ Interactive Gallery** - Click-to-expand project modals
- **🎨 Modern UI** - Dark theme with ghosting effects and smooth animations
- **📱 PWA Ready** - Progressive Web App capabilities
- **📁 Project Organization** - Subfolder system for multiple projects

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

### Managing Local Images

**Option 1: Project Subfolders (Recommended)**
```
assets/images/
├── project1-house/
│   ├── main.jpg
│   ├── gallery-1.jpg
│   └── gallery-2.jpg
├── project2-office/
│   ├── main.jpg
│   └── gallery-1.jpg
```

**Option 2: Flat Structure**
```
assets/images/
├── project1-house-main.jpg
├── project1-house-gallery-1.jpg
├── project2-office-main.jpg
└── project2-office-gallery-1.jpg
```

**JSON Paths:**
```json
{
  "image": "assets/images/project1-house/main.jpg",
  "gallery": [
    "assets/images/project1-house/gallery-1.jpg",
    "assets/images/project1-house/gallery-2.jpg"
  ]
}
```

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
├── add-project.html        # Project adder tool (NEW!)
├── data/
│   └── projects.json       # Project data (EDIT THIS!)
├── assets/
│   └── images/             # Project images folder
│       ├── project1-house/ # Project subfolders
│       ├── project2-office/
│       └── README.md       # Image organization guide
├── css/
│   └── styles.css         # Main styles (responsive)
├── js/
│   ├── script.js          # Main JavaScript (dynamic loader)
│   └── responsive.js      # Responsive utilities
├── logo.svg              # Your logo
├── manifest.json         # PWA manifest
├── PROJECT_MANAGEMENT.md  # Dynamic project guide
├── LOCAL_IMAGES_GUIDE.md  # Local image setup guide
├── MULTIPLE_PROJECTS_GUIDE.md # Organization guide
└── Documentation files    # Comprehensive guides
```

## 🎨 Customization

### Adding Your Content
- **Logo**: Replace `logo.svg` with your logo
- **Projects**: Use `add-project.html` or edit `data/projects.json` directly
- **Images**: Add to `assets/images/` folder with organized subfolders
- **About/Skills/Contact**: Edit the modals in `index.html`

### Project Data Format
Each project requires these fields:

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier (number) |
| `title` | Yes | Project title in English |
| `titleFr` | Yes | Project title in French |
| `category` | Yes | Category in English |
| `categoryFr` | Yes | Category in French |
| `image` | Yes | Main image path or URL |
| `description` | Yes | Detailed description in English |
| `descriptionFr` | Yes | Detailed description in French |
| `gallery` | Yes | Array of gallery image paths/URLs |
| `link` | No | Optional project link |

### Styling
- **Colors**: Edit CSS custom properties in `css/styles.css`
- **Typography**: Change fonts in the HTML head section
- **Layout**: Modify grid and flexbox properties

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet Portrait**: 768px - 1023px
- **Tablet Landscape**: 1024px - 1199px
- **Desktop**: 1200px+

## 📚 Documentation

- **`PROJECT_MANAGEMENT.md`** - Complete guide to dynamic project management
- **`LOCAL_IMAGES_GUIDE.md`** - How to set up and use local images
- **`MULTIPLE_PROJECTS_GUIDE.md`** - Organizing multiple projects
- **`CHANGELOG.md`** - Development history and changes
- **`CONVERSATION_SUMMARY.md`** - Project overview and technical details

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
- Verify images exist in `assets/images/` folder
- Use correct relative paths (e.g., `assets/images/project1/main.jpg`)
- Ensure folder structure matches JSON paths
- Check file permissions and formats (JPG, PNG, etc.)

## 📞 Support

For questions or issues:
1. Check the browser console for errors
2. Verify JSON syntax is valid
3. Test on different devices and browsers

---

**Happy Building!** 🏗️✨
