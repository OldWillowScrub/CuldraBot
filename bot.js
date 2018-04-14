const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "Card") {
       message.channel.send("Revolt Card Database, type ?Name of Card Here to get the stats of any card you want, e.g., ?bandit \n\nDatabase Is 100% Complete. All Creatures, Items, and Spells have been added! For random book help, type ?Book");
    }
    if (message.content.startsWith(prefix + "card") {
         message.channel.send("Revolt Card Database, type ?Name of Card Here to get the stats of any card you want, e.g., ?bandit \n\nDatabase Is 100% Complete. All Creatures, Items, and Spells have been added! For random book help, type ?Book");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
