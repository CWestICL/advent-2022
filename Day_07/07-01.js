const fs = require("fs");

const data = fs.readFileSync("07-01_input.txt", "utf8");
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

let key1;
let key2;

const totalFiles = {};

for (let i = 0; i < Object.keys(files).length; i++) {

    key1 = Object.keys(files)[i];

    totalFiles[key1] = 0;

    for (let x = 0; x < Object.keys(files).length; x++) {

        key2 = Object.keys(files)[x];

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

let sum = 0;

for (let num of totals) {
    sum += num;
}

console.log(sum);