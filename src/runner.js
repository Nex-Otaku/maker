const exec = require('child-process-promise').exec;

const shellRun = async (command) => {
    return exec(command)
        .then(function (result) {
            return result.stdout.trim();
        })
        .catch(function (err) {
            return err.stderr.trim();
        });
};

const run = async (command) => {
    return await shellRun('make ' + command);
};

module.exports = {
    run: run,
};