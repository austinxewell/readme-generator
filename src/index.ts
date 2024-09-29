import fs from "fs";
import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import { questions } from "./utils/inquirerQuestions.js";

const writeToFile = (data: any) => {
  fs.writeFile("./dist/GeneratedREADME.md", data, (err: any) => {
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
    .then((readmeData: object) => generateMarkdown(readmeData))
    .then((markdownContent: string) => writeToFile(markdownContent))
    .catch((err: object) => {
      console.log(err);
    });
};

init();
