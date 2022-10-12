const fs = require("fs")

let result = fs.readFile('readme.html', function (err, data) {
  if ( err ) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})
console.log(result);