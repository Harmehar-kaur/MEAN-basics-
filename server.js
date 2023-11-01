//imports 
const http = require('http'); 
const app = require('./backend/app');

//defining variables 
const port =3000 || process.env.port; 

//setting the port 
app.set('port',port); 
const server = http.createServer(app); 

//listening to the server 
server.listen(port); 