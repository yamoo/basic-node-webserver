const views = require('./views');
const { logger } = require('./utils');

const log = logger('controllers');

exports.index = (req, res) => {
  log('index');
  res.writeHead(200, { 'Content-type': 'text/html' });
  views.index().pipe(res);
};

exports.notfound = (req, res) => {
  log('notfound');
  res.writeHead(200, { 'Content-type': 'text/html' });
  views.notfound().pipe(res);
};