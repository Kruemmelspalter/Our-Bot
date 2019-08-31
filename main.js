const auth = require("./auth.json");
const words = require("./words.json")
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log("Logged in as" + client.user.tag + "!");
});

client.on('message', msg => {
  var i;
  for(i = 0; i<words.swearwords.length();i++){
  	if (words.swearwords[i] in msg.content){
  		msg.delete();
	 }
  }
});

client.login('token');