#!/usr/bin/node

let argc = process.argv.length;

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

function main() {
	if (argc != 3) {
		console.log("Missing size")
	} else if (argc === 3) {
		if (is_valid(process.argv[2]) == false) {
			if (process.argv[2][0] !== '-') {
				console.log("Missing size");
			}
			return;
		}
		else if (is_valid(process.argv[2] === true)) {
			let row = 1;
			let colum = 1;
			let result = "";

			while (row <= Number(process.argv[2])) {
				colum = 1;
				while (colum <= Number(process.argv[2])) {
					result = result + "X";
					colum++;
				}
				console.log(result);
				result = "";
				row++;
			}
		}
	}
}

main();
