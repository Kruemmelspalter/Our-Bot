const words = require("./words.json");

exports.check(var msg) {
  var i;
  for(i = 0;i<words.swearwords;i++){
    if(words.swearwords[i] in msg.content) {
      msg.delete();
    }
  }
}
