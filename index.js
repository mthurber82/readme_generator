const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
const Choices = require("inquirer/lib/objects/choices");
// TODO: Include packages needed fr this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
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
    type: "list",
    name: 'license',
    message: 'What is the license of your project?',
    choices: ['MIT', 'Apache', 'BSD', 'GPL', 'None']
    ,
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is the install command for your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What is the test command for your project?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What does the user need to know about contributing to your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage instructions for your project?',
  },
  {
    type: 'input',
    name: 'deploy',
    message: 'What is the deployed link for the project?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
