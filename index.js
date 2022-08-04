// sempre que iniciar um projeto em node precisamos criar um arquivo de configuração chamado package.json com npm init

import chalk from 'chalk';
import fs from 'fs';

function links(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayMatchs = [];
    let temp;
    while ((temp = regex.exec(text)) !== null) {
        arrayMatchs.push({ [temp[1]]: temp[2] });
    }

    return arrayMatchs.length === 0 ? 'There is no link.' : arrayMatchs;
}

function dealWithError(err) {
    throw new Error(chalk.red(err.code, 'file not found.'));
}

async function getFile(path) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(path, encoding);
        return links(text);
    } catch (error) {
        dealWithError(error);
    }
}

// function getFile(path) {
//     const encoding = 'utf-8';
//     fs.promises.readFile(path, encoding)
//     .then((text) => {
//         console.log(chalk.green(text));
//     })
//     .catch((err) => {
//         dealWithError(err);
//     })
// }

// function getFile(path) {
//     const encoding = 'utf-8';
//     fs.readFile(path, encoding, (err, text) => {
//         if(err) {
//             dealWithError(err);
//         }
//         console.log(chalk.green(text));
//     });
// }

export default getFile;
//console.log('teste');
