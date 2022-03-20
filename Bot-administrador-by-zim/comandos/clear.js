const Discord = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["nuke"], 

execute (client, message, args){

  const botperms = message.guild.me.hasPermission("MANAGE_MESSAGES")
  if(!botperms) return message.channel.send("No tengo permisos suficientes")

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("No tienes los permisos suficientes")
  
  const valor = parseInt(args[0]);
  if(!valor) return message.channel.send("Debes de escribir una cantidad de mensajes a eliminar.")
  if(valor >= 100) return message.channel.send("Solo puedo eliminar 99 mensajes a la vez!!")

  message.channel.bulkDelete(valor +1);



const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`)
  .setTitle(`Se han nukeado ${valor} mensajes`)
  .setTimestamp()
  .setColor("FF0000")
  .setThumbnail(message.author.displayAvatarURL({ dynamic : true}))
  .setImage("https://images-ext-2.discordapp.net/external/5FeaNg5Gdtf5lPbNGXIhm0nxVW-yH6_I34Kj-TROGeQ/https/i.pinimg.com/originals/c2/fb/aa/c2fbaab1f322e80997fe25874bd8acaa.gif?width=333&height=250")

  message.channel.send(embed)
 }

} 