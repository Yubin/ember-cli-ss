/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-ss',
  includedCommands: function() {
    return {
      selfsigned: require('./lib/commands/selfsigned'),
      https: require('./lib/commands/https'),
    }
  },
};
