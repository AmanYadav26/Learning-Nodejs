const fs=require('fs');
const stream=fs.createReadStream('./aman1.txt');
stream.on('data',(chunk)=>{
    console.log("NEW CHUNK--->");
    console.log(chunk.toString());
})