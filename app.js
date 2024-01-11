const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Blog=require('./blogs');
const { buildErrorMessage } = require('vite');
app.set('view engine','ejs'); 

//middleware and static files
 app.use(express.static('public'));
 mongoose.connect('mongodb://localhost:27017/node-tut')
 .then((result)=> app.listen(3000))
 .catch((err)=>console.log(err));

 


app.get('/',(req,res)=>{
   Blog.find().sort({createdAt : -1})
   .then((result)=>{
      res.render('index',{title:'All-Blogs',Blogs:result});
   }).catch((err)=>{
    console.log(err);
   })
})




app.get('/about',(req,res)=>{
    res.render('about',{title : 'About'});
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title : 'Create new blog'});
})
app.use((req,res)=>{
    res.status(404).render('404',{title : '404'});
})



// app.get('/',(req,res)=>{
//     res.sendFile('./views/index.html' , {root:__dirname});
// })
// app.get('/about',(req,res)=>{
//     res.sendFile('./views/about.html', {root:__dirname});
// })
// //redirect
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// })

