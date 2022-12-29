var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown.js')
const questions = [
          {
               type: 'input',
               name: 'title',
               message: 'What is the title of your project?',
          },
          {
               type: 'input',
               name: 'Description',
               message: 'What is the description of your project?',
          },
          {
               type: 'input',
               name: 'Installation',
               message: 'How to install your app?',
          },
          {
               type: 'input',
               name: 'Usage',
               message: 'How to you use this app?',
          },
          {
               type: 'input',
               name: 'Contributing',
               message: 'How should people contribute to this app?',
          },
          {
               type: 'input',
               name: 'Tests',
               message: 'How do you test this app?',
          },
          {
               type: 'checkbox',
               name: 'License',
               message: 'Choose a license for your app (if you want to leave this block empty just press ENTER)',
               choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
          },
          {
               type: 'input',
               name: 'github',
               message: 'Please enter your GitHub Username.',
          },
          {
               type: 'input',
               name: 'email',
               message: 'Please enter your email address.'
          },
     ];
// Function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err) => {
          if (err)
               throw err;
          console.log('Success! README file created!')
     });
     }; 
// Function to initialize app
function init() {
     inquirer.prompt(questions)
     .then(function (userInput) {
          console.log(userInput)
          writeToFile("README.md", generateMarkdown(userInput));
          });
}; 
 // Function call to initialize app
init();