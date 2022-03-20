const Discord = require('discord.js')
const client = new Discord.Client()
const qdb = require('quick.db')
const keepAlive = require('./server.js');
const express = require("express")().get("/", (req,res)=>res.send("Bot en Linea!")).listen(3000)

const fs = require('fs')
let { readdirSync } = require('fs')

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command =require(`./comandos/${file}` );
  client.commands.set(command.name, command);
}


client.on('ready' , () => {
  function presence() {
    client.user.setPresence({
      status: 'idle',
      activity: {
        name: 'kekht arakh- swordman',
        type: 'LISTENING'
      }
    })
  }
  presence();
  console.log('bot encendido')
})

client.on('message', async (message) =>{

let prefix = '+'
  
  if(message.author.bot) return;

  ///afk///

 if(qdb.has(`afk-${message.author.id}+${message.guild.id}`)){
   await qdb.delete(`afk-${message.author.id}+${message.guild.id}`)
   message.channel.send(`Bienvenido ${message.author}, he removido tu estado AFK`)
 }
 
 if(message.mentions.members.first()){
   const info = qdb.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`)
   if(qdb.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)){
     message.channel.send(`${message.author}, ${message.mentions.users.first().username} está en modo AFK\nMotivo: ${info}`)
   }
 }
  ///afk///
  
  if(!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.author
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

   let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if(cmd){
    cmd.execute(client, message, args)
  }
})


const mySecret = process.env['TOKEN']
client.login(mySecret) 