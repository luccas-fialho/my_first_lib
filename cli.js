import getFile from "./index.js";
import chalk from "chalk";
import checkURLs from "./http-validacao.js";

const path = process.argv;

async function textProcess(path) {
    const result = await getFile(path[2]);
    if(path[3] === 'validar') {
        console.log(chalk.yellow('Validated links'), await checkURLs(result));
    } else {
        console.log(chalk.yellow('List of links'), result);
    }
}

textProcess(path);
