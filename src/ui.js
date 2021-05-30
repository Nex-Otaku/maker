const _ = require('lodash');
const pressAnyKey = require('press-any-key');

module.exports = {
    newline: () => {
        console.log();
    },

    keypress: async () => {
        console.log();
        return pressAnyKey('Press any key...');
    }
};