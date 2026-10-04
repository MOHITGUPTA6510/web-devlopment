// JS
// sync (serial code execution )
// async (parallel code execution )

// Normal code 
console.log("Start");

// time taking code 
setTimeout(()=>{
    for (let i =0 ; i<10 ; i++){
        console.log("Working");
    }
},0);

// normal code 
console.log("End !!");