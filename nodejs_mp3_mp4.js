/*
const fs = require("fs");
const http = require("http");
var server = http.createServer(
    function(req,res)
    {
        if(req.url=='/')
        {
            res.writeHead(200,{'Content-Type':'audio/mp3'});
            let rstream = fs.createReadStream('audio.mp3');
            rstream.pipe(res);
            res.end();
        }
        else if(req.url=="/video")
        {
            res.writeHead(404,{'Content-Type':'video/mp4'});
            let rdstream = fs.createReadStream('video.mp4');
            rdstream.pipe(res);
            res.end();
        }
        else
        {
            res.end("Invalid Request");
        }
    }
);
server.listen(3200);
console.log("server is created");
*/



const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./video.mp4");
    rstream.pipe(res);
    rstream.on("end",()=>
    {
        res.end();
    });
    rstream.on("error",(err)=>
    {
        console.log(err);
        res.end("File not found.");
    });
});
server.listen(3300);
console.log("server created!");