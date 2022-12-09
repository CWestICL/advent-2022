const fs = require("fs");

const data = fs.readFileSync("Day_07/07_input.txt", "utf8");
const lines = data.split("\n");

const tree = [];

for (let line of lines) {

    if (!line.startsWith("dir ")) {

        tree.push(line);
    }
}

const dirName = [];
const files = {};

for (let cmd of tree) {

    const cmdDiv = cmd.split(" ");

    if (cmd.startsWith("$ cd")) {

        if (cmd.endsWith("..")) {

            dirName.pop();
        }
        else {

            dirName.push(cmdDiv[2]);
            files[dirName.join(",")] = 0;
        }
    }
    else if (!cmd.startsWith("$")) {

        files[dirName.join(",")] += Number(cmdDiv[0]);
    }
}

const totalFiles = {};

for (let i = 0; i < Object.keys(files).length; i++) {

    const key1 = Object.keys(files)[i];

    totalFiles[key1] = 0;

    for (let x = 0; x < Object.keys(files).length; x++) {

        const key2 = Object.keys(files)[x];

        if (key2.startsWith(key1)) {

            totalFiles[key1] += files[key2];

        }
    }
}

const totals = [];

for (let i = 0; i < Object.keys(totalFiles).length; i++) {

    key1 = Object.keys(totalFiles)[i];

    if (totalFiles[key1] <= 100000) {

        totals.push(totalFiles[key1]);

        //Code for not counting duplicate directories
        /*
        for (let x = 0; x < Object.keys(totalFiles).length; x++) {

            key2 = Object.keys(totalFiles)[x];

            if (key2.startsWith(key1)) {

                totalFiles[key2] = 0;

                console.log("Removed:", key2);

            }
        }
        */
    }
}

console.log(totals.reduce((a, b) => a + b, 0));