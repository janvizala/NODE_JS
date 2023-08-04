var http = require("http");
var server = http.createServer(
    function(req,res)
    {
        if(req.url=='/')
        {
            res.writeHead(200,{"content-type":"text/html"});
            res.write("<p> This is home page </p>");
            res.end();
        }
        else if(req.url=="/student")
        {
            res.writeHead(404,{"content-type":"text/plain"});
            res.write("<p> This is Student page </p>");
            res.end();
        }
        else
        {
            res.end("Invalid Request");
        }
    }
);
server.listen(5100);
console.log("server is created");