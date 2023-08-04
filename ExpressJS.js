const express = require("express");
const app = express();

app.get("",(req,res)=>
{
    console.log("User entered=>",req.query.name);
    res.send("welcome " + req.query.name);
    // res.send("welcome to home page.");
});

app.get("/admin",(req,res)=>
{
    res.send("welcome admin!");
});

app.listen(5003,()=>
{
    console.log("server is running");
});