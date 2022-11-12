console.log("   |   |");console.log("   |   |");console.log("   |   |");
console.log("-----------");
console.log("   |   |");console.log("   |   |");console.log("   |   |");
console.log("-----------");
console.log("   |   |");console.log("   |   |");console.log("   |   |");


console.log(`\n\n\n`)
//stretch

for (j=0;j<3;j++){
    for (i=0;i<3;i++) {
        console.log("   |   |")
    }
    if (j!=2) console.log("-----------");
}

console.log(`\n\n\n`)
//stretch

for (i=1;i<=11;i++) {
    if (i%4==0) {
        console.log("-----------");
    } else {
        console.log("   |   |");
    }
}

console.log(`\n\n\n`)
//stretch

grid = [
    ["   |   |   "],
    ["   |   |   "],
    ["   |   |   "],
    ["-----------"],
    ["   |   |"],
    ["   |   |"],
    ["   |   |"],
    ["-----------"],
    ["   |   |"],
    ["   |   |"],
    ["   |   |"],
]

for (row in grid) {
    console.log(grid[row][0]);
}

console.log(`\n\n\n`)
//stretch

