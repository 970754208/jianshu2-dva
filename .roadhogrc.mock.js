import fs from 'fs';
import path from 'path';

const mock = {};
fs.readdirSync(path.resolve(__dirname + '/mock')).forEach(fileName => {
    if(fileName.match(/\.js$/)) {
        Object.assign(mock, require('./mock/' + fileName))
    }
})

export default mock;
