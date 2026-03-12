# DT-Plans Portfolio - Dynamic Project Management

## 🎯 **Overview**

Your portfolio now supports dynamic project management! You can easily add, edit, and manage projects without touching any code.

## 📁 **Folder Structure**

```
├── index.html              # Main portfolio page
├── add-project.html        # Project adder tool (NEW!)
├── data/
│   └── projects.json       # Project data (EDIT THIS!)
├── assets/
│   └── images/             # Project images folder
│       ├── project1-house/ # Project subfolders (recommended)
│       ├── project2-office/
│       └── README.md       # Image organization guide
├── css/
│   └── styles.css         # Main styles
├── js/
│   ├── script.js          # Main functionality (now loads from JSON)
│   └── responsive.js      # Responsive utilities
├── logo.svg              # Your logo
└── manifest.json         # PWA manifest
```

## 🚀 **How to Add New Projects**

### **Method 1: Use the Project Adder Tool (Recommended)**

1. **Open the Project Adder**
   - Open `add-project.html` in your browser
   - This tool provides a user-friendly form interface

2. **Fill Out the Form**
   - Project Title (English & French)
   - Category (English & French)
   - Main Image URL
   - Description (English & French)
   - Gallery Images (add multiple URLs)
   - Project Link (optional)

3. **Generate JSON**
   - Click "Generate JSON" button
   - Copy the generated JSON code

4. **Add to Portfolio**
   - Open `data/projects.json`
   - Add the new project object to the "projects" array
   - Save the file
   - Refresh your portfolio

### **Method 2: Edit JSON Directly**

1. **Open the Data File**
   - Open `data/projects.json`
   - This contains all your project data

2. **Add New Project**
   - Add a new project object to the "projects" array
   - Follow the existing format:

```json
{
  "id": 7,
  "title": "Your Project Title",
  "titleFr": "Titre de Votre Projet",
  "category": "Your Category",
  "categoryFr": "Votre Catégorie",
  "image": "https://example.com/main-image.jpg",
  "description": "Your detailed project description...",
  "descriptionFr": "Votre description détaillée du projet...",
  "gallery": [
    "https://example.com/gallery1.jpg",
    "https://example.com/gallery2.jpg",
    "https://example.com/gallery3.jpg"
  ],
  "link": "https://example.com/project-link"
}
```

## 🖼️ **Managing Images**

### **Option 1: Use External URLs**
- Use image hosting services (Imgur, Google Drive, etc.)
- Paste URLs directly in the form or JSON

### **Option 2: Use Local Images**
- Place images in the `assets/images/` folder
- Use relative paths like `assets/images/project1.jpg`
- Make sure to upload the images when deploying

## 🔧 **Technical Details**

### **How It Works**
- The portfolio loads project data from `data/projects.json`
- No need to edit JavaScript code
- Projects are rendered dynamically
- Supports both English and French content

### **File Locations**
- **Project Data**: `data/projects.json`
- **Project Images**: `assets/images/`
- **Project Adder**: `add-project.html`

### **Error Handling**
- If JSON fails to load, an error message is displayed
- Check browser console for detailed error information
- Ensure JSON syntax is valid

## 📝 **Project Data Format**

Each project requires these fields:

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier (number) |
| `title` | Yes | Project title in English |
| `titleFr` | Yes | Project title in French |
| `category` | Yes | Category in English |
| `categoryFr` | Yes | Category in French |
| `image` | Yes | Main image URL |
| `description` | Yes | Detailed description in English |
| `descriptionFr` | Yes | Detailed description in French |
| `gallery` | Yes | Array of gallery image URLs |
| `link` | No | Optional project link |

## 🎨 **Tips for Best Results**

1. **Image URLs**: Use high-quality images (500x300px recommended)
2. **Descriptions**: Write detailed, professional descriptions
3. **Categories**: Use consistent category names
4. **Gallery**: Add 3-15 images per project for best visual impact
5. **Testing**: Always test locally before deploying

## 🚨 **Troubleshooting**

### **Portfolio Not Loading**
- Check if `data/projects.json` exists
- Validate JSON syntax
- Check browser console for errors

### **Images Not Showing**
- Verify image URLs are accessible
- Check if URLs are properly formatted
- Test URLs in browser

### **Project Adder Not Working**
- Ensure you're running from a web server (not file://)
- Check browser console for JavaScript errors
- Try refreshing the page

## 🔄 **Workflow**

1. **Add New Project**: Use `add-project.html` or edit JSON directly
2. **Test Locally**: Open `index.html` in browser to test
3. **Deploy**: Upload all files to your web server
4. **Update**: Repeat process for new projects

---

**Need Help?** Check the browser console for error messages or refer to the original documentation.

