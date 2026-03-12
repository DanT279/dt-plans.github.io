# Local Images Setup Guide

## 📁 **Step-by-Step Process**

### **1. Add Your Images to the Folder**
Place your project images in the `assets/images/` folder:

```
assets/images/
├── residential-house-main.jpg
├── residential-house-gallery-1.jpg
├── residential-house-gallery-2.jpg
├── commercial-building-main.jpg
├── commercial-building-gallery-1.jpg
└── steel-detailing-main.jpg
```

### **2. Use Relative Paths in JSON**

In your `data/projects.json`, use paths like this:

```json
{
  "id": 1,
  "title": "Residential House Plans",
  "titleFr": "Plans de Maison Résidentielle",
  "category": "Architectural Drafting",
  "categoryFr": "Dessin Architectural",
  "image": "assets/images/residential-house-main.jpg",
  "description": "Your project description...",
  "descriptionFr": "Votre description de projet...",
  "gallery": [
    "assets/images/residential-house-gallery-1.jpg",
    "assets/images/residential-house-gallery-2.jpg",
    "assets/images/residential-house-gallery-3.jpg"
  ],
  "link": "https://example.com/project"
}
```

### **3. Using the Project Adder Tool**

When using `add-project.html`:

**Main Image Path:**
```
assets/images/my-project-main.jpg
```

**Gallery Images:**
```
assets/images/my-project-gallery-1.jpg
assets/images/my-project-gallery-2.jpg
assets/images/my-project-gallery-3.jpg
```

## 🎯 **Important Notes**

### **File Structure Must Match**
- Your folder structure: `assets/images/filename.jpg`
- Your JSON paths: `assets/images/filename.jpg`
- **Must be exactly the same!**

### **Image Formats Supported**
- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`
- `.svg`

### **Naming Convention**
Use descriptive names:
- `project-name-main.jpg` (main image)
- `project-name-gallery-1.jpg` (gallery images)
- `project-name-detail.jpg` (detail shots)

## 🔧 **Testing Your Setup**

1. **Add an image** to `assets/images/` folder
2. **Update your JSON** with the correct path
3. **Open `index.html`** in your browser
4. **Check if the image loads**

## 🚨 **Common Issues**

### **Image Not Showing?**
- Check the file path is correct
- Make sure the image file exists
- Check file permissions
- Verify the image format is supported

### **Path Examples**
✅ **Correct:**
```
assets/images/house-main.jpg
```

❌ **Wrong:**
```
/assets/images/house-main.jpg  (extra slash)
assets\\images\\house-main.jpg   (backslashes)
images/house-main.jpg          (missing assets/)
```

## 📝 **Quick Example**

Let's say you have a project called "Modern Office Building":

1. **Add images to folder:**
   ```
   assets/images/office-main.jpg
   assets/images/office-gallery-1.jpg
   assets/images/office-gallery-2.jpg
   ```

2. **Use in JSON:**
   ```json
   "image": "assets/images/office-main.jpg",
   "gallery": [
     "assets/images/office-gallery-1.jpg",
     "assets/images/office-gallery-2.jpg"
   ]
   ```

That's it! Your local images will work perfectly with this setup.

