/* =>  "npm i chalk" in terminal for install chalk
=> "npm i chalk@4.1.2" in terminal for install chalk version 4.1.2 */

var chalk = require('chalk');
console.log(chalk.blue.bgRed("Hello World"));

/* => "npm i validator" in terminal for install validator */

var v = require('validator');
console.log(v.isEmail("abc@gmail.com"));
console.log(v.isEmail("abc@gmailcom"));
console.log(v.isHexadecimal("ABZ"));
console.log(v.isHexadecimal("AB"));

res = v.isHexadecimal("ABZ");
console.log(res?chalk.green(res):chalk.red(res));
console.log(res?chalk.green(res):chalk.rgb(255,0,0)(res));

res = v.isHexadecimal("AB");
console.log(res?chalk.rgb(0,255,0)(res):chalk.rgb(255,0,0)(res));