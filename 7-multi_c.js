#!/usr/bin/node

let argc = process.argv.length

function is_valid(str) {
	let idx = 0;

	while (str[idx] != undefined) {
		if (str[idx] >= '0' && str[idx] <= '9') {
			idx++
		} else {
			return false;
		}
	}
	return true;
}

if (argc !== 3) {
	console.log("Missing number of occurrences")
} else if (argc === 3 && (is_valid(process.argv[2]) === true)) {
	let idx = 1;
	while (idx <= Number(process.argv[2])) {
		console.log("C is fun");
		idx++
	}
}
