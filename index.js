// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    "Project Title:",
    "Project Description:",
    "Installation Instructions:",
    "Usage Information:",
    "License:",
    "Contribution Guidelines:",
    "Test Instructions:",
    "GitHub Username:",
    "Email address:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markdownContent = generateMarkdown(data);

  fs.writeFile(fileName, markdownContent, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'install',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[3],
      },
      {
        type: 'list',
        name: 'license',
        message: questions[4],
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License",
                  "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",
                  "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", 
                  "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
      },
      {
        type: 'input',
        name: 'contributions',
        message: questions[5],
      },
      {
        type: 'input',
        name: 'tests',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'github',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[8],
      },
    ])
    .then((data) => {
      writeToFile("README.md", data);
    });
}

// Function call to initialize app
init();
