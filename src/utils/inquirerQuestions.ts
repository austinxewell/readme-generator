// TODO: figure out the data types and replace "any"
export const questions = [
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:",
    validate: (usernameInput: any) => {
      if (usernameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (emailInput: any) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "Enter your project title:",
    validate: (titleInput: any) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
    validate: (descriptionInput: any) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Provide the steps required to install your project. Separate your steps using a | symbol:",
    validate: (installationInput: any) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter installation steps for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions for your project. Separate your steps using a | symbol:",
    validate: (usageInput: any) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide usage instructions for your project!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicense",
    message: "Would you like to include a license for your project?",
    default: false,
  },
  {
    type: "list",
    name: "license",
    message: "Select a license for your project:",
    choices: [
      "Creative Commons (Creative Work)",
      "MIT (Permissive Open Source)",
      "GPL (General Public License)",
      "ISC (Permissive License)",
      "Apache (Permissive License)",
      "Proprietary (like Microsoft Windows)",
      "None",
    ],
    when: ({ confirmLicense }: any) => {
      return !!confirmLicense;
    },
  },
  {
    type: "confirm",
    name: "confirmContributors",
    message:
      "Other than yourself, were there other contributors to this project?",
    default: false,
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Name the other contributors.  Separate your contributors using a | symbol:",
    validate: (contributingInput: any) => {
      if (contributingInput) {
        return true;
      } else {
        console.log(
          "Please provide other Contributors you would like to credit for this project!"
        );
        return false;
      }
    },
    when: ({ confirmContributors }: any) => {
      return !!confirmContributors;
    },
  },
  {
    type: "input",
    name: "tests",
    message:
      "Provide examples on how to run tests you've written for your project.  Separate your tests using a | symbol:",
    validate: (testsInput: any) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please provide testing examples!");
        return false;
      }
    },
  },
];
