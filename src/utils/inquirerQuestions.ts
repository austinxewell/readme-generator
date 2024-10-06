// TODO: figure out the data types and replace "any"
export const questions = [
  {
    type: "input",
    name: "primaryContributor",
    message: "What Name Would You Like to Use as the Primary Contributor?",
    validate: (confirmed: any) => {
      if (confirmed) {
        return true;
      } else {
        console.log("Please Provide a Primary Contributor For This Project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "username",
    message:
      "Enter the Project GitHub Username or Primary Contributor GitHub Username:",
    validate: (usernameInput: any) => {
      if (usernameInput) {
        return true;
      } else {
        console.log("Please Provide a GitHub Username For This Project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message:
      "Enter the Project Email Address or Primary Contributor Email Address:",
    validate: (emailInput: any) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please Provide an Email Address For This Project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "Enter The Project Title:",
    validate: (titleInput: any) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please Provide the Title For This Project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a Description of the Project:",
    validate: (descriptionInput: any) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please Provide a Description For This Project!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmNpm",
    message: "Are You Using NPM in This Project?",
    validate: (confirmed: any) => {
      if (confirmed) {
        return true;
      } else {
        console.log("Please Confirm if You Are Using Node on This Project?");
      }
    },
  },
  {
    type: "input",
    name: "nodeVersion",
    message: "What Version of Node Are You Using?",
    validate: (confirmed: any) => {
      if (confirmed) {
        return true;
      } else
        console.log(
          "Please Provide Which Version of Node You Are Using For This Project"
        );
    },
    when: ({ confirmNpm }: any) => {
      return !!confirmNpm;
    },
  },
  {
    type: "checkbox",
    name: "usedTech",
    message:
      "Which Technologies Did You Use in Your Project? Select All That Apply.",
    choices: [
      { name: "-- Front End Frameworks --", disabled: true },
      { name: "React", value: "react" },
      { name: "Vue.js", value: "vue" },
      { name: "Angular", value: "angular" },
      { name: "Svelte", value: "svelte" },
      { name: "Ember.js", value: "ember" },
      { name: "Backbone.js", value: "backbone" },
      { name: "Next.js", value: "next" },
      { name: "Nuxt.js", value: "nuxt" },
      { name: "Gatsby", value: "gatsby" },
      { name: "Alpine.js", value: "alpine" },

      { name: "-- Back End Frameworks --", disabled: true },
      { name: "Node.js (with Express)", value: "node_express" },
      { name: "Django", value: "django" },
      { name: "Flask", value: "flask" },
      { name: "Ruby on Rails", value: "rails" },
      { name: "Spring Boot (Java)", value: "spring_boot" },
      { name: "ASP.NET Core", value: "aspnet" },
      { name: "Laravel (PHP)", value: "laravel" },
      { name: "FastAPI (Python)", value: "fastapi" },
      { name: "Koa.js", value: "koa" },
      { name: "Phoenix (Elixir)", value: "phoenix" },
    ],
  },
  {
    type: "input",
    name: "installation",
    message:
      "Provide The Steps Required to Install Your Project. Separate Your Steps Using a | Symbol:",
    validate: (installationInput: any) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please Provide Installation Steps For This Project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide Usage Instructions For Your Project. Separate Your Steps Using a | Symbol:",
    validate: (usageInput: any) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please Provide Usage Instructions For This Project!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicense",
    message: "Would You Like to Include a License For This Project?",
    default: false,
  },
  {
    type: "list",
    name: "license",
    message: "Select a License For This Project:",
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
      "Other Than The Primary Contributor, Were There Other Contributors to This Project?",
    default: false,
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Name All Other Contributors. Separate Each Contributor Using a | Symbol:",
    validate: (contributingInput: any) => {
      if (contributingInput) {
        return true;
      } else {
        console.log(
          "Please Provide All Contributors That Should Be Credited For This Project!"
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
      "Provide Examples on How to Run Tests Written For This Project. Separate Your Tests Using a | Symbol:",
    validate: (testsInput: any) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please Provide Testing Examples For This Project!");
        return false;
      }
    },
  },
];
