const controllers = require('./controllers');
const { logger } = require('./utils');

const log = logger('routes');

module.exports = (req, res) => {
  switch (req.url) {
    case '/': {
      log('/');
      return controllers.index(req, res);
    }
    default: {
      log('default');
      return controllers.notfound(req, res);
    }
  }
}