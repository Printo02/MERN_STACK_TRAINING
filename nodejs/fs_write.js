var fs = require('fs');

fs.writeFile("file1.txt","This file is created by writefile() method",
(err)=>{
if(err){
console.log(err)
}
console.log('File created.....')
}
)