const auth = require("./auth.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const swearwords = require("./swearwords.js");
const web-request = require("./web-request.js");

client.on('ready', () => {
  console.log("Logged in as" + client.user.tag + "!");
});

client.on('message', msg => {
  swearwords.check(msg);
});

client.login('token');
