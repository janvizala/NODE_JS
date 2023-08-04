//URL MODULE  => it splits up web address into readable parts , we use  ' require("url") ' to import url module.
var url= require("url");

// url.parse(address,true); if true query property will always be set to an object written bby query string modules parse method.
// if false query property on the retrun url object will be an unparsed at undecoded string.
//in short , for false argument query wil be a simple string like  "year=2023  & month=march"
// for true argument query will be entirely a json object like query:{year:'2023',month:'march'}

var addr= "http://localhost:8080/default.html?year=2023&month=march";
var q= url.parse(addr,true);
console.log(q);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

qdata=q.query;
console.log(qdata.month);