#!/usr/bin/node

function add(a, b) {
    return (a + b);
}

let argc = process.argv.length;

if (argc === 4) {
    console.log(add(Number(process.argv[2]), Number(process.argv[3])))
} else {
    console.log("NaN");
}
