const fs = require("fs");
fs.writeFileSync("new.txt","My File System");
fs.writeFileSync("new.txt","IT Department  "); // It will overwrite above
fs.appendFileSync("new.txt","IT Batch-A"); // It will write below above text
const buf_data=fs.readFileSync("new.txt"); 
console.log(buf_data.toString());