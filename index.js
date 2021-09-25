// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "Enter your project title:",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project title!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project:",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Provide the steps required to install your project:",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter installation steps for your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for your project.",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide usage inctructions for your project!");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmLicense",
        message: "Would you like to include a license for your project?",
        default: true
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project:",
        choices: [
            'Apache License 2.0',
            'Boost Software License',
            'CC-BY-4.0',
            'CC-BY-SA-4.0',
            'CCO-1.0',
            'GNU GPLv2',
            'GNU GPLv3',
            'ISC',
            'MIT',
            'Mozilla Public License 2.0',
            'SIL Open Font License 1.1',
            'The Unlicense'
        ],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
            return true;
            } else {
            return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Do you have other Contributers you would like to credit for this project?",
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log("Please provide other Contributers you would like to credit for this project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples on how to run tests you've written for your project:",
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please provide testing examples!");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeToFile = (data) => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
        }

        console.log('README generated!');
    })
}

const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => generateMarkdown(readmeData))
    .then(markdownContent => writeToFile(markdownContent))
    .catch(err => {
        console.log(err);
    });
}

init();