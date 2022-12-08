const fs = require("fs");

const data = fs.readFileSync("08-01_input.txt", "utf8");
const lines = data.split("\n");

const grid = [];

for (let line of lines) {

    if (line) {
        grid.push(line.split(""));
    }
}

let scores = [];

for (let y = 0; y < grid.length; y++) {

    for (let x = 0; x < grid[y].length; x++) {

        let yuTrees = 0;
        let ydTrees = 0;
        let xlTrees = 0;
        let xrTrees = 0;

        for (let yu = y - 1; yu >= 0; yu--) {

            if (grid[yu][x] < grid[y][x]) {

                yuTrees++;
            }
            else {
                yuTrees++;
                break;
            }
        }

        for (let yd = y + 1; yd < grid.length; yd++) {

            if (grid[yd][x] < grid[y][x]) {

                ydTrees++;
            }
            else {
                ydTrees++;
                break;
            }
        }

        for (let xl = x - 1; xl >= 0; xl--) {

            if (grid[y][xl] < grid[y][x]) {

                xlTrees++;
            }
            else {
                xlTrees++;
                break;
            }
        }

        for (let xr = x + 1; xr < grid[y].length; xr++) {

            if (grid[y][xr] < grid[y][x]) {

                xrTrees++;
            }
            else {
                xrTrees++;
                break;
            }
        }

        scores.push(yuTrees * ydTrees * xlTrees * xrTrees);
    }
}

console.log(Math.max(...scores));