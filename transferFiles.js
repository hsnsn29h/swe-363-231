const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

// Get command line arguments
const [, , sourceDir, targetDir] = process.argv;

// Check if both source and target directories are provided
if (!sourceDir || !targetDir) {
  console.error('Please provide both source and target directories.');
  process.exit(1);
}

// Read the contents of the source directory
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    process.exit(1);
  }

  // Filter files based on extensions
  const allowedExtensions = ['.txt', '.jpg'];
  const filteredFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return allowedExtensions.includes(ext);
  });

  // Copy filtered files to the target directory
  filteredFiles.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    fse.copy(sourcePath, targetPath, err => {
      if (err) {
        console.error(`Error copying ${file}:`, err);
      } else {
        console.log(`Copied ${file} to ${targetDir}`);
      }
    });
  });
});
