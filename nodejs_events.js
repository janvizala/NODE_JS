/*
Event Emitter class:-

=> Event Emitter is a module that facitates communication or interaction between objects in node js.
=> Event Emitter class is available in events module.
=> When an event emitter instance faces any error it emits an error event.
=> When a new listener is added 'newListener' is fired and when an listener is removed 'removeListener' is fired.
=> Event emitter provides multiple properties like 'on' and 'emit'. 'on' property is used to bind a function with the event
   and 'emit' is used to fire an event. E.g: on(event,listener) is to bind event with function listener
   and emit(event) is to fire the event.
*/

const EventEmitter = require("events");   // OR const events = require("events");
const event = new EventEmitter();         // const eventEmitter = new event.EventEmitter();
event.on("myevent",()=>
{
    console.log("My first event.");
});
event.on("myevent",()=>
{
    console.log("My first-second event.")
});
event.emit("myevent");