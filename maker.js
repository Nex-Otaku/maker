#!/usr/bin/env node

const clear = require('clear');
const inquirer = require('inquirer');

const parser = require('./src/parser');
const runner = require('./src/runner');
const ui = require('./src/ui');

const selectAction = async (actions) => {
    let results = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Make',
            choices: actions,
            pageSize: 50
        }
    ]);
    ui.newline();

    return results.action;
};

const mainLoop = async () => {

    const makefilePath = './Makefile';
    const existsMakefile = await parser.existsMakefile(makefilePath);

    if (!existsMakefile) {
        console.log('Makefile not found, nothing to do.');

        return;
    }

    const commands = await parser.getCommands(makefilePath);
    let running = true;

    while (running) {
        clear();

        const menuActions = ([]).concat(commands, [
            new inquirer.Separator(),
            'Exit',
        ]);

        const selectedAction = await selectAction(menuActions);

        if (commands.includes(selectedAction)) {
            await runner.run(selectedAction);
        }

        if (selectedAction === 'Exit') {
            running = false;
        }

        if (running) {
            await ui.keypress();
        }
    }

    clear();
};

mainLoop().then();