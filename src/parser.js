const parseMakefileAst = require('@kba/makefile-parser')

const files = require('./files');

const existsMakefile = (filePath) => {
    return files.fileExists(filePath);
};

const parseMakefile = (filePath) => {
    if (!existsMakefile(filePath)) {
        return null;
    }

    const contents = files.readFile(filePath);
    const normalizedContents = contents.replace(/\r\n/g, "\n");
    const parsed = parseMakefileAst(normalizedContents);

    return parsed.ast;
}

const getCommands = (filePath) => {
    const ast = parseMakefile(filePath);
    let commands = [];

    /**
     *
      {
        target: 'hotdog',
        deps: ['a', 'b'],
        recipe: [ 'echo "Hotdog"' ],
        comment: [ 'Order me a hotdog', 'Fast!' ]
      },
     */

    for (let i = 0; i < ast.length; i++) {
        const block = ast[i];

        if (!block.hasOwnProperty('target')) {
            continue;
        }

        let firstComment = '';

        if (block.hasOwnProperty('comment') && (block.comment.length > 0)) {
            firstComment = block.comment[0];
        }

        commands = commands.concat({
            name: block.target,
            firstComment: firstComment,
        });
    }

    return commands;
};

module.exports = {
    existsMakefile: existsMakefile,
    getCommands: getCommands,
};