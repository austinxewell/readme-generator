// TODO: figure out the data types and replace "any"
export const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
        validate: (usernameInput) => {
            if (usernameInput) {
                return true;
            }
            else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            }
            else {
                console.log("Please enter your email!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "title",
        message: "Enter your project title:",
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            }
            else {
                console.log("Please enter your project title!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project:",
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log("Please enter a description for your project!");
                return false;
            }
        },
    },
    {
        type: "confirm",
        name: "confirmNpm",
        message: "Are you using NPM in this project?",
        validate: (confirmed) => {
            if (confirmed) {
                return true;
            }
            else {
                console.log("Please confirm if you are using Node on this project?");
            }
        },
    },
    {
        type: "input",
        name: "nodeVersion",
        message: "What Node Version are you using?",
        validate: (confirmed) => {
            if (confirmed) {
                return true;
            }
            else
                console.log("Please type which version of Node you are using");
        },
        when: ({ confirmNpm }) => {
            return !!confirmNpm;
        },
    },
    {
        type: "checkbox",
        name: "usedTech",
        message: "Which Technologies did you use in your project? Select all that apply.",
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
        message: "Provide the steps required to install your project. Separate your steps using a | symbol:",
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            }
            else {
                console.log("Please enter installation steps for your project!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for your project. Separate your steps using a | symbol:",
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            }
            else {
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
        when: ({ confirmLicense }) => {
            return !!confirmLicense;
        },
    },
    {
        type: "confirm",
        name: "confirmContributors",
        message: "Other than yourself, were there other contributors to this project?",
        default: false,
    },
    {
        type: "input",
        name: "contributing",
        message: "Name the other contributors.  Separate your contributors using a | symbol:",
        validate: (contributingInput) => {
            if (contributingInput) {
                return true;
            }
            else {
                console.log("Please provide other Contributors you would like to credit for this project!");
                return false;
            }
        },
        when: ({ confirmContributors }) => {
            return !!confirmContributors;
        },
    },
    {
        type: "input",
        name: "tests",
        message: "Provide examples on how to run tests you've written for your project.  Separate your tests using a | symbol:",
        validate: (testsInput) => {
            if (testsInput) {
                return true;
            }
            else {
                console.log("Please provide testing examples!");
                return false;
            }
        },
    },
];
