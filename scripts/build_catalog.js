const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, '../catalog.html');
const productsDir = path.join(__dirname, '../images/catalog/products');

let content = fs.readFileSync(htmlFile, 'utf8');

const gridStartTag = 'id="catalog-grid">';
const gridStart = content.indexOf(gridStartTag) + gridStartTag.length;
const gridEndTag = '</section>';
const gridEndSection = content.indexOf(gridEndTag, gridStart);
const gridEnd = content.lastIndexOf('</div>', content.lastIndexOf('</div>', gridEndSection) - 1);

if (gridStart === -1 + gridStartTag.length || gridEnd === -1) {
    console.error("Could not find catalog-grid in catalog.html");
    process.exit(1);
}

const categoryMap = {
    'curtain': 'curtain',
    'pillow': 'pillow',
    'pilllow': 'pillow',
    'matresess': 'mattresses',
    'carpet': 'carpet',
    'bedsheet': 'bedsheet',
    'wallpaper': 'wallpaper',
    'blanket': 'blanket',
    'cushions': 'cushions',
    'backrest': 'backrest'
};

let itemsHtml = "\n";

// Get all files and sort them
let files = fs.readdirSync(productsDir).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpeg', '.jpg', '.png', '.mp4', '.webm', '.ogg'].includes(ext);
});

files.sort();

for (const fileName of files) {
    const lowerName = fileName.toLowerCase();
    if (lowerName.startsWith('shop') || lowerName.startsWith('whatsapp')) {
        continue;
    }

    let dataCategory = null;
    for (const [key, val] of Object.entries(categoryMap)) {
        if (lowerName.startsWith(key)) {
            dataCategory = val;
            break;
        }
    }

    if (!dataCategory) {
        console.log(`Skipping unknown category for file: ${fileName}`);
        continue;
    }

    const filePath = `images/catalog/products/${fileName}`;
    const isVideo = ['.mp4', '.webm', '.ogg'].includes(path.extname(fileName).toLowerCase());
    const title = dataCategory.charAt(0).toUpperCase() + dataCategory.slice(1) + " Product";
    
    let mediaTag = `<img src="${filePath}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">`;
    if (isVideo) {
        mediaTag = `<video src="${filePath}" autoplay loop muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></video>`;
    }

    const itemHtml = `
            <div class="catalog-item group bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all" data-category="${dataCategory}">
                <div class="aspect-square overflow-hidden relative bg-surface-variant">
                    ${mediaTag}
                    <span class="absolute top-3 left-3 bg-primary-container text-on-primary-container text-xs font-bold px-3 py-1 rounded-full shadow-sm capitalize">${dataCategory}</span>
                </div>
                <div class="p-4 md:p-6">
                    <h3 class="text-[16px] md:text-headline-sm font-bold font-headline-sm leading-tight text-on-surface mb-2">${title}</h3>
                    <p class="text-[12px] md:text-sm text-on-surface-variant mb-4 leading-snug hidden md:block">High quality furnishing from our collection.</p>
                    <a href="https://wa.me/919860434182" class="w-full inline-flex items-center justify-center gap-2 border border-outline px-2 md:px-4 py-2 rounded-lg text-primary hover:bg-primary-container text-[12px] md:text-label-md font-label-md transition-all"><span class="material-symbols-outlined text-[16px] md:text-[18px]">chat</span> Inquire</a>
                </div>
            </div>
`;
    itemsHtml += itemHtml;
}

const updatedContent = content.slice(0, gridStart) + itemsHtml + content.slice(gridEnd);

fs.writeFileSync(htmlFile, updatedContent, 'utf8');
console.log("Catalog generated successfully.");
