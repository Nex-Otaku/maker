#!/usr/bin/env node

const clear = require('clear');
const inquirer = require('inquirer');

const parser = require('./src/parser');
const runner = require('./src/runner');
const ui = require('./src/ui');

const getMakefileCommands = (targets) => {
    let commands = [];

    for (let i = 0; i < targets.length; i++) {
        commands = commands.concat(targets[i].name);
    }

    return commands;
}

const makeMenuActions = (targets) => {
    let choices = [];

    for (let i = 0; i < targets.length; i++) {
        const command = targets[i];

        choices = choices.concat({
            name: command.name + ' ' + command.firstComment,
            value: command.name
        });
    }

    choices = choices.concat([
        new inquirer.Separator(),
        'Exit',
    ]);

    return choices;
};

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

    const targets = await parser.getTargets(makefilePath);
    const menuActions = makeMenuActions(targets);
    const flatCommands = getMakefileCommands(targets);
    let running = true;

    while (running) {
        clear();
        const selectedAction = await selectAction(menuActions);

        if (flatCommands.includes(selectedAction)) {
            const output = await runner.run(selectedAction);
            console.log(output);
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