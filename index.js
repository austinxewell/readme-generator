import fs from "fs";
import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import { questions } from "./utils/inquirerQuestions.js";

const writeToFile = (data) => {
  fs.writeFile("./dist/README.md", data, (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`
********************************************
*                                          *
* 🎉 README.md Successfully Generated! 🎉 *
*                                          *
*     Please view in "dist/README.md"      *
*                                          *
********************************************
`);
  });
};

const init = () => {
  return inquirer
    .prompt(questions)
    .then((readmeData) => generateMarkdown(readmeData))
    .then((markdownContent) => writeToFile(markdownContent))
    .catch((err) => {
      console.log(err);
    });
};

init();
