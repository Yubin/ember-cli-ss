/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-selfsigned',
  includedCommands: function() {
    return {
      selfsigned: require('./lib/commands/selfsigned'),
      https: require('./lib/commands/https'),
    }
  },
};
