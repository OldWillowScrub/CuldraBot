const Discord = require("discord.js");
const bot = new Discord.Client();

const fs = require("fs");
const config = JSON.parse(fs.readFileSync(".config.json", "utf8"));

bot.on("ready", function() {
  console.log(`Read as: ${bot.user.tag}`)
})

bot.on("message", function(msg){
  if(msg.author.bot) {
    return;
  }

    bot.user.setGame(' Type ?Card for help')

  //BOOK HELP GUIDE
    if(msg.content === config.prefix + "Book") {
         msg.channel.send('To let the bot pick a random 20/10/20 Book for you, filled with 50 different cards, type ?RandomBook \n\nWant your Revolt Book in one png file? type ?book2png');
    }

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
