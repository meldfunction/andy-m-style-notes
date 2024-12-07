Here's a comprehensive guide on importing notes from various tools, with a focus on Obsidian since it's a popular choice:

# Importing Notes from Other Tools

## Importing from Obsidian

Obsidian notes are already in markdown format, making them ideal for importing.

### Method 1: Direct Copy
1. Locate your Obsidian vault folder
2. Copy your `.md` files to the `src/notes` directory
3. Adjust any Obsidian-specific syntax:
   ```bash
   # Find and replace in the files:
   [[Internal Links]] -> [Internal Links](internal-links)
   ![[Embedded content]] -> Remove or convert to standard markdown
   ```

### Method 2: Using a Script

```javascript
const fs = require('fs');
const path = require('path');

function convertObsidianToMarkdown(content) {
  // Convert Obsidian wiki-links to markdown links
  content = content.replace(/\[\[(.*?)\]\]/g, (match, p1) => {
    const linkText = p1.split('|')[0];
    const linkUrl = linkText.toLowerCase().replace(/ /g, '-');
    return `[${linkText}](${linkUrl})`;
  });

  // Remove Obsidian embeds
  content = content.replace(/!\[\[(.*?)\]\]/g, '');

  // Convert Obsidian callouts to blockquotes
  content = content.replace(/> \[(.*?)\](.*)/g, '> $2');

  return content;
}

function importFromObsidian(obsidianPath, outputPath) {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  // Read all markdown files from Obsidian vault
  fs.readdirSync(obsidianPath).forEach(file => {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(obsidianPath, file), 'utf8');
      const convertedContent = convertObsidianToMarkdown(content);
      fs.writeFileSync(path.join(outputPath, file), convertedContent);
    }
  });
}

// Usage
const obsidianPath = './obsidian-vault';
const outputPath = './src/notes';
importFromObsidian(obsidianPath, outputPath);

```

Save this as `import-obsidian.js` and run:
```bash
node import-obsidian.js
```

## Importing from Other Tools

### From Notion

1. Export your Notion pages:
   - Click '...' menu in the top right
   - Select "Export"
   - Choose "Markdown & CSV"
   - Download the zip file

2. Extract the zip file
3. Copy the `.md` files to your `src/notes` directory
4. Clean up Notion-specific formatting:
   - Remove front matter
   - Convert Notion callouts to standard markdown
   - Remove page ID references

### From OneNote

1. Use a tool like [OneNote to Markdown](https://github.com/ssine/OneNote-to-Markdown)
2. Run the conversion
3. Copy the resulting markdown files to `src/notes`
4. Clean up any HTML artifacts

### From Evernote

1. Export notes as HTML
2. Use a converter like [turndown](https://github.com/domchristie/turndown):
```bash
npm install turndown
```
```javascript
const TurndownService = require('turndown');
const turndownService = new TurndownService();
const markdown = turndownService.turndown(htmlContent);
```

### From Apple Notes

1. Select notes you want to export
2. Copy content
3. Paste into a markdown editor (like VS Code)
4. Save as `.md` files in `src/notes`

## Handling Common Import Issues

### File Names
- Replace spaces with hyphens
- Remove special characters
- Use lowercase for consistency
```bash
# Example file naming
my-great-note.md
project-ideas.md
daily-notes.md
```

### Images
1. Create an `assets` folder:
```bash
mkdir src/notes/assets
```

2. Update image references:
```markdown
<!-- Before -->
![image](attachment://image.png)

<!-- After -->
![image](/assets/image.png)
```

### Metadata (Front Matter)
Add front matter processing to your notes:
```markdown
---
title: My Note
date: 2024-01-01
tags: [notes, example]
---

# Note Content
```

### Links
Update internal links to match your new structure:
```markdown
<!-- Before (Obsidian) -->
[[My Note]]

<!-- After -->
[My Note](/notes/my-note)
```

## Mass Import Script

```javascript
const fs = require('fs');
const path = require('path');

const CONFIG = {
  outputDir: './src/notes',
  imageDir: './src/notes/assets',
  replacements: [
    // Common replacements for various tools
    { from: /\[\[(.*?)\]\]/g, to: '[$1]($1)' }, // Obsidian/wiki links
    { from: /<div.*?>/g, to: '' }, // HTML artifacts
    { from: /<\/div>/g, to: '' },
    { from: /\!\[\[(.*?)\]\]/g, to: '![]($1)' }, // Obsidian embeds
  ],
  imageExtensions: ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Apply all replacements
  CONFIG.replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  // Handle images
  const images = content.match(/!\[.*?\]\(.*?\)/g) || [];
  images.forEach(image => {
    const imagePath = image.match(/\((.*?)\)/)[1];
    if (CONFIG.imageExtensions.includes(path.extname(imagePath))) {
      const newPath = path.join(CONFIG.imageDir, path.basename(imagePath));
      // Copy image if it exists
      if (fs.existsSync(imagePath)) {
        fs.copyFileSync(imagePath, newPath);
      }
      content = content.replace(imagePath, `/assets/${path.basename(imagePath)}`);
    }
  });
  
  return content;
}

function importNotes(inputDir) {
  // Create necessary directories
  [CONFIG.outputDir, CONFIG.imageDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
  
  // Process all markdown files
  fs.readdirSync(inputDir)
    .filter(file => file.endsWith('.md'))
    .forEach(file => {
      const content = processFile(path.join(inputDir, file));
      const outputPath = path.join(CONFIG.outputDir, file);
      fs.writeFileSync(outputPath, content);
    });
}

// Usage
importNotes('./my-notes-to-import');

```

## Best Practices for Importing

1. Always backup your original notes before importing
2. Test the import with a few notes first
3. Check for:
   - Broken links
   - Missing images
   - Formatting issues
   - Special characters
   - Custom syntax

4. Maintain a consistent structure:
```
src/
  notes/
    assets/
      images/
    daily/
    projects/
    references/
```

5. Consider using git for version control:
```bash
git init
git add .
git commit -m "Initial notes import"
``` 