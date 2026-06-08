const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../images/uploads');
const targetDir = path.join(__dirname, '../images/catalog/products');

if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
}

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

if (process.argv.length < 3) {
    console.error("Usage: node import_images.js <category>");
    process.exit(1);
}

const category = process.argv[2].toLowerCase();

const files = fs.readdirSync(sourceDir);
if (files.length === 0) {
    console.log("No images found in images/uploads/ to import.");
    process.exit(0);
}

// Find next available number for this category
const existingFiles = fs.readdirSync(targetDir);
let maxNum = 0;

for (const file of existingFiles) {
    if (file.toLowerCase().startsWith(category)) {
        const match = file.match(/\d+/);
        if (match) {
            const num = parseInt(match[0], 10);
            if (num > maxNum) {
                maxNum = num;
            }
        }
    }
}

let nextNum = maxNum + 1;

for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpeg', '.jpg', '.png', '.mp4', '.webm', '.ogg'].includes(ext)) {
        continue;
    }

    const newFilename = `${category.charAt(0).toUpperCase() + category.slice(1)}${nextNum}${ext}`;
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, newFilename);

    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Imported ${file} as ${newFilename}`);
    
    // Optionally delete original
    // fs.unlinkSync(sourcePath);

    nextNum++;
}

console.log("Import complete. Run 'node scripts/build_catalog.js' to update the catalog HTML.");
