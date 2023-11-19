// atlas password 
// Wsv2W2u1dAPapSUi

// importing required modules 
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 

//setting up body parser for middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
})); 

//for cors 
app.use((req,res,next) =>{
    res.setHeader(
        'Access-Control-Allow-Origin',
        '*'
        );
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type,Accept'
        ); 
    res.setHeader(
        'Access-Control-Allow-Methods', 
        'GET, POST, PATCH,DELETE,OPTIONS'
        ); 
    next(); 
}); 

//post request for posting 
app.post('/api/posts',(req,res,next)=>{
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added Successfully!'
    }); 
});

app.get('/api/posts',(req,res,next) => {
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