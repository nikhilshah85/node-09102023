var http2 = require('http');

http2.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});

	res.write('<h1> Hello World !! </h1>');
	res.write('<h1> Hello World !! </h1>');
	res.write('<h1> Hello World !! </h1>');
	res.write('<h1> Hello World !! </h1>');
	res.write('<h2> Hello World !! </h2>');
	res.write('<h1> Hello World !! </h1>');
	res.write('<h1> Hello World !! </h1>');

	res.end();
}).listen(8888);

console.log('Server is Listening');