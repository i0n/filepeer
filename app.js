var PeerServer = require('peer').PeerServer;
var fs = require('fs');

var server = new PeerServer({
  port: 9000,
  ssl: {
    key: fs.readFileSync('./ssl/key.key'),
    certificate: fs.readFileSync('./ssl/cert.crt')
  }
});
