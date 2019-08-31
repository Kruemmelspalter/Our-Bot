const auth = require("./auth.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const swearwords = require("./swearwords.js");
const web-request = require("./web-request.js");

client.on('ready', () => {
  console.log("Logged in as" + client.user.tag + "!");
});

client.on('message', msg => {
  swearwords.check(msg);
  web-request.check(msg);
});

client.login(auth.token);
