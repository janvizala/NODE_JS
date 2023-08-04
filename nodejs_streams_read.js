/*
Node JS Streams:-

=> Streams are objects that let you read data from a source or write data to a destination in contineuous fashion.
=> Streaming means listening to music or watching video in real time.
=> Operations in streams:-
   1> Readable
   2> Writable
   3> Duplex
   4> Transform 
*/

/*const fs= require("fs");
const http = require("http");
const server = http.createServer();

server.on("request",(req,res)=>
{
    var x=fs.readFile("new1.txt","utf-8", (err,data)=>
    { 
        console.log("Read file");
        res.end(data.toString());
    });
});
server.listen(5102,"127.0.0.1"); */


//Now do this program with stream.

const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request",(req,res)=>
{
    const rstream = fs.createReadStream("new1.txt");
    rstream.on("data",(chunkdata)=>
    {
        res.write(chunkdata);
        console.log(chunkdata.length);
    });
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
server.listen(5103);