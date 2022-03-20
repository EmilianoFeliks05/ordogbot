const Discord = require('discord.js');

module.exports = {
  name: "ban", 
  alias: [], 

execute (client, message, args){

  var botperms = message.guild.me.hasPermission("BAN_MEMBERS")
  if(!botperms) return message.channel.send("No tengo permisos suficientes")

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("No tienes permisos suficientes")
  
  const usuario = message.mentions.members.first()
  if(!usuario) return message.channel.send("Debes mencionar a un usuario para banear")
  if(usuario.id === message.author.id) return message.channel.send("No te puedes banear a ti mismo")

  let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razón sin especificar"
  if(!razon) return message.channel.send(`${user.username} Escribe una razón.`)
 
 
 usuario.ban({ reason: razon})

let server = message.guild
let user = message.authhor

  const embed = new Discord.MessageEmbed()
  .setColor("#00000")
  .setTitle("Se ha baneado a un usuario")
  .setThumbnail(message.author.displayAvatarURL({ dynamic : true}))
  .addField(`> Usuario`, usuario)
  .addField(`> Razon`, razon)
  .addField(`> Por el moderador`, message.author.username)

  message.channel.send(embed)
 }

} 