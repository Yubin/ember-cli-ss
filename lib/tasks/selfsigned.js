'use strict';

const fs = require('fs');
const path = require('path');
const selfsigned = require('selfsigned');

function _writeFile(fileName, content) {
  let dir = path.dirname(fileName);

  try {
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(fileName, content);
    console.log(fileName + ' generated');
    return;
  } catch (e) {
    return e;
  }
}

module.exports = function(options) {
  let emberCliConf = '.ember-cli';
  let dirName = 'ssl';
  let crtName = 'tmp/server.crt';
  let keyName = 'tmp/server.key';

  if (fs.existsSync(emberCliConf)) {
    let emberCliJson = {};
    try {
      emberCliJson = JSON.parse(fs.readFileSync(emberCliConf, 'utf8'));
    } catch (e) {
      console.error(e);
    }

    if (emberCliJson['ssl-cert']) {
      crtName = emberCliJson['ssl-cert'];
    }

    if (emberCliJson['ssl-key']) {
      keyName = emberCliJson['ssl-key'];
    }
  }

  if (!fs.existsSync(crtName) && !fs.existsSync(keyName)) {
    let attrs = [];
    let pems = selfsigned.generate(null, { clientCertificate: true, algorithm: 'sha256', keySize: 2048, days: 365 });

    _writeFile(crtName, pems.clientcert);
    _writeFile(keyName, pems.clientprivate);
  } else {
    console.log(crtName + ' and ' + keyName + ' exist.');
  }

  return [crtName, keyName];
};
