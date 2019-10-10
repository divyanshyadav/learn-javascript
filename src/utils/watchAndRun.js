/* eslint-disable no-console */
/* eslint-disable no-use-before-define */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function main() {
    try {
        const { filename, runner } = validateAndParseParams({
            filename: process.argv[2],
            runner: process.argv[3] || 'node',
        });

        watchAndRun({
            filename,
            cmd: runner,
        });
    } catch (err) {
        console.log(err.message);
    }
}

function validateAndParseParams({ filename, runner }) {
    if (!filename || !runner) {
        const currentFileName = path.basename(__filename);
        throw new Error(`Usage: ${currentFileName} <file-path> <runner: default = node>`);
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
        throw new Error('Error: File doesn\'t exist');
    }
}

function watchAndRun({ filename, cmd }) {
    const finalCmd = `${cmd} ${filename}`;
    execute(finalCmd);

    fs.watchFile(filename, { interval: 500 }, () => {
        console.clear();
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

main();
