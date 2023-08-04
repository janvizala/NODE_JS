// wap to sort an integer array where all elements are available in file seperated by white space.
const fs=require('fs');
fs.writeFileSync("Sort_array.txt","10 30 9 5 2");

var x=fs.readFileSync("Sort_array.txt","utf-8");
console.log(x);

var y=x.split(" ");
console.log(y);

for (i in y) 
{
	y[i] = Number.parseInt(y[i]);
}

var temp = y[0];

for (i = 0; i < y.length - 1; i++) 
{
	for (j = i + 1; j < y.length; j++) 
    {
		if (y[i] > y[j]) 
        {
			var temp = y[i];
			y[i] = y[j];
			y[j] = temp;
		}
	}
}

console.log(y);