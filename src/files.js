const fs = require('fs');

const directoryExists = (filePath) => {
    let exists = false;

    try {
        exists = fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory();
    } catch (error) {
        return false;
    }

    return exists;
};

const fileExists = (filePath) => {
    return fs.existsSync(filePath) && !directoryExists(filePath);
};

const readFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf8');
};

module.exports = {
    directoryExists: directoryExists,
    fileExists: fileExists,
    readFile: readFile
};