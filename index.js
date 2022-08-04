// sempre que iniciar um projeto em node precisamos criar um arquivo de configuração chamado package.json com npm init

import chalk from 'chalk';
import fs from 'fs';

function dealWithError(err) {
    throw new Error(chalk.red(err.code, 'file not found.'));
}

async function getFile(path) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(path, encoding);
        console.log(chalk.green(text));
    } catch (error) {
        dealWithError(error);
    } finally {
        console.log(chalk.yellow('operação concluída'));
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

getFile('./arquivos/texto1.md');
