import * as formatMarkdown from "./formatMarkdown.js";
export function generateMarkdown(data) {
    const { username, email, title, description, nodeVersion, usedTech, installation, usage, confirmLicense, license, contributing, tests, } = data;
    return `
<h1>${title}</h1> 

${formatMarkdown.renderLicenseBadge(license)} ${formatMarkdown.renderNpmBadge(nodeVersion)}

<h2 id="description">📦 Description</h2>

${description.trim()}

<h2 id="table-of-contents">📚 Table of Contents</h2>

- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
${formatMarkdown.renderLicenseTitleTOC(license)}
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)


<h2 id="installation">🚀 Installation</h2>

${formatMarkdown.formatSteps(installation)}

<h2 id="usage">⚙️ Usage</h2>

${formatMarkdown.formatSteps(usage)}

<h2 id="tech-stack">🛠 Tech Stack</h2> 

${formatMarkdown.formatTechStack(usedTech)}

${formatMarkdown.renderLicenseTitle(confirmLicense)}

${formatMarkdown.renderLicenseSection(license)}

<h2 id="contributors">👨‍💻 Contributors</h2>

${formatMarkdown.formatContributors(contributing)}

<h2 id="tests">🧪 Tests</h2>

${formatMarkdown.formatSteps(tests)}

<h2 id="questions">❓ Questions</h2>

If you have any questions about **${title}**, feel free to reach out:
- GitHub: [${username}](https://github.com/${username})
- Email: [${email}](mailto:${email})
`;
}
