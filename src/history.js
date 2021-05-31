const Conf = require('conf');
const cryptoJs = require('crypto-js');

const config = new Conf({
    configName: 'history-1.0.0'
});

let makefilePath = '';

const init = (path) => {
    makefilePath = path;
}

const md5 = (value) => {
    return cryptoJs.MD5(value).toString();
}

const getKey = (key) => {
    return 'file:' + md5(makefilePath) + ':' + key;
}

const get = (key) => {
    const value = config.get(getKey(key));

    if (value === undefined) {
        return null;
    }

    return value;
};

const set = (key, value) => {
    config.set(getKey(key), value);
};

const clear = () => {
    config.clear();
};

const getLastExecutedCommand = () => {
    return get('last-executed-command');
}

const setLastExecutedCommand = (command) => {
    return set('last-executed-command', command);
}

module.exports = {
    init: init,
    clear: clear,
    getLastExecutedCommand: getLastExecutedCommand,
    setLastExecutedCommand: setLastExecutedCommand,
};