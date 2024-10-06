export const renderLicenseTitleTOC = (license: string | undefined) => {
  if (license === undefined || license === "None") {
    return "";
  }
  return "- [License](#license)";
};

export const renderLicenseTitle = (confirmLicense: boolean) => {
  if (confirmLicense) {
    return `## License`;
  } else {
    return ``;
  }
};

export const renderLicenseBadge = (license: string | undefined) => {
  if (license === undefined || license === "None") {
    return "";
  }

  const licenseStr = license.split(" (")[0].replace(/ /g, "_");
  return `![Static Badge](https://img.shields.io/badge/License-${licenseStr}-blue)`;
};

export const renderNpmBadge = (npmVersion: string | undefined) => {
  if (npmVersion === undefined) {
    return "";
  }

  const badgeString = npmVersion.split(" (")[0].replace(/ /g, "_");
  return `![Static Badge](https://img.shields.io/badge/Node-${badgeString}-green)`;
};

export const renderLicenseSection = (license: string | undefined) => {
  if (!license) {
    return "";
  }
  if (license.includes("Creative Commons")) {
    return `### Creative Commons (CC) License
    A Creative Commons (CC) software license allows creators to share their work with the public under specific terms, balancing the protection of their intellectual property with the freedom to share and use the work.`;
  }
  if (license.includes("MIT")) {
    return `### MIT License
  A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (license.includes("GPL")) {
    return `### GNU General Public License
  The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements.`;
  }
  if (license.includes("ISC")) {
    return `### ISC License
  A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.`;
  }
  if (license.includes("Apache")) {
    return `### Apache License
  A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (license.includes("Proprietary")) {
    return `### Proprietary License
    A proprietary software license grants the licensee (the user) limited rights to use, modify, or distribute the software while retaining exclusive ownership rights by the licensor (the creator or company).`;
  }
  if (license === "None") {
    return `## No License
  A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
};

export const formatSteps = (answer: string | undefined) => {
  if (answer === undefined) {
    return;
  }

  if (!answer.includes("|")) {
    return answer.trim();
  }

  const steps = answer
    .split("|")
    .map((step) => step.trim())
    .filter((step) => step !== "");

  const formattedSteps = steps.map((step) => `- ${step}`);

  return formattedSteps.join("\n  ");
};
