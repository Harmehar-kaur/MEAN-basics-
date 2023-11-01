//git push 'git branch -M main' and 'git push -u origin main'. and add remote 'git remote add origin https://github.com/Harmehar-kaur/MEAN-basics-.git'


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