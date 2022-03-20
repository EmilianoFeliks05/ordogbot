const Discord = require('discord.js');

module.exports = {
  name: "kick", 
  alias: ["expulsar"], 

execute (client, message, args){

  var botperms = message.guild.me.hasPermission("KICK_MEMBERS")
  if(!botperms) return message.channel.send("No tengo los permisos suficientes")

  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  const usuario = message.mentions.members.first()
  if(!usuario) return message.channel.send("<:mosgy_intelectual:886809245083910185> debes mencionar a un usuario para expulsarlo!!")

  let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razón sin especificar"
  if(!razon) return message.channel.send(`${user.username} Escribe una razón.`)
  


message.guild.member(usuario).kick(razon);

  let server = message.guild
  let user = message.author

    const embed = new Discord.MessageEmbed()
  .setColor("#00000")
  .setTitle("Se ha expulsado a un usuario")
  .setThumbnail(message.author.displayAvatarURL({ dynamic : true}))
  .addField(`> Usuario`, usuario)
  .addField(`> Razon`, razon)
  .addField(`> Por el moderador`, message.author.username)
  
  message.channel.send(embed)

 }

} 