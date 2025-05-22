#!/usr/bin/node

function is_valid(str) {
	let idx = 0
	while (str[idx] !== undefined)
	{
		if ((str[idx] >= '0' && str[idx] <= '9') || str[idx] == '-') {
			idx++
		} else {
			return false;
		}
	}
	return true;
}

if (process.argv.length == 2) {
	console.log("Not a number")
} else if (is_valid(process.argv[2]) === false) {
	console.log("Not a number")
} else if (is_valid(process.argv[2]) == true) {
	console.log("My number:", process.argv[2])
}
