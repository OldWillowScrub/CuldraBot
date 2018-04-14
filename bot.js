const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "Card")) {
    message.channel.send("Revolt Card Database, type ?Name of Card Here to get the stats of any card you want, e.g., ?bandit \n\nDatabase Is 100% Complete. All Creatures, Items, and Spells have been added! For random book help, type ?Book");
  }
  if (message.content.startsWith(prefix + "card")) {
    message.channel.send("Revolt Card Database, type ?Name of Card Here to get the stats of any card you want, e.g., ?bandit \n\nDatabase Is 100% Complete. All Creatures, Items, and Spells have been added! For random book help, type ?Book");
  }
  if (message.content.startsWith(prefix + "Androgear")) {
    message.channel.send("Androgear <:craritye:364048663611310081> <:cneutral:364043997825597440> \nST:60 HP:60 MHP:60 G:250+ <:ccard:364048663426760705> \nSupport: <:cneutral:364043997825597440> / Attacks First / Transforms into Gearion if Beast Gear is used as support / Neutralizes: <:cscroll:364048663691001876> Attacks");
  }  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
