import {EventEmitter} from "node:events";
const task = new EventEmitter();

// Register listener
task.on("greet",(name)=>{
    console.log('hello, ${name}! Welcome to the session.');
});
task.on("exit",(reason) => {
    console.log('session ending. Reason: ${reason}');
});
task.on("start",(course =>{
    console.log (`${course} started`);
}));
//Emit (trigger) events
task.emit("greet","student");
task.emit("exit","class complete");
task.emit("start","fsd")