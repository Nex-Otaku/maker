let readline = require('readline');

const keyCallback = (key) => {
    if (!key) {
        return;
    }

    const ctrlQ = key.ctrl && (key.name === 'q');
    const ctrlX = key.ctrl && (key.name === 'x');
    const f10 = key.name === 'f10';

    if (ctrlQ || ctrlX || f10) {
        process.exit();
    }
}

const init = () => {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on('keypress', (ch, key) => {
        keyCallback(key);
    });
}

module.exports = {
    init: init,
};