#!/usr/bin/node

function calculateLength(arr) {
	let count = 0;
	while (arr[count] !== undefined) {
		count++;
	}
	return count;
}

let argc = calculateLength(process.argv);

if (argc === 2) {
	console.log("No argument")
} else {
	console.log(process.argv[2])
}
