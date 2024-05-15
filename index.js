const inquirer = require('inquirer');
const fs = require('fs')
const shapes = require('./lib/shapes.js')

// Function to prompt user for input
async function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for the logo (up to three characters):'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape (circle, triangle, square):',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color:'
        }
    ]);
}

// Function to generate SVG content based on user input
function generateSVG(answers) {
    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="${answers.shapeColor}"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>
    `;
}

// Function to generate SVG content based on user input
function generateSVG(answers) {
    let shapeContent = '';

    if (answers.shape === 'triangle') {
        shapeContent = `
            <polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />
        `;
    } else if (answers.shape === 'circle') {
        shapeContent = `
            <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
        `;
    } else if (answers.shape === 'square') {
        shapeContent = `
            <rect x="50" y="50" width="200" height="100" fill="${answers.shapeColor}" />
        `;
    }

    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeContent}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>
    `;
}
// Function to write SVG content to a file
function writeSVGToFile(content) {
    fs.writeFile('logo.svg', content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Generated logo.svg');
    });
}

// Initialize the app
async function init() {
    try {
        const userResponses = await promptUser();
        const svgContent = generateSVG(userResponses);
        writeSVGToFile(svgContent); // Call writeSVGToFile to write the SVG content to a file
    } catch (error) {
        console.error(error);
    }
}

// Call the init function to start the application
init();