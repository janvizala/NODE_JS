/* write ES6 script to find perimeter,area of triangle and rectangle using fat arrow function and also 
pass default perameters of input */

let perimeterofrectangle = (l,b) =>{
    return 2*(l+b);
}
console.log('Perimeter of rectangle: '+perimeterofrectangle(10,5));

let areaofrectangle = (length,breath) =>{
    return length*breath;
}
console.log('Area of rectangle: '+ areaofrectangle(7,5));

let areaoftriangle = (base,height) =>{
    return 0.5*base*height;
}
console.log('Area of triangle: '+ areaoftriangle(10,5));