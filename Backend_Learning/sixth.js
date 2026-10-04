// const fs = require('fs');
import fs from "fs";

fs.writeFileSync("test.txt" ,"Node js complete course 2026" );
const read = fs.readFileSync("test.txt" , "utf-8");

console.log(read);