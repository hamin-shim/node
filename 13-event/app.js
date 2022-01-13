const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("ellie", (args) => {
  console.log(args);
});

emitter.emit("ellie", { message: 1 });
