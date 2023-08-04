var abc = require('./CM_Calculator');
const ps = require('prompt-sync');
const prompt = ps();

console.log("Calculator");
console.log("___________________________________________");

console.log("1- Simple calculator , 2- scientific calculator");
let cd = prompt("Choose Calculator type:");

switch(cd)
{
    case '1':
    {
        console.log("Simple Calculator");
        console.log("___________________________________________");
        let num1 = Number(prompt("Enter your first number:"));
        let num2 = Number(prompt("Enter your second number:"));
        console.log("1- Add , 2- Sub, 3- Mul , 4- Div");
        let oper = prompt("Enter operation number:");

        switch(oper)
        {
            case '1':
                console.log(abc.x(num1,num2));
                break;

            case '2':
                console.log(abc.y(num1,num2));
                break;

            case '3':
                console.log(abc.z(num1,num2));
                break;

            case '4':
                console.log(abc.w(num1,num2));
                break;

            default:
                console.log("Please enter correct choice.");
        }
    }
    break;

    case '2':
    {
        console.log("Scientific Calculator");
        console.log("___________________________________________");
        let num = parseFloat(prompt("Enter your number:"));
        console.log("1- Sin , 2- Cos, 3- Tan , 4- Exp, 5- Log, 6- Sqrt");
        let pq = prompt("Enter operation number:");

        switch(pq)
        {
            case '1':
                console.log(abc.c((num*Math.PI)/180));
                break;

            case '2':
                console.log(abc.d((num*Math.PI)/180));
                break;

            case '3':
                console.log(abc.e((num*Math.PI)/180));
                break;

            case '4':
                console.log(abc.f(num));
                break;

            case '5':
                console.log(abc.g(num));
                break;

            case '6':
                console.log(abc.h(num));
                break;

            default:
                console.log("Please enter correct choice.");
        }
    }
    break;

    default:
        console.log("please choose valid calculator.");
        break;
}