const auth = require("./auth.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const web-request = require("./web-request.js");
const words = require("./words.json");

client.on('ready', () => {
  console.log("Logged in as" + client.user.tag + "!");
});

client.on('message', msg => {
  var i;
    for(i = 0;i<words.swearwords;i++){
      if(words.swearwords[i] in msg.content) {
        msg.delete();
      }
    }
  web-request.check(msg);
});

client.login(auth.token);
