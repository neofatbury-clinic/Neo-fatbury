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
    if (!content.includes('Visual Subject migrated to background')) return;

    console.log(`Fixing syntax in ${filePath}...`);
    
    // Remove the extra </div> that was left behind
    content = content.replace(/\{(\/\* Visual Subject migrated to background \*\/)\}\s*<\/div>\n?/, '{$1}\n');

    fs.writeFileSync(filePath, content);
});
