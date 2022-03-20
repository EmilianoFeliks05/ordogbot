const Discord = require('discord.js');

module.exports = {
  name: "jumbo", 
  alias: ["emoji"], 

execute (client, message, args){

 if(!args[0]) return message.channel.send("Debes escribir un emoji!!")
 let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
 if(!emoji) return message.channerl.send("Parece que no existe ese emoji")

 message.channel.send(emoji.url) 

 }

} 