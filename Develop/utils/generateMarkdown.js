// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// returns string is no license
function renderLicenseBadge(license) {
    if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}
// description link 
## Description
${data.description}
// web link
## Deployed Application
${data.URL}
// contents
## Table of Contents
* [Features](#coolItens)
* [usage](#usage)
* [Contributors](#contributors)
## Features
${data.coolItens}
## usage
${data.require}
## Contributors
${data.contributors}
`;
}

module.exports = generateMarkdown;
