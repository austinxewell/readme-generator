import * as formatMarkdown from "./formatMarkdown.js";

export function generateMarkdown(data: any): string {
  const {
    primaryContributor,
    username,
    email,
    title,
    description,
    nodeVersion,
    usedTech,
    installation,
    usage,
    confirmLicense,
    license,
    contributing,
    tests,
  } = data;

  return `# ${title} ${formatMarkdown.renderLicenseBadge(
    license
  )} ${formatMarkdown.renderNpmBadge(nodeVersion)}
  ## Description
  ${description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${formatMarkdown.renderLicenseTitleTOC(license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${formatMarkdown.formatSteps(installation)}
  ## Usage
  ${usage.trim()}
  ${formatMarkdown.renderLicenseTitle(confirmLicense)}
  ${formatMarkdown.renderLicenseSection(license)}
  ## Contributing
  - ${primaryContributor}
  ${formatMarkdown.formatSteps(contributing)}
  ## Tests
  ${formatMarkdown.formatSteps(tests)}
  ## Questions
  If you have any questions regarding ${title}, please reach using the following methods:
  - https://github.com/${username}
  - ${email}
  `;
}
