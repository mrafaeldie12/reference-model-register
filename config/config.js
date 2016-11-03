var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'referencemodelregister'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/referencemodelregister-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'referencemodelregister'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/referencemodelregister-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'referencemodelregister'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/referencemodelregister-production'
  }
};

module.exports = config[env];
