const express = require('express'); 
const app = express(); 
const port = 8000 || process.env.port; 

app.use('/api/posts',(req,res,next) => {
    const posts=[
       {
        id:'ONpDNltOO4',
        title:'First-Server-Side Post',
        content:"THis is coming from the server"
       },
       {
        id:'KLzF08lvaA',
        title:'Second-Server-Side Post',
        content:"THis is coming from the server"
       }
    ]; 
    res.status(200).json({
        message:"Post fetched Successfully!", 
        posts:posts
    }); 
});


module.exports = app; 