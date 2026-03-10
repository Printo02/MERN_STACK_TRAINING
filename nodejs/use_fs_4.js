var fs = require('fs');

fs.rename('file1.txt', 'renamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});