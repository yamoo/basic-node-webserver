const http = require('http');
const routes = require('./routes');

const port = process.env.PORT || 3000;

const main = (req, res) => routes(req, res);

const server = http.createServer(main);

server.listen(port);
