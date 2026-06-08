const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, '../catalog.html');

if (process.argv.length < 4) {
    console.error("Usage: node add_product.js <category> <image_filename>");
    process.exit(1);
}

const category = process.argv[2];
const imageFilename = process.argv[3];
const filePath = `images/catalog/products/${imageFilename}`;

const isVideo = ['.mp4', '.webm', '.ogg'].includes(path.extname(imageFilename).toLowerCase());
const title = category.charAt(0).toUpperCase() + category.slice(1) + " Product";

let mediaTag = `<img src="${filePath}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">`;
if (isVideo) {
    mediaTag = `<video src="${filePath}" autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></video>`;
}

const itemHtml = `
            <div class="catalog-item group bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all" data-category="${category}">
                <div class="aspect-square overflow-hidden relative bg-surface-variant">
                    ${mediaTag}
                    <span class="absolute top-3 left-3 bg-primary-container text-on-primary-container text-xs font-bold px-3 py-1 rounded-full shadow-sm capitalize">${category}</span>
                </div>
                <div class="p-6">
                    <h3 class="font-headline-sm text-on-surface mb-2">${title}</h3>
                    <p class="text-sm text-on-surface-variant mb-4">High quality furnishing from our collection.</p>
                    <a href="https://wa.me/919860434182" class="w-full inline-flex items-center justify-center gap-2 border border-outline px-4 py-2 rounded-lg text-primary hover:bg-primary-container font-label-md transition-all"><span class="material-symbols-outlined text-[18px]">chat</span> Inquire</a>
                </div>
            </div>
`;

let content = fs.readFileSync(htmlFile, 'utf8');

const gridStartTag = 'id="catalog-grid">';
const gridStart = content.indexOf(gridStartTag) + gridStartTag.length;

if (gridStart === -1 + gridStartTag.length) {
    console.error("Could not find catalog-grid");
    process.exit(1);
}

const updatedContent = content.slice(0, gridStart) + itemHtml + content.slice(gridStart);

fs.writeFileSync(htmlFile, updatedContent, 'utf8');
console.log(`Successfully added ${imageFilename} to ${category} category.`);
