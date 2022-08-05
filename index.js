const chalk = require('chalk');
const fs = require('fs');

function links(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayMatchs = [];
    let temp;
    while ((temp = regex.exec(text)) !== null) {
        arrayMatchs.push({ [temp[1]]: temp[2] });
    }

    return arrayMatchs.length === 0 ? 'There is no link.' : arrayMatchs;
}

function handleError(err) {
    throw new Error(chalk.red(err.code, 'file not found.'));
}

async function getFile(path) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(path, encoding);
        return links(text);
    } catch (error) {
        handleError(error);
    }
}

module.exports = getFile;
