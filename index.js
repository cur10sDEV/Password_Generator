#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
// const clipboard = require("clipboardy");
const savePassword = require("./utils/savePassword")
const createPassword = require("./utils/createPassword");

program.version("1.0.0").description("Simple Password Generator");

program
    .option("-l, --length <number>", "length of password","8")
    .option("-s, --save", "save password to passwords.txt")
    .option("-nn, --no-numbers", "remove numbers")
    .option("-ns, --no-symbols", "remove symbols")
    .parse();

const {length, save, numbers, symbols} = program.opts();

//Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

//Save password to passwords.txt
if (save) {
    savePassword(generatedPassword);
}

//Copy Password to clipboard
// clipboard.writeSync(generatedPassword);

//Output generated Passwoord
console.log(chalk.blueBright("Password Generated: ") + chalk.bold(chalk.bgRgb(50,50,50)(chalk.yellowBright(generatedPassword))));
// console.log(chalk.cyanBright("Password copied to clipboard!"));