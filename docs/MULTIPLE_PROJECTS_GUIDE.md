# Multiple Projects Organization Guide

## 🎯 **Recommended Approach: Project Subfolders**

### **Why Subfolders Are Best:**
- ✅ **Clean Organization** - Each project has its own space
- ✅ **Easy Management** - Find images quickly
- ✅ **Scalable** - Works with 5 or 50 projects
- ✅ **Professional** - Industry standard approach
- ✅ **No Conflicts** - No duplicate filenames

## 📁 **Folder Structure Examples**

### **Option 1: Project-Based Subfolders (Recommended)**
```
assets/images/
├── project1-house/
│   ├── main.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   └── detail.jpg
├── project2-office/
│   ├── main.jpg
│   ├── gallery-1.jpg
│   └── gallery-2.jpg
├── project3-warehouse/
│   ├── main.jpg
│   └── gallery-1.jpg
└── project4-apartment/
    ├── main.jpg
    ├── gallery-1.jpg
    └── gallery-2.jpg
```

### **Option 2: Category-Based Subfolders**
```
assets/images/
├── residential/
│   ├── house-project-main.jpg
│   ├── house-project-gallery-1.jpg
│   ├── condo-project-main.jpg
│   └── condo-project-gallery-1.jpg
├── commercial/
│   ├── office-building-main.jpg
│   ├── office-building-gallery-1.jpg
│   ├── retail-space-main.jpg
│   └── retail-space-gallery-1.jpg
└── industrial/
    ├── warehouse-main.jpg
    ├── warehouse-gallery-1.jpg
    ├── factory-main.jpg
    └── factory-gallery-1.jpg
```

## 🔧 **How to Set Up New Projects**

### **Step 1: Create Project Folder**
```bash
# Create folder for new project
mkdir assets/images/project5-apartment
```

### **Step 2: Add Images**
Place your images in the new folder:
```
assets/images/project5-apartment/
├── main.jpg          ← Main project image
├── gallery-1.jpg     ← Gallery image 1
├── gallery-2.jpg     ← Gallery image 2
├── gallery-3.jpg     ← Gallery image 3
└── detail.jpg        ← Detail shot (optional)
```

### **Step 3: Update JSON**
In your `data/projects.json`:
```json
{
  "id": 9,
  "title": "Apartment Complex",
  "titleFr": "Complexe d'Appartements",
  "category": "Multi-Family Housing",
  "categoryFr": "Logement Multi-Familial",
  "image": "assets/images/project5-apartment/main.jpg",
  "description": "Your project description...",
  "descriptionFr": "Votre description de projet...",
  "gallery": [
    "assets/images/project5-apartment/gallery-1.jpg",
    "assets/images/project5-apartment/gallery-2.jpg",
    "assets/images/project5-apartment/gallery-3.jpg"
  ],
  "link": "https://example.com/apartment-project"
}
```

### **Step 4: Using Project Adder Tool**
When using `add-project.html`:

**Main Image Path:**
```
assets/images/project5-apartment/main.jpg
```

**Gallery Images:**
```
assets/images/project5-apartment/gallery-1.jpg
assets/images/project5-apartment/gallery-2.jpg
assets/images/project5-apartment/gallery-3.jpg
```

## 📝 **Naming Conventions**

### **Folder Names:**
- `project1-house` - Simple and descriptive
- `project2-office-building` - More specific
- `project3-warehouse-industrial` - Very specific
- `project4-apartment-complex` - Clear project type

### **Image Names:**
- `main.jpg` - Main project image
- `gallery-1.jpg` - First gallery image
- `gallery-2.jpg` - Second gallery image
- `detail.jpg` - Detail shot
- `floor-plan.jpg` - Floor plan image
- `exterior.jpg` - Exterior view
- `interior.jpg` - Interior view

## 🚀 **Workflow for Adding New Projects**

### **Method 1: Manual Setup**
1. **Create folder:** `mkdir assets/images/project6-name`
2. **Add images** to the folder
3. **Edit JSON** with correct paths
4. **Test** by opening `index.html`

### **Method 2: Using Project Adder**
1. **Create folder** and add images first
2. **Open** `add-project.html`
3. **Fill form** with folder paths
4. **Generate JSON** and add to `projects.json`

## 🎨 **Best Practices**

### **Image Organization:**
- **Consistent naming** across all projects
- **Logical folder structure** that makes sense
- **Descriptive folder names** that identify the project
- **Standard image names** (main.jpg, gallery-1.jpg, etc.)

### **File Management:**
- **Keep images optimized** (under 2MB each)
- **Use consistent formats** (JPG for photos, PNG for graphics)
- **Maintain aspect ratios** for consistency
- **Backup your images** regularly

## 🔍 **Current Example Structure**

Your current setup:
```
assets/images/
├── project1-house/
│   ├── main.jpg
│   └── gallery-1.jpg
├── project2-office/
│   └── main.jpg
├── sample-project-main.jpg
├── sample-project-gallery-1.jpg
└── sample-project-gallery-2.jpg
```

## 💡 **Pro Tips**

1. **Start Simple:** Use project-based subfolders
2. **Be Consistent:** Same naming pattern for all projects
3. **Plan Ahead:** Think about how many projects you'll have
4. **Keep It Clean:** Remove unused images regularly
5. **Document:** Keep a list of your projects and their folders

This organization system will scale beautifully as you add more projects!

