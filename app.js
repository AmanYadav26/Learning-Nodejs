const express=require('express');

const app=express();

app.set('view engine','ejs'); 


app.get('/',(req,res)=>{
    const Blogs=[
        {title:"Day-1",snippet: "Hlo this is aman hlo this is aman"},
        {title:"Day-2",snippet: "Hlo this is aman hlo this is aman"},
        {title:"Day-3",snippet: "Hlo this is aman hlo this is aman"}
    ]
    res.render('index',{title : 'Home', Blogs});
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

app.listen(3000);