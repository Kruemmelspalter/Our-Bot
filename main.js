const auth = require("./auth.json");
const words = require("./words.json")
const Discord = require('discord.js')
const client = new Discord.Client()

const request = require('request');

client.on('ready', () => {
  console.log("Logged in as" + client.user.tag + "!");
});

client.on('message', msg => {
  if msg.content.startsWith("!web-request"){
    var keyword = msg.substr(13).split(" ");
    var keyword_processed = keywords[0];
    for(i = 1;i<keyword.length();i++){
      keyword_processed = keyword_processed +"-" +keyword[i];
    }
    request('https://www.google.de/search?q=' + keyword, function(err, res, body) {
       result ="x-y" ;//x-y durch result ersetzen
      msg.reply(result);
    });
  }
});

client.login('token');
