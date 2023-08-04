const fs=require("fs");
/* fs.mkdir('IT-B Dept',
()=>
{
    console.log("folder created");
}); */

fs.writeFile("IT-B Dept/IT-B.txt","This is asynchronous file..",
()=>
{
    console.log("file created");
});

/* fs.appendFile("IT-B Dept/IT-B.txt", " Hellooo",()=>{ console.log("file appended");});
fs.rename("IT-B Dept/IT-B.txt", "IT-B Dept/my_IT-B.txt", ()=>{ console.log("file renamed");});

x=fs.readFile("IT-A Dept/my_IT-A.txt","utf-8", ()=>
{ 
    console.log("Read file");
    console.log(x);
}); */
console.log("xyz");

