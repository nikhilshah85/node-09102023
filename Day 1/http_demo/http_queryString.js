var myHttp = require('http');

myHttp.createServer(function(req,res) {

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Add something to url with \yourtext and press enter</h1>");
    res.write("<h3> " + req.url[0] + "</h3>");
    console.log(req.url[0]);
    res.end();
    
}).listen(5000);
console.log('Server listening on 5000');