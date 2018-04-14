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
    if (message.content.startsWith(prefix + "Fighter")) {
       message.channel.send("Fighter <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:30");
    }
    if (message.content.startsWith(prefix + "fighter")) {
         message.channel.send("Fighter <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:30");
    }
    if (message.content.startsWith(prefix + "Gearion")) {
       message.channel.send("Gearion <:craritye:364048663611310081> <:cneutral:364043997825597440> \nST:80 HP:80 MHP:80 G:300+ <:ccard:364048663426760705> \nAttacks First / Neutralizes: <:cscroll:364048663691001876> Attacks / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "gearion")) {
         message.channel.send("Gearion <:craritye:364048663611310081> <:cneutral:364043997825597440> \nST:80 HP:80 MHP:80 G:300+ <:ccard:364048663426760705> \nAttacks First / Neutralizes: <:cscroll:364048663691001876> Attacks / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "Goblin")) {
       message.channel.send("Goblin <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:0");
    }
    if (message.content.startsWith(prefix + "goblin")) {
       message.channel.send("Goblin <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:0");
    }
    if (message.content.startsWith(prefix + "Golden Totem")) {
       message.channel.send("Golden Totem <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:0 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (0G): Gives its user 200G, then is destroyed.");
    }
    if (message.content.startsWith(prefix + "GoldenTotem")) {
         message.channel.send("Golden Totem <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:0 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (0G): Gives its user 200G, then is destroyed.");
    }
    if (message.content.startsWith(prefix + "golden totem")) {
         message.channel.send("Golden Totem <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:0 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (0G): Gives its user 200G, then is destroyed.");
    }
    if (message.content.startsWith(prefix + "goldentotem")) {
         message.channel.send("Golden Totem <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:0 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (0G): Gives its user 200G, then is destroyed.");
    }
    if (message.content.startsWith(prefix + "Great Fossil")) {
       message.channel.send("Great Fossil <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Does not claim tolls / Upon Defeat: Transforms into Tyrannosaurus.");
    }
    if (message.content.startsWith(prefix + "GreatFossil")) {
         message.channel.send("Great Fossil <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Does not claim tolls / Upon Defeat: Transforms into Tyrannosaurus.");
    }
    if (message.content.startsWith(prefix + "great fossil")) {
         message.channel.send("Great Fossil <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Does not claim tolls / Upon Defeat: Transforms into Tyrannosaurus.");
    }
    if (message.content.startsWith(prefix + "greatfossil")) {
         message.channel.send("Great Fossil <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Does not claim tolls / Upon Defeat: Transforms into Tyrannosaurus.");
    }
    if (message.content.startsWith(prefix + "Ground Gear")) {
         message.channel.send("Ground Gear <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:20 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: All / Neutralizes: <:cscroll:364048663691001876> Attacks. / Transforms into Androgear if Sky Gear is used as Support.");
    }
    if (message.content.startsWith(prefix + "GroundGear")) {
         message.channel.send("Ground Gear <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:20 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: All / Neutralizes: <:cscroll:364048663691001876> Attacks. / Transforms into Androgear if Sky Gear is used as Support.");
    }
    if (message.content.startsWith(prefix + "ground gear")) {
         message.channel.send("Ground Gear <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:20 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: All / Neutralizes: <:cscroll:364048663691001876> Attacks. / Transforms into Androgear if Sky Gear is used as Support.");
    }
    if (message.content.startsWith(prefix + "groundgear")) {
         message.channel.send("Ground Gear <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:20 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: All / Neutralizes: <:cscroll:364048663691001876> Attacks. / Transforms into Androgear if Sky Gear is used as Support.");
    }
    if (message.content.startsWith(prefix + "Halfling")) {
         message.channel.send("Halfling <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:50 \nAnti-Spell / Receives land effect from lands of any element.");
    }
    if (message.content.startsWith(prefix + "halfling")) {
         message.channel.send("Halfling <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:50 \nAnti-Spell / Receives land effect from lands of any element.");
    }
    if (message.content.startsWith(prefix + "Hidebehind")) {
       message.channel.send("Hidebehind <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:40 MHP:40 G:40 \nSecret Art (40G): Adds "Land Effect" <:csenchant:364048663464378391> to user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "hidebehind")) {
         message.channel.send("Hidebehind <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:40 MHP:40 G:40 \nSecret Art (40G): Adds "Land Effect" <:csenchant:364048663464378391> to user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "Ironmonger")) {
       message.channel.send("Ironmonger <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:10 \nSecret Art (50G): User draws an Item Card.");
    }
    if (message.content.startsWith(prefix + "ironmonger")) {
         message.channel.send("Ironmonger <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:10 \nSecret Art (50G): User draws an Item Card.");
    }    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
