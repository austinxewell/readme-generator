// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    // Title Questions
    // {question: 'What is the title of your project?'},
    // Description Questions
    // {question: 'What is a description of your project?'},
    // Installation Questions
    // {question: 'Do you have installation instructions?'},
    // {question: 'What are your installation instructions?'},
    // Usage Questions
    // {question: 'Describe how you use your project'},
    // {question: 'Would you like to include screenshots of your project?'},
    // {question: 'Please provide SRC for your screenshot'},
    // Credits Questions
    // {question: 'Enter collaborators Name'},
    // {question: 'Enter collaborators GitHub username'},
    // {question: 'Did you use any third-party assets that require attribution?'},
    // {question: 'What is the name of the third-party assets?'},
    // {question: 'What is the link to the third-party asset?'},

    {question: 'Did you use any tutorials for this project?'},
    {question: 'Enter the link to your tutorial'},
    // License Questions
    {question: 'What licensing do you have on your project?'},
];

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
    ]);
  };
  
  const promptColab = portfolioData => {
    // If there's no 'projects' array property, create one
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
    // If there's no 'projects' array property, create one
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



// Function call to initialize app
init()
  .then(promptColab)
  .then(promptScreenshot)
  .then(promptThirdParty)
  .then(portfolioData => {
      return portfolioData,
      console.log(portfolioData);
    // return generatePage(portfolioData);
  })