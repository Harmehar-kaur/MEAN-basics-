const express = require('express'); 
const app = express(); 
const port = 8000 || process.env.port; 

app.use((req,res,next) => {
    console.log('First Middleware'); 
    // next(); 
});


module.exports = app; 