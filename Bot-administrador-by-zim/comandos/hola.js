const Discord = require('discord.js');

module.exports = {
  name: "hola", 
  alias: [], 

execute (client, message, args){

  message.channel.send('Hola, que tal!')

 }

} 