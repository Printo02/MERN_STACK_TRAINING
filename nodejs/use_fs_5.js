var fs = require('fs');

fs.unlink('renamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
