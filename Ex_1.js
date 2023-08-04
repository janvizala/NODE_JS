var fs=require('fs');
fs.mkdirSync('IT-A Dept');

fs.writeFileSync("IT-A Dept/IT-A.txt","Welcome to IT-A!!");

fs.appendFileSync("IT-A Dept/IT-A.txt", " Hellooo");
fs.renameSync("IT-A Dept/IT-A.txt", "IT-A Dept/my_IT-A.txt");

x=fs.readFileSync("IT-A Dept/my_IT-A.txt","utf-8");
console.log(x);

fs.unlinkSync("IT-A Dept/my_IT-A.txt");
fs.rmdirSync("IT-A Dept");
console.log("folder deleted!!");
