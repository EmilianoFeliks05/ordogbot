const Discord = require('discord.js');

module.exports = {
  name: "help", 
  alias: [], 

execute (client, message, args){

 const embed = new Discord.MessageEmbed()
          .addField('kick', `Expulsa al miembro que menciones.
          Ej: +kick @user`, true)
          .addField('clear', `Borra mensajes dependiendo de la cantidad que menciones. 
          Ej: +clear {numero menor a 100}`, true)
          .addField('ban', `Banea a el usuario que menciones.
          Ej: +ban @user`, true) 
          .addField('afk', `Te pone en modo afk y avisa a los que te mencionen que no estas disponible
          Ej: +afk toy cagando`, true)
          .addField('avatar', `Amplía el avatar de la persona que menciones o en su defecto, el tuyo
          Ej: +avatar @user.
          +avatar`, true)
          .addField('say', `El bot repite el mensaje que escribas
          Ej: +say Hola mundo!`, true)
          .addField('jumbo', `Amplía el emoji que menciones.
          Ej: +jumbo {emoji}`, true)
             
          .setDescription(`
            **Prefix: +**
              <a:jojodance2:797147641905545256> Bot creado por Zim <a:jojodance2:797147641905545256>
 `, `https://images-ext-2.discordapp.net/external/UMXDhE6iYsANRKSRZmygtDIn-Q2tkjROFd6TgDdbW0w/%3Fsize%3D2048/https/cdn.discordapp.com/icons/934934171049140234/ff6df7769f56bd60ea6364d22fa0d2cb.png?width=450&height=450`)
          .setColor(`#000000`)
          .setFooter(`Zim Oficial 2022`)
          .setAuthor('x.Zim#7278', 'https://images-ext-2.discordapp.net/external/UMXDhE6iYsANRKSRZmygtDIn-Q2tkjROFd6TgDdbW0w/%3Fsize%3D2048/https/cdn.discordapp.com/icons/934934171049140234/ff6df7769f56bd60ea6364d22fa0d2cb.png?width=450&height=450')        
     message.channel.send(embed)
 } 

 }

 