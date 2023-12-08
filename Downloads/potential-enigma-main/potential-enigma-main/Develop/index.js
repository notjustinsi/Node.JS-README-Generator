// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
    {
        type: 'input',
        name: 'instructions',
        message: 'The instructions of your project?',
      },
    {
        type: 'input',
        name: 'test',
        message: 'How are we going to test your project?',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated!');
    }
  });
}
  
  // TODO: Create a function to initialize app
  function init() {
      console.log('Before inquirer prompt');
      inquirer.prompt(questions)
        .then((answers) => {
          console.log('Answers received:', answers);
          const readmeContent = generateMarkdown(answers);
          writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
          console.error('Error during inquirer prompt:', error);
        })
        .finally(() => {
          console.log('After inquirer prompt');
        });
    }
    
  // Function call to initialize app
  init();