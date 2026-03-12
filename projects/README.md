# Portfolio projects (folder-based)

Each project is a **folder** with:

- **project.json** – title, category, description (EN/FR), image paths, gallery, link
- **images/** – your photos (e.g. `cover.jpg`, `photo2.jpg`)

## Add a new project

1. **Copy the template**  
   Duplicate the `_template` folder and rename it to a short slug (e.g. `sunroom-2024`, `house-plans-martin`). No spaces.

2. **Edit project.json**  
   Update title, titleFr, category, categoryFr, description, descriptionFr.  
   - **image**: main image, relative to this folder (e.g. `images/cover.jpg`).  
   - **gallery**: list of image paths (e.g. `["images/cover.jpg", "images/photo2.jpg"]`).  
   - **link**: optional URL (or leave `""`).

3. **Add your images**  
   Put your image files inside the folder’s **images/** subfolder. Use the same filenames as in `project.json`.

4. **Register the project**  
   Open **data/projects-index.json** and add your folder name (the slug) to the array, e.g.  
   `["sunroom-2024", "house-plans-martin"]`.

5. **Push to GitHub**  
   Commit and push the new project folder and the updated `data/projects-index.json`. You do **not** edit `data/projects.json` for folder-based projects.

## Example

```
projects/
  _template/           ← copy this, don’t edit
    project.json
    images/
  sunroom-2024/        ← your new project
    project.json       ← your text and image list
    images/
      cover.jpg
      photo2.jpg
```

In **data/projects-index.json**: `["sunroom-2024"]` (and any other slugs).
