var FileSystem = require('fs');
var Path = require('path');
FileSystem.readdir(process.argv[2], function ListFiles(err, data) {
	var extention = '.' + process.argv[3];
	for (var counter = 0 ; counter < data.length ; counter++)
		{
			if(extention === Path.extname(data[counter]))
			{
				console.log(data[counter]);
			}
		}
	});