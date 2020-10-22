const Generator = require('yeoman-generator');
const packageInformation = require('../../package.json');
const chalk = require('chalk');

module.exports = class extends Generator {
    initializing() {
        this._printWelcomeMessage();
    }

    prompting() {

    }

    configuring() {

    }

    writing() {

    }

    conflicts() {

    }

    install() {

    }

    end() {
        this.log(chalk.magentaBright.bold(`Goodbye! See you soon for another EIP!`));
    }

    _printWelcomeMessage() {
        this.log('\n');
        this.log(`${chalk.green(' ████████╗ ████████╗ ███████╗')}`);
        this.log(`${chalk.green(' ██╔═════╝ ╚══██╔══╝ ██╔═══██╗')}`);
        this.log(`${chalk.green(' ██████╗      ██║    ███████╔╝')}`);
        this.log(`${chalk.green(' ██╔═══╝      ██║    ╔════╝  ')}`);
        this.log(`${chalk.green(' ████████╗ ████████╗ ██║')}`);
        this.log(`${chalk.green(' ╚═══════╝ ╚═══════╝ ╚═╝')}\n`);
        this.log(`${chalk.blue.bold('Ethereum Improvement Proposal')}\n`);
        this.log(chalk.white.bold('https://eips.ethereum.org/EIPS/eip-1\n'));
        this.log(chalk.white('Welcome to EIP generator ') + chalk.yellow(`v${packageInformation.version}`));
        this.log(chalk.white(`Application files will be generated in folder: ${chalk.yellow(process.cwd())}`));
    }
};