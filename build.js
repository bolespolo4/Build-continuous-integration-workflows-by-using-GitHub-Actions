// Build script for the dummy Node.js project

const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'dist');

function build() {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(
        path.join(outputDir, 'index.js'),
        'console.log("Dummy Node.js project built successfully!");\n'
    );
    console.log('Build completed successfully!');
}

build();