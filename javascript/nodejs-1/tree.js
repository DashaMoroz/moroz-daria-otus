const fs = require('fs');
const path = require('path');

const getFiles = (dir, done) => {
    let results = {"files": [], "dirs": []};

    fs.readdir(dir, (err, list) => {
        if (err) return done(err);
        let pending = list.length;
        if (!pending) return done(dir, results);

        list.forEach((file) => {
            file = dir + '/' + file;
            fs.stat(file, (err, stat) => {
                if (stat.isDirectory()) {
                    getFiles(file, (err, ress) => {
                        ress.files.forEach((res) => {
                            results.files.push(res);
                        });
                        if (!--pending) {
                            results.files.forEach((dirn) =>{
                                if (!results.dirs.includes(path.dirname(dirn))){
                                    results.dirs.push(path.dirname(dirn));
                                }
                            })
                            done(null, results)
                        };
                    });
                } else {
                    results.files.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};


getFiles(process.argv[2], (err, results) => {
    if (err) throw err;
    console.log(results);
});
