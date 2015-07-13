var Http = require('http');
var Concat = require('concat-stream');

function getLine (Url, callback)
{
	Http.get(Url, function (response) {
	response.pipe(Concat(function (data) {
		data = data.toString();
		console.log(data);
		if (callback)
		{
			callback();
		}
	}))
});
}

getLine(process.argv[2], function(){
	getLine(process.argv[3], function(){
		getLine(process.argv[4])
	})
});

/*
var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

*/