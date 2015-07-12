var fileSystem = require('fs');
var bufferObject = fileSystem.readFileSync(process.argv[2]);
var stringObject = bufferObject.toString();
var values = stringObject.split('\n');
console.log(values.length-1);

var fs = require('fs')
    
    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
