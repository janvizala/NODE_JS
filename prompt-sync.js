const ps = require('prompt-sync');
const prompt = ps();

let name = prompt("Enter your name:");
console.log(`Your name is ${name}`);

let a = prompt("Enter value of a:");
let b = prompt("Enter value of b:");
let sum = Number(a)+Number(b);
console.log(`Addition of a & b is ${sum}`);