import getFile from "./index.js";
import chalk from "chalk";

const path = process.argv;

async function textProcess(path) {
    const result = await getFile(path[2]);
    console.log(chalk.yellow('Lista de links'), result);
}

textProcess(path);
