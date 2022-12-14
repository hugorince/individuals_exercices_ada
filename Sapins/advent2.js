const fs = require('fs')
fs.readFile('Input2.txt', (err, data) => {
    if (err) throw err;
    
    
    console.log(data.toString());

})