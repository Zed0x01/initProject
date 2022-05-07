const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const logEvents = require('./logEvents');
const eventEmitter = require('events');
class Emmiter extends eventEmitter{};
const myEmmiter = new Emmiter();
const PORT = 3500;

myEmmiter.on('log',(msg,fileName)=> logEvents(msg,fileName));

const serveFile= async(filePath,contentType,response)=>{
    try{
        const rawData= await fsPromises.readFile(
            filePath,
            !contentType.includes('image') ? 'utf8' : ''
        )
        const data = contentType ==='application/json' ? JSON.parse(rawData) : rawData ;
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200 ,
            {'Content-Type' : contentType}
        )
        response.end(
            contentType === 'application/json' ? JSON.stringify(rawData) : rawData 
        )
    }catch(err){
        console.log(err);
        myEmmiter.emit('log',`${err.name}: ${err.message}`,'errLog.txt');
        response.statusCode = 500;
        response.end();
    }
}

const server = http.createServer((req,res)=>{
    console.log(`${req.socket.remoteAddress}  ${req.url}  ${req.method}`);
    myEmmiter.emit('log',`${req.socket.remoteAddress}\t${req.url}\t${req.method} StatusCode:${req.statusCode}`,'reqLog.txt');
    const ext = path.extname(req.url);
    res.statusCode
    let contentType;
    switch(ext){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.mp4':
            contentType = 'image/mp4';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType= 'text/html';
    }

    let filePath = 
        contentType ==='text/html' && req.url ==='/'
            ? path.join(__dirname,'..','dist','index.html')
            : path.join(__dirname,'..','dist',req.url)
            
    
    if(!ext && req.url.slice(-1) !== '/') filePath += '.html';
    
    const fileExist = fs.existsSync(filePath);
    console.log(fileExist);

    if(fileExist){
        serveFile(filePath,contentType,res);
    }else{
        serveFile(path.join(__dirname,'..','dist','404.html'),'text/html',res);
    }
});


server.listen(PORT,()=>{
    console.log(`Server Is Listen on Port: ${PORT}`);
})