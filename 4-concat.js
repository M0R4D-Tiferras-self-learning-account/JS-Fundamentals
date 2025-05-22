#!/usr/bin/node

let result = "";
let idx = 2;

while (idx <= 3) {
	result = result + process.argv[idx]
	if (idx < 3) {
		result = result + " is "
	}
	idx++
}
console.log(result)
