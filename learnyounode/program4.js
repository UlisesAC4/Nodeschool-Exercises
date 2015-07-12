var FileSystem = require('fs');
FileSystem.readFile(process.argv[2], 'utf8', function countingLines(err, data) {
	var lines = data.split('\n').length-1;
	console.log(lines);
	});