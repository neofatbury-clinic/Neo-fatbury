const fs = require('fs');
const path = require('path');

const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('page.tsx')) results.push(file);
        }
    });
    return results;
};

const pages = walk('./src/app');

pages.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip home page and locations if they are already okay, but checking service sections
    if (!content.includes('className="service-hero"')) return;

    console.log(`Updating ${filePath}...`);

    // 1. Determine background image based on category
    let bgImg = '/images/neofatbury-clinical-standard.png';
    if (filePath.includes('hair')) bgImg = '/images/neofatbury-hair-standard.png';
    if (filePath.includes('slimming')) bgImg = '/images/neofatbury-slimming-standard.png';

    // 2. Set the background image and position
    // Replace any existing style on the section or add it
    content = content.replace(/<section className="service-hero"[^>]*>/, `<section className="service-hero" style={{ backgroundImage: 'url(${bgImg})', backgroundPosition: 'left center' }}>`);

    // 3. Remove the hero-visual-pillar div if it exists
    content = content.replace(/<div className="hero-visual-pillar">[\s\S]*?<\/div>/, '{/* Visual Subject migrated to background */}');
    
    // 4. Ensure service-hero-grid is correctly structured (it should already be if it matches my previous pattern)
    // No change needed to grid if my CSS handles the columns.

    fs.writeFileSync(filePath, content);
});
