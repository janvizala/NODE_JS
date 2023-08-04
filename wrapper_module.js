/*
 Module Wrapper Function:-

=> In nodejs all files are called as modules and all variables & functions are private.
=> since one wrapper function works by default on nodejs module.
=> Behind the scene, nodejs code is wrapped up in an anonymous function and that func is called as module wrapper func.
=> So inside wrapper func, each member becomes private in that file.

*/

(function(module,exports,require,__dirname,__filename)
{
    const name="Jainish";
    console.log(name);
    
}
)();
//console.log(name);   If this is written outside function it will show error.
console.log(__dirname);
console.log(__filename);