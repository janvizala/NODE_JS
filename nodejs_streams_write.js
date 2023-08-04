const fs = require("fs");
const wstream =fs.createWriteStream("new2.txt");

wstream.write("Hi ");
wstream.write("Welcome ");
wstream.write("IT-A Dept.");

wstream.on("finish",()=>
{
    console.log("work is done.");
});
wstream.end();