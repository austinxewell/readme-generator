// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile
  // , copyFile 
} = require('./utils/generate-site');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the Title of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description of your project!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmInstInstruct',
        message: 'Do you have installation instructions?',
        default: true
      },
      {
        type: 'input',
        name: 'instInstruct',
        message: 'What are your installation instructions',
        when: ({ confirmInstInstruct }) => confirmInstInstruct
      },
      {
        type: 'input',
        name: 'describeUsage',
        message: 'Enter a description on how to use your project. (Required)',
        validate: describeUsageInput => {
          if (describeUsageInput) {
            return true;
          } else {
            console.log('Please describe how to use your project!');
            return false;
          }
        }
      },
      {
          type: 'checkbox',
          name: 'licensing',
          message: 'What license would you like to classify your project as?',
          choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
          validate: licensingInput => {
            if (licensingInput) {
              return true;
            } else {
              console.log('You have to select a license!');
              return false;
            }
          }
      }     
    ]);
  };
  
  const promptColab = portfolioData => {
    if (!portfolioData.colaborators) {
      portfolioData.colaborators = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'collabName',
          message: 'Enter collaborators Name? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter your name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'githubUser',
          message: 'Enter your GitHub username (Required)',
          validate: githubUserInput => {
            if (githubUserInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'collabEmail',
            message: 'Enter your email address (Required)',
            validate: collabEmailInput => {
              if (collabEmailInput) {
                return true;
              } else {
                console.log('You need to enter an email!');
                return false;
              }
            }
          },
        {
          type: 'confirm',
          name: 'confirmAddCollab',
          message: 'Would you like to enter another collaborator?',
          default: false
        }
      ])
      .then(projectData => {
        portfolioData.colaborators.push(projectData);
        if (projectData.confirmAddCollab) {
          return promptColab(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };

  const promptScreenshot = portfolioData => {
    if (!portfolioData.screenShot) {
      portfolioData.screenShot = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'screenShotSRC',
          message: 'Please proide the SRC for your screenshot to your project (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              return;
            }
          }
        },
        {
          type: 'confirm',
          name: 'confirmAddScreenShot',
          message: 'Would you like to add another screenshot for your project?',
          default: false
        }

      ])
      .then(projectData => {
        portfolioData.screenShot.push(projectData);
        if (projectData.confirmAddScreenShot) {
          return promptScreenshot(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };

  const promptThirdParty = portfolioData => {
    if (!portfolioData.thirdPartyInfo) {
        portfolioData.thirdPartyInfo = [];
      }
      return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmThirdParty',
                message: 'Did you use any third-party assets that require attribution?',
                default: false
              },
              {
                type: 'input',
                name: 'thirdParty',
                message: 'What is the name of the third-party assets?',
                when: ({ confirmThirdParty }) => confirmThirdParty
              },

              {
                type: 'input',
                name: 'thirdPartyLink',
                message: 'What is the link to the third-party asset?',
                when: ({ confirmThirdParty }) => confirmThirdParty
              },
              {
                type: 'confirm',
                name: 'addThirdParty',
                message: 'Do you want to add another third-party assets that require attribution?',
                default: false,
                when: ({ confirmThirdParty }) => confirmThirdParty
              },
        ])

        .then(projectData => {
            portfolioData.thirdPartyInfo.push(projectData);
            if (projectData.addThirdParty) {
              return promptThirdParty(portfolioData);
            } else {
              return portfolioData;
            }
          });
 };

 const promptTutorials = portfolioData => {
    if (!portfolioData.tutorialsInfo) {
        portfolioData.tutorialsInfo = [];
      }
      return inquirer
        .prompt([
            {
            type: 'confirm',
            name: 'confirmTutorials',
            message: 'Did you use any tutorials?',
            default: false
          },
          {
            type: 'input',
            name: 'tutorials',
            message: 'What is the name of the tutorial?',
            when: ({ confirmTutorials }) => confirmTutorials
          },
          {
            type: 'input',
            name: 'tutorialsLink',
            message: 'Enter the link of the tutorial?',
            when: ({ confirmTutorials }) => confirmTutorials
          },
          {
          type: 'confirm',
          name: 'addTutorials',
          message: 'Do you want to add another tutorial?',
          default: false,
          when: ({ confirmTutorials }) => confirmTutorials
        },

        ])

        .then(projectData => {
            portfolioData.tutorialsInfo.push(projectData);
            if (projectData.addTutorials) {
              return promptTutorials(portfolioData);
            } else {
              return portfolioData;
            }
          });
 };


// Function call to initialize app
init()
  .then(promptColab)
  .then(promptScreenshot)
  .then(promptThirdParty)
  .then(promptTutorials)

  .then(portfolioData => {
      // return portfolioData,
    return generatePage(portfolioData);
  })
  .then(pageReadme => {
    return writeFile(pageReadme);
  })
  .catch(err => {
    console.log(err);
  });