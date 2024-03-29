const auth = require("./auth.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const words = require("./words.json");
const user_data = require("./user-data.json");
const levels = require("./levels.json");

function giveXP(username, amount) {
  user_data[username].xp += amount;
  if(user_data[username].xp >= levels[user_data[username].levels + 1]){
    user_data[username].levels += 1;
    user_data[username].xp -= levels[user_data[username].level];
 } 
} 

client.on('ready', () => {
  console.log("Logged in as" + client.user.tag + "!");
});

client.on('message', msg => {
  //swearwords
  var i;
  for(i = 0;i<words.swearwords;i++){
    if(words.swearwords[i] in msg.content) 
      msg.delete();
      return;
    }
  }
  //levels
  giveXP(msg.author.username, msg.content.length);
  if(msg.content.startsWith("!")){
    var cmd = msg.content.substr(1).split(" ")[1];
    switch(cmd) {
      case "level" :
        msg.reply("Your XP: "+user-data[username].xp + "\r\nYour level: "+user-data[username].level+"\r\nYou need another "+ levels[user-data[username].level + 1] - user-data[username].xp + " XP to reach the next level.");
        break;
      default:
        break;
    }
  }
 } catch(err) {
   console.log(err);
 }
});

client.on("guildMemberAdd", member => {
  user_data[member.user.username] = {"xp":0,"level":0};
});

client.login(auth.token);
