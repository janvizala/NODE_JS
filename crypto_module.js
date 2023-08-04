const c = require('crypto');
const ps = require('prompt-sync');
const prompt = ps();

let secret = prompt("Enter Text: ");
const hash = c.createHmac('sha256',secret).digest("hex");
console.log(hash);

/*
Crypto module:-

=> Without digest function hash code is not printed properly. 
*/