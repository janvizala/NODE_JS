const fs = require("fs");

const rstream = fs.createReadStream("new1.txt");
const wstream = fs.createWriteStream("new3.txt");

rstream.pipe(wstream);
wstream.on("finish",()=>
{
    console.log("Data written succesfully.");
});