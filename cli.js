#!/usr/bin/env node

const getFile = require("./index.js");
const chalk = require('chalk');
const checkURLs = require("./http-validacao.js");

const path = process.argv;

async function textProcess(path) {
    const result = await getFile(path[2]);
    if(path[3] === 'validate') {
        console.log(chalk.yellow('Validated links'), await checkURLs(result));
    } else {
        console.log(chalk.yellow('List of links'), result);
    }
}

textProcess(path);
