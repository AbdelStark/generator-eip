const Generator = require('yeoman-generator');
const packageInformation = require('../../package.json');
const chalk = require('chalk');
const prompts = require('./prompts');


module.exports = class extends Generator {
    get prompting() {
        return this._prompting();
    }

    initializing() {
        this.eipNumberAssigned = false;
        this.eipNumber = 0;
        this._printWelcomeMessage();
    }

    _prompting() {
        return {
            askForEIPNumber: prompts.askForEIPNumber,
            askForEIPTitle: prompts.askForEIPTitle,
            askForEIPType: prompts.askForEIPType,
            askForEIPAuthor: prompts.askForEIPAuthor,
            askForDiscussionsTo: prompts.askForDiscussionsTo,
            askForEIPStatus: prompts.askForEIPStatus,
            askForDateCreated: prompts.askForDateCreated,
        };
    }

    configuring() {

    }

    writing() {
        this.eipDestinationPath = this.eipNumberAssigned ? `EIPS/eip-${this.eipNumber}.md` : 'EIPS/eip-x.md';
        this.fs.copyTpl(
            this.templatePath('eip-template.md'),
            this.destinationPath(this.eipDestinationPath),
            {
                eipType: this.eipType,
                eipTitle: this.eipTitle,
                eipCategory: this.eipCategory,
                eipAuthor: this.eipAuthor,
                eipAuthorGithubUsername: this.eipAuthorGithubUsername,
                eipDateCreated: this.eipDateCreated,
                eipStatus: this.eipStatus,
                eipNumberAssigned: this.eipNumberAssigned,
                eipNumber: this.eipNumber,
                eipDiscussionsTo: this.eipDiscussionsTo,
            }
        );
        this.config.save();
    }

    conflicts() {

    }

    install() {

    }

    end() {
        this._printGoodByeMessage();
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

    _printGoodByeMessage() {
        this.log('EIP template is ready: ', chalk.yellow(`${process.cwd()}/${this.eipDestinationPath}`));
        this.log('Please fill all the required sections.');
        this.log(`Once done, you can submit a pull request to: ${chalk.blueBright('https://github.com/ethereum/EIPs')}`);
        this.log(chalk.magentaBright.bold(`Goodbye! See you soon for another EIP!`));
    }
};