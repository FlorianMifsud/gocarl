const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'PSEUDOTWITCH',
    password: 'oauth:XXXXXXX'
  },
  channels: [ 'solary' ]
});

client.connect();

function ViveSolary() {
    client.say("#solary", `GO CARLJR`);
}

setInterval(ViveSolary, 1000);