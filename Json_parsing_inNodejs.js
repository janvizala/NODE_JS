// JSON Parsing in Nodejs

const student = { Dept:"IT", students:37, pass:4, fail:33};
console.log(student);
console.log(student.Dept);

console.log("----------------");
const s = JSON.stringify(student);
console.log(s);
console.log(s.Dept);

console.log("----------------");
const p = JSON.parse(s);
console.log(p);
console.log(p.Dept);