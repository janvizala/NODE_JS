const os= require("os");

console.log(os.arch());

const FreeMemory= os.freemem();
console.log(FreeMemory);
console.log(`${FreeMemory/1024/1024/1024}`);

console.log(`${os.totalmem()/1024/1024/1024}`);

console.log(os.hostname());

console.log(os.tmpdir());

console.log(os.platform());


