import fs from "fs";
import inquirer from "inquirer";
import clipboard from "clipboardy";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import { questions } from "./utils/inquirerQuestions.js";

const outputPath = "./dist/GeneratedREADME.md";

const writeToFile = (data) => {
    if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
    }

    fs.writeFile(outputPath, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        clipboard.writeSync(data);

        console.log(`
            ********************************************
            *                                          *
            * 🎉 README.md Successfully Generated! 🎉  *
            *                                          *
            *     Please view in "dist/README.md"      *
            *                                          *
            * 📋 Contents also copied to clipboard!    *
            *                                          *
            ********************************************
        `);
    });
};

const init = () => {
    inquirer
        .prompt(questions)
        .then((readmeData) => generateMarkdown(readmeData))
        .then((markdownContent) => writeToFile(markdownContent))
        .catch((err) => {
            console.error(err);
        });
};

init();
