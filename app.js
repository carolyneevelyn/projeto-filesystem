var fs = require('fs');

fs.readFile('computador.txt', 'utf8', function(err, data) {
    console.log(data);
});

