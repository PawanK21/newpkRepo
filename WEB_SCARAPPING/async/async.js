let fs = require('fs');
fs.readFile('sync.js', cb);
console.log('before');

function cb(err, content) {
  if(err) {
    console.log(err);
  }
  else {
    console.log(content + "");
  }
}

console.log('after');