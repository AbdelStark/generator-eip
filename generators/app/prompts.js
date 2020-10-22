const chalk = require('chalk');
const util = require('./util');

module.exports = {
    askIfFirstEIP,
    askForEIPNumber,
    askForEIPTitle,
    askForEIPType,
    askForEIPAuthor,
    askForEIPStatus,
    askForDateCreated,
    askForDiscussionsTo,
    askForRequirement,
    askForReplacement,
};

async function askIfFirstEIP() {
    const answers = await this.prompt([
        {
            type: "confirm",
            name: "firstEip",
            message: "Is is your first EIP ?",
            default: this.firstEip,
            store: true,
        }
    ]);
    this.firstEip = answers.firstEip;
    if (this.firstEip) {
        this.log(`Please read those few considerations ${chalk.greenBright('before')} submitting any EIP.`);
        this.log('* As a champion, you should ask the Ethereum community whether your idea has any chance of support.');

        const answers = await this.prompt([
            {
                type: "confirm",
                name: "continueEIP",
                message: "Do you want to write your EIP now ?",
                default: true,
            }
        ]);
        this.continueEIP = answers.continueEIP;
        if (!this.continueEIP) {
            this.env.error("Aborting generator, see you soon.");
        }
    }
}

async function askForEIPNumber() {
    const eipNumberAssignedAnswer = await this.prompt([
        {
            type: "confirm",
            name: "eipNumberAssigned",
            message: "Is the number of the EIP assigned ?",
            default: false,
        }
    ]);
    this.eipNumberAssigned = eipNumberAssignedAnswer.eipNumberAssigned;
    if (this.eipNumberAssigned) {
        const answers = await this.prompt([
            {
                type: "number",
                name: "eipNumber",
                message: "What is the number assigned to the EIP ?"
            }
        ]);
        this.eipNumber = answers.eipNumber;
    }
}

async function askForEIPTitle() {
    const answers = await this.prompt([
        {
            type: 'String',
            name: 'eipTitle',
            message: `What is the ${chalk.yellow('*title*')} of the EIP would you like to create ?`,
            default: "EIP title",
        },
    ]);
    this.eipTitle = answers.eipTitle;
}

async function askForDiscussionsTo() {
    const answers = await this.prompt([
        {
            type: 'String',
            name: 'eipDiscussionsTo',
            message: `What is the url of the ${chalk.yellow('*discussions*')} related to the EIP ?`,
            default: 'URL',
        },
    ]);
    this.eipDiscussionsTo = answers.eipDiscussionsTo;
}

async function askForEIPType() {
    const typeChoices = [
        {
            value: 'Standards Track',
        },
        {
            value: 'Meta',
        },
        {
            value: 'Informational',
        }
    ];

    const categoryChoices = [
        {
            value: 'Core',
        },
        {
            value: 'Networking',
        },
        {
            value: 'Interface',
        },
        {
            value: 'ERC',
        }
    ];

    const answers = await this.prompt([
        {
            type: 'list',
            name: 'eipType',
            message: `Which ${chalk.yellow('*type*')} of EIP would you like to create ?`,
            choices: typeChoices,
            default: 'Standards Track',
        },
        {
            when: answers => ['Standards Track'].includes(answers.eipType),
            type: 'list',
            name: 'eipCategory',
            message: `Which ${chalk.yellow('*category*')} of Standards Track EIP would you like to create ?`,
            choices: categoryChoices,
            default: 'Core',
        },
    ]);
    this.eipType = answers.eipType;
    this.eipCategory = answers.eipCategory;
}

async function askForEIPAuthor() {
    const answers = await this.prompt([
        {
            type: 'String',
            name: 'eipAuthor',
            message: `Who is the ${chalk.yellow('*author*')} of the EIP would you like to create ?`,
            default: this.eipAuthor,
            store: true,
        },
        {
            type: 'String',
            name: 'eipAuthorGithubUsername',
            message: `What is the ${chalk.yellow('*github username*')} of the author ?`,
            default: this.eipAuthorGithubUsername,
            store: true,
        },
    ]);
    this.eipAuthor = answers.eipAuthor;
    this.eipAuthorGithubUsername = answers.eipAuthorGithubUsername;
}

async function askForEIPStatus() {
    const statusChoices = [
        {
            value: 'Draft'
        },
        {
            value: 'Last Call'
        },
        {
            value: 'Accepted'
        },
        {
            value: 'Final'
        },
        {
            value: 'Active'
        },
        {
            value: 'Abandoned'
        },
        {
            value: 'Rejected'
        },
        {
            value: 'Superseded'
        },
    ];

    const answers = await this.prompt([
        {
            type: 'list',
            choices: statusChoices,
            message: `What is the ${chalk.yellow('*status*')} of the EIP?`,
            name: 'eipStatus',
            default: 'Draft',
        },
    ]);

    this.eipStatus = answers.eipStatus;
}

async function askForDateCreated() {
    const answers = await this.prompt([
        {
            type: 'String',
            message: `What is the ${chalk.yellow('*creation date*')} of the EIP?`,
            name: 'eipDateCreated',
            default: util.getTodayISO8601(),
        },
    ]);

    this.eipDateCreated = answers.eipDateCreated;
}

async function askForRequirement() {
    const eipRequiresAnswer = await this.prompt([
        {
            type: "confirm",
            name: "eipRequires",
            message: "Does this EIP depend on another EIP ?",
            default: false,
        }
    ]);
    this.eipRequires = eipRequiresAnswer.eipRequires;
    if (this.eipRequires) {
        const answers = await this.prompt([
            {
                type: "number",
                name: "eipRequiresNumber",
                message: "What is the number of the required EIP ?"
            }
        ]);
        this.eipRequiresNumber = answers.eipRequiresNumber;
    }
}

async function askForReplacement() {
    const eipReplacesAnswer = await this.prompt([
        {
            type: "confirm",
            name: "eipReplaces",
            message: "Does this EIP replace another EIP ?",
            default: false,
        }
    ]);
    this.eipReplaces = eipReplacesAnswer.eipReplaces;
    if (this.eipReplaces) {
        const answers = await this.prompt([
            {
                type: "number",
                name: "eipReplacesNumber",
                message: "What is the number of the EIP to replace ?"
            }
        ]);
        this.eipReplacesNumber = answers.eipReplacesNumber;
    }
}