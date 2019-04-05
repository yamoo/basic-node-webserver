const fs = require('fs');
const path = require('path');
const { logger } = require('./utils');

const log = logger('views');

const staticPath = path.resolve(__dirname, '../static');

const readFile = filePath => () => {
  const file = path.resolve(staticPath, filePath);
  log(file);
  return fs.createReadStream(file);
};

exports.index = readFile('index.html');

exports.notfound = readFile('notfound.html');