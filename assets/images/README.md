# Project Images Folder

This folder is for storing your project images locally.

## How to Use

1. **Add Images**: Place your project images in this folder
2. **Naming Convention**: Use descriptive names like:
   - `residential-house-main.jpg`
   - `commercial-building-gallery-1.jpg`
   - `steel-detailing-detail.jpg`

3. **Reference in JSON**: Use relative paths in your `data/projects.json`:
   ```json
   "image": "assets/images/residential-house-main.jpg",
   "gallery": [
     "assets/images/residential-house-gallery-1.jpg",
     "assets/images/residential-house-gallery-2.jpg"
   ]
   ```

## Image Guidelines

- **Main Images**: 500x300px recommended
- **Gallery Images**: 800x600px or higher for best quality
- **Formats**: JPG, PNG, or WebP
- **File Size**: Keep under 2MB per image for fast loading

## Example Structure

```
assets/images/
├── project1-main.jpg
├── project1-gallery-1.jpg
├── project1-gallery-2.jpg
├── project2-main.jpg
├── project2-gallery-1.jpg
└── project2-gallery-2.jpg
```

## Alternative: External URLs

You can also use external image URLs instead of local files:
- Imgur, Google Drive, Dropbox, etc.
- Just paste the direct image URL in your JSON
- No need to upload files to this folder

