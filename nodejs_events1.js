const EventEmitter = require("events");
const event = new EventEmitter();

event.on("myevent",(st,msg)=>
{
    console.log(`The status code for our page is ${st} and msg is ${msg}`);
});
event.emit("myevent",200,"Ok");