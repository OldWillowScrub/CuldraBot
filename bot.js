const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
  if(message.content.startsWith(prefix + "book") {
    message.channel.send('To let the bot pick a random 20/10/20 Book for you, filled with 50 different cards, type ?randombook \n\nWant your Revolt Book in one png file? type ?book2png');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
