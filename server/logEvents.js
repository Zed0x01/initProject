const {format} = require('date-fns');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents= async (message,fileName)=>{
    const date = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${date}\t${message}\n`;
    try{   
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'));
        }
        await fsPromises.appendFile((path.join(__dirname,'logs',fileName)),logItem);
    }catch(err){
        console.error(err);
    }
}

module.exports = logEvents;