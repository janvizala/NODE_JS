// WAP to make a calculater using custom module. Make a drop down where users select if we want normal calculator or scientific calculator.

const add=(a,b) =>
{
    return a+b;
}

const sub=(a,b) =>
{
    return a-b;
}

const mul=(a,b) =>
{
    return a*b;
}

const div=(a,b) =>
{
    if(b==0)
    {
        console.log("Cannot divide by zero!");
    }
    else
    {
        return a/b;
    }
}

const sin=(p)=>
{
    return Math.sin(p);
}
  
const cos=(p)=>
{
    return Math.cos(p);
}
  
const tan=(p)=> 
{
    return Math.tan(p);
}
  
function exp(p) 
{
    return Math.exp(p);
}
  
function log(p)
{
    return Math.log(p);
}

function sqrt(p)
{
    return Math.sqrt(p);
}
  
module.exports.x = add;
module.exports.y = sub;
module.exports.z = mul;
module.exports.w = div;
module.exports.c = sin;
module.exports.d = cos;
module.exports.e = tan;
module.exports.f = exp;
module.exports.g = log;
module.exports.h = sqrt;