const existsMakefile = (filePath) => {
    return true;
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