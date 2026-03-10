var fs = require('fs');
fs.appendFile("file1.txt","This is updated content by  appendFile() method",
(err)=>{
if(err){
console.log(err)
}
console.log('File updated.....')
}
)