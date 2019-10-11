/* eslint-disable no-console */
/* eslint-disable no-use-before-define */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const INTERVAL = 200;
const CONSTANTS = {
    executingFile: 'Executing file...',
    fileDoestExist: 'File doesn\'t exist',
};

function validateAndParseParams({ filename, runner }) {
    if (!filename || !runner) {
        const currentFileName = path.basename(__filename);
        throw new Error(`Usage: ${currentFileName} <runner> <file>`);
    }

    const filePath = path.resolve(filename);
    validateFile(filePath);

    return {
        filename: filePath,
        runner,
    };
}

function validateFile(value) {
    if (!fs.existsSync(value)) {
        throw new Error(`Error: ${CONSTANTS.fileDoestExist}`);
    }
}

function watchAndRun({ filename, cmd }) {
    const finalCmd = `${cmd} ${filename}`;
    execute(finalCmd);

    fs.watchFile(filename, { interval: INTERVAL }, () => {
        console.clear();
        console.log(CONSTANTS.executingFile);
        execute(finalCmd);
    });
}

function execute(cmd, clear = true) {
    exec(cmd, (err, stdout, stderr) => {
        if (clear) {
            console.clear();
        }

        if (err) {
            console.error(err.message);
        } else {
            if (stdout) {
                console.log(`${stdout}`);
            }

            if (stderr) {
                console.log(`${stderr}`);
            }
        }
    });
}

function main() {
    try {
        const { filename, runner } = validateAndParseParams({
            runner: process.argv[2],
            filename: process.argv[3],
        });

        watchAndRun({
            filename,
            cmd: runner,
        });
    } catch (err) {
        console.log(err.message);
    }
}

main();
