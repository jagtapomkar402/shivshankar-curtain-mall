const fs = require('fs');

let code = fs.readFileSync('catalog.html', 'utf8');

// 1. Filter buttons
code = code.replace(
    '<div class="flex flex-wrap justify-center gap-4 mb-12" id="filter-buttons">',
    '<div class="flex overflow-x-auto snap-x hide-scrollbar whitespace-nowrap justify-start md:justify-center gap-4 mb-8 pb-4" id="filter-buttons">'
);

// 2. Catalog Grid
code = code.replace(
    '<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter" id="catalog-grid">',
    '<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-gutter" id="catalog-grid">'
);

// Also update the title fonts to be smaller on mobile if necessary inside the grid items
code = code.replace(/font-headline-sm/g, 'text-[16px] md:text-headline-sm font-bold font-headline-sm leading-tight');
code = code.replace(/text-sm text-on-surface-variant mb-4/g, 'text-[12px] md:text-sm text-on-surface-variant mb-4 leading-snug hidden md:block');

// 3. Add hide-scrollbar utility class in head if not present
const hide_scrollbar_css = `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
`;
if (!code.includes('hide-scrollbar::-webkit-scrollbar')) {
    code = code.replace('</style>', hide_scrollbar_css + '</style>');
}

fs.writeFileSync('catalog.html', code, 'utf8');
console.log('Done catalog.html');
