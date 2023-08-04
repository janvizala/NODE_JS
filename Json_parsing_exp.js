/* Take one object and convert it into string. Add that data into another JSON file.
   Read that file again and convert it back into JSON object.
*/

const fs = require("fs");

const student = { Dept:"IT", students:37, pass:4, fail:33};
console.log(student);
console.log("----------------");
const s = JSON.stringify(student);
console.log(s);
console.log(s.Dept);
console.log("----------------");

fs.writeFile("Json_parsing_exp.json",s,
()=>
{
    console.log("file created");
});

fs.readFile("Json_parsing_exp.json", (err,data)=>
{ 
    console.log("Read file");
    console.log(data.toString());
});

// var p = JSON.parse(s);
// console.log(p);
// console.log("----------------");

// fs.appendFile("Json_parsing_exp.json",p,(err)=>
// { 
//     console.log("file appended");
//     console.log(err);
// });