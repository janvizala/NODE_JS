const express = require("express");
const app = express();

app.get("",(req,res)=>
{
    res.send("<h1>This is home page. </h1> <a href='/about'> Go to about </a>");
});

app.get("/about",(req,res)=>
{
    res.send(`<input type="text"/> <br><br>
            <button> Click Me </button> <br><br>
            <a href="/"> Go to home. </a>`);
});

app.listen(5103,()=>
{
    console.log("server is running");
});