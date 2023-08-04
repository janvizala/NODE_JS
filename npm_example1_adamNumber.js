/* WAP to create my own module to calculate reverse of given number that module should be used to
compute all numbers in which square of reverse and reverse of square is same */

const ps = require("prompt-sync");
const chalk = require("chalk");
const prompt = ps();

function revn(num)
{
	let rev = 0;
	while (num > 0) 
    {
		rev = rev * 10 + (num % 10);
		num = parseInt(num / 10, 10);
	}
	return rev;
}

function sq(num) 
{
	return num * num;
}

function check(num) 
{
    console.log("Given number: "+num);
	let a = sq(num);
    console.log("Square of given number: "+a);
    console.log("Reverse of given number: "+revn(num));
	let b = sq(revn(num));
    console.log("Square of reverse number: "+b);

	if (a == revn(b)) {
		return true;
	} else {
		return false;
	}
}

let num = prompt("Enter Number :- ");

if (check(num)) 
{
	console.log(chalk.rgb(0,255,0)(`${num} is Adam Number.`));
} 
else 
{
	console.log(chalk.rgb(255,0,0)(`${num} is not Adam Number.`));
}