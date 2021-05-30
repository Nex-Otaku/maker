const files = require('./files');

const existsMakefile = (filePath) => {
    return files.fileExists(filePath);
};

const getCommands = (filePath) => {
    return [
        'first',
        'second',
        'thrid',
    ];
};

module.exports = {
    existsMakefile: existsMakefile,
    getCommands: getCommands,
};