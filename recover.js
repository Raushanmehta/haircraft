const fs = require('fs');
const transcriptPath = 'C:/Users/raush/.gemini/antigravity-ide/brain/afc84e00-b082-4c0d-a1a9-23f20da8bd53/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

let bestContent = '';
for (const line of lines) {
    if (!line) continue;
    try {
        const obj = JSON.parse(line);
        // The view_file output is inside tool_calls or step content.
        // It's easiest to just stringify the line and look for the markers.
        const str = JSON.stringify(obj);
        if (str.includes('File Path: `file:///c:/Users/raush/Desktop/Css%20Founder/hair-carft/data/site.json`') && str.includes('Total Lines: 684')) {
            bestContent = str;
        }
    } catch (e) {}
}

if (!bestContent) {
    console.log('Could not find the view_file response in transcript.');
    process.exit(1);
}

// Unescape to raw string
bestContent = bestContent.replace(/\\n/g, '\n').replace(/\\"/g, '"');

let linesToExtract = bestContent.split('\n');
let extractedCode = [];
let startExtracting = false;
for (const l of linesToExtract) {
    if (l.match(/^1: /)) {
        startExtracting = true;
    }
    if (startExtracting) {
        if (l.includes('The above content shows the entire, complete file contents')) {
            break;
        }
        extractedCode.push(l.replace(/^\d+:\s?/, ''));
    }
}

const finalCode = extractedCode.join('\n');
fs.writeFileSync('c:/Users/raush/Desktop/Css Founder/hair-carft/data/site.json', finalCode, 'utf8');
console.log('Recovered site.json!');

// Now we apply the user's specific request: move navItems inside navbar
const data = JSON.parse(finalCode);
if (data.HairCraft && data.HairCraft.sections && data.HairCraft.sections.navItems) {
    const navItems = data.HairCraft.sections.navItems.variants.HairCraftNavItems1;
    data.HairCraft.sections.navbar.variants.HairCraftNavbar1.navItems = navItems;
    delete data.HairCraft.sections.navItems;
    fs.writeFileSync('c:/Users/raush/Desktop/Css Founder/hair-carft/data/site.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('Moved navItems into navbar!');
}
