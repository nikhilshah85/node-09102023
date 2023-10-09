var httpObj = require('http');

httpObj.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});

    res.write('<h1> This is from VS Code Development </h1>');
    res.write('<h3 style="text-align:center"> My Name is Nikhil </h1>');

    res.write("<input tyupe='text' name='txtName' />");

    res.end();
}).listen(8585);

console.log('Server listening on 8585');