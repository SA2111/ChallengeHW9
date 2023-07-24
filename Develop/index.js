// TODO: Include packages needed for this application
// inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const route = require("route");
const generateMarkdown = require("Develop/utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "header",
    message: "WHat do you want to be the title for your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe the project",
  },
  {
    type: "input",
    name: "URL",
    message: "Enter URL for deployed application"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a lisense",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "coolItens",
    message: "List interesting features for the project",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Technologies used?",
  },
  {
    type: "input",
    name: "username",
    message: "Enter Github Username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email:",
  },
  {
    type: "input",
    name: "contributors",
    message: "Enter contributors:",
    default: "",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      return fs.writeFileSync(route.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
        console.log("README.md ");
    writeToFile("README.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
