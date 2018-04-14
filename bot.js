
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";

client.on('ready', () => {
    console.log('I am ready!');
});

bot.user.setGame(' Type ?Card for help')

client.on('message', message => {
  if (message.content.startsWith(prefix + "Book") {
     message.channel.send('To let the bot pick a random 20/10/20 Book for you, filled with 50 different cards, type ?RandomBook');
}
  if (message.content.startsWith(prefix + "book") {
     message.channel.send('To let the bot pick a random 20/10/20 Book for you, filled with 50 different cards, type ?randombook');
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
