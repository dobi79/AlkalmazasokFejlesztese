const fs = require('fs'); //filesystem libary
const jimp = require('jimp');
const DataStore = require('nedb-promise');

const db = new DataStore({
    fileName : "image.nedb",
    autoload: true,
});

function readdir(path) {
    return new Promise( function(resolve, reject) {
        fs.readdir('images/', function(err, files) {
        if(err) throw err;
        else resolve(files);
        });
    });
}

function processFile(fileName) {
    return jimp.read(path + fileName).then(image => {
        const {width, height} = image.bitmap;
        return db.insert.({fileName,width,height});
    })
    .then(insertImage => {
        image.resize(100, jimp.AUTO);
    })
}

db.remove({}, {multi: true}).then(numRemoved => {
    return readdir(path);
    }).them(files => {
       return Promise.all(files.map(fileName => processFile(fileName)))
    }).then(() => {
        console.log("Mindennek vege");
    }

        files.map(fileName => {
                jimp.read(`images/${fileName}`, function (err, image) {
                    if(err) throw err;
                 //const width = image.bitmap.width;
                    // const height = image.bitmap.height;
                    const {width, height} = image.bitmap;
                // console.log(width, height);
                db.insert({fileName, width, height}, function (err, insertImage) {
                    // console.log(insertImage);
                    image.resize(100, jimp.AUTO);
                    image.write(`converted/${insertImage._id}.png`, function (err) {
                        if(err) throw err;
                        console.log(fileName, 'feldolgozva');
                    })
                });
                });
            });
    });