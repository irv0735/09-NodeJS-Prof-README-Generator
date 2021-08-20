// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  switch (license) {
    case "Apache License 2.0":
      licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
      break;
    case "GNU General Public License v3.0":
      licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
      break;
    case "MIT License":
      licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg"
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge = "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg"
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
      break;
    case "Boost Software License 1.0":
      licenseBadge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg"
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge = "https://licensebuttons.net/l/zero/1.0/80x15.png"
      break;
    case "Eclipse Public License 2.0":
      licenseBadge = "https://img.shields.io/badge/License-EPL%202.0-red.svg"
      break;
    case "GNU Affero General Public License v3.0":
      licenseBadge = "https://img.shields.io/badge/License-AGPL%20v3-blue.svg"
      break;
    case "GNU General Public License v2.0":
      licenseBadge = "https://img.shields.io/badge/License-GPL%20v2-blue.svg"
      break;
    case "GNU Lesser General Public License v2.1":
      licenseBadge = "https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg"
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
      break;
    case "The Unlicense":
      licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg"
      break;
    default:
      licenseBadge = ""
      break;
  };
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  switch (license) {
    case "Apache License 2.0":
      licenseBadge = "(https://opensource.org/licenses/Apache-2.0)"
      break;
    case "GNU General Public License v3.0":
      licenseBadge = "(https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "MIT License":
      licenseBadge = "(https://opensource.org/licenses/MIT)"
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge = "(https://opensource.org/licenses/BSD-2-Clause)"
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge = "(https://opensource.org/licenses/BSD-3-Clause)"
      break;
    case "Boost Software License 1.0":
      licenseBadge = "(https://www.boost.org/LICENSE_1_0.txt)"
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge = "(http://creativecommons.org/publicdomain/zero/1.0/)"
      break;
    case "Eclipse Public License 2.0":
      licenseBadge = "(https://opensource.org/licenses/EPL-2.0)"
      break;
    case "GNU Affero General Public License v3.0":
      licenseBadge = "(https://www.gnu.org/licenses/agpl-3.0)"
      break;
    case "GNU General Public License v2.0":
      licenseBadge = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      break;
    case "GNU Lesser General Public License v2.1":
      licenseBadge = "(https://www.gnu.org/licenses/lgpl-2.1)"
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "(https://opensource.org/licenses/MPL-2.0)"
      break;
    case "The Unlicense":
      licenseBadge = "(http://unlicense.org/)"
      break;
    default:
      licenseBadge = ""
      break;
  };
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  let licenseSection = ""
  if (licenseBadge != "") {
    licenseSection = `[![License: ${license}](${licenseBadge})]${licenseLink}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  
  ${licenseSection}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}
  ${licenseSection}

  ## Questions
  If you have questions, you can reach me via Github:
  [${data.github}](https://github.com/${data.github})\n
  Or contact via email:
  ${data.email}

`;
}

module.exports = generateMarkdown;
