#!/usr/bin/env node
// Setup script for DT-Plans Portfolio Template
// Run with: node setup.js

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('🚀 DT-Plans Portfolio Template Setup');
console.log('=====================================\n');

// Questions for customization
const questions = [
    {
        key: 'name',
        question: 'What is your name/company name?',
        default: 'Your Name'
    },
    {
        key: 'tagline',
        question: 'What is your professional tagline?',
        default: 'Professional Construction Drafting'
    },
    {
        key: 'taglineFr',
        question: 'What is your tagline in French?',
        default: 'Dessin de Construction Professionnel'
    },
    {
        key: 'description',
        question: 'Brief description of your services:',
        default: 'Creating precise, detailed construction drawings with professional standards.'
    },
    {
        key: 'descriptionFr',
        question: 'Description in French:',
        default: 'Création de plans de construction précis et détaillés selon les standards professionnels.'
    },
    {
        key: 'email',
        question: 'Your email address:',
        default: 'contact@yourname.com'
    },
    {
        key: 'phone',
        question: 'Your phone number:',
        default: '+1 (555) 123-4567'
    },
    {
        key: 'location',
        question: 'Your location:',
        default: 'Your City, State, Country'
    },
    {
        key: 'locationFr',
        question: 'Location in French:',
        default: 'Votre Ville, État, Pays'
    },
    {
        key: 'website',
        question: 'Your website URL:',
        default: 'yourname.com'
    }
];

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(`${question.question} (${question.default}): `, (answer) => {
            resolve(answer.trim() || question.default);
        });
    });
}

async function setupTemplate() {
    const answers = {};
    
    console.log('Please answer the following questions to customize your portfolio:\n');
    
    for (const question of questions) {
        answers[question.key] = await askQuestion(question);
    }
    
    console.log('\n📝 Generating customized files...\n');
    
    // Read template files
    const htmlTemplate = fs.readFileSync('index-template.html', 'utf8');
    const jsTemplate = fs.readFileSync('js/script-template.js', 'utf8');
    
    // Replace placeholders
    let customizedHtml = htmlTemplate;
    let customizedJs = jsTemplate;
    
    // Replace common placeholders
    const replacements = {
        'YOUR_NAME': answers.name,
        'YOUR_TAGLINE': answers.tagline,
        'YOUR_TAGLINE_FR': answers.taglineFr,
        'YOUR_DESCRIPTION': answers.description,
        'YOUR_DESCRIPTION_FR': answers.descriptionFr,
        'YOUR_EMAIL': answers.email,
        'YOUR_PHONE': answers.phone,
        'YOUR_LOCATION': answers.location,
        'YOUR_LOCATION_FR': answers.locationFr,
        'YOUR_WEBSITE': answers.website
    };
    
    // Apply replacements
    Object.entries(replacements).forEach(([placeholder, value]) => {
        customizedHtml = customizedHtml.replace(new RegExp(placeholder, 'g'), value);
        customizedJs = customizedJs.replace(new RegExp(placeholder, 'g'), value);
    });
    
    // Write customized files
    fs.writeFileSync('index.html', customizedHtml);
    fs.writeFileSync('js/script.js', customizedJs);
    
    console.log('✅ Files generated successfully!');
    console.log('\n📁 Next steps:');
    console.log('1. Add your logo as logo.svg in the root directory');
    console.log('2. Add your project images to assets/images/');
    console.log('3. Update the portfolioData array in js/script.js with your projects');
    console.log('4. Customize the About, Skills, and Contact sections in index.html');
    console.log('5. Test your portfolio locally');
    console.log('6. Deploy to GitHub Pages or your preferred hosting');
    
    console.log('\n🎉 Your portfolio template is ready!');
    
    rl.close();
}

// Check if we're in the right directory
if (!fs.existsSync('index-template.html')) {
    console.error('❌ Error: Please run this script from the template directory');
    process.exit(1);
}

setupTemplate().catch(console.error);
