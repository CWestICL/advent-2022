const fs = require("fs");

const data = fs.readFileSync("Day_09/09_input.txt", "utf8");
const lines = data.split("\n");

const head = { x: 0, y: 0 };
const tail = { x: 0, y: 0 };

const positions = [];

for (let line of lines) {

    const direction = line.split(" ");

    for (let i = 0; i < direction[1]; i++) {

        if (direction[0] === "U") {

            head.y++;
        }
        else if (direction[0] === "D") {

            head.y--;
        }
        else if (direction[0] === "R") {

            head.x++;
        }
        else {

            head.x--;
        }

        if (Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1) {

            if (direction[0] === "U") {

                tail.x = head.x;
                tail.y++;
            }
            else if (direction[0] === "D") {

                tail.x = head.x;
                tail.y--;
            }
            else if (direction[0] === "R") {

                tail.y = head.y;
                tail.x++;
            }
            else {

                tail.y = head.y;
                tail.x--;
            }

            positions.push(`${tail.x},${tail.y}`)
        }
    }
}

console.log([...new Set(positions)].length);