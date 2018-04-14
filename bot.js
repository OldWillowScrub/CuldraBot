const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
