var myHttp = require('http'); // imports a package // this is an module and a import statement

myHttp.createServer(function(request,response){
	response.write('Hello and Welcome To Node Development');
	response.write('\n Hello My Name is Nikhil');

		//read a query string
		//send a file, a html page, do validations, aurhtntication etc.

	response.end();
}).listen(9999);

console.log('Server running on : http:\\localhost:9999');