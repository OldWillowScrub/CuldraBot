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
    if (message.content.startsWith(prefix + "androgear")) {
       message.channel.send("Androgear <:craritye:364048663611310081> <:cneutral:364043997825597440> \nST:60 HP:60 MHP:60 G:250+ <:ccard:364048663426760705> \nSupport: <:cneutral:364043997825597440> / Attacks First / Transforms into Gearion if Beast Gear is used as support / Neutralizes: <:cscroll:364048663691001876> Attacks");
  }
    if (message.content.startsWith(prefix + "Archbishop")) {
       message.channel.send("Archbishop <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:50 \nImmune to Destroy Item and Steal Item effects / Vigorous / \nSecret Art (30G): Removes <:csenchant:364048663464378391> from target creature. (Ignores Anti-Spell.)");
  }
  if (message.content.startsWith(prefix + "archbishop")) {
       message.channel.send("Archbishop <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:50 \nImmune to Destroy Item and Steal Item effects / Vigorous / \nSecret Art (30G): Removes <:csenchant:364048663464378391> from target creature. (Ignores Anti-Spell.)");
  }  
    if (message.content.startsWith(prefix + "Archchemic")) {
         message.channel.send("Archchemic <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:40 \nNeutralizes: <:cscroll:364048663691001876> Attacks / Reduces cost of Terrain Change for the territory this creature is on to 50G.");
    }
    if (message.content.startsWith(prefix + "archchemic")) {
         message.channel.send("Archchemic <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:40 \nNeutralizes: <:cscroll:364048663691001876> Attacks / Reduces cost of Terrain Change for the territory this creature is on to 50G.");
    }
    if (message.content.startsWith(prefix + "Armored Dragon")) {
         message.channel.send("Armored Dragon <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:50 HP:60 MHP:60 G:100 \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (80G): HP-30 to target <:cneutral:364043997825597440> creature.");
    }
    if (message.content.startsWith(prefix + "ArmoredDragon")) {
         message.channel.send("Armored Dragon <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:50 HP:60 MHP:60 G:100 \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (80G): HP-30 to target <:cneutral:364043997825597440> creature.");
    }
    if (message.content.startsWith(prefix + "armored dragon")) {
         message.channel.send("Armored Dragon <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:50 HP:60 MHP:60 G:100 \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (80G): HP-30 to target <:cneutral:364043997825597440> creature.");
    }
    if (message.content.startsWith(prefix + "armoreddragon")) {
         message.channel.send("Armored Dragon <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:50 HP:60 MHP:60 G:100 \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (80G): HP-30 to target <:cneutral:364043997825597440> creature.");
    }
    if (message.content.startsWith(prefix + "Baldanders")) {
         message.channel.send("Baldanders <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:20 \nIn Battle: Transforms into a random creature.");
    }
    if (message.content.startsWith(prefix + "baldanders")) {
         message.channel.send("Baldanders <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:20 \nIn Battle: Transforms into a random creature.");
    }
    if (message.content.startsWith(prefix + "Bandit")) {
         message.channel.send("Bandit <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:20 HP:20 MHP:20 G:20 \nSupport: All / Attack Bonus: Steals (damage dealt x2)G from opponent.");
    }
    if (message.content.startsWith(prefix + "bandit")) {
         message.channel.send("Bandit <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:20 HP:20 MHP:20 G:20 \nSupport: All / Attack Bonus: Steals (damage dealt x2)G from opponent.");
    }
    if (message.content.startsWith(prefix + "Beast Gear")) {
         message.channel.send("Beast Gear <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cscroll:364048663691001876> Attacks / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "BeastGear")) {
         message.channel.send("Beast Gear <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cscroll:364048663691001876> Attacks / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "beast gear")) {
         message.channel.send("Beast Gear <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cscroll:364048663691001876> Attacks / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "beastgear")) {
         message.channel.send("Beast Gear <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cscroll:364048663691001876> Attacks / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "Borgess")) {
       message.channel.send("Borgess <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:40 \nBoo \nST: HP+20 to <:cneutral:364043997825597440> creatures.");
    }
    if (message.content.startsWith(prefix + "borgess")) {
         message.channel.send("Borgess <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:40 \nBoo \nST: HP+20 to <:cneutral:364043997825597440> creatures.");
    }
    if (message.content.startsWith(prefix + "Clockwork Owl")) {
       message.channel.send("Clockwork Owl <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:20 MHP:20 G:10 \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (40G): Target Cepter can choose movement direction next turn.");
    }
    if (message.content.startsWith(prefix + "ClockworkOwl")) {
         message.channel.send("Clockwork Owl <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:20 MHP:20 G:10 \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (40G): Target Cepter can choose movement direction next turn.");
    }
    if (message.content.startsWith(prefix + "clockwork owl")) {
         message.channel.send("Clockwork Owl <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:20 MHP:20 G:10 \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (40G): Target Cepter can choose movement direction next turn.");
    }
    if (message.content.startsWith(prefix + "clockworkowl")) {
         message.channel.send("Clockwork Owl <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:20 MHP:20 G:10 \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (40G): Target Cepter can choose movement direction next turn.");
    }
    if (message.content.startsWith(prefix + "Creeping Coin")) {
       message.channel.send("Creeping Coin <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:20 \nBattle End: User gains 100G / If destroyed in combat or by a spell, user gains 100G.");
    }
    if (message.content.startsWith(prefix + "CreepingCoin")) {
         message.channel.send("Creeping Coin <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:20 \nBattle End: User gains 100G / If destroyed in combat or by a spell, user gains 100G.");
    }
    if (message.content.startsWith(prefix + "creeping coin")) {
         message.channel.send("Creeping Coin <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:20 \nBattle End: User gains 100G / If destroyed in combat or by a spell, user gains 100G.");
    }
    if (message.content.startsWith(prefix + "creepingcoin")) {
         message.channel.send("Creeping Coin <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:20 \nBattle End: User gains 100G / If destroyed in combat or by a spell, user gains 100G.");
    }
    if (message.content.startsWith(prefix + "Decoy")) {
       message.channel.send("Decoy <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:0 HP:10 MHP:10 G:50+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nReflects: Normal Attacks");
    }
    if (message.content.startsWith(prefix + "decoy")) {
       message.channel.send("Decoy <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:0 HP:10 MHP:10 G:50+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nReflects: Normal Attacks");
    }    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
