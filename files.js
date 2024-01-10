const fs=require('fs');

//readingfile
// fs.readFile('./aman1.txt',(err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data.toString());
// })

//writing files

// fs.writeFile('./aman1.txt','hlo this is aman',()=>{
//     console.log("file is written");
// })


//Directories

// if(!fs.existsSync('./assests')){
//   fs.mkdir('./assests',(err)=>{
//     if(err) console.log(err);
//     console.log('folder created');
//   })
// }
// else{
//   fs.rmdir('./assests',(err)=>{
//     if(err){
//       console.log(err);
//     }
//     else console.log("folder deleted");
//   })
// }

//delete files

if(fs.existsSync('./aman.txt')){
  fs.unlink('./aman.txt',(err)=>{
    if(err){
      console.log(err);
    }
    console.log("file deleted");
  })
}


