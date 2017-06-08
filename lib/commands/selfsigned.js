'use strict';

module.exports = {
  name: 'selfsigned',
  description: 'Generate Selfsigned Cert files, according to SSL config in .ember-cli, default to ssl/server.key and ssl/server.crt',
  works: 'insideProject',

  run: function(options) {
    return require('../tasks/selfsigned')(options);
  }
};
