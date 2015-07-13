var Http = require('http');
var Concat = require('concat-stream');
var Url = process.argv[2];

Http.get(Url, function (response) {
	response.pipe(Concat(function (data) {
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
});

/*
var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

*/