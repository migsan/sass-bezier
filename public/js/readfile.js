var fs = require('fs');

module.exports = function() {
    readSassFile();
}

function readSassFile () {
    fs.readFile('./public/scss/components/_styles.scss', 'utf8', function (err, data) {
      if (err) {
        console.log(err);
        return;
      }

      regexArray(data);
    });
}

function regexArray (data) {

    var re = /\.\S*/g;
    var str = '.className .hola { } .hello #aqui estoy .gika';
    var m;
    var classArray = [];

    while ((m = re.exec(data)) !== null) {
        if (m.index === re.lastIndex) {
            re.lastIndex++;
        }
        classArray.push(m[0]);
    }

    console.log(classArray);
}
