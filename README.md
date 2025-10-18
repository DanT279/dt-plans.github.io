# Forty - Enhanced HTML5 UP Template

A modern, responsive site template built on the original HTML5 UP Forty design with enhanced functionality and accessibility features.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Modern CSS**: SCSS-based styling with organized component structure
- **Interactive Elements**: Smooth animations and transitions
- **Image Tiles**: Dynamic grid layout with hover effects
- **Contact Forms**: Enhanced with validation and accessibility features
- **Accessibility**: WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
- **Modern JavaScript**: ES6+ features with enhanced user interactions
- **Form Validation**: Real-time validation with user-friendly error messages
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 📁 Project Structure

```
forty-template/
├── assets/
│   ├── css/
│   │   ├── main.css          # Main stylesheet
│   │   └── noscript.css      # No-JS fallback styles
│   ├── js/
│   │   ├── main.js           # Core functionality
│   │   ├── enhanced.js       # Modern enhancements
│   │   ├── util.js           # Utility functions
│   │   └── *.min.js          # Third-party libraries
│   └── sass/
│       ├── main.scss         # Main SCSS file
│       ├── base/             # Base styles
│       ├── components/       # Component styles
│       ├── layout/           # Layout styles
│       └── libs/             # Libraries and mixins
├── images/                   # Image assets
├── *.html                    # HTML pages
└── README.md                # This file
```

## 🛠️ Setup & Usage

### Quick Start

1. **Download** the template files
2. **Open** `index.html` in your browser
3. **Start customizing** the content and styles

### Customization

#### SCSS Structure
The template uses a modular SCSS architecture:

```scss
// Main file: assets/sass/main.scss
@import 'libs/vars';           // Variables
@import 'libs/functions';      // Functions
@import 'libs/mixins';         // Mixins
@import 'base/reset';          // Reset styles
@import 'components/button';   // Button styles
@import 'layout/header';       // Header layout
// ... more imports
```

#### Key Variables
Customize colors, fonts, and spacing in `assets/sass/libs/_vars.scss`:

```scss
$color-primary: #6fc3df;
$color-secondary: #8d82c4;
$font-family: 'Source Sans Pro', sans-serif;
$breakpoint-mobile: 736px;
```

#### Adding New Pages
1. Create new HTML file based on existing templates
2. Update navigation in all HTML files
3. Add any specific styles to SCSS files

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color combinations
- **Reduced Motion**: Respects user's motion preferences
- **Skip Links**: Quick navigation to main content

## 📱 Responsive Breakpoints

```scss
xlarge: 1281px - 1680px
large:  981px - 1280px
medium: 737px - 980px
small:  481px - 736px
xsmall: 361px - 480px
xxsmall: up to 360px
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with graceful degradation)

## 📄 License

This template is licensed under the [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/).

---

**Original Design**: [HTML5 UP](https://html5up.net)  
**Enhanced Version**: 2.0.0
