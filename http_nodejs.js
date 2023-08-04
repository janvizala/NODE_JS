const http = require('http');
const server = http.createServer(
    function(req,res){
        res.write("Welcome!");
        res.end();
    }
);
server.listen(5000);
console.log("server is running");