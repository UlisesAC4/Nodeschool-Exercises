var Path = require('path');
var module6 = require('./module6');

var list = module6(process.argv[2], process.argv[3], callback);
for (var i = 0; i <= process.argv.length-1; i++) {
	if(Path.extname(list[i]) === ('.'+process.argv[2]))
	{
		console.log(list[i]);
	}
};