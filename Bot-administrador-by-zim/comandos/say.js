const Discord = require('discord.js');

module.exports = {
  name: "say", 
  alias: [], 

execute (client, message, args){

  const text =args.join(' ')
  

  if(!text) return message.channel.send("No introduciste ningun texto para decir")

  message.channel.send(text)
  


 }

} 