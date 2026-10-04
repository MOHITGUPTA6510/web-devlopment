import eventE from "events";

const event = new eventE();

event.on("Hello",()=>{
    console.log("Namaste sabko")
});

event.emit("Hello");