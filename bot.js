const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";

client.on('ready', () => {
    console.log('I am ready!');
});

//BOOK HELP GUIDE
    if(msg.content === prefix + "Book") {
         msg.channel.send('To let the bot pick a random 20/10/20 Book for you, filled with 50 different cards, type ?RandomBook \n\nWant your Revolt Book in one png file? type ?book2png');

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
