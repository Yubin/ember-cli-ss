'use strict';

const base = require('ember-cli/lib/commands/serve');
const selfsignedTask = require('../tasks/selfsigned');

module.exports = base.extend({
  name: 'https',
  aliases: ['ss'],

  run: function(options) {
    let [sslCert, sslKey] = selfsignedTask({});
    
    options.ssl = true;
    options.sslCert = sslCert;
    options.sslKey = sslKey;

    return this._super(options);
  }
});
