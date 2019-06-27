var glob = require('glob');

var wd = process.argv[2] || process.cwd();
var ext = process.argv[3] || "js"; 
var search = `${wd}/\*.${ext}`; 
console.log(search);
glob(search,{}, function (er, files) {
  // files is an array of filenames.
  console.log(files);
})
