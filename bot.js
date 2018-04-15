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
  //Neutral Creatures Go Here  
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
       message.channel.send("Hidebehind <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:40 MHP:40 G:40 \nSecret Art (40G): Adds Land Effect <:csenchant:364048663464378391> to user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "hidebehind")) {
         message.channel.send("Hidebehind <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:40 MHP:40 G:40 \nSecret Art (40G): Adds Land Effect <:csenchant:364048663464378391> to user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "Ironmonger")) {
       message.channel.send("Ironmonger <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:10 \nSecret Art (50G): User draws an Item Card.");
    }
    if (message.content.startsWith(prefix + "ironmonger")) {
         message.channel.send("Ironmonger <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:10 \nSecret Art (50G): User draws an Item Card.");
    } 
    if (message.content.startsWith(prefix + "Legendary Pharos")) {
       message.channel.send("Legendary Pharos <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:50 MHP:50 G:50+ <:ccard:364048663426760705> \nItem Limit: <:carmor:364048663556915200> \nDefensive / Does not receive lap recovery / \nSecret Art (80G): Summons Statue to all adjacent lands.");
    }
    if (message.content.startsWith(prefix + "LegendaryPharos")) {
         message.channel.send("Legendary Pharos <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:50 MHP:50 G:50+ <:ccard:364048663426760705> \nItem Limit: <:carmor:364048663556915200> \nDefensive / Does not receive lap recovery / \nSecret Art (80G): Summons Statue to all adjacent lands.");
    }
    if (message.content.startsWith(prefix + "legendary pharos")) {
         message.channel.send("Legendary Pharos <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:50 MHP:50 G:50+ <:ccard:364048663426760705> \nItem Limit: <:carmor:364048663556915200> \nDefensive / Does not receive lap recovery / \nSecret Art (80G): Summons Statue to all adjacent lands.");
    }
    if (message.content.startsWith(prefix + "legendarypharos")) {
         message.channel.send("Legendary Pharos <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:50 MHP:50 G:50+ <:ccard:364048663426760705> \nItem Limit: <:carmor:364048663556915200> \nDefensive / Does not receive lap recovery / \nSecret Art (80G): Summons Statue to all adjacent lands.");
    }
    if (message.content.startsWith(prefix + "Living Amulet")) {
       message.channel.send("Living Amulet <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:10 MHP:10 G:60 \nItem Creature / Upon Defeat: Revives as Living Amulet if opponent did not equip a weapon.");
    }
    if (message.content.startsWith(prefix + "LivingAmulet")) {
         message.channel.send("Living Amulet <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:10 MHP:10 G:60 \nItem Creature / Upon Defeat: Revives as Living Amulet if opponent did not equip a weapon.");
    }
    if (message.content.startsWith(prefix + "living amulet")) {
         message.channel.send("Living Amulet <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:10 MHP:10 G:60 \nItem Creature / Upon Defeat: Revives as Living Amulet if opponent did not equip a weapon.");
    }
    if (message.content.startsWith(prefix + "livingamulet")) {
         message.channel.send("Living Amulet <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:10 MHP:10 G:60 \nItem Creature / Upon Defeat: Revives as Living Amulet if opponent did not equip a weapon.");
    }
    if (message.content.startsWith(prefix + "Living Armor")) {
         message.channel.send("Living Armor <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:40 MHP:40 G:70 \nItem Creature / In Battle: ST+50 if used as a creature.");
    }
    if (message.content.startsWith(prefix + "LivingArmor")) {
         message.channel.send("Living Armor <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:40 MHP:40 G:70 \nItem Creature / In Battle: ST+50 if used as a creature.");
    }
    if (message.content.startsWith(prefix + "living armor")) {
         message.channel.send("Living Armor <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:40 MHP:40 G:70 \nItem Creature / In Battle: ST+50 if used as a creature.");
    }
    if (message.content.startsWith(prefix + "livingarmor")) {
         message.channel.send("Living Armor <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:40 MHP:40 G:70 \nItem Creature / In Battle: ST+50 if used as a creature.");
    }
    if (message.content.startsWith(prefix + "Living Bomb")) {
         message.channel.send("Living Bomb <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:60 \nItem Creature / Battle End: Destroys opponent and self if your creature has 20 or less HP left.");
    }
    if (message.content.startsWith(prefix + "LivingBomb")) {
         message.channel.send("Living Bomb <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:60 \nItem Creature / Battle End: Destroys opponent and self if your creature has 20 or less HP left.");
    }
    if (message.content.startsWith(prefix + "living bomb")) {
         message.channel.send("Living Bomb <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:60 \nItem Creature / Battle End: Destroys opponent and self if your creature has 20 or less HP left.");
    }
    if (message.content.startsWith(prefix + "livingbomb")) {
         message.channel.send("Living Bomb <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:60 \nItem Creature / Battle End: Destroys opponent and self if your creature has 20 or less HP left.");
    }
    if (message.content.startsWith(prefix + "Living Glove")) {
         message.channel.send("Living Glove <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:70 \nItem Creature / In Battle: ST&HP=(Number of creatures in play with a different element from this creature x5).");
    }
    if (message.content.startsWith(prefix + "LivingGlove")) {
         message.channel.send("Living Glove <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:70 \nItem Creature / In Battle: ST&HP=(Number of creatures in play with a different element from this creature x5).");
    }
    if (message.content.startsWith(prefix + "living glove")) {
         message.channel.send("Living Glove <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:70 \nItem Creature / In Battle: ST&HP=(Number of creatures in play with a different element from this creature x5).");
    }
    if (message.content.startsWith(prefix + "livingglove")) {
         message.channel.send("Living Glove <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:70 \nItem Creature / In Battle: ST&HP=(Number of creatures in play with a different element from this creature x5).");
    }
    if (message.content.startsWith(prefix + "Living Helmet")) {
         message.channel.send("Living Helmet <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:50 \nItem Creature");
    }
    if (message.content.startsWith(prefix + "LivingHelmet")) {
         message.channel.send("Living Helmet <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:50 \nItem Creature");
    }
    if (message.content.startsWith(prefix + "living helmet")) {
         message.channel.send("Living Helmet <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:50 \nItem Creature");
    }
    if (message.content.startsWith(prefix + "livinghelmet")) {
         message.channel.send("Living Helmet <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:50 \nItem Creature");
    }
    if (message.content.startsWith(prefix + "Lunatic Hare")) {
       message.channel.send("Lunatic Hare <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:30 \nBattle End: Swaps opponent\'s ST and HP values.");
    }
    if (message.content.startsWith(prefix + "LunaticHare")) {
         message.channel.send("Lunatic Hare <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:30 \nBattle End: Swaps opponent\'s ST and HP values.");
    }
    if (message.content.startsWith(prefix + "lunatic hare")) {
         message.channel.send("Lunatic Hare <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:30 \nBattle End: Swaps opponent\'s ST and HP values.");
    }
    if (message.content.startsWith(prefix + "lunatichare")) {
         message.channel.send("Lunatic Hare <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:30 \nBattle End: Swaps opponent\'s ST and HP values.");
    }
    if (message.content.startsWith(prefix + "Migoal")) {
       message.channel.send("Migoal <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:40+ <:ccard:364048663426760705> \nCritical Hit: <:cwater:364048663447601154> & <:cearth:364048663582081034> / Neutralizes: <:cfire:364048663355588609> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "migoal")) {
         message.channel.send("Migoal <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:40+ <:ccard:364048663426760705> \nCritical Hit: <:cwater:364048663447601154> & <:cearth:364048663582081034> / Neutralizes: <:cfire:364048663355588609> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "Nil-Vana")) {
       message.channel.send("Nil-Vana <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:70+ <:ccard:364048663426760705> \nSupport: <:cneutral:364043997825597440> / Attacks First / \nSecret Art (100G): HP-20 to all creatures with an <:csenchant:364048663464378391> on them.");
    }
    if (message.content.startsWith(prefix + "NilVana")) {
         message.channel.send("Nil-Vana <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:70+ <:ccard:364048663426760705> \nSupport: <:cneutral:364043997825597440> / Attacks First / \nSecret Art (100G): HP-20 to all creatures with an <:csenchant:364048663464378391> on them.");
    }
    if (message.content.startsWith(prefix + "nil-vana")) {
         message.channel.send("Nil-Vana <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:70+ <:ccard:364048663426760705> \nSupport: <:cneutral:364043997825597440> / Attacks First / \nSecret Art (100G): HP-20 to all creatures with an <:csenchant:364048663464378391> on them.");
    }
    if (message.content.startsWith(prefix + "nilvana")) {
         message.channel.send("Nil-Vana <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:70+ <:ccard:364048663426760705> \nSupport: <:cneutral:364043997825597440> / Attacks First / \nSecret Art (100G): HP-20 to all creatures with an <:csenchant:364048663464378391> on them.");
    }
    if (message.content.startsWith(prefix + "Ninja")) {
         message.channel.send("Ninja <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:70 \nAttacks First / Scroll Critical Hit");
    }
    if (message.content.startsWith(prefix + "ninja")) {
         message.channel.send("Ninja <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:40 MHP:40 G:70 \nAttacks First / Scroll Critical Hit");
    } 
    if (message.content.startsWith(prefix + "Ogre Lord")) {
         message.channel.send("Ogre Lord <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:40 HP:50 MHP:50 G:70 \nScroll Critical Hit / In Battle: ST+20 if a <:cfire:364048663355588609> or <:cair:364048663518904327> Ogre are in play / In Battle: HP+20 if a <:cwater:364048663447601154> or <:cearth:364048663582081034> Ogre are in play.");
    }
    if (message.content.startsWith(prefix + "OgreLord")) {
         message.channel.send("Ogre Lord <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:40 HP:50 MHP:50 G:70 \nScroll Critical Hit / In Battle: ST+20 if a <:cfire:364048663355588609> or <:cair:364048663518904327> Ogre are in play / In Battle: HP+20 if a <:cwater:364048663447601154> or <:cearth:364048663582081034> Ogre are in play.");
    }
    if (message.content.startsWith(prefix + "ogre lord")) {
         message.channel.send("Ogre Lord <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:40 HP:50 MHP:50 G:70 \nScroll Critical Hit / In Battle: ST+20 if a <:cfire:364048663355588609> or <:cair:364048663518904327> Ogre are in play / In Battle: HP+20 if a <:cwater:364048663447601154> or <:cearth:364048663582081034> Ogre are in play.");
    }
    if (message.content.startsWith(prefix + "ogrelord")) {
         message.channel.send("Ogre Lord <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:40 HP:50 MHP:50 G:70 \nScroll Critical Hit / In Battle: ST+20 if a <:cfire:364048663355588609> or <:cair:364048663518904327> Ogre are in play / In Battle: HP+20 if a <:cwater:364048663447601154> or <:cearth:364048663582081034> Ogre are in play.");
    }
    if (message.content.startsWith(prefix + "Red Cap")) {
       message.channel.send("Red Cap <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nIn Battle: ST & HP= (number of Goblins in play x20). Boost: ST+20 to all Goblins.");
    }
    if (message.content.startsWith(prefix + "RedCap")) {
         message.channel.send("Red Cap <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nIn Battle: ST & HP= (number of Goblins in play x20). Boost: ST+20 to all Goblins.");
    }
    if (message.content.startsWith(prefix + "red cap")) {
         message.channel.send("Red Cap <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nIn Battle: ST & HP= (number of Goblins in play x20). Boost: ST+20 to all Goblins.");
    }
    if (message.content.startsWith(prefix + "redcap")) {
         message.channel.send("Red Cap <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nIn Battle: ST & HP= (number of Goblins in play x20). Boost: ST+20 to all Goblins.");
    }
    if (message.content.startsWith(prefix + "Rock Titan")) {
       message.channel.send("Rock Titan <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:70 HP:70 MHP:70 G:90 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nBattle End: ST & MHP-10.");
    }
    if (message.content.startsWith(prefix + "RockTitan")) {
         message.channel.send("Rock Titan <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:70 HP:70 MHP:70 G:90 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nBattle End: ST & MHP-10.");
    }
    if (message.content.startsWith(prefix + "rock titan")) {
         message.channel.send("Rock Titan <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:70 HP:70 MHP:70 G:90 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nBattle End: ST & MHP-10.");
    }
    if (message.content.startsWith(prefix + "rocktitan")) {
         message.channel.send("Rock Titan <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:70 HP:70 MHP:70 G:90 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nBattle End: ST & MHP-10.");
    }
    if (message.content.startsWith(prefix + "Saint")) {
         message.channel.send("Saint <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:50 \nInstant Death: 100% against <:cneutral:364043997825597440> creatures. / Neutralizes: <:cneutral:364043997825597440>");
    }
    if (message.content.startsWith(prefix + "saint")) {
         message.channel.send("Saint <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:30 HP:30 MHP:30 G:50 \nInstant Death: 100% against <:cneutral:364043997825597440> creatures. / Neutralizes: <:cneutral:364043997825597440>");
    }
    if (message.content.startsWith(prefix + "Samurai")) {
         message.channel.send("Samurai <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:50 HP:30 MHP:30 G:50 \nInstant Death: 70% against creatures with ST of 40 or greater.");
    }
    if (message.content.startsWith(prefix + "samurai")) {
         message.channel.send("Samurai <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:50 HP:30 MHP:30 G:50 \nInstant Death: 70% against creatures with ST of 40 or greater.");
    }
    if (message.content.startsWith(prefix + "Shadowgeist")) {
         message.channel.send("Shadowgeist <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:30 MHP:30 G:60 \nAttacks First / Vigorous / Attack Bonus: opponent\'s ST=0.");
    }
    if (message.content.startsWith(prefix + "shadowgeist")) {
         message.channel.send("Shadowgeist <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:30 MHP:30 G:60 \nAttacks First / Vigorous / Attack Bonus: opponent\'s ST=0.");
    }
    if (message.content.startsWith(prefix + "Shapeshifter")) {
         message.channel.send("Shapeshifter <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:20 HP:20 MHP:20 G:30 \nSecret Art (70G): Transforms into same creature as target creature.");
    }
    if (message.content.startsWith(prefix + "shapeshifter")) {
         message.channel.send("Shapeshifter <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:20 HP:20 MHP:20 G:30 \nSecret Art (70G): Transforms into same creature as target creature.");
    }
    if (message.content.startsWith(prefix + "Skeleton")) {
       message.channel.send("Skeleton <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:30 HP:40 MHP:40 G:30 \nRegenerates");
    }
    if (message.content.startsWith(prefix + "skeleton")) {
         message.channel.send("Skeleton <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:30 HP:40 MHP:40 G:30 \nRegenerates");
    }
    if (message.content.startsWith(prefix + "Sky Gear")) {
         message.channel.send("Sky Gear <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:20 MHP:20 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / Support: All / Transforms into Androgear if Ground Gear is used as Support.");
    }
    if (message.content.startsWith(prefix + "SkyGear")) {
         message.channel.send("Sky Gear <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:20 MHP:20 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / Support: All / Transforms into Androgear if Ground Gear is used as Support.");
    }
    if (message.content.startsWith(prefix + "sky gear")) {
         message.channel.send("Sky Gear <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:20 MHP:20 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / Support: All / Transforms into Androgear if Ground Gear is used as Support.");
    }
    if (message.content.startsWith(prefix + "skygear")) {
         message.channel.send("Sky Gear <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:40 HP:20 MHP:20 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / Support: All / Transforms into Androgear if Ground Gear is used as Support.");
    }
    if (message.content.startsWith(prefix + "Statue")) {
         message.channel.send("Statue <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:0 HP:50 MHP:50 G:10 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / Does not receive lap recovery.");
    }
    if (message.content.startsWith(prefix + "statue")) {
         message.channel.send("Statue <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:0 HP:50 MHP:50 G:10 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / Does not receive lap recovery.");
    }
    if (message.content.startsWith(prefix + "Steam Gear")) {
         message.channel.send("Steam Gear <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:50 HP:50 MHP:50 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nClaims 1/2 the standard toll value.");
    }
    if (message.content.startsWith(prefix + "SteamGear")) {
         message.channel.send("Steam Gear <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:50 HP:50 MHP:50 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nClaims 1/2 the standard toll value.");
    }
    if (message.content.startsWith(prefix + "steam gear")) {
         message.channel.send("Steam Gear <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:50 HP:50 MHP:50 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nClaims 1/2 the standard toll value.");
    }
    if (message.content.startsWith(prefix + "steamgear")) {
         message.channel.send("Steam Gear <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:50 HP:50 MHP:50 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nClaims 1/2 the standard toll value.");
    }
    if (message.content.startsWith(prefix + "Stone Jizo")) {
         message.channel.send("Stone Jizo <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:50 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive Anti-Spell \nSecret Art (100G): Transforms targeted territory into a <:cmulti:364048663393337345> land, then is destroyed.");
    }
    if (message.content.startsWith(prefix + "StoneJizo")) {
         message.channel.send("Stone Jizo <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:50 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive Anti-Spell \nSecret Art (100G): Transforms targeted territory into a <:cmulti:364048663393337345> land, then is destroyed.");
    }
    if (message.content.startsWith(prefix + "stone jizo")) {
         message.channel.send("Stone Jizo <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:50 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive Anti-Spell \nSecret Art (100G): Transforms targeted territory into a <:cmulti:364048663393337345> land, then is destroyed.");
    }
    if (message.content.startsWith(prefix + "stonejizo")) {
         message.channel.send("Stone Jizo <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:50 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive Anti-Spell \nSecret Art (100G): Transforms targeted territory into a <:cmulti:364048663393337345> land, then is destroyed.");
    }    
    if (message.content.startsWith(prefix + "Thief")) {
       message.channel.send("Thief <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:20 HP:40 MHP:40 G:30 \nBattle Start: Steals opponent\'s item if using no items of your own.");
    }
    if (message.content.startsWith(prefix + "thief")) {
         message.channel.send("Thief <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:20 HP:40 MHP:40 G:30 \nBattle Start: Steals opponent\'s item if using no items of your own.");
    }
    if (message.content.startsWith(prefix + "Trojan Horse")) {
         message.channel.send("Trojan Horse <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:30 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nSupport: All / Penetrates: All");
    }
    if (message.content.startsWith(prefix + "TrojanHorse")) {
       message.channel.send("Trojan Horse <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:30 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nSupport: All / Penetrates: All");
    }
    if (message.content.startsWith(prefix + "trojan horse")) {
         message.channel.send("Trojan Horse <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:30 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nSupport: All / Penetrates: All");
    }
    if (message.content.startsWith(prefix + "trojanhorse")) {
         message.channel.send("Trojan Horse <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:30 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nSupport: All / Penetrates: All");
    }
    if (message.content.startsWith(prefix + "Tyrannosaurus")) {
         message.channel.send("Tyrannosaurus <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:50 HP:60 MHP:60 G:75 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "tyrannosaurus")) {
         message.channel.send("Tyrannosaurus <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:50 HP:60 MHP:60 G:75 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "Wonder Wall")) {
       message.channel.send("Wonder Wall <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:10+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive / Neutralizes: <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "WonderWall")) {
         message.channel.send("Wonder Wall <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:10+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive / Neutralizes: <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "wonder wall")) {
         message.channel.send("Wonder Wall <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:10+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive / Neutralizes: <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "wonderwall")) {
         message.channel.send("Wonder Wall <:craritys:364048663351132162> <:cneutral:364043997825597440> \nST:0 HP:30 MHP:30 G:10+ <:ccard:364048663426760705> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive / Neutralizes: <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
  //FIRE CREATURES GO HERE
    if (message.content.startsWith(prefix + "Ammon")) {
       message.channel.send("Ammon <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:70 \nSynergy: <:cearth:364048663582081034> (ST & HP+20). / Anti-Spell!");
    }
    if (message.content.startsWith(prefix + "ammon")) {
         message.channel.send("Ammon <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:70 \nSynergy: <:cearth:364048663582081034> (ST & HP+20). / Anti-Spell!");
    }
    if (message.content.startsWith(prefix + "Angry Mob")) {
         message.channel.send("Angry Mob <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50+ <:cfire:364048663355588609> \nIn Battle: Quickly tap the A Button to increase ST. If ST is raised above 100 in this way, it becomes 10.");
    }
    if (message.content.startsWith(prefix + "AngryMob")) {
         message.channel.send("Angry Mob <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50+ <:cfire:364048663355588609> \nIn Battle: Quickly tap the A Button to increase ST. If ST is raised above 100 in this way, it becomes 10.");
    }
    if (message.content.startsWith(prefix + "angry mob")) {
         message.channel.send("Angry Mob <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50+ <:cfire:364048663355588609> \nIn Battle: Quickly tap the A Button to increase ST. If ST is raised above 100 in this way, it becomes 10.");
    }
    if (message.content.startsWith(prefix + "angrymob")) {
         message.channel.send("Angry Mob <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50+ <:cfire:364048663355588609> \nIn Battle: Quickly tap the A Button to increase ST. If ST is raised above 100 in this way, it becomes 10.");
    }
    if (message.content.startsWith(prefix + "Armed Paladin")) {
         message.channel.send("Armed Paladin <:craritye:364048663611310081> <:cfire:364048663355588609> \nST:0 HP:50 MHP:50 G:200+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nIn Battle: ST= (number of <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures in play x10). / Neutralizes: <:cscroll:364048663691001876> Attacks");
    }
    if (message.content.startsWith(prefix + "ArmedPaladin")) {
         message.channel.send("Armed Paladin <:craritye:364048663611310081> <:cfire:364048663355588609> \nST:0 HP:50 MHP:50 G:200+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nIn Battle: ST= (number of <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures in play x10). / Neutralizes: <:cscroll:364048663691001876> Attacks");
    }
    if (message.content.startsWith(prefix + "armed paladin")) {
         message.channel.send("Armed Paladin <:craritye:364048663611310081> <:cfire:364048663355588609> \nST:0 HP:50 MHP:50 G:200+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nIn Battle: ST= (number of <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures in play x10). / Neutralizes: <:cscroll:364048663691001876> Attacks");
    }
    if (message.content.startsWith(prefix + "armedpaladin")) {
         message.channel.send("Armed Paladin <:craritye:364048663611310081> <:cfire:364048663355588609> \nST:0 HP:50 MHP:50 G:200+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nIn Battle: ST= (number of <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures in play x10). / Neutralizes: <:cscroll:364048663691001876> Attacks");
    }
    if (message.content.startsWith(prefix + "Ba-al")) {
         message.channel.send("Ba-al <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:40+ <:cfire:364048663355588609> + <:ccard:364048663426760705> \nAttacks First / Battle End: Destroys a random card from user\'s hand.");
    }
    if (message.content.startsWith(prefix + "Ba-Al")) {
         message.channel.send("Ba-al <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:40+ <:cfire:364048663355588609> + <:ccard:364048663426760705> \nAttacks First / Battle End: Destroys a random card from user\'s hand.");
    }
    if (message.content.startsWith(prefix + "ba-al")) {
         message.channel.send("Ba-al <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:40+ <:cfire:364048663355588609> + <:ccard:364048663426760705> \nAttacks First / Battle End: Destroys a random card from user\'s hand.");
    }
    if (message.content.startsWith(prefix + "baal")) {
         message.channel.send("Ba-al <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:40+ <:cfire:364048663355588609> + <:ccard:364048663426760705> \nAttacks First / Battle End: Destroys a random card from user\'s hand.");
    }
    if (message.content.startsWith(prefix + "Birdmaiden")) {
         message.channel.send("Birdmaiden <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:65 \nItem Limit: <:cweapon:364048663527424002> \nVigorous / \nSecret Art (50G): Adds Distant Movement <:csenchant:364048663464378391> to user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "birdmaiden")) {
         message.channel.send("Birdmaiden <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:65 \nItem Limit: <:cweapon:364048663527424002> \nVigorous / \nSecret Art (50G): Adds Distant Movement <:csenchant:364048663464378391> to user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "Burnacle")) {
         message.channel.send("Burnacle <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:60 MHP:60 G:70 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (50G): Adds Blind <:csenchant:364048663464378391> to target enemy creature. (Toll fees are halved.)");
    }
    if (message.content.startsWith(prefix + "burnacle")) {
         message.channel.send("Burnacle <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:60 MHP:60 G:70 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (50G): Adds Blind <:csenchant:364048663464378391> to target enemy creature. (Toll fees are halved.)");
    }
    if (message.content.startsWith(prefix + "Burning Titan")) {
         message.channel.send("Burning Titan <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:60 HP:60 MHP:60 G:90 \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nIn Battle: ST & HP-30 if user possesses 5 or more territories.");
    }
    if (message.content.startsWith(prefix + "BurningTitan")) {
         message.channel.send("Burning Titan <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:60 HP:60 MHP:60 G:90 \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nIn Battle: ST & HP-30 if user possesses 5 or more territories.");
    }
    if (message.content.startsWith(prefix + "burning titan")) {
         message.channel.send("Burning Titan <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:60 HP:60 MHP:60 G:90 \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nIn Battle: ST & HP-30 if user possesses 5 or more territories.");
    }
    if (message.content.startsWith(prefix + "burningtitan")) {
         message.channel.send("Burning Titan <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:60 HP:60 MHP:60 G:90 \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nIn Battle: ST & HP-30 if user possesses 5 or more territories.");
    }
    if (message.content.startsWith(prefix + "Cait Sith")) {
         message.channel.send("Cait Sith <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50 \nLand Limit: <:cnowater:364048663657447434> \nNeutralizes: Attacks from creatures with ST of 40 and up. / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "CaitSith")) {
         message.channel.send("Cait Sith <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50 \nLand Limit: <:cnowater:364048663657447434> \nNeutralizes: Attacks from creatures with ST of 40 and up. / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "cait sith")) {
         message.channel.send("Cait Sith <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50 \nLand Limit: <:cnowater:364048663657447434> \nNeutralizes: Attacks from creatures with ST of 40 and up. / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "caitsith")) {
         message.channel.send("Cait Sith <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50 \nLand Limit: <:cnowater:364048663657447434> \nNeutralizes: Attacks from creatures with ST of 40 and up. / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "Chimera")) {
         message.channel.send("Chimera <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:50 MHP:50 G:80+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / ST+10 each time user receives a lap bonus (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "chimera")) {
         message.channel.send("Chimera <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:50 MHP:50 G:80+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / ST+10 each time user receives a lap bonus (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "Conjurer")) {
         message.channel.send("Conjurer <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:45 \nItem Limit: <:cweapon:364048663527424002> \nScroll Critical Hit / \nSecret Art (80G): Summons Ba-al to vacant land of user\'s choice, then is destroyed.");
    }
    if (message.content.startsWith(prefix + "conjurer")) {
         message.channel.send("Conjurer <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:45 \nItem Limit: <:cweapon:364048663527424002> \nScroll Critical Hit / \nSecret Art (80G): Summons Ba-al to vacant land of user\'s choice, then is destroyed.");
    }
    if (message.content.startsWith(prefix + "Creeping Flame")) {
         message.channel.send("Creeping Flame <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:50 MHP:50 G:55 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (30G): Moves to a neighboring land.");
    }
    if (message.content.startsWith(prefix + "CreepingFlame")) {
         message.channel.send("Creeping Flame <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:50 MHP:50 G:55 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (30G): Moves to a neighboring land.");
    }
    if (message.content.startsWith(prefix + "creeping flame")) {
         message.channel.send("Creeping Flame <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:50 MHP:50 G:55 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (30G): Moves to a neighboring land.");
    }
    if (message.content.startsWith(prefix + "creepingflame")) {
         message.channel.send("Creeping Flame <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:50 MHP:50 G:55 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (30G): Moves to a neighboring land.");
    }
    if (message.content.startsWith(prefix + "Dead Warlord")) {
         message.channel.send("Dead Warlord <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (ST & MHP+20). / Boost \nST: ST+10 to invading creatures.");
    }
    if (message.content.startsWith(prefix + "DeadWarlord")) {
         message.channel.send("Dead Warlord <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (ST & MHP+20). / Boost \nST: ST+10 to invading creatures.");
    }
    if (message.content.startsWith(prefix + "dead warlord")) {
         message.channel.send("Dead Warlord <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (ST & MHP+20). / Boost \nST: ST+10 to invading creatures.");
    }
    if (message.content.startsWith(prefix + "deadwarlord")) {
         message.channel.send("Dead Warlord <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (ST & MHP+20). / Boost \nST: ST+10 to invading creatures.");
    }
    if (message.content.startsWith(prefix + "Death Leech")) {
         message.channel.send("Death Leech <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:20 MHP:20 G:20+ <:cfire:364048663355588609> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nSecret Art (80G): Destroy target creature that is Fatigued and not at maximum HP and move to its territory.");
    }
    if (message.content.startsWith(prefix + "DeathLeech")) {
         message.channel.send("Death Leech <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:20 MHP:20 G:20+ <:cfire:364048663355588609> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nSecret Art (80G): Destroy target creature that is Fatigued and not at maximum HP and move to its territory.");
    }
    if (message.content.startsWith(prefix + "death leech")) {
         message.channel.send("Death Leech <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:20 MHP:20 G:20+ <:cfire:364048663355588609> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nSecret Art (80G): Destroy target creature that is Fatigued and not at maximum HP and move to its territory.");
    }
    if (message.content.startsWith(prefix + "deathleech")) {
         message.channel.send("Death Leech <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:20 MHP:20 G:20+ <:cfire:364048663355588609> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nSecret Art (80G): Destroy target creature that is Fatigued and not at maximum HP and move to its territory.");
    }
    if (message.content.startsWith(prefix + "Death Scythe")) {
         message.channel.send("Death Scythe <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:70 HP:10 MHP:10 G:15+ <:ccard:364048663426760705> \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (50G): Evolves into Mummy.");
    }
    if (message.content.startsWith(prefix + "DeathScythe")) {
         message.channel.send("Death Scythe <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:70 HP:10 MHP:10 G:15+ <:ccard:364048663426760705> \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (50G): Evolves into Mummy.");
    }
    if (message.content.startsWith(prefix + "death scythe")) {
         message.channel.send("Death Scythe <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:70 HP:10 MHP:10 G:15+ <:ccard:364048663426760705> \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (50G): Evolves into Mummy.");
    }
    if (message.content.startsWith(prefix + "deathscythe")) {
         message.channel.send("Death Scythe <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:70 HP:10 MHP:10 G:15+ <:ccard:364048663426760705> \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (50G): Evolves into Mummy.");
    }
    if (message.content.startsWith(prefix + "Domovikha")) {
         message.channel.send("Domovikha <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:10 HP:20 MHP:20 G:20 \nSecret Art (80G): Adds Anti-Spell <:csenchant:364048663464378391> to user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "domovikha")) {
         message.channel.send("Domovikha <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:10 HP:20 MHP:20 G:20 \nSecret Art (80G): Adds Anti-Spell <:csenchant:364048663464378391> to user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "Doom Devourer")) {
         message.channel.send("Doom Devourer <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nIf user\'s roll is 3 or less, ST & MHP+10 (max. 100) / \nSecret Art (0G): User gains (MHP x2) G then, ST & MHP-10.");
    }
    if (message.content.startsWith(prefix + "DoomDevourer")) {
         message.channel.send("Doom Devourer <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nIf user\'s roll is 3 or less, ST & MHP+10 (max. 100) / \nSecret Art (0G): User gains (MHP x2) G then, ST & MHP-10.");
    }
    if (message.content.startsWith(prefix + "doom devourer")) {
         message.channel.send("Doom Devourer <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nIf user\'s roll is 3 or less, ST & MHP+10 (max. 100) / \nSecret Art (0G): User gains (MHP x2) G then, ST & MHP-10.");
    }
    if (message.content.startsWith(prefix + "doomdevourer")) {
         message.channel.send("Doom Devourer <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nIf user\'s roll is 3 or less, ST & MHP+10 (max. 100) / \nSecret Art (0G): User gains (MHP x2) G then, ST & MHP-10.");
    }
    if (message.content.startsWith(prefix + "Fay")) {
         message.channel.send("Fay <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:70 \nScroll Critical Hit / \nSecret Art (50G): ST+20 to target creature (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "fay")) {
         message.channel.send("Fay <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:70 \nScroll Critical Hit / \nSecret Art (50G): ST+20 to target creature (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "Fire Beak")) {
         message.channel.send("Fire Beak <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:40 MHP:40 G:95+ <:cfire:364048663355588609> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nAttacks First / Critical Hit: <:cwater:364048663447601154> <:cair:364048663518904327> / Penetrates: <:cwater:364048663447601154> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "FireBeak")) {
         message.channel.send("Fire Beak <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:40 MHP:40 G:95+ <:cfire:364048663355588609> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nAttacks First / Critical Hit: <:cwater:364048663447601154> <:cair:364048663518904327> / Penetrates: <:cwater:364048663447601154> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "fire beak")) {
         message.channel.send("Fire Beak <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:40 MHP:40 G:95+ <:cfire:364048663355588609> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nAttacks First / Critical Hit: <:cwater:364048663447601154> <:cair:364048663518904327> / Penetrates: <:cwater:364048663447601154> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "firebeak")) {
         message.channel.send("Fire Beak <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:40 MHP:40 G:95+ <:cfire:364048663355588609> \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nAttacks First / Critical Hit: <:cwater:364048663447601154> <:cair:364048663518904327> / Penetrates: <:cwater:364048663447601154> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "Fire Drake")) {
         message.channel.send("Fire Drake <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:40 MHP:40 G:80 \nIn Battle: ST+ (Number of <:cfire:364048663355588609> creatures in play x5).");
    }
    if (message.content.startsWith(prefix + "FireDrake")) {
         message.channel.send("Fire Drake <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:40 MHP:40 G:80 \nIn Battle: ST+ (Number of <:cfire:364048663355588609> creatures in play x5).");
    }
    if (message.content.startsWith(prefix + "fire drake")) {
         message.channel.send("Fire Drake <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:40 MHP:40 G:80 \nIn Battle: ST+ (Number of <:cfire:364048663355588609> creatures in play x5).");
    }
    if (message.content.startsWith(prefix + "firedrake")) {
         message.channel.send("Fire Drake <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:40 MHP:40 G:80 \nIn Battle: ST+ (Number of <:cfire:364048663355588609> creatures in play x5).");
    }
    if (message.content.startsWith(prefix + "Flame Duke")) {
         message.channel.send("Flame Duke <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:60+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nAttacks First / Critical Hit: When equipped with a weapon. / Battle End: Recycles equipped items to user\'s book.");
    }
    if (message.content.startsWith(prefix + "FlameDuke")) {
         message.channel.send("Flame Duke <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:60+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nAttacks First / Critical Hit: When equipped with a weapon. / Battle End: Recycles equipped items to user\'s book.");
    }
    if (message.content.startsWith(prefix + "flame duke")) {
         message.channel.send("Flame Duke <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:60+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nAttacks First / Critical Hit: When equipped with a weapon. / Battle End: Recycles equipped items to user\'s book.");
    }
    if (message.content.startsWith(prefix + "flameduke")) {
         message.channel.send("Flame Duke <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:60+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nAttacks First / Critical Hit: When equipped with a weapon. / Battle End: Recycles equipped items to user\'s book.");
    }  
    if (message.content.startsWith(prefix + "Gas Cloud")) {
         message.channel.send("Gas Cloud <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:45 \nItem Limit: <:carmor:364048663556915200> \nNeutralizes: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "GasCloud")) {
         message.channel.send("Gas Cloud <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:45 \nItem Limit: <:carmor:364048663556915200> \nNeutralizes: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "gas cloud")) {
         message.channel.send("Gas Cloud <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:45 \nItem Limit: <:carmor:364048663556915200> \nNeutralizes: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "gascloud")) {
         message.channel.send("Gas Cloud <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:45 \nItem Limit: <:carmor:364048663556915200> \nNeutralizes: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "General Guan")) {
         message.channel.send("General Guan <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:40 MHP:40 G:65+ <:cfire:364048663355588609> \nItem Limit: <:cnotool:364048663624024076> \nAttacks First / In Battle: ST+ (Number of creatures with MHP of 50 and up x5).");
    }
    if (message.content.startsWith(prefix + "GeneralGuan")) {
         message.channel.send("General Guan <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:40 MHP:40 G:65+ <:cfire:364048663355588609> \nItem Limit: <:cnotool:364048663624024076> \nAttacks First / In Battle: ST+ (Number of creatures with MHP of 50 and up x5).");
    }
    if (message.content.startsWith(prefix + "general guan")) {
         message.channel.send("General Guan <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:40 MHP:40 G:65+ <:cfire:364048663355588609> \nItem Limit: <:cnotool:364048663624024076> \nAttacks First / In Battle: ST+ (Number of creatures with MHP of 50 and up x5).");
    }
    if (message.content.startsWith(prefix + "generalguan")) {
         message.channel.send("General Guan <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:40 MHP:40 G:65+ <:cfire:364048663355588609> \nItem Limit: <:cnotool:364048663624024076> \nAttacks First / In Battle: ST+ (Number of creatures with MHP of 50 and up x5).");
    }
    if (message.content.startsWith(prefix + "Gladiator")) {
         message.channel.send("Gladiator <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:75 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nCritical Hit: <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "gladiator")) {
         message.channel.send("Gladiator <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:75 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nCritical Hit: <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "Hell Pyron")) {
         message.channel.send("Hell Pyron <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:70 HP:60 MHP:60 G:80+ <:cfire:364048663355588609> <:cfire:364048663355588609> + <:ccard:364048663426760705> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnotool:364048663624024076> \nBoo \nST: ST+10 to <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures. / \nSecret Art (30G): User gains (# of creatures destroyed x30)G, then number is reset.");
    }
    if (message.content.startsWith(prefix + "HellPyron")) {
         message.channel.send("Hell Pyron <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:70 HP:60 MHP:60 G:80+ <:cfire:364048663355588609> <:cfire:364048663355588609> + <:ccard:364048663426760705> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnotool:364048663624024076> \nBoo \nST: ST+10 to <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures. / \nSecret Art (30G): User gains (# of creatures destroyed x30)G, then number is reset.");
    }
    if (message.content.startsWith(prefix + "hell pyron")) {
         message.channel.send("Hell Pyron <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:70 HP:60 MHP:60 G:80+ <:cfire:364048663355588609> <:cfire:364048663355588609> + <:ccard:364048663426760705> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnotool:364048663624024076> \nBoo \nST: ST+10 to <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures. / \nSecret Art (30G): User gains (# of creatures destroyed x30)G, then number is reset.");
    }
    if (message.content.startsWith(prefix + "hellpyron")) {
         message.channel.send("Hell Pyron <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:70 HP:60 MHP:60 G:80+ <:cfire:364048663355588609> <:cfire:364048663355588609> + <:ccard:364048663426760705> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnotool:364048663624024076> \nBoo \nST: ST+10 to <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures. / \nSecret Art (30G): User gains (# of creatures destroyed x30)G, then number is reset.");
    }
    if (message.content.startsWith(prefix + "Hive Queen")) {
         message.channel.send("Hive Queen <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:40+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (20G): Adds Hive Worker to user\'s hand.");
    }
    if (message.content.startsWith(prefix + "HiveQueen")) {
         message.channel.send("Hive Queen <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:40+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (20G): Adds Hive Worker to user\'s hand.");
    }
    if (message.content.startsWith(prefix + "hive queen")) {
         message.channel.send("Hive Queen <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:40+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (20G): Adds Hive Worker to user\'s hand.");
    }
    if (message.content.startsWith(prefix + "hivequeen")) {
         message.channel.send("Hive Queen <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:40+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (20G): Adds Hive Worker to user\'s hand.");
    }
    if (message.content.startsWith(prefix + "Hive Worker")) {
         message.channel.send("Hive Worker <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:20 MHP:20 G:30 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST & HP+ (number of Hive Workers in play x10).");
    }
    if (message.content.startsWith(prefix + "HiveWorker")) {
         message.channel.send("Hive Worker <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:20 MHP:20 G:30 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST & HP+ (number of Hive Workers in play x10).");
    }
    if (message.content.startsWith(prefix + "hive worker")) {
         message.channel.send("Hive Worker <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:20 MHP:20 G:30 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST & HP+ (number of Hive Workers in play x10).");
    }
    if (message.content.startsWith(prefix + "hiveworker")) {
         message.channel.send("Hive Worker <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:20 MHP:20 G:30 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST & HP+ (number of Hive Workers in play x10).");
    }
    if (message.content.startsWith(prefix + "King Varan")) {
         message.channel.send("King Varan <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:60 HP:50 MHP:50 G:100 \nItem Limit: <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "KingVaran")) {
         message.channel.send("King Varan <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:60 HP:50 MHP:50 G:100 \nItem Limit: <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "king varan")) {
         message.channel.send("King Varan <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:60 HP:50 MHP:50 G:100 \nItem Limit: <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "kingvaran")) {
         message.channel.send("King Varan <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:60 HP:50 MHP:50 G:100 \nItem Limit: <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "Knight-Errant")) {
         message.channel.send("Knight-errant <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:30 MHP:30 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (Evolves into Armed Paladin). / Reflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "Knight-errant")) {
         message.channel.send("Knight-errant <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:30 MHP:30 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (Evolves into Armed Paladin). / Reflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "knight-errant")) {
         message.channel.send("Knight-errant <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:30 MHP:30 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (Evolves into Armed Paladin). / Reflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "KnightErrant")) {
         message.channel.send("Knight-errant <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:30 MHP:30 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (Evolves into Armed Paladin). / Reflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "knight-errant")) {
         message.channel.send("Knight-errant <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:30 MHP:30 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (Evolves into Armed Paladin). / Reflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "knighterrant")) {
         message.channel.send("Knight-errant <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:30 MHP:30 G:60+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (Evolves into Armed Paladin). / Reflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "Lavakin")) {
         message.channel.send("Lavakin <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:60 HP:30 MHP:30 G:70 \nIn Battle: ST- (number of rounds), HP+ (number of rounds).");
    }
    if (message.content.startsWith(prefix + "lavakin")) {
         message.channel.send("Lavakin <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:60 HP:30 MHP:30 G:70 \nIn Battle: ST- (number of rounds), HP+ (number of rounds).");
    }
    if (message.content.startsWith(prefix + "Lone Beast")) {
         message.channel.send("Lone Beast <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:80 \nIn Battle: HP+ (this creature\'s base ST). / Critical Hit: If user owns territory adjacent to battle territory.");
    }
    if (message.content.startsWith(prefix + "LoneBeast")) {
         message.channel.send("Lone Beast <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:80 \nIn Battle: HP+ (this creature\'s base ST). / Critical Hit: If user owns territory adjacent to battle territory.");
    }
    if (message.content.startsWith(prefix + "lone beast")) {
         message.channel.send("Lone Beast <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:80 \nIn Battle: HP+ (this creature\'s base ST). / Critical Hit: If user owns territory adjacent to battle territory.");
    }
    if (message.content.startsWith(prefix + "lonebeast")) {
         message.channel.send("Lone Beast <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:80 \nIn Battle: HP+ (this creature\'s base ST). / Critical Hit: If user owns territory adjacent to battle territory.");
    }
    if (message.content.startsWith(prefix + "Minotaur")) {
         message.channel.send("Minotaur <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:60");
    }
    if (message.content.startsWith(prefix + "minotaur")) {
         message.channel.send("Minotaur <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:60");
    }
    if (message.content.startsWith(prefix + "Mushussu")) {
         message.channel.send("Mushussu <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:50 MHP:50 G:70+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nSynergy: <:cearth:364048663582081034> (ST+20, HP+10). / Critical Hit: <:cfire:364048663355588609> & <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "mushussu")) {
         message.channel.send("Mushussu <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:50 MHP:50 G:70+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nSynergy: <:cearth:364048663582081034> (ST+20, HP+10). / Critical Hit: <:cfire:364048663355588609> & <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "Nebiros")) {
         message.channel.send("Nebiros <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:50 HP:40 MHP:40 G:70+ <:cfire:364048663355588609> \nAttack Bonus: User draws cards until their hand contains 5 cards. / Critical Hit: If opponent does not equip an item.");
    }
    if (message.content.startsWith(prefix + "nebiros")) {
         message.channel.send("Nebiros <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:50 HP:40 MHP:40 G:70+ <:cfire:364048663355588609> \nAttack Bonus: User draws cards until their hand contains 5 cards. / Critical Hit: If opponent does not equip an item.");
    }
    if (message.content.startsWith(prefix + "Old Willow")) {
         message.channel.send("Old Willow <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:70+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nItem Limit: <:cnoweapon:364048663309189152> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nDefensive / Stops all passing cepter\'s other than user when placed on a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "OldWillow")) {
         message.channel.send("Old Willow <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:70+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nItem Limit: <:cnoweapon:364048663309189152> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nDefensive / Stops all passing cepter\'s other than user when placed on a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "old willow")) {
         message.channel.send("Old Willow <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:70+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nItem Limit: <:cnoweapon:364048663309189152> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nDefensive / Stops all passing cepter\'s other than user when placed on a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "oldwillow")) {
         message.channel.send("Old Willow <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:20 HP:40 MHP:40 G:70+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nItem Limit: <:cnoweapon:364048663309189152> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nDefensive / Stops all passing cepter\'s other than user when placed on a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "Phlogiston")) {
         message.channel.send("Phlogiston <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:35 \nCritical Hit: Creatures with MHP of 40 and under.");
    }
    if (message.content.startsWith(prefix + "phlogiston")) {
         message.channel.send("Phlogiston <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:35 \nCritical Hit: Creatures with MHP of 40 and under.");
    }
    if (message.content.startsWith(prefix + "Phoenix")) {
         message.channel.send("Phoenix <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:30 MHP:30 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nUpon Defeat: Returns to user\'s hand.");
    }
    if (message.content.startsWith(prefix + "phoenix")) {
         message.channel.send("Phoenix <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:30 MHP:30 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nUpon Defeat: Returns to user\'s hand.");
    }
    if (message.content.startsWith(prefix + "Pyroculus")) {
         message.channel.send("Pyroculus <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:10 HP:40 MHP:40 G:30+ <:ccard:364048663426760705> \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:cweapon:364048663527424002> \nSynthesis: <:csinstant:364048663447863298> Spells (Evolves into Hell Pyron). / Neutralizes: <:cscroll:364048663691001876> Attacks.");
    }
    if (message.content.startsWith(prefix + "pyroculus")) {
         message.channel.send("Pyroculus <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:10 HP:40 MHP:40 G:30+ <:ccard:364048663426760705> \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:cweapon:364048663527424002> \nSynthesis: <:csinstant:364048663447863298> Spells (Evolves into Hell Pyron). / Neutralizes: <:cscroll:364048663691001876> Attacks.");
    }
    if (message.content.startsWith(prefix + "Pyromancer")) {
         message.channel.send("Pyromancer <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:30 HP:50 MHP:50 G:70 \nIn Battle: Performs a Scroll Attack of ST=30 if not given an item. / Battle End: ST=20, MHP=30 if the enemy landed an attack.");
    }
    if (message.content.startsWith(prefix + "pyromancer")) {
         message.channel.send("Pyromancer <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:30 HP:50 MHP:50 G:70 \nIn Battle: Performs a Scroll Attack of ST=30 if not given an item. / Battle End: ST=20, MHP=30 if the enemy landed an attack.");
    }
    if (message.content.startsWith(prefix + "Python")) {
         message.channel.send("Python <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:50 MHP:50 G:75+ <:cfire:364048663355588609> \nItem Limit: <:carmor:364048663556915200> \nPenetrates: Creatures with ST of 40 and up. / Battle End: User gains 100G when invading.");
    }
    if (message.content.startsWith(prefix + "python")) {
         message.channel.send("Python <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:50 MHP:50 G:75+ <:cfire:364048663355588609> \nItem Limit: <:carmor:364048663556915200> \nPenetrates: Creatures with ST of 40 and up. / Battle End: User gains 100G when invading.");
    }
    if (message.content.startsWith(prefix + "Red Ogre")) {
         message.channel.send("Red Ogre <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "RedOgre")) {
         message.channel.send("Red Ogre <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "red ogre")) {
         message.channel.send("Red Ogre <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "redogre")) {
         message.channel.send("Red Ogre <:crarityn:364048663661772800> <:cfire:364048663355588609> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "Sharazad")) {
         message.channel.send("Sharazad <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50 \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> / \nSecret Art (30G): Clears <:csenchant:364048663464378391> from all cepter\'s.");
    }
    if (message.content.startsWith(prefix + "sharazad")) {
         message.channel.send("Sharazad <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:20 HP:30 MHP:30 G:50 \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> / \nSecret Art (30G): Clears <:csenchant:364048663464378391> from all cepter\'s.");
    }
    if (message.content.startsWith(prefix + "Shieldmaiden")) {
         message.channel.send("Shieldmaiden <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:80 \nVigorous");
    }
    if (message.content.startsWith(prefix + "shieldmaiden")) {
         message.channel.send("Shieldmaiden <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:80 \nVigorous");
    }
    if (message.content.startsWith(prefix + "Shocker")) {
         message.channel.send("Shocker <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:10 HP:40 MHP:40 G:70 \nAttacks First / Vigorous / Attack Bonus: Adds Fatigued to target creature.");
    }
    if (message.content.startsWith(prefix + "shocker")) {
         message.channel.send("Shocker <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:10 HP:40 MHP:40 G:70 \nAttacks First / Vigorous / Attack Bonus: Adds Fatigued to target creature.");
    }
    if (message.content.startsWith(prefix + "Sigurd")) {
         message.channel.send("Sigurd <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:80+ <:cfire:364048663355588609> \nInstant Death: 60% against creatures with ST of 50 and up. / Neutralizes: Attacks from creatures with MHP of 50 and up.");
    }
    if (message.content.startsWith(prefix + "sigurd")) {
         message.channel.send("Sigurd <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:80+ <:cfire:364048663355588609> \nInstant Death: 60% against creatures with ST of 50 and up. / Neutralizes: Attacks from creatures with MHP of 50 and up.");
    }
    if (message.content.startsWith(prefix + "Sulfurous Balloon")) {
         message.channel.send("Sulfurous Balloon <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:10 HP:40 MHP:40 G:20+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nUpon Defeat: HP-40 to opponent.");
    }
    if (message.content.startsWith(prefix + "SulfurousBalloon")) {
         message.channel.send("Sulfurous Balloon <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:10 HP:40 MHP:40 G:20+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nUpon Defeat: HP-40 to opponent.");
    }
    if (message.content.startsWith(prefix + "sulfurous balloon")) {
         message.channel.send("Sulfurous Balloon <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:10 HP:40 MHP:40 G:20+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nUpon Defeat: HP-40 to opponent.");
    }
    if (message.content.startsWith(prefix + "sulfurousballoon")) {
         message.channel.send("Sulfurous Balloon <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:10 HP:40 MHP:40 G:20+ <:cfire:364048663355588609> \nItem Limit: <:cnoscroll:364048663653122048> \nUpon Defeat: HP-40 to opponent.");
    }
    if (message.content.startsWith(prefix + "Tiamat")) {
         message.channel.send("Tiamat <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:60 HP:60 MHP:60 G:110+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nAttacks First / Critical Hit: <:cwater:364048663447601154> <:cair:364048663518904327> / Upon Victory: Changes battle territory to a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "tiamat")) {
         message.channel.send("Tiamat <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:60 HP:60 MHP:60 G:110+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nAttacks First / Critical Hit: <:cwater:364048663447601154> <:cair:364048663518904327> / Upon Victory: Changes battle territory to a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "Uriel")) {
         message.channel.send("Uriel <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:90 \nCritical Hit: Creatures under an <:csenchant:364048663464378391> effect. / \nSecret Art (50G): Removes the <:cglobal:364049704293629954> currently in effect.");
    }
    if (message.content.startsWith(prefix + "uriel")) {
         message.channel.send("Uriel <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:40 HP:40 MHP:40 G:90 \nCritical Hit: Creatures under an <:csenchant:364048663464378391> effect. / \nSecret Art (50G): Removes the <:cglobal:364049704293629954> currently in effect.");
    }
    if (message.content.startsWith(prefix + "Valkyria")) {
         message.channel.send("Valkyria <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:70+ <:cfire:364048663355588609> \nAttacks First / Support: <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cearth:364048663582081034> / Upon Victory: ST+10 (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "valkyria")) {
         message.channel.send("Valkyria <:craritys:364048663351132162> <:cfire:364048663355588609> \nST:30 HP:30 MHP:30 G:70+ <:cfire:364048663355588609> \nAttacks First / Support: <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cearth:364048663582081034> / Upon Victory: ST+10 (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "Volcanic Dragon")) {
         message.channel.send("Volcanic Dragon <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:80+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "VolcanicDragon")) {
         message.channel.send("Volcanic Dragon <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:80+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "volcanic dragon")) {
         message.channel.send("Volcanic Dragon <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:80+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "volcanicdragon")) {
         message.channel.send("Volcanic Dragon <:crarityr:364045147085864960> <:cfire:364048663355588609> \nST:50 HP:50 MHP:50 G:80+ <:cfire:364048663355588609> <:cfire:364048663355588609> \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    } 
  //WATER CREATURES GO HERE
  if (message.content.startsWith(prefix + "Alp")) {
       message.channel.send("Alp <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:40 \nLand Limit: <:cnofire:364048663732813845> \nSecret Art (50G): Make target enemy creature Fatigued.");
    }
    if (message.content.startsWith(prefix + "alp")) {
         message.channel.send("Alp <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:40 \nLand Limit: <:cnofire:364048663732813845> \nSecret Art (50G): Make target enemy creature Fatigued.");
    }
    if (message.content.startsWith(prefix + "Amazon")) {
         message.channel.send("Amazon <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:40 HP:40 MHP:40 G:70 \nAttack Bonus: Steals (user\'s lap number x30)G from enemy Cepter if this creature is not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "amazon")) {
         message.channel.send("Amazon <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:40 HP:40 MHP:40 G:70 \nAttack Bonus: Steals (user\'s lap number x30)G from enemy Cepter if this creature is not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "Amphibian Warrior")) {
         message.channel.send("Amphibian Warrior <:craritys:364048663351132162> \nST:40 HP:30 MHP:30 G:60 \nIn Battle: ST+20 if battle territory is <:cwater:364048663447601154> or <:cair:364048663518904327> / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "AmphibianWarrior")) {
         message.channel.send("Amphibian Warrior <:craritys:364048663351132162> \nST:40 HP:30 MHP:30 G:60 \nIn Battle: ST+20 if battle territory is <:cwater:364048663447601154> or <:cair:364048663518904327> / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "amphibian warrior")) {
         message.channel.send("Amphibian Warrior <:craritys:364048663351132162> \nST:40 HP:30 MHP:30 G:60 \nIn Battle: ST+20 if battle territory is <:cwater:364048663447601154> or <:cair:364048663518904327> / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "amphibianwarrior")) {
         message.channel.send("Amphibian Warrior <:craritys:364048663351132162> \nST:40 HP:30 MHP:30 G:60 \nIn Battle: ST+20 if battle territory is <:cwater:364048663447601154> or <:cair:364048663518904327> / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "Apsaras")) {
         message.channel.send("Apsaras <:craritys:364048663351132162> \nST:20 HP:40 MHP:40 G:40+ <:cwater:364048663447601154> \nItem Limit: <:cnoweapon:364048663309189152> <:cnotool:364048663624024076> \nNeutralizes: Normal Attacks when occupied territory is level 3 or higher.");
    }
    if (message.content.startsWith(prefix + "apsaras")) {
         message.channel.send("Apsaras <:craritys:364048663351132162> \nST:20 HP:40 MHP:40 G:40+ <:cwater:364048663447601154> \nItem Limit: <:cnoweapon:364048663309189152> <:cnotool:364048663624024076> \nNeutralizes: Normal Attacks when occupied territory is level 3 or higher.");
    }
    if (message.content.startsWith(prefix + "Aqua Duke")) {
         message.channel.send("Aqua Duke <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:60+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nNeutralizes: Normal Attacks when equipped with armor. / Support: <:cwater:364048663447601154> / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "AquaDuke")) {
         message.channel.send("Aqua Duke <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:60+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nNeutralizes: Normal Attacks when equipped with armor. / Support: <:cwater:364048663447601154> / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "aqua duke")) {
         message.channel.send("Aqua Duke <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:60+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nNeutralizes: Normal Attacks when equipped with armor. / Support: <:cwater:364048663447601154> / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "aquaduke")) {
         message.channel.send("Aqua Duke <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:60+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nNeutralizes: Normal Attacks when equipped with armor. / Support: <:cwater:364048663447601154> / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "Aquahorn")) {
         message.channel.send("Aquahorn <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:50 HP:30 MHP:30 G:70 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cwater:364048663447601154> <:cearth:364048663582081034> \n/ Secret Art (30G): Transforms into Mistwing.");
    }
    if (message.content.startsWith(prefix + "aquahorn")) {
         message.channel.send("Aquahorn <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:50 HP:30 MHP:30 G:70 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cwater:364048663447601154> <:cearth:364048663582081034> \n/ Secret Art (30G): Transforms into Mistwing.");
    }
    if (message.content.startsWith(prefix + "Aqualing")) {
         message.channel.send("Aqualing <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:20 HP:30 MHP:30 G:40 \nNeutralizes: Creatures with MHP of 30 and under.");
    }
    if (message.content.startsWith(prefix + "aqualing")) {
         message.channel.send("Aqualing <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:20 HP:30 MHP:30 G:40 \nNeutralizes: Creatures with MHP of 30 and under.");
    }
    if (message.content.startsWith(prefix + "Bahamut")) {
         message.channel.send("Bahamut <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:60 HP:60 MHP:60 G:110+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nAttacks First / Upon Victory: Changes battle territory to a <:cwater:364048663447601154> land. / Regenerates");
    }
    if (message.content.startsWith(prefix + "bahamut")) {
         message.channel.send("Bahamut <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:60 HP:60 MHP:60 G:110+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nAttacks First / Upon Victory: Changes battle territory to a <:cwater:364048663447601154> land. / Regenerates");
    }
    if (message.content.startsWith(prefix + "Bloody Pudding")) {
         message.channel.send("Bloody Pudding <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327> / Battle Start: MHP+ (supporting creature\'s MHP) (Max. 100).");
    }
    if (message.content.startsWith(prefix + "BloodyPudding")) {
         message.channel.send("Bloody Pudding <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327> / Battle Start: MHP+ (supporting creature\'s MHP) (Max. 100).");
    }
    if (message.content.startsWith(prefix + "bloody pudding")) {
         message.channel.send("Bloody Pudding <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327> / Battle Start: MHP+ (supporting creature\'s MHP) (Max. 100).");
    }
    if (message.content.startsWith(prefix + "bloodypudding")) {
         message.channel.send("Bloody Pudding <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327> / Battle Start: MHP+ (supporting creature\'s MHP) (Max. 100).");
    }
    if (message.content.startsWith(prefix + "Blue Ogre")) {
         message.channel.send("Blue Ogre <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "BlueOgre")) {
         message.channel.send("Blue Ogre <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "blue ogre")) {
         message.channel.send("Blue Ogre <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "blueogre")) {
         message.channel.send("Blue Ogre <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "Chironex")) {
         message.channel.send("Chironex <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nInstant Death: 80% chance when defending. / Upon Defeat: User loses 100G.");
    }
    if (message.content.startsWith(prefix + "chironex")) {
         message.channel.send("Chironex <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nInstant Death: 80% chance when defending. / Upon Defeat: User loses 100G.");
    }
    if (message.content.startsWith(prefix + "Deep-Sea Dragon")) {
         message.channel.send("Deep-Sea Dragon <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "Deep-SeaDragon")) {
         message.channel.send("Deep-Sea Dragon <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "DeepSea Dragon")) {
         message.channel.send("Deep-Sea Dragon <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "DeepSeaDragon")) {
         message.channel.send("Deep-Sea Dragon <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "deep-sea dragon")) {
         message.channel.send("Deep-Sea Dragon <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "deep-seadragon")) {
         message.channel.send("Deep-Sea Dragon <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "deepsea dragon")) {
         message.channel.send("Deep-Sea Dragon <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "deepseadragon")) {
         message.channel.send("Deep-Sea Dragon <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / In Battle: Performs a Scroll Attack of its base ST value if not equipped with an item.");
    }
    if (message.content.startsWith(prefix + "Echinoderm")) {
         message.channel.send("Echinoderm <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:40 MHP:40 G:70 \nItem Limit: <:cnoscroll:364048663653122048> \nRegenerates / Vigorous");
    }
    if (message.content.startsWith(prefix + "echinoderm")) {
         message.channel.send("Echinoderm <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:40 MHP:40 G:70 \nItem Limit: <:cnoscroll:364048663653122048> \nRegenerates / Vigorous");
    }
    if (message.content.startsWith(prefix + "Fate")) {
         message.channel.send("Fate <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:10 HP:40 MHP:40 G:60 \nUpon Defeat: User draws a card. / \nSecret Art (40G): User draws a card.");
    }
    if (message.content.startsWith(prefix + "fate")) {
         message.channel.send("Fate <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:10 HP:40 MHP:40 G:60 \nUpon Defeat: User draws a card. / \nSecret Art (40G): User draws a card.");
    }
    if (message.content.startsWith(prefix + "Gelatinous Wall")) {
         message.channel.send("Gelatinous Wall <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:10 HP:50 MHP:50 G:30 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Battle End: User gains (damage received from Normal Attacks x5)G.");
    }
    if (message.content.startsWith(prefix + "GelatinousWall")) {
         message.channel.send("Gelatinous Wall <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:10 HP:50 MHP:50 G:30 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Battle End: User gains (damage received from Normal Attacks x5)G.");
    }
    if (message.content.startsWith(prefix + "gelatinous wall")) {
         message.channel.send("Gelatinous Wall <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:10 HP:50 MHP:50 G:30 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Battle End: User gains (damage received from Normal Attacks x5)G.");
    }
    if (message.content.startsWith(prefix + "gelatinouswall")) {
         message.channel.send("Gelatinous Wall <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:10 HP:50 MHP:50 G:30 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Battle End: User gains (damage received from Normal Attacks x5)G.");
    }
    if (message.content.startsWith(prefix + "Ghost Ship")) {
         message.channel.send("Ghost Ship <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:30 MHP:30 G:75 \nItem Limit: <:carmor:364048663556915200> \nSynergy: <:cair:364048663518904327> (HP+30). / Neutralizes: Creatures with ST of 40 and under.");
    }
    if (message.content.startsWith(prefix + "GhostShip")) {
         message.channel.send("Ghost Ship <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:30 MHP:30 G:75 \nItem Limit: <:carmor:364048663556915200> \nSynergy: <:cair:364048663518904327> (HP+30). / Neutralizes: Creatures with ST of 40 and under.");
    }
    if (message.content.startsWith(prefix + "ghost ship")) {
         message.channel.send("Ghost Ship <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:30 MHP:30 G:75 \nItem Limit: <:carmor:364048663556915200> \nSynergy: <:cair:364048663518904327> (HP+30). / Neutralizes: Creatures with ST of 40 and under.");
    }
    if (message.content.startsWith(prefix + "ghostship")) {
         message.channel.send("Ghost Ship <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:30 MHP:30 G:75 \nItem Limit: <:carmor:364048663556915200> \nSynergy: <:cair:364048663518904327> (HP+30). / Neutralizes: Creatures with ST of 40 and under.");
    }
    if (message.content.startsWith(prefix + "Giant Eel")) {
         message.channel.send("Giant Eel <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:60+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "GiantEel")) {
         message.channel.send("Giant Eel <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:60+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "giant eel")) {
         message.channel.send("Giant Eel <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:60+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "gianteel")) {
         message.channel.send("Giant Eel <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:60+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cearth:364048663582081034> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "Giant Nautilus")) {
         message.channel.send("Giant Nautilus <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:10 HP:70 MHP:70 G:80 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "GiantNautilus")) {
         message.channel.send("Giant Nautilus <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:10 HP:70 MHP:70 G:80 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "giant nautilus")) {
         message.channel.send("Giant Nautilus <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:10 HP:70 MHP:70 G:80 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "giantnautilus")) {
         message.channel.send("Giant Nautilus <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:10 HP:70 MHP:70 G:80 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "Gluey Slug")) {
         message.channel.send("Gluey Slug <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:60 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nCannot be invaded by Move Creature.");
    }
    if (message.content.startsWith(prefix + "GlueySlug")) {
         message.channel.send("Gluey Slug <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:60 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nCannot be invaded by Move Creature.");
    }
    if (message.content.startsWith(prefix + "gluey slug")) {
         message.channel.send("Gluey Slug <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:60 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nCannot be invaded by Move Creature.");
    }
    if (message.content.startsWith(prefix + "glueyslug")) {
         message.channel.send("Gluey Slug <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:60 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nCannot be invaded by Move Creature.");
    }
    if (message.content.startsWith(prefix + "Hellgrammite")) {
         message.channel.send("Hellgrammite <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:30 MHP:30 G:60+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nUpon Defeat: Evolves into Serpent Fly.");
    }
    if (message.content.startsWith(prefix + "hellgrammite")) {
         message.channel.send("Hellgrammite <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:30 MHP:30 G:60+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nUpon Defeat: Evolves into Serpent Fly.");
    }
    if (message.content.startsWith(prefix + "Hippocampus")) {
         message.channel.send("Hippocampus <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:30 MHP:30 G:40+ <:cwater:364048663447601154> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cneutral:364043997825597440> \n/ Secret Art (60G): Evolves into Kelpie.");
    }
    if (message.content.startsWith(prefix + "hippocampus")) {
         message.channel.send("Hippocampus <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:30 MHP:30 G:40+ <:cwater:364048663447601154> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cneutral:364043997825597440> \n/ Secret Art (60G): Evolves into Kelpie.");
    }
    if (message.content.startsWith(prefix + "Hyde")) {
         message.channel.send("Hyde <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:30 MHP:30 G:20+ <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nSecret Art (50G): Adds Paralysis <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "hyde")) {
         message.channel.send("Hyde <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:30 MHP:30 G:20+ <:cwater:364048663447601154> \nLand Limit: <:cnofire:364048663732813845> \nSecret Art (50G): Adds Paralysis <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "Id")) {
         message.channel.send("Id <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:40 HP:30 MHP:30 G:50+ <:cwater:364048663447601154> + <:ccard:364048663426760705> \nSynthesis: Creatures (Transforms into discarded creature). / Neutralizes: <:cscroll:364048663691001876> Attacks.");
    }
    if (message.content.startsWith(prefix + "id")) {
         message.channel.send("Id <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:40 HP:30 MHP:30 G:50+ <:cwater:364048663447601154> + <:ccard:364048663426760705> \nSynthesis: Creatures (Transforms into discarded creature). / Neutralizes: <:cscroll:364048663691001876> Attacks.");
    }
    if (message.content.startsWith(prefix + "Kaiser Penguin")) {
         message.channel.send("Kaiser Penguin <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:90 \nItem Limit: <:cnoscroll:364048663653122048> \nBattle Start: Destroys opponent\'s tool, scroll, or supporting creature.");
    }
    if (message.content.startsWith(prefix + "KaiserPenguin")) {
         message.channel.send("Kaiser Penguin <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:90 \nItem Limit: <:cnoscroll:364048663653122048> \nBattle Start: Destroys opponent\'s tool, scroll, or supporting creature.");
    }
    if (message.content.startsWith(prefix + "kaiser penguin")) {
         message.channel.send("Kaiser Penguin <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:90 \nItem Limit: <:cnoscroll:364048663653122048> \nBattle Start: Destroys opponent\'s tool, scroll, or supporting creature.");
    }
    if (message.content.startsWith(prefix + "kaiserpenguin")) {
         message.channel.send("Kaiser Penguin <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:50 MHP:50 G:90 \nItem Limit: <:cnoscroll:364048663653122048> \nBattle Start: Destroys opponent\'s tool, scroll, or supporting creature.");
    }
    if (message.content.startsWith(prefix + "Kawahime")) {
         message.channel.send("Kawahime <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:70 \nLand Limit: <:cnofire:364048663732813845> \nVigorous / \nSecret Art (30G): ST-10 to target creature.");
    }
    if (message.content.startsWith(prefix + "kawahime")) {
         message.channel.send("Kawahime <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:70 \nLand Limit: <:cnofire:364048663732813845> \nVigorous / \nSecret Art (30G): ST-10 to target creature.");
    }
    if (message.content.startsWith(prefix + "Kelpie")) {
         message.channel.send("Kelpie <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:30 MHP:30 G:80+ <:cwater:364048663447601154> \nItem Limit: <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nStops all passing cepter\'s other than user when placed on a <:cwater:364048663447601154> land.");
    }
    if (message.content.startsWith(prefix + "kelpie")) {
         message.channel.send("Kelpie <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:30 HP:30 MHP:30 G:80+ <:cwater:364048663447601154> \nItem Limit: <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nStops all passing cepter\'s other than user when placed on a <:cwater:364048663447601154> land.");
    }
    if (message.content.startsWith(prefix + "King Tortoise")) {
         message.channel.send("King Tortoise <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:50 HP:60 MHP:60 G:100 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks Last");
    }
    if (message.content.startsWith(prefix + "KingTortoise")) {
         message.channel.send("King Tortoise <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:50 HP:60 MHP:60 G:100 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks Last");
    }
    if (message.content.startsWith(prefix + "king tortoise")) {
         message.channel.send("King Tortoise <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:50 HP:60 MHP:60 G:100 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks Last");
    }
    if (message.content.startsWith(prefix + "kingtortoise")) {
         message.channel.send("King Tortoise <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:50 HP:60 MHP:60 G:100 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks Last");
    }
    if (message.content.startsWith(prefix + "Lilith")) {
         message.channel.send("Lilith <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:0 HP:30 MHP:30 G:60 \nAttacks First / In Battle: ST= (number of cards in user\'s hand x10).");
    }
    if (message.content.startsWith(prefix + "lilith")) {
         message.channel.send("Lilith <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:0 HP:30 MHP:30 G:60 \nAttacks First / In Battle: ST= (number of cards in user\'s hand x10).");
    }
    if (message.content.startsWith(prefix + "Lizardman")) {
         message.channel.send("Lizardman <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:70 \nAttacks First");
    }
    if (message.content.startsWith(prefix + "lizardman")) {
         message.channel.send("Lizardman <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:70 \nAttacks First");
    }
    if (message.content.startsWith(prefix + "Makara")) {
         message.channel.send("Makara <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:65 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Vigorous / \nSecret Art (100G): Transforms occupied territory to a <:cwater:364048663447601154> land.");
    }
    if (message.content.startsWith(prefix + "makara")) {
         message.channel.send("Makara <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:65 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / Vigorous / \nSecret Art (100G): Transforms occupied territory to a <:cwater:364048663447601154> land.");
    }
    if (message.content.startsWith(prefix + "Megalodon")) {
         message.channel.send("Megalodon <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:40 \nLand Limit: <:cnofire:364048663732813845> <:cnoearth:364048663602790439> <:cnoair:364048663732944896> \nItem Limit: <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "megalodon")) {
         message.channel.send("Megalodon <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:40 \nLand Limit: <:cnofire:364048663732813845> <:cnoearth:364048663602790439> <:cnoair:364048663732944896> \nItem Limit: <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "Mistwing")) {
         message.channel.send("Mistwing <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:70 \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cfire:364048663355588609> <:cair:364048663518904327> \nSecret Art (30G): Transforms into Aquahorn.");
    }
    if (message.content.startsWith(prefix + "mistwing")) {
         message.channel.send("Mistwing <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:70 \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: <:cfire:364048663355588609> <:cair:364048663518904327> \nSecret Art (30G): Transforms into Aquahorn.");
    }
    if (message.content.startsWith(prefix + "Mycoron")) {
         message.channel.send("Mycoron <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:10 HP:30 MHP:30 G:35 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nRegenerates / Battle End: If the enemy landed an attack, places a Mycoron on a random vacant land.");
    }
    if (message.content.startsWith(prefix + "mycoron")) {
         message.channel.send("Mycoron <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:10 HP:30 MHP:30 G:35 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nRegenerates / Battle End: If the enemy landed an attack, places a Mycoron on a random vacant land.");
    }
    if (message.content.startsWith(prefix + "Nessie")) {
         message.channel.send("Nessie <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:40 MHP:40 G:45+ <:cwater:364048663447601154> \nItem Limit: <:carmor:364048663556915200> \nIn Battle: HP+ (level of battle territory x10) if battle territory is <:cwater:364048663447601154>");
    }
    if (message.content.startsWith(prefix + "nessie")) {
         message.channel.send("Nessie <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:20 HP:40 MHP:40 G:45+ <:cwater:364048663447601154> \nItem Limit: <:carmor:364048663556915200> \nIn Battle: HP+ (level of battle territory x10) if battle territory is <:cwater:364048663447601154>");
    }
    if (message.content.startsWith(prefix + "Odontotyrannus")) {
         message.channel.send("Odontotyrannus <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:70+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nSynergy: <:cair:364048663518904327> (ST+20, HP+10)");
    }
    if (message.content.startsWith(prefix + "odontotyrannus")) {
         message.channel.send("Odontotyrannus <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:50 HP:50 MHP:50 G:70+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nSynergy: <:cair:364048663518904327> (ST+20, HP+10)");
    }
    if (message.content.startsWith(prefix + "Otohime")) {
         message.channel.send("Otohime <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:40 MHP:40 G:70+ <:cwater:364048663447601154> \nBoost: HP+10 to defending creatures. / Battle End: Adds Last Breath <:csenchant:364048663464378391> to enemy creature.");
    }
    if (message.content.startsWith(prefix + "otohime")) {
         message.channel.send("Otohime <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:40 MHP:40 G:70+ <:cwater:364048663447601154> \nBoost: HP+10 to defending creatures. / Battle End: Adds Last Breath <:csenchant:364048663464378391> to enemy creature.");
    } 
    if (message.content.startsWith(prefix + "Rahab")) {
         message.channel.send("Rahab <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:60 HP:60 MHP:60 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> + <:ccard:364048663426760705> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnotool:364048663624024076>  \nNeutralizes: Creatures with ST of 50 and up. / Boost: HP+10 to <:cwater:364048663447601154> & <:cair:364048663518904327> creatures.");
    }
    if (message.content.startsWith(prefix + "rahab")) {
         message.channel.send("Rahab <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:60 HP:60 MHP:60 G:80+ <:cwater:364048663447601154> <:cwater:364048663447601154> + <:ccard:364048663426760705> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnotool:364048663624024076>  \nNeutralizes: Creatures with ST of 50 and up. / Boost: HP+10 to <:cwater:364048663447601154> & <:cair:364048663518904327> creatures.");
    }
    if (message.content.startsWith(prefix + "Rune Adept")) {
         message.channel.send("Rune Adept <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:50+ <:cwater:364048663447601154> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nScroll Critical Hit / Anti-Spell / \nSecret Art (100G): Uses the effect of a <:csinstant:364048663447863298> card in user\'s hand.");
    }
    if (message.content.startsWith(prefix + "RuneAdept")) {
         message.channel.send("Rune Adept <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:50+ <:cwater:364048663447601154> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nScroll Critical Hit / Anti-Spell / \nSecret Art (100G): Uses the effect of a <:csinstant:364048663447863298> card in user\'s hand.");
    }
    if (message.content.startsWith(prefix + "rune adept")) {
         message.channel.send("Rune Adept <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:50+ <:cwater:364048663447601154> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nScroll Critical Hit / Anti-Spell / \nSecret Art (100G): Uses the effect of a <:csinstant:364048663447863298> card in user\'s hand.");
    }
    if (message.content.startsWith(prefix + "runeadept")) {
         message.channel.send("Rune Adept <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:20 MHP:20 G:50+ <:cwater:364048663447601154> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nScroll Critical Hit / Anti-Spell / \nSecret Art (100G): Uses the effect of a <:csinstant:364048663447863298> card in user\'s hand.");
    }
    if (message.content.startsWith(prefix + "Scylla")) {
         message.channel.send("Scylla <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:60+ <:cwater:364048663447601154> \nIn Battle: Disables opponent\'s Attack Bonus. / Battle End: Adds Sleep <:csenchant:364048663464378391> to enemy creature.");
    }
    if (message.content.startsWith(prefix + "scylla")) {
         message.channel.send("Scylla <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:60+ <:cwater:364048663447601154> \nIn Battle: Disables opponent\'s Attack Bonus. / Battle End: Adds Sleep <:csenchant:364048663464378391> to enemy creature.");
    }
    if (message.content.startsWith(prefix + "Sea Bonze")) {
         message.channel.send("Sea Bonze <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:10 HP:40 MHP:40 G:40 \nLand Limit: <:cnofire:364048663732813845> <:cnoearth:364048663602790439> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nDefensive / In Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "SeaBonze")) {
         message.channel.send("Sea Bonze <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:10 HP:40 MHP:40 G:40 \nLand Limit: <:cnofire:364048663732813845> <:cnoearth:364048663602790439> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nDefensive / In Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "sea bonze")) {
         message.channel.send("Sea Bonze <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:10 HP:40 MHP:40 G:40 \nLand Limit: <:cnofire:364048663732813845> <:cnoearth:364048663602790439> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nDefensive / In Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "seabonze")) {
         message.channel.send("Sea Bonze <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:10 HP:40 MHP:40 G:40 \nLand Limit: <:cnofire:364048663732813845> <:cnoearth:364048663602790439> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> <:cnoscroll:364048663653122048> \nDefensive / In Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "Sludge Titan")) {
         message.channel.send("Sludge Titan <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:50 HP:60 MHP:60 G:90 \nItem Limit: <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> \nBattle Start: If HP is not at maximum, this creature is destroyed. / Regenerates");
    }
    if (message.content.startsWith(prefix + "SludgeTitan")) {
         message.channel.send("Sludge Titan <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:50 HP:60 MHP:60 G:90 \nItem Limit: <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> \nBattle Start: If HP is not at maximum, this creature is destroyed. / Regenerates");
    }
    if (message.content.startsWith(prefix + "sludge titan")) {
         message.channel.send("Sludge Titan <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:50 HP:60 MHP:60 G:90 \nItem Limit: <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> \nBattle Start: If HP is not at maximum, this creature is destroyed. / Regenerates");
    }
    if (message.content.startsWith(prefix + "sludgetitan")) {
         message.channel.send("Sludge Titan <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:50 HP:60 MHP:60 G:90 \nItem Limit: <:cnoarmor:364048663598858240> <:cnotool:364048663624024076> \nBattle Start: If HP is not at maximum, this creature is destroyed. / Regenerates");
    }
    if (message.content.startsWith(prefix + "Swamp Spawn")) {
         message.channel.send("Swamp Spawn <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:40 MHP:40 G:20 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (50G): Adds Dice 1-3 <:csenchant:364048663464378391> to target Cepter. (Makes the next dice roll 1 to 3.)");
    }
    if (message.content.startsWith(prefix + "SwampSpawn")) {
         message.channel.send("Swamp Spawn <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:40 MHP:40 G:20 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (50G): Adds Dice 1-3 <:csenchant:364048663464378391> to target Cepter. (Makes the next dice roll 1 to 3.)");
    }
    if (message.content.startsWith(prefix + "swamp spawn")) {
         message.channel.send("Swamp Spawn <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:40 MHP:40 G:20 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (50G): Adds Dice 1-3 <:csenchant:364048663464378391> to target Cepter. (Makes the next dice roll 1 to 3.)");
    }
    if (message.content.startsWith(prefix + "swampspawn")) {
         message.channel.send("Swamp Spawn <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:40 MHP:40 G:20 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (50G): Adds Dice 1-3 <:csenchant:364048663464378391> to target Cepter. (Makes the next dice roll 1 to 3.)");
    }
    if (message.content.startsWith(prefix + "Tentacles")) {
         message.channel.send("Tentacles <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:50 MHP:50 G:70+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nRegenerates / Battle End: User draws cards until their hand contains 5 cards.");
    }
    if (message.content.startsWith(prefix + "tentacles")) {
         message.channel.send("Tentacles <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:50 MHP:50 G:70+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nRegenerates / Battle End: User draws cards until their hand contains 5 cards.");
    }
    if (message.content.startsWith(prefix + "Triton")) {
         message.channel.send("Triton <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:70 \nScroll Critical Hit / Battle End: User draws a card if an item was equipped to Triton during battle.");
    }
    if (message.content.startsWith(prefix + "triton")) {
         message.channel.send("Triton <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:40 MHP:40 G:70 \nScroll Critical Hit / Battle End: User draws a card if an item was equipped to Triton during battle.");
    }
    if (message.content.startsWith(prefix + "Undine")) {
         message.channel.send("Undine <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:30 MHP:30 G:55 \nItem Limit: <:carmor:364048663556915200> \nIn Battle: HP=(number of user\'s <:cwater:364048663447601154> territories x20). / Neutralizes: <:cwater:364048663447601154>");
    }
    if (message.content.startsWith(prefix + "undine")) {
         message.channel.send("Undine <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:30 HP:30 MHP:30 G:55 \nItem Limit: <:carmor:364048663556915200> \nIn Battle: HP=(number of user\'s W<:cwater:364048663447601154>ater territories x20). / Neutralizes: <:cwater:364048663447601154>");
    }
    if (message.content.startsWith(prefix + "Vigilante")) {
         message.channel.send("Vigilante <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:30 MHP:30 G:50+ <:cwater:364048663447601154> \nIn Battle: Quickly tap the A Button to increase HP. If HP is raised above 100 in this way, it becomes 10.");
    }
    if (message.content.startsWith(prefix + "vigilante")) {
         message.channel.send("Vigilante <:crarityr:364045147085864960> <:cwater:364048663447601154> \nST:20 HP:30 MHP:30 G:50+ <:cwater:364048663447601154> \nIn Battle: Quickly tap the A Button to increase HP. If HP is raised above 100 in this way, it becomes 10.");
    }
    if (message.content.startsWith(prefix + "Wall of Ice")) {
         message.channel.send("Wall of Ice <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:0 HP:40 MHP:40 G:25 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / In Battle: HP+20");
    }
    if (message.content.startsWith(prefix + "WallofIce")) {
         message.channel.send("Wall of Ice <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:0 HP:40 MHP:40 G:25 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / In Battle: HP+20");
    }
    if (message.content.startsWith(prefix + "wall of ice")) {
         message.channel.send("Wall of Ice <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:0 HP:40 MHP:40 G:25 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / In Battle: HP+20");
    }
    if (message.content.startsWith(prefix + "wallofice")) {
         message.channel.send("Wall of Ice <:crarityn:364048663661772800> <:cwater:364048663447601154> \nST:0 HP:40 MHP:40 G:25 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / In Battle: HP+20");
    }
    if (message.content.startsWith(prefix + "Yeti")) {
         message.channel.send("Yeti <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:40 MHP:40 G:60+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nInstant Death: 60% against <:cfire:364048663355588609> creatures. Neutralizes: <:cfire:364048663355588609>");
    }
    if (message.content.startsWith(prefix + "yeti")) {
         message.channel.send("Yeti <:craritys:364048663351132162> <:cwater:364048663447601154> \nST:40 HP:40 MHP:40 G:60+ <:cwater:364048663447601154> \nItem Limit: <:cnoscroll:364048663653122048> \nInstant Death: 60% against <:cfire:364048663355588609> creatures. Neutralizes: <:cfire:364048663355588609>");
    }
  //EARTH CREATURES GO HERE
  if (message.content.startsWith(prefix + "Barong")) {
       message.channel.send("Barong <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:60+ <:cearth:364048663582081034> \nUpon Defeat: Returns to user\'s hand. / Immune to spells that lower land level or change its element.");
    }
    if (message.content.startsWith(prefix + "barong")) {
         message.channel.send("Barong <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:60+ <:cearth:364048663582081034> \nUpon Defeat: Returns to user\'s hand. / Immune to spells that lower land level or change its element.");
    }
    if (message.content.startsWith(prefix + "Black Knight")) {
         message.channel.send("Black Knight <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:90 \nCritical Hit: Creatures with MHP of 30 and under / In Battle: Disables opponent\'s Attack Bonus.");
    }
    if (message.content.startsWith(prefix + "BlackKnight")) {
         message.channel.send("Black Knight <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:90 \nCritical Hit: Creatures with MHP of 30 and under / In Battle: Disables opponent\'s Attack Bonus.");
    }
    if (message.content.startsWith(prefix + "black knight")) {
         message.channel.send("Black Knight <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:90 \nCritical Hit: Creatures with MHP of 30 and under / In Battle: Disables opponent\'s Attack Bonus.");
    }
    if (message.content.startsWith(prefix + "blackknight")) {
         message.channel.send("Black Knight <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:90 \nCritical Hit: Creatures with MHP of 30 and under / In Battle: Disables opponent\'s Attack Bonus.");
    }
    if (message.content.startsWith(prefix + "Branch Army")) {
         message.channel.send("Branch Army <:craritys:364048663351132162> \<:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:80+ <:cearth:364048663582081034> \nIn Battle: ST+ (number of <:cearth:364048663582081034> creatures in play x5). / \nSecret Art (50G): Evolves into Mudman.");
    }
    if (message.content.startsWith(prefix + "BranchArmy")) {
         message.channel.send("Branch Army <:craritys:364048663351132162> \<:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:80+ <:cearth:364048663582081034> \nIn Battle: ST+ (number of <:cearth:364048663582081034> creatures in play x5). / \nSecret Art (50G): Evolves into Mudman.");
    }
    if (message.content.startsWith(prefix + "branch army")) {
         message.channel.send("Branch Army <:craritys:364048663351132162> \<:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:80+ <:cearth:364048663582081034> \nIn Battle: ST+ (number of <:cearth:364048663582081034> creatures in play x5). / \nSecret Art (50G): Evolves into Mudman.");
    }
    if (message.content.startsWith(prefix + "brancharmy")) {
         message.channel.send("Branch Army <:craritys:364048663351132162> \<:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:80+ <:cearth:364048663582081034> \nIn Battle: ST+ (number of <:cearth:364048663582081034> creatures in play x5). / \nSecret Art (50G): Evolves into Mudman.");
    }
    if (message.content.startsWith(prefix + "Brontides")) {
         message.channel.send("Brontides <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:60 HP:60 MHP:60 G:80+ <:cearth:364048663582081034> <:cearth:364048663582081034> + <:ccard:364048663426760705> \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:cnotool:364048663624024076> \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> / Boost: HP+10 to <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures.");
    }
    if (message.content.startsWith(prefix + "brontides")) {
         message.channel.send("Brontides <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:60 HP:60 MHP:60 G:80+ <:cearth:364048663582081034> <:cearth:364048663582081034> + <:ccard:364048663426760705> \nLand Limit: <:cnowater:364048663657447434> \nItem Limit: <:cnotool:364048663624024076> \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> / Boost: HP+10 to <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures.");
    }
    if (message.content.startsWith(prefix + "Cactus Wall")) {
         message.channel.send("Cactus Wall <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / In Battle: HP+50 if enemy creature is <:cwater:364048663447601154> or <:cair:364048663518904327> / Regenerates");
    }
    if (message.content.startsWith(prefix + "CactusWall")) {
         message.channel.send("Cactus Wall <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / In Battle: HP+50 if enemy creature is <:cwater:364048663447601154> or <:cair:364048663518904327> / Regenerates");
    }
    if (message.content.startsWith(prefix + "cactus wall")) {
         message.channel.send("Cactus Wall <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / In Battle: HP+50 if enemy creature is <:cwater:364048663447601154> or <:cair:364048663518904327>. / Regenerates");
    }
    if (message.content.startsWith(prefix + "cactuswall")) {
         message.channel.send("Cactus Wall <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / In Battle: HP+50 if enemy creature is <:cwater:364048663447601154> or <:cair:364048663518904327> / Regenerates");
    }
    if (message.content.startsWith(prefix + "Captain Cock")) {
         message.channel.send("Captain Cock <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:50+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nVigorous / \nSecret Art (60G): Removes Fatigued from user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "CaptainCock")) {
         message.channel.send("Captain Cock <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:50+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nVigorous / \nSecret Art (60G): Removes Fatigued from user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "captain cock")) {
         message.channel.send("Captain Cock <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:50+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nVigorous / \nSecret Art (60G): Removes Fatigued from user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "captaincock")) {
         message.channel.send("Captain Cock <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:50+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nVigorous / \nSecret Art (60G): Removes Fatigued from user\'s target creature.");
    }
    if (message.content.startsWith(prefix + "Coatlicue")) {
         message.channel.send("Coatlicue <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:50 MHP:50 G:70+ <:cearth:364048663582081034> \nIn Battle: ST & HP+20 when user\'s book has more cards left than enemy\'s book. / \nSecret Art (50G): Destroys top card in target\'s book.");
    }
    if (message.content.startsWith(prefix + "coatlicue")) {
         message.channel.send("Coatlicue <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:50 MHP:50 G:70+ <:cearth:364048663582081034> \nIn Battle: ST & HP+20 when user\'s book has more cards left than enemy\'s book. / \nSecret Art (50G): Destroys top card in target\'s book.");
    }
    if (message.content.startsWith(prefix + "Cockatrice")) {
         message.channel.send("Cockatrice <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:50+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nAttack Bonus: Transforms opponent into Wall of Stone.");
    }
    if (message.content.startsWith(prefix + "cockatrice")) {
         message.channel.send("Cockatrice <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:50+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nAttack Bonus: Transforms opponent into Wall of Stone.");
    }
    if (message.content.startsWith(prefix + "Dragon Zombie")) {
         message.channel.send("Dragon Zombie <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:60 MHP:60 G:85 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200>");
    }
    if (message.content.startsWith(prefix + "DragonZombie")) {
         message.channel.send("Dragon Zombie <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:60 MHP:60 G:85 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200>");
    }
    if (message.content.startsWith(prefix + "dragon zombie")) {
         message.channel.send("Dragon Zombie <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:60 MHP:60 G:85 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200>");
    }
    if (message.content.startsWith(prefix + "dragonzombie")) {
         message.channel.send("Dragon Zombie <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:60 MHP:60 G:85 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200>");
    }
    if (message.content.startsWith(prefix + "Dryad")) {
         message.channel.send("Dryad <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:55 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cweapon:364048663527424002> \nSupport: <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cearth:364048663582081034> / Can move to any vacant <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "dryad")) {
         message.channel.send("Dryad <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:55 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cweapon:364048663527424002> \nSupport: <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cearth:364048663582081034> / Can move to any vacant <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "Dusk Dweller")) {
         message.channel.send("Dusk Dweller <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:70+ <:cearth:364048663582081034> \nAttacks First / Upon Victory: ST & MHP+10 (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "DuskDweller")) {
         message.channel.send("Dusk Dweller <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:70+ <:cearth:364048663582081034> \nAttacks First / Upon Victory: ST & MHP+10 (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "dusk dweller")) {
         message.channel.send("Dusk Dweller <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:70+ <:cearth:364048663582081034> \nAttacks First / Upon Victory: ST & MHP+10 (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "duskdweller")) {
         message.channel.send("Dusk Dweller <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:70+ <:cearth:364048663582081034> \nAttacks First / Upon Victory: ST & MHP+10 (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "Dwarven Miner")) {
         message.channel.send("Dwarven Miner <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:50 MHP:50 G:70+ <:cearth:364048663582081034> \nToll value for occupied territory becomes 1.5x. / \nSecret Art (0G): User gains (lap number x30)G.");
    }
    if (message.content.startsWith(prefix + "DwarvenMiner")) {
         message.channel.send("Dwarven Miner <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:50 MHP:50 G:70+ <:cearth:364048663582081034> \nToll value for occupied territory becomes 1.5x. / \nSecret Art (0G): User gains (lap number x30)G.");
    }
    if (message.content.startsWith(prefix + "dwarven miner")) {
         message.channel.send("Dwarven Miner <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:50 MHP:50 G:70+ <:cearth:364048663582081034> \nToll value for occupied territory becomes 1.5x. / \nSecret Art (0G): User gains (lap number x30)G.");
    }
    if (message.content.startsWith(prefix + "dwarvenminer")) {
         message.channel.send("Dwarven Miner <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:50 MHP:50 G:70+ <:cearth:364048663582081034> \nToll value for occupied territory becomes 1.5x. / \nSecret Art (0G): User gains (lap number x30)G.");
    }
    if (message.content.startsWith(prefix + "Earth Spirit")) {
         message.channel.send("Earth Spirit <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:30 MHP:30 G:60 \nMHP+10 when Terrain Change or Land Level Up are used on the territory this creature is on (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "EarthSpirit")) {
         message.channel.send("Earth Spirit <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:30 MHP:30 G:60 \nMHP+10 when Terrain Change or Land Level Up are used on the territory this creature is on (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "earth spirit")) {
         message.channel.send("Earth Spirit <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:30 MHP:30 G:60 \nMHP+10 when Terrain Change or Land Level Up are used on the territory this creature is on (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "earthspirit")) {
         message.channel.send("Earth Spirit <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:30 MHP:30 G:60 \nMHP+10 when Terrain Change or Land Level Up are used on the territory this creature is on (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "Gargoyle")) {
         message.channel.send("Gargoyle <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:30 HP:50 MHP:50 G:70+ <:cearth:364048663582081034> \nAttacks First / In Battle: ST=50 when defending.");
    }
    if (message.content.startsWith(prefix + "gargoyle")) {
         message.channel.send("Gargoyle <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:30 HP:50 MHP:50 G:70+ <:cearth:364048663582081034> \nAttacks First / In Battle: ST=50 when defending.");
    }
    if (message.content.startsWith(prefix + "Gigantherium")) {
         message.channel.send("Gigantherium <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:50 HP:60 MHP:60 G:70+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: HP-20 if battle territory has an <:csenchant:364048663464378391> effect upon it.");
    }
    if (message.content.startsWith(prefix + "gigantherium")) {
         message.channel.send("Gigantherium <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:50 HP:60 MHP:60 G:70+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: HP-20 if battle territory has an <:csenchant:364048663464378391> effect upon it.");
    }
    if (message.content.startsWith(prefix + "Glowhorn")) {
         message.channel.send("Glowhorn <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:40 MHP:40 G:50+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nSynergy: <:cfire:364048663355588609> (ST & HP+20)");
    }
    if (message.content.startsWith(prefix + "glowhorn")) {
         message.channel.send("Glowhorn <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:40 MHP:40 G:50+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nSynergy: <:cfire:364048663355588609> (ST & HP+20)");
    }
    if (message.content.startsWith(prefix + "Gooba Queen")) {
         message.channel.send("Gooba Queen <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:40 MHP:40 G:25+ <:cearth:364048663582081034> \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (20G): Summons Gooba to vacant land of user\'s choice.");
    }
    if (message.content.startsWith(prefix + "GoobaQueen")) {
         message.channel.send("Gooba Queen <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:40 MHP:40 G:25+ <:cearth:364048663582081034> \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (20G): Summons Gooba to vacant land of user\'s choice.");
    }
    if (message.content.startsWith(prefix + "gooba queen")) {
         message.channel.send("Gooba Queen <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:40 MHP:40 G:25+ <:cearth:364048663582081034> \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (20G): Summons Gooba to vacant land of user\'s choice.");
    }
    if (message.content.startsWith(prefix + "goobaqueen")) {
         message.channel.send("Gooba Queen <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:40 MHP:40 G:25+ <:cearth:364048663582081034> \nItem Limit: <:cweapon:364048663527424002> \nSecret Art (20G): Summons Gooba to vacant land of user\'s choice.");
    }
    if (message.content.startsWith(prefix + "Gooba")) {
         message.channel.send("Gooba <:craritye:364048663611310081> <:cearth:364048663582081034> \nST:0 HP:10 MHP:10 G:0");
    }
    if (message.content.startsWith(prefix + "gooba")) {
         message.channel.send("Gooba <:craritye:364048663611310081> <:cearth:364048663582081034> \nST:0 HP:10 MHP:10 G:0");
    }
    if (message.content.startsWith(prefix + "Great Tusker")) {
         message.channel.send("Great Tusker <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:60 HP:50 MHP:50 G:80+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: Attacks First");
    }
    if (message.content.startsWith(prefix + "GreatTusker")) {
         message.channel.send("Great Tusker <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:60 HP:50 MHP:50 G:80+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: Attacks First");
    }
    if (message.content.startsWith(prefix + "great tusker")) {
         message.channel.send("Great Tusker <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:60 HP:50 MHP:50 G:80+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: Attacks First");
    }
    if (message.content.startsWith(prefix + "greattusker")) {
         message.channel.send("Great Tusker <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:60 HP:50 MHP:50 G:80+ <:cearth:364048663582081034> \nItem Limit: <:cnoscroll:364048663653122048> \nNeutralizes: Attacks First");
    }
    if (message.content.startsWith(prefix + "Green Ogre")) {
         message.channel.send("Green Ogre <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "GreenOgre")) {
         message.channel.send("Green Ogre <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "green ogre")) {
         message.channel.send("Green Ogre <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "greenogre")) {
         message.channel.send("Green Ogre <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "Grimalkin")) {
         message.channel.send("Grimalkin <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:40+ <:cearth:364048663582081034> \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "grimalkin")) {
         message.channel.send("Grimalkin <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:40+ <:cearth:364048663582081034> \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "Hardrock Dragon")) {
         message.channel.send("Hardrock Dragon <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:80+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (60G): HP-20 to target <:cfire:364048663355588609> or <:cair:364048663518904327> creature.");
    }
    if (message.content.startsWith(prefix + "HardrockDragon")) {
         message.channel.send("Hardrock Dragon <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:80+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (60G): HP-20 to target <:cfire:364048663355588609> or <:cair:364048663518904327> creature.");
    }
    if (message.content.startsWith(prefix + "hardrock dragon")) {
         message.channel.send("Hardrock Dragon <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:80+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (60G): HP-20 to target <:cfire:364048663355588609> or <:cair:364048663518904327> creature.");
    }
    if (message.content.startsWith(prefix + "hardrockdragon")) {
         message.channel.send("Hardrock Dragon <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:80+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (60G): HP-20 to target <:cfire:364048663355588609> or <:cair:364048663518904327> creature.");
    }
    if (message.content.startsWith(prefix + "Healer")) {
         message.channel.send("Healer <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:40 MHP:40 G:80 \nRegenerates / Vigorous / \nSecret Art (10G): Recovers target user\'s creature\'s HP by 30.");
    }
    if (message.content.startsWith(prefix + "healer")) {
         message.channel.send("Healer <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:10 HP:40 MHP:40 G:80 \nRegenerates / Vigorous / \nSecret Art (10G): Recovers target user\'s creature\'s HP by 30.");
    }
    if (message.content.startsWith(prefix + "Jackalope")) {
         message.channel.send("Jackalope <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> / If destroyed by a spell, transforms into Great Tusker.");
    }
    if (message.content.startsWith(prefix + "jackalope")) {
         message.channel.send("Jackalope <:craritys:364048663351132162> Strange <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> / If destroyed by a spell, transforms into Great Tusker.");
    }
    if (message.content.startsWith(prefix + "Jormungandr")) {
         message.channel.send("Jormungandr <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:60 HP:60 MHP:60 G:110+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nAttacks First / Regenerates / Upon Victory: Changes battle territory to a <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "jormungandr")) {
         message.channel.send("Jormungandr <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:60 HP:60 MHP:60 G:110+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nAttacks First / Regenerates / Upon Victory: Changes battle territory to a <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "Land Urchin")) {
         message.channel.send("Land Urchin <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / Cannot be invaded by Move Creature.");
    }
    if (message.content.startsWith(prefix + "LandUrchin")) {
         message.channel.send("Land Urchin <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / Cannot be invaded by Move Creature.");
    }
    if (message.content.startsWith(prefix + "land urchin")) {
         message.channel.send("Land Urchin <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / Cannot be invaded by Move Creature.");
    }
    if (message.content.startsWith(prefix + "landurchin")) {
         message.channel.send("Land Urchin <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:50 MHP:50 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / Cannot be invaded by Move Creature.");
    }
    if (message.content.startsWith(prefix + "Leshy")) {
         message.channel.send("Leshy <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:40 \nDefensive / Battle End: Raises level of battle territory by 1.");
    }
    if (message.content.startsWith(prefix + "leshy")) {
         message.channel.send("Leshy <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:40 \nDefensive / Battle End: Raises level of battle territory by 1.");
    }
    if (message.content.startsWith(prefix + "Lichenoid")) {
         message.channel.send("Lichenoid <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:60 \nSecret Art (30G): MHP+10 to target creature (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "lichenoid")) {
         message.channel.send("Lichenoid <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:30 HP:30 MHP:30 G:60 \nSecret Art (30G): MHP+10 to target creature (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "Mormo")) {
         message.channel.send("Mormo <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:60 \nLand Limit: <:cnowater:364048663657447434> \nSupport: <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cearth:364048663582081034> / Synergy: <:cfire:364048663355588609> (ST+30) / Scroll Critical Hit");
    }
    if (message.content.startsWith(prefix + "mormo")) {
         message.channel.send("Mormo <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:60 \nLand Limit: <:cnowater:364048663657447434> \nSupport: <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cearth:364048663582081034> / Synergy: <:cfire:364048663355588609> (ST+30) / Scroll Critical Hit");
    }
    if (message.content.startsWith(prefix + "Moss Titan")) {
         message.channel.send("Moss Titan <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:50 HP:30 MHP:30 G:65 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nMHP+10 each time user receives a lap bonus. / If MHP is greater than 80, MHP becomes 30.");
    }
    if (message.content.startsWith(prefix + "MossTitan")) {
         message.channel.send("Moss Titan <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:50 HP:30 MHP:30 G:65 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nMHP+10 each time user receives a lap bonus. / If MHP is greater than 80, MHP becomes 30.");
    }
    if (message.content.startsWith(prefix + "moss titan")) {
         message.channel.send("Moss Titan <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:50 HP:30 MHP:30 G:65 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nMHP+10 each time user receives a lap bonus. / If MHP is greater than 80, MHP becomes 30.");
    }
    if (message.content.startsWith(prefix + "mosstitan")) {
         message.channel.send("Moss Titan <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:50 HP:30 MHP:30 G:65 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nMHP+10 each time user receives a lap bonus. / If MHP is greater than 80, MHP becomes 30.");
    }
    if (message.content.startsWith(prefix + "Mudman")) {
         message.channel.send("Mudman <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:40 MHP:40 G:55 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200> \nIn Battle: HP+ (number of <:cearth:364048663582081034> creatures in play x5).");
    }
    if (message.content.startsWith(prefix + "mudman")) {
         message.channel.send("Mudman <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:40 MHP:40 G:55 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:carmor:364048663556915200> \nIn Battle: HP+ (number of <:cearth:364048663582081034> creatures in play x5).");
    }
    if (message.content.startsWith(prefix + "Mummy")) {
         message.channel.send("Mummy <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:20 HP:50 MHP:50 G:45 \nItem Limit: <:cweapon:364048663527424002> \nDefensive / Upon Defeat: User gains (lap number x40)G.");
    }
    if (message.content.startsWith(prefix + "mummy")) {
         message.channel.send("Mummy <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:20 HP:50 MHP:50 G:45 \nItem Limit: <:cweapon:364048663527424002> \nDefensive / Upon Defeat: User gains (lap number x40)G.");
    }
    if (message.content.startsWith(prefix + "Odradek")) {
         message.channel.send("Odradek <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:20 MHP:20 G:40 \nSupport: All / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "odradek")) {
         message.channel.send("Odradek <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:20 MHP:20 G:40 \nSupport: All / HP and MHP cannot be altered by spells.");
    }
    if (message.content.startsWith(prefix + "Pixie")) {
         message.channel.send("Pixie <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:60 \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> Vigorous");
    }
    if (message.content.startsWith(prefix + "pixie")) {
         message.channel.send("Pixie <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:60 \nSupport: <:cfire:364048663355588609> <:cearth:364048663582081034> Vigorous");
    }
    if (message.content.startsWith(prefix + "Rock Shell")) {
         message.channel.send("Rock Shell <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (50G): Adds Peace <:csenchant:364048663464378391> to itself.");
    }
    if (message.content.startsWith(prefix + "RockShell")) {
         message.channel.send("Rock Shell <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (50G): Adds Peace <:csenchant:364048663464378391> to itself.");
    }
    if (message.content.startsWith(prefix + "rock shell")) {
         message.channel.send("Rock Shell <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (50G): Adds Peace <:csenchant:364048663464378391> to itself.");
    }
    if (message.content.startsWith(prefix + "rockshell")) {
         message.channel.send("Rock Shell <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:40 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (50G): Adds Peace <:csenchant:364048663464378391> to itself.");
    }
    if (message.content.startsWith(prefix + "Rock Troll")) {
         message.channel.send("Rock Troll <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:90 \nLand Limit: <:cnoair:364048663732944896> \nRegenerates");
    }
    if (message.content.startsWith(prefix + "RockTroll")) {
         message.channel.send("Rock Troll <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:90 \nLand Limit: <:cnoair:364048663732944896> \nRegenerates");
    }
    if (message.content.startsWith(prefix + "rock troll")) {
         message.channel.send("Rock Troll <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:90 \nLand Limit: <:cnoair:364048663732944896> \nRegenerates");
    }
    if (message.content.startsWith(prefix + "rocktroll")) {
         message.channel.send("Rock Troll <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:90 \nLand Limit: <:cnoair:364048663732944896> \nRegenerates");
    }
    if (message.content.startsWith(prefix + "Sage")) {
         message.channel.send("Sage <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:80 \nSupport: All / Immune to Destroy Item and Steal Item effects. / Scroll Critical Hit");
    }
    if (message.content.startsWith(prefix + "sage")) {
         message.channel.send("Sage <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:80 \nSupport: All / Immune to Destroy Item and Steal Item effects. / Scroll Critical Hit");
    }
    if (message.content.startsWith(prefix + "Sakuya")) {
         message.channel.send("Sakuya <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:30+ <:cearth:364048663582081034> \nLand Limit: <:cnoair:364048663732944896> \nSecret Art (120G): Transforms target territory in user\'s possession to a <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "sakuya")) {
         message.channel.send("Sakuya <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:30+ <:cearth:364048663582081034> \nLand Limit: <:cnoair:364048663732944896> \nSecret Art (120G): Transforms target territory in user\'s possession to a <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "Screamer")) {
         message.channel.send("Screamer <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:40 MHP:40 G:30 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (40G): Adds Nullified Land Effect <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "screamer")) {
         message.channel.send("Screamer <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:40 MHP:40 G:30 \nLand Limit: <:cnoair:364048663732944896> \nItem Limit: <:cnoscroll:364048663653122048> \nDefensive / \nSecret Art (40G): Adds Nullified Land Effect <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "Shankrubber")) {
         message.channel.send("Shankrubber <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:20 MHP:20 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nAnti-Spell / \nSecret Art (30G): Adds Immobilize <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "shankrubber")) {
         message.channel.send("Shankrubber <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:20 MHP:20 G:40 \nItem Limit: <:cnoscroll:364048663653122048> \nAnti-Spell / \nSecret Art (30G): Adds Immobilize <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "Spitting Cobra")) {
         message.channel.send("Spitting Cobra <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:80 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (30G): Adds Poison <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "SpittingCobra")) {
         message.channel.send("Spitting Cobra <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:80 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (30G): Adds Poison <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "spitting cobra")) {
         message.channel.send("Spitting Cobra <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:80 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (30G): Adds Poison <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "spittingcobra")) {
         message.channel.send("Spitting Cobra <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:40 HP:40 MHP:40 G:80 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (30G): Adds Poison <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "Sproutling")) {
         message.channel.send("Sproutling <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:60 \nReceives land effect from <:cfire:364048663355588609> lands. / \nSecret Art (50G): Evolves into Old Willow.");
    }
    if (message.content.startsWith(prefix + "sproutling")) {
         message.channel.send("Sproutling <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:60 \nReceives land effect from <:cfire:364048663355588609> lands. / \nSecret Art (50G): Evolves into Old Willow.");
    }
    if (message.content.startsWith(prefix + "Squirrine")) {
         message.channel.send("Squirrine <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: All");
    }
    if (message.content.startsWith(prefix + "squirrine")) {
         message.channel.send("Squirrine <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:20 HP:30 MHP:30 G:50 \nItem Limit: <:cnoscroll:364048663653122048> \nSupport: All");
    }
    if (message.content.startsWith(prefix + "Sylvan Duchess")) {
         message.channel.send("Sylvan Duchess <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:60+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nSupport: <:cearth:364048663582081034> / Regenerates / Battle Start: Destroys opponent\'s tool, scroll, or supporting creature.");
    }
    if (message.content.startsWith(prefix + "SylvanDuchess")) {
         message.channel.send("Sylvan Duchess <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:60+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nSupport: <:cearth:364048663582081034> / Regenerates / Battle Start: Destroys opponent\'s tool, scroll, or supporting creature.");
    }
    if (message.content.startsWith(prefix + "sylvan duchess")) {
         message.channel.send("Sylvan Duchess <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:60+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nSupport: <:cearth:364048663582081034> / Regenerates / Battle Start: Destroys opponent\'s tool, scroll, or supporting creature.");
    }
    if (message.content.startsWith(prefix + "sylvanduchess")) {
         message.channel.send("Sylvan Duchess <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:50 MHP:50 G:60+ <:cearth:364048663582081034> <:cearth:364048663582081034> \nSupport: <:cearth:364048663582081034> / Regenerates / Battle Start: Destroys opponent\'s tool, scroll, or supporting creature.");
    }
    if (message.content.startsWith(prefix + "Tiger Weta")) {
         message.channel.send("Tiger Weta <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST & HP+20 if user owns territory adjacent to battle territory.");
    }
    if (message.content.startsWith(prefix + "TigerWeta")) {
         message.channel.send("Tiger Weta <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST & HP+20 if user owns territory adjacent to battle territory.");
    }
    if (message.content.startsWith(prefix + "tiger weta")) {
         message.channel.send("Tiger Weta <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST & HP+20 if user owns territory adjacent to battle territory.");
    }
    if (message.content.startsWith(prefix + "tigerweta")) {
         message.channel.send("Tiger Weta <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST & HP+20 if user owns territory adjacent to battle territory.");
    }
    if (message.content.startsWith(prefix + "Unnameable")) {
         message.channel.send("Unnameable <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:10 MHP:10 G:30+ <:cearth:364048663582081034> + <:ccard:364048663426760705> \nAttacks Last / Instant Death: 70% / Upon Victory: Destroys any cards identical to defeated creature in opponent\'s book and hand (80%).");
    }
    if (message.content.startsWith(prefix + "unnameable")) {
         message.channel.send("Unnameable <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:50 HP:10 MHP:10 G:30+ <:cearth:364048663582081034> + <:ccard:364048663426760705> \nAttacks Last / Instant Death: 70% / Upon Victory: Destroys any cards identical to defeated creature in opponent\'s book and hand (80%).");
    }
    if (message.content.startsWith(prefix + "Wall of Stone")) {
         message.channel.send("Wall of Stone <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:0 HP:60 MHP:60 G:25 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive");
    }
    if (message.content.startsWith(prefix + "WallofStone")) {
         message.channel.send("Wall of Stone <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:0 HP:60 MHP:60 G:25 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive");
    }
    if (message.content.startsWith(prefix + "wall of stone")) {
         message.channel.send("Wall of Stone <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:0 HP:60 MHP:60 G:25 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive");
    }
    if (message.content.startsWith(prefix + "wallofstone")) {
         message.channel.send("Wall of Stone <:crarityn:364048663661772800> <:cearth:364048663582081034> \nST:0 HP:60 MHP:60 G:25 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive");
    }
    if (message.content.startsWith(prefix + "Werebear")) {
         message.channel.send("Werebear <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:40 MHP:40 G:40+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (ST+30, MHP+10) / Vigorous");
    }
    if (message.content.startsWith(prefix + "werebear")) {
         message.channel.send("Werebear <:craritys:364048663351132162> <:cearth:364048663582081034> \nST:20 HP:40 MHP:40 G:40+ <:ccard:364048663426760705> \nSynthesis: <:cearth:364048663582081034> (ST+30, MHP+10) / Vigorous");
    }
    if (message.content.startsWith(prefix + "Woodfolk")) {
         message.channel.send("Woodfolk <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:75 \nItem Limit: <:cnoweapon:364048663309189152> \nSupport: All");
    }
    if (message.content.startsWith(prefix + "woodfolk")) {
         message.channel.send("Woodfolk <:crarityr:364045147085864960> <:cearth:364048663582081034> \nST:30 HP:40 MHP:40 G:75 \nItem Limit: <:cnoweapon:364048663309189152> \nSupport: All");
    }
  //AIR CREATURES GO HERE
  if (message.content.startsWith(prefix + "Aero Duchess")) {
       message.channel.send("Aero Duchess <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:60+ <:cair:364048663518904327> <:cair:364048663518904327> Attacks First / Scroll Critical Hit / \nSecret Art (50G): MHP-10 to target enemy creature.");
    }
    if (message.content.startsWith(prefix + "AeroDuchess")) {
         message.channel.send("Aero Duchess <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:60+ <:cair:364048663518904327> <:cair:364048663518904327> Attacks First / Scroll Critical Hit / \nSecret Art (50G): MHP-10 to target enemy creature.");
    }
    if (message.content.startsWith(prefix + "aero duchess")) {
         message.channel.send("Aero Duchess <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:60+ <:cair:364048663518904327> <:cair:364048663518904327> Attacks First / Scroll Critical Hit / \nSecret Art (50G): MHP-10 to target enemy creature.");
    }
    if (message.content.startsWith(prefix + "aeroduchess")) {
         message.channel.send("Aero Duchess <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:60+ <:cair:364048663518904327> <:cair:364048663518904327> Attacks First / Scroll Critical Hit / \nSecret Art (50G): MHP-10 to target enemy creature.");
    }
    if (message.content.startsWith(prefix + "Armed Princess")) {
         message.channel.send("Armed Princess <:craritye:364048663611310081> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:200+ <:cair:364048663518904327> <:cair:364048663518904327> \nSupport: <:cwater:364048663447601154> <:cair:364048663518904327> / Attacks First / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "ArmedPrincess")) {
         message.channel.send("Armed Princess <:craritye:364048663611310081> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:200+ <:cair:364048663518904327> <:cair:364048663518904327> \nSupport: <:cwater:364048663447601154> <:cair:364048663518904327> / Attacks First / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "armed princess")) {
         message.channel.send("Armed Princess <:craritye:364048663611310081> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:200+ <:cair:364048663518904327> <:cair:364048663518904327> \nSupport: <:cwater:364048663447601154> <:cair:364048663518904327> / Attacks First / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "armedprincess")) {
         message.channel.send("Armed Princess <:craritye:364048663611310081> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:200+ <:cair:364048663518904327> <:cair:364048663518904327> \nSupport: <:cwater:364048663447601154> <:cair:364048663518904327> / Attacks First / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "Blitz Raven")) {
         message.channel.send("Blitz Raven <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:20 MHP:20 G:30 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First");
    }
    if (message.content.startsWith(prefix + "BlitzRaven")) {
         message.channel.send("Blitz Raven <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:20 MHP:20 G:30 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First");
    }
    if (message.content.startsWith(prefix + "blitz raven")) {
         message.channel.send("Blitz Raven <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:20 MHP:20 G:30 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First");
    }
    if (message.content.startsWith(prefix + "blitzraven")) {
         message.channel.send("Blitz Raven <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:20 MHP:20 G:30 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First");
    }
    if (message.content.startsWith(prefix + "Breeze Spirit")) {
         message.channel.send("Breeze Spirit <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:50 \nLand Limit: <:cnofire:364048663732813845> \nCan move to any vacant <:cwater:364048663447601154> or <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "BreezeSpirit")) {
         message.channel.send("Breeze Spirit <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:50 \nLand Limit: <:cnofire:364048663732813845> \nCan move to any vacant <:cwater:364048663447601154> or <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "breeze spirit")) {
         message.channel.send("Breeze Spirit <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:50 \nLand Limit: <:cnofire:364048663732813845> \nCan move to any vacant <:cwater:364048663447601154> or <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "breezespirit")) {
         message.channel.send("Breeze Spirit <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:50 \nLand Limit: <:cnofire:364048663732813845> \nCan move to any vacant <:cwater:364048663447601154> or <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "Caladrius")) {
         message.channel.send("Caladrius <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / \nSecret Art (40G): Adds Ability +20 <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "caladrius")) {
         message.channel.send("Caladrius <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / \nSecret Art (40G): Adds Ability +20 <:csenchant:364048663464378391> to target creature.");
    }
    if (message.content.startsWith(prefix + "Centaur")) {
         message.channel.send("Centaur <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:80 \nAttacks First / Battle End: Recycles equipped items to user\'s book.");
    }
    if (message.content.startsWith(prefix + "centaur")) {
         message.channel.send("Centaur <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:80 \nAttacks First / Battle End: Recycles equipped items to user\'s book.");
    }
    if (message.content.startsWith(prefix + "Cloud Gizmo")) {
         message.channel.send("Cloud Gizmo <:craritys:364048663351132162> <:cair:364048663518904327> \nST:10 HP:30 MHP:30 G:30 \nSecret Art (20G): User chooses a card from target cepter\'s hand and destroys it. Target Cepter draws a new card.");
    }
    if (message.content.startsWith(prefix + "CloudGizmo")) {
         message.channel.send("Cloud Gizmo <:craritys:364048663351132162> <:cair:364048663518904327> \nST:10 HP:30 MHP:30 G:30 \nSecret Art (20G): User chooses a card from target cepter\'s hand and destroys it. Target Cepter draws a new card.");
    }
    if (message.content.startsWith(prefix + "cloud gizmo")) {
         message.channel.send("Cloud Gizmo <:craritys:364048663351132162> <:cair:364048663518904327> \nST:10 HP:30 MHP:30 G:30 \nSecret Art (20G): User chooses a card from target cepter\'s hand and destroys it. Target Cepter draws a new card.");
    }
    if (message.content.startsWith(prefix + "cloudgizmo")) {
         message.channel.send("Cloud Gizmo <:craritys:364048663351132162> <:cair:364048663518904327> \nST:10 HP:30 MHP:30 G:30 \nSecret Art (20G): User chooses a card from target cepter\'s hand and destroys it. Target Cepter draws a new card.");
    }
    if (message.content.startsWith(prefix + "Cornfolk")) {
         message.channel.send("Cornfolk <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:70 \nIf destroyed in combat or by a spell, user gains 200G.");
    }
    if (message.content.startsWith(prefix + "cornfolk")) {
         message.channel.send("Cornfolk <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:70 \nIf destroyed in combat or by a spell, user gains 200G.");
    }
    if (message.content.startsWith(prefix + "Cu Sith")) {
         message.channel.send("Cu Sith <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70 \nSynergy: <:cwater:364048663447601154> (ST+10, HP+20) / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "CuSith")) {
         message.channel.send("Cu Sith <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70 \nSynergy: <:cwater:364048663447601154> (ST+10, HP+20) / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "cu sith")) {
         message.channel.send("Cu Sith <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70 \nSynergy: <:cwater:364048663447601154> (ST+10, HP+20) / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "cusith")) {
         message.channel.send("Cu Sith <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70 \nSynergy: <:cwater:364048663447601154> (ST+10, HP+20) / Anti-Spell");
    }
    if (message.content.startsWith(prefix + "Devastator")) {
         message.channel.send("Devastator <:craritys:364048663351132162> <:cair:364048663518904327> \nST:50 HP:40 MHP:40 G:80+ <:cair:364048663518904327> \nBattle End: Lowers level of battle territory by 1 when invading.");
    }
    if (message.content.startsWith(prefix + "devastator")) {
         message.channel.send("Devastator <:craritys:364048663351132162> <:cair:364048663518904327> \nST:50 HP:40 MHP:40 G:80+ <:cair:364048663518904327> \nBattle End: Lowers level of battle territory by 1 when invading.");
    }
    if (message.content.startsWith(prefix + "Dhampir")) {
         message.channel.send("Dhampir <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:60+ <:cair:364048663518904327> \nInstant Death: 60% against <:cearth:364048663582081034> creatures. / Neutralizes: <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "dhampir")) {
         message.channel.send("Dhampir <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:60+ <:cair:364048663518904327> \nInstant Death: 60% against <:cearth:364048663582081034> creatures. / Neutralizes: <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "Dune Titan")) {
         message.channel.send("Dune Titan <:craritys:364048663351132162> <:cair:364048663518904327> \nST:50 HP:60 MHP:60 G:75 \nItem Limit: <:carmor:364048663556915200> \nWhen Terrain Change or Land Level Up are used on the territory this creature is on, MHP-10 (to a minimum of 10).");
    }
    if (message.content.startsWith(prefix + "DuneTitan")) {
         message.channel.send("Dune Titan <:craritys:364048663351132162> <:cair:364048663518904327> \nST:50 HP:60 MHP:60 G:75 \nItem Limit: <:carmor:364048663556915200> \nWhen Terrain Change or Land Level Up are used on the territory this creature is on, MHP-10 (to a minimum of 10).");
    }
    if (message.content.startsWith(prefix + "dune titan")) {
         message.channel.send("Dune Titan <:craritys:364048663351132162> <:cair:364048663518904327> \nST:50 HP:60 MHP:60 G:75 \nItem Limit: <:carmor:364048663556915200> \nWhen Terrain Change or Land Level Up are used on the territory this creature is on, MHP-10 (to a minimum of 10).");
    }
    if (message.content.startsWith(prefix + "dunetitan")) {
         message.channel.send("Dune Titan <:craritys:364048663351132162> <:cair:364048663518904327> \nST:50 HP:60 MHP:60 G:75 \nItem Limit: <:carmor:364048663556915200> \nWhen Terrain Change or Land Level Up are used on the territory this creature is on, MHP-10 (to a minimum of 10).");
    }
    if (message.content.startsWith(prefix + "Elven Archer")) {
         message.channel.send("Elven Archer <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:70+ <:cair:364048663518904327> \nAttacks First / \nSecret Art (20G): HP-10 to target enemy creature.");
    }
    if (message.content.startsWith(prefix + "ElvenArcher")) {
         message.channel.send("Elven Archer <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:70+ <:cair:364048663518904327> \nAttacks First / \nSecret Art (20G): HP-10 to target enemy creature.");
    }
    if (message.content.startsWith(prefix + "elven archer")) {
         message.channel.send("Elven Archer <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:70+ <:cair:364048663518904327> \nAttacks First / \nSecret Art (20G): HP-10 to target enemy creature.");
    }
    if (message.content.startsWith(prefix + "elvenarcher")) {
         message.channel.send("Elven Archer <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:70+ <:cair:364048663518904327> \nAttacks First / \nSecret Art (20G): HP-10 to target enemy creature.");
    }
    if (message.content.startsWith(prefix + "Enchantress")) {
         message.channel.send("Enchantress <:craritys:364048663351132162> <:cair:364048663518904327> \nST:10 HP:20 MHP:20 G:30 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nScroll Critical Hit / If hit with a <:csenchant:364048663464378391> Spell, it will add that <:csenchant:364048663464378391> to all its ally creatures, then become Fatigued.");
    }
    if (message.content.startsWith(prefix + "enchantress")) {
         message.channel.send("Enchantress <:craritys:364048663351132162> <:cair:364048663518904327> \nST:10 HP:20 MHP:20 G:30 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nScroll Critical Hit / If hit with a <:csenchant:364048663464378391> Spell, it will add that <:csenchant:364048663464378391> to all its ally creatures, then become Fatigued.");
    }
    if (message.content.startsWith(prefix + "Garuda")) {
         message.channel.send("Garuda <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:0 HP:40 MHP:40 G:40+ <:cair:364048663518904327> <:cair:364048663518904327> \nLand Limit: <:cnoearth:364048663602790439> \nIn Battle: ST & HP= (Number of <:cair:364048663518904327> creatures in play x10).");
    }
    if (message.content.startsWith(prefix + "garuda")) {
         message.channel.send("Garuda <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:0 HP:40 MHP:40 G:40+ <:cair:364048663518904327> <:cair:364048663518904327> \nLand Limit: <:cnoearth:364048663602790439> \nIn Battle: ST & HP= (Number of <:cair:364048663518904327> creatures in play x10).");
    }
    if (message.content.startsWith(prefix + "Great Nimbus")) {
         message.channel.send("Great Nimbus <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:60 MHP:60 G:100 \nItem Limit: <:carmor:364048663556915200> \nVigorous");
    }
    if (message.content.startsWith(prefix + "GreatNimbus")) {
         message.channel.send("Great Nimbus <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:60 MHP:60 G:100 \nItem Limit: <:carmor:364048663556915200> \nVigorous");
    }
    if (message.content.startsWith(prefix + "great nimbus")) {
         message.channel.send("Great Nimbus <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:60 MHP:60 G:100 \nItem Limit: <:carmor:364048663556915200> \nVigorous");
    }
    if (message.content.startsWith(prefix + "greatnimbus")) {
         message.channel.send("Great Nimbus <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:30 HP:60 MHP:60 G:100 \nItem Limit: <:carmor:364048663556915200> \nVigorous");
    }
    if (message.content.startsWith(prefix + "Gremlin")) {
         message.channel.send("Gremlin <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nBattle Start: Destroys opponent\'s item.");
    }
    if (message.content.startsWith(prefix + "gremlin")) {
         message.channel.send("Gremlin <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nBattle Start: Destroys opponent\'s item.");
    }
    if (message.content.startsWith(prefix + "Griffon")) {
         message.channel.send("Griffon <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:80 \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "griffon")) {
         message.channel.send("Griffon <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:80 \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048>");
    }
    if (message.content.startsWith(prefix + "Holy Llama")) {
         message.channel.send("Holy Llama <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (50G): Adds Dice 6 <:csenchant:364048663464378391> to user.");
    }
    if (message.content.startsWith(prefix + "HolyLlama")) {
         message.channel.send("Holy Llama <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (50G): Adds Dice 6 <:csenchant:364048663464378391> to user.");
    }
    if (message.content.startsWith(prefix + "holy llama")) {
         message.channel.send("Holy Llama <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (50G): Adds Dice 6 <:csenchant:364048663464378391> to user.");
    }
    if (message.content.startsWith(prefix + "holyllama")) {
         message.channel.send("Holy Llama <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (50G): Adds Dice 6 <:csenchant:364048663464378391> to user.");
    }
    if (message.content.startsWith(prefix + "Kirin")) {
         message.channel.send("Kirin <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:80 \nAttacks First / Synergy: <:cwater:364048663447601154> (ST & HP+20)");
    }
    if (message.content.startsWith(prefix + "kirin")) {
         message.channel.send("Kirin <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:80 \nAttacks First / Synergy: <:cwater:364048663447601154> (ST & HP+20)");
    }
    if (message.content.startsWith(prefix + "Knight")) {
         message.channel.send("Knight <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:50 HP:40 MHP:40 G:90 \nCritical Hit: Creatures with MHP of 50 or greater.");
    }
    if (message.content.startsWith(prefix + "knight")) {
         message.channel.send("Knight <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:50 HP:40 MHP:40 G:90 \nCritical Hit: Creatures with MHP of 50 or greater.");
    }
    if (message.content.startsWith(prefix + "Lemures")) {
         message.channel.send("Lemures <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:30+ <:cair:364048663518904327> \nSecret Art (50G): User steals a Creature Card from targeted enemy cepter\'s hand and then this creature moves to the targeted cepter\'s hand.");
    }
    if (message.content.startsWith(prefix + "lemures")) {
         message.channel.send("Lemures <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:30+ <:cair:364048663518904327> \nSecret Art (50G): User steals a Creature Card from targeted enemy cepter\'s hand and then this creature moves to the targeted cepter\'s hand.");
    }
    if (message.content.startsWith(prefix + "Lightning Dragon")) {
         message.channel.send("Lightning Dragon <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:80+ <:cair:364048663518904327> <:cair:364048663518904327> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (60G): HP-20 to target <:cwater:364048663447601154> or <:cearth:364048663582081034> creature.");
    }
    if (message.content.startsWith(prefix + "LightningDragon")) {
         message.channel.send("Lightning Dragon <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:80+ <:cair:364048663518904327> <:cair:364048663518904327> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (60G): HP-20 to target <:cwater:364048663447601154> or <:cearth:364048663582081034> creature.");
    }
    if (message.content.startsWith(prefix + "lightning dragon")) {
         message.channel.send("Lightning Dragon <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:80+ <:cair:364048663518904327> <:cair:364048663518904327> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (60G): HP-20 to target <:cwater:364048663447601154> or <:cearth:364048663582081034> creature.");
    }
    if (message.content.startsWith(prefix + "lightningdragon")) {
         message.channel.send("Lightning Dragon <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:50 HP:50 MHP:50 G:80+ <:cair:364048663518904327> <:cair:364048663518904327> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / \nSecret Art (60G): HP-20 to target <:cwater:364048663447601154> or <:cearth:364048663582081034> creature.");
    }
    if (message.content.startsWith(prefix + "Lord of Bane")) {
         message.channel.send("Lord of Bane <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:70 HP:60 MHP:60 G:80+ <:cair:364048663518904327> <:cair:364048663518904327> + <:ccard:364048663426760705> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnotool:364048663624024076> \nBoost: ST+10 to <:cwater:364048663447601154> & <:cair:364048663518904327> / \nSecret Art (60G): ST+20 to creatures with ST 30 or less, ST-20 to those with ST 50 or more.");
    }
    if (message.content.startsWith(prefix + "LordofBane")) {
         message.channel.send("Lord of Bane <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:70 HP:60 MHP:60 G:80+ <:cair:364048663518904327> <:cair:364048663518904327> + <:ccard:364048663426760705> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnotool:364048663624024076> \nBoost: ST+10 to <:cwater:364048663447601154> & <:cair:364048663518904327> / \nSecret Art (60G): ST+20 to creatures with ST 30 or less, ST-20 to those with ST 50 or more.");
    }
    if (message.content.startsWith(prefix + "lord of bane")) {
         message.channel.send("Lord of Bane <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:70 HP:60 MHP:60 G:80+ <:cair:364048663518904327> <:cair:364048663518904327> + <:ccard:364048663426760705> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnotool:364048663624024076> \nBoost: ST+10 to <:cwater:364048663447601154> & <:cair:364048663518904327> / \nSecret Art (60G): ST+20 to creatures with ST 30 or less, ST-20 to those with ST 50 or more.");
    }
    if (message.content.startsWith(prefix + "lordofbane")) {
         message.channel.send("Lord of Bane <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:70 HP:60 MHP:60 G:80+ <:cair:364048663518904327> <:cair:364048663518904327> + <:ccard:364048663426760705> \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnotool:364048663624024076> \nBoost: ST+10 to <:cwater:364048663447601154> & <:cair:364048663518904327> / \nSecret Art (60G): ST+20 to creatures with ST 30 or less, ST-20 to those with ST 50 or more.");
    }
    if (message.content.startsWith(prefix + "Mad Harlequin")) {
         message.channel.send("Mad Harlequin <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:50 \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048> \nBoost: ST & HP+ (Number of user\'s territories adjacent to battle territory x20). / Vigorous");
    }
    if (message.content.startsWith(prefix + "MadHarlequin")) {
         message.channel.send("Mad Harlequin <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:50 \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048> \nBoost: ST & HP+ (Number of user\'s territories adjacent to battle territory x20). / Vigorous");
    }
    if (message.content.startsWith(prefix + "mad harlequin")) {
         message.channel.send("Mad Harlequin <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:50 \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048> \nBoost: ST & HP+ (Number of user\'s territories adjacent to battle territory x20). / Vigorous");
    }
    if (message.content.startsWith(prefix + "madharlequin")) {
         message.channel.send("Mad Harlequin <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:50 \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:cnoscroll:364048663653122048> \nBoost: ST & HP+ (Number of user\'s territories adjacent to battle territory x20). / Vigorous");
    }
    if (message.content.startsWith(prefix + "Martial Monk")) {
         message.channel.send("Martial Monk <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:50 MHP:50 G:70+ <:ccard:364048663426760705> \nSynthesis: Items (ST+40, MHP-10). / Attacks First / Vigorous");
    }
    if (message.content.startsWith(prefix + "Martial Monk")) {
         message.channel.send("Martial Monk <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:50 MHP:50 G:70+ <:ccard:364048663426760705> \nSynthesis: Items (ST+40, MHP-10). / Attacks First / Vigorous");
    }
    if (message.content.startsWith(prefix + "martial monk")) {
         message.channel.send("Martial Monk <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:50 MHP:50 G:70+ <:ccard:364048663426760705> \nSynthesis: Items (ST+40, MHP-10). / Attacks First / Vigorous");
    }
    if (message.content.startsWith(prefix + "martialmonk")) {
         message.channel.send("Martial Monk <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:50 MHP:50 G:70+ <:ccard:364048663426760705> \nSynthesis: Items (ST+40, MHP-10). / Attacks First / Vigorous");
    }
    if (message.content.startsWith(prefix + "Nightmare")) {
         message.channel.send("Nightmare <:craritys:364048663351132162> <:cair:364048663518904327> \nST:30 HP:30 MHP:30 G:40+ <:cair:364048663518904327> \nPenetrates");
    }
    if (message.content.startsWith(prefix + "nightmare")) {
         message.channel.send("Nightmare <:craritys:364048663351132162> <:cair:364048663518904327> \nST:30 HP:30 MHP:30 G:40+ <:cair:364048663518904327> \nPenetrates");
    }
    if (message.content.startsWith(prefix + "Nike")) {
         message.channel.send("Nike <:craritys:364048663351132162> <:cair:364048663518904327> \nST:30 HP:30 MHP:30 G:40+ <:cair:364048663518904327> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / Attack Bonus: Paralysis <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "nike")) {
         message.channel.send("Nike <:craritys:364048663351132162> <:cair:364048663518904327> \nST:30 HP:30 MHP:30 G:40+ <:cair:364048663518904327> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / Attack Bonus: Paralysis <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "Patronus")) {
         message.channel.send("Patronus <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:30 HP:20 MHP:20 G:30+ <:cair:364048663518904327> \nAnti-Spell / \nSecret Art (50G): Adds Anti-Spell <:csenchant:364048663464378391> to target Cepter.");
    }
    if (message.content.startsWith(prefix + "patronus")) {
         message.channel.send("Patronus <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:30 HP:20 MHP:20 G:30+ <:cair:364048663518904327> \nAnti-Spell / \nSecret Art (50G): Adds Anti-Spell <:csenchant:364048663464378391> to target Cepter.");
    }
    if (message.content.startsWith(prefix + "Powder Eater")) {
         message.channel.send("Powder Eater <:craritys:364048663351132162> <:cair:364048663518904327> \nST:1 HP:1 MHP:1 G:10 \nItem Limit: <:cnoscroll:364048663653122048> \nMultiplies when moving, leaving copies in both former and new locations.");
    }
    if (message.content.startsWith(prefix + "PowderEater")) {
         message.channel.send("Powder Eater <:craritys:364048663351132162> <:cair:364048663518904327> \nST:1 HP:1 MHP:1 G:10 \nItem Limit: <:cnoscroll:364048663653122048> \nMultiplies when moving, leaving copies in both former and new locations.");
    }
    if (message.content.startsWith(prefix + "powder eater")) {
         message.channel.send("Powder Eater <:craritys:364048663351132162> <:cair:364048663518904327> \nST:1 HP:1 MHP:1 G:10 \nItem Limit: <:cnoscroll:364048663653122048> \nMultiplies when moving, leaving copies in both former and new locations.");
    }
    if (message.content.startsWith(prefix + "powdereater")) {
         message.channel.send("Powder Eater <:craritys:364048663351132162> <:cair:364048663518904327> \nST:1 HP:1 MHP:1 G:10 \nItem Limit: <:cnoscroll:364048663653122048> \nMultiplies when moving, leaving copies in both former and new locations.");
    }
    if (message.content.startsWith(prefix + "Pulgasari")) {
         message.channel.send("Pulgasari <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:90 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST+20 if equipped with an item. / Battle End: MHP+10 if opponent equipped an item.");
    }
    if (message.content.startsWith(prefix + "pulgasari")) {
         message.channel.send("Pulgasari <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:90 \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST+20 if equipped with an item. / Battle End: MHP+10 if opponent equipped an item.");
    }
    if (message.content.startsWith(prefix + "Rokh")) {
         message.channel.send("Rokh <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:50 MHP:50 G:60+ <:cair:364048663518904327> \nItem Limit: <:cnoscroll:364048663653122048> \nSynergy: <:cwater:364048663447601154> (ST+30)");
    }
    if (message.content.startsWith(prefix + "rokh")) {
         message.channel.send("Rokh <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:50 MHP:50 G:60+ <:cair:364048663518904327> \nItem Limit: <:cnoscroll:364048663653122048> \nSynergy: <:cwater:364048663447601154> (ST+30)");
    }
    if (message.content.startsWith(prefix + "Samhain")) {
         message.channel.send("Samhain <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:50+ <:ccard:364048663426760705> \nSynthesis: <:csenchant:364048663464378391> Spells (ST+20). / Battle End: opponent\'s MHP- (this creature\'s Base ST).");
    }
    if (message.content.startsWith(prefix + "samhain")) {
         message.channel.send("Samhain <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:20 HP:40 MHP:40 G:50+ <:ccard:364048663426760705> \nSynthesis: <:csenchant:364048663464378391> Spells (ST+20). / Battle End: opponent\'s MHP- (this creature\'s Base ST).");
    }
    if (message.content.startsWith(prefix + "Scolopendra")) {
         message.channel.send("Scolopendra <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:50+ <:ccard:364048663426760705> \nItem Limit: <:cnoscroll:364048663653122048> \nSynthesis: <:cwater:364048663447601154> (Evolves into Deep-Sea Dragon). / Attack Bonus: Adds Poison Enchant.");
    }
    if (message.content.startsWith(prefix + "scolopendra")) {
         message.channel.send("Scolopendra <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:50+ <:ccard:364048663426760705> \nItem Limit: <:cnoscroll:364048663653122048> \nSynthesis: <:cwater:364048663447601154> (Evolves into Deep-Sea Dragon). / Attack Bonus: Adds Poison Enchant.");
    }
    if (message.content.startsWith(prefix + "Serpent Fly")) {
         message.channel.send("Serpent Fly <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / Receives land effect from <:cwater:364048663447601154> territories.");
    }
    if (message.content.startsWith(prefix + "SerpentFly")) {
         message.channel.send("Serpent Fly <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / Receives land effect from <:cwater:364048663447601154> territories.");
    }
    if (message.content.startsWith(prefix + "serpent fly")) {
         message.channel.send("Serpent Fly <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / Receives land effect from <:cwater:364048663447601154> territories.");
    }
    if (message.content.startsWith(prefix + "serpentfly")) {
         message.channel.send("Serpent Fly <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70 \nLand Limit: <:cnofire:364048663732813845> \nItem Limit: <:cnoscroll:364048663653122048> \nAttacks First / Receives land effect from <:cwater:364048663447601154> territories.");
    }
    if (message.content.startsWith(prefix + "Sleipnir")) {
         message.channel.send("Sleipnir <:craritys:364048663351132162> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:70 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (60G): Moves user\'s target creature up to 2 spaces.");
    }
    if (message.content.startsWith(prefix + "sleipnir")) {
         message.channel.send("Sleipnir <:craritys:364048663351132162> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:70 \nItem Limit: <:cnoscroll:364048663653122048> \nSecret Art (60G): Moves user\'s target creature up to 2 spaces.");
    }
    if (message.content.startsWith(prefix + "Soul Collector")) {
         message.channel.send("Soul Collector <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nIn Battle: ST+ (number of creatures destroyed thus far x5).");
    }
    if (message.content.startsWith(prefix + "SoulCollector")) {
         message.channel.send("Soul Collector <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nIn Battle: ST+ (number of creatures destroyed thus far x5).");
    }
    if (message.content.startsWith(prefix + "soul collector")) {
         message.channel.send("Soul Collector <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nIn Battle: ST+ (number of creatures destroyed thus far x5).");
    }
    if (message.content.startsWith(prefix + "soulcollector")) {
         message.channel.send("Soul Collector <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:30+ <:ccard:364048663426760705> \nIn Battle: ST+ (number of creatures destroyed thus far x5).");
    }
    if (message.content.startsWith(prefix + "Spectre")) {
         message.channel.send("Spectre <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:0 HP:30 MHP:30 G:30 \nIn Battle: ST & HP= (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "spectre")) {
         message.channel.send("Spectre <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:0 HP:30 MHP:30 G:30 \nIn Battle: ST & HP= (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "Sword Princess")) {
         message.channel.send("Sword Princess <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70+ <:cair:364048663518904327> \nAttacks First / HP and MHP cannot be altered by spells. / \nSecret Art (60G): Evolves into Armed Princess.");
    }
    if (message.content.startsWith(prefix + "SwordPrincess")) {
         message.channel.send("Sword Princess <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70+ <:cair:364048663518904327> \nAttacks First / HP and MHP cannot be altered by spells. / \nSecret Art (60G): Evolves into Armed Princess.");
    }
    if (message.content.startsWith(prefix + "sword princess")) {
         message.channel.send("Sword Princess <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70+ <:cair:364048663518904327> \nAttacks First / HP and MHP cannot be altered by spells. / \nSecret Art (60G): Evolves into Armed Princess.");
    }
    if (message.content.startsWith(prefix + "swordprincess")) {
         message.channel.send("Sword Princess <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:40 HP:30 MHP:30 G:70+ <:cair:364048663518904327> \nAttacks First / HP and MHP cannot be altered by spells. / \nSecret Art (60G): Evolves into Armed Princess.");
    }
    if (message.content.startsWith(prefix + "Sylph")) {
         message.channel.send("Sylph <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:20 MHP:20 G:30 \nNeutralizes: Attacks from creatures with MHP of 40 and up. / \nSecret Art (60G): Evolves into Garuda.");
    }
    if (message.content.startsWith(prefix + "sylph")) {
         message.channel.send("Sylph <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:20 MHP:20 G:30 \nNeutralizes: Attacks from creatures with MHP of 40 and up. / \nSecret Art (60G): Evolves into Garuda.");
    }
    if (message.content.startsWith(prefix + "Tetrarm")) {
         message.channel.send("Tetrarm <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:50+ <:cair:364048663518904327> \nAttacks Twice.");
    }
    if (message.content.startsWith(prefix + "tetrarm")) {
         message.channel.send("Tetrarm <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:50+ <:cair:364048663518904327> \nAttacks Twice.");
    }
    if (message.content.startsWith(prefix + "Thunder Spawn")) {
         message.channel.send("Thunder Spawn <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:50+ <:cair:364048663518904327> \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST+ (Number of user\'s <:cwater:364048663447601154> lands x10). / Can move to any enemy land with a mismatching element creature on it.");
    }
    if (message.content.startsWith(prefix + "ThunderSpawn")) {
         message.channel.send("Thunder Spawn <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:50+ <:cair:364048663518904327> \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST+ (Number of user\'s <:cwater:364048663447601154> lands x10). / Can move to any enemy land with a mismatching element creature on it.");
    }
    if (message.content.startsWith(prefix + "thunder spawn")) {
         message.channel.send("Thunder Spawn <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:50+ <:cair:364048663518904327> \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST+ (Number of user\'s <:cwater:364048663447601154> lands x10). / Can move to any enemy land with a mismatching element creature on it.");
    }
    if (message.content.startsWith(prefix + "thunderspawn")) {
         message.channel.send("Thunder Spawn <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:30 HP:40 MHP:40 G:50+ <:cair:364048663518904327> \nItem Limit: <:cnoscroll:364048663653122048> \nIn Battle: ST+ (Number of user\'s <:cwater:364048663447601154> lands x10). / Can move to any enemy land with a mismatching element creature on it.");
    }
    if (message.content.startsWith(prefix + "Tornado")) {
         message.channel.send("Tornado <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:20 HP:50 MHP:50 G:55 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / Attacks First / In Battle: ST+20, HP-10.");
    }
    if (message.content.startsWith(prefix + "tornado")) {
         message.channel.send("Tornado <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:20 HP:50 MHP:50 G:55 \nItem Limit: <:cnoarmor:364048663598858240> <:cnoscroll:364048663653122048> \nDefensive / Attacks First / In Battle: ST+20, HP-10.");
    }
    if (message.content.startsWith(prefix + "Treasure Raider")) {
         message.channel.send("Treasure Raider <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:90 \nBattle End: User gains 100G when invading. / Vigorous");
    }
    if (message.content.startsWith(prefix + "TreasureRaider")) {
         message.channel.send("Treasure Raider <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:90 \nBattle End: User gains 100G when invading. / Vigorous");
    }
    if (message.content.startsWith(prefix + "treasure raider")) {
         message.channel.send("Treasure Raider <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:90 \nBattle End: User gains 100G when invading. / Vigorous");
    }
    if (message.content.startsWith(prefix + "treasureraider")) {
         message.channel.send("Treasure Raider <:craritys:364048663351132162> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:90 \nBattle End: User gains 100G when invading. / Vigorous");
    }
    if (message.content.startsWith(prefix + "Typhon")) {
         message.channel.send("Typhon <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:60 HP:60 MHP:60 G:110+ <:cair:364048663518904327> <:cair:364048663518904327> \nAttacks First / Critical Hit: <:cfire:364048663355588609> <:cearth:364048663582081034> / Upon Victory: Changes battle territory to a <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "typhon")) {
         message.channel.send("Typhon <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:60 HP:60 MHP:60 G:110+ <:cair:364048663518904327> <:cair:364048663518904327> \nAttacks First / Critical Hit: <:cfire:364048663355588609> <:cearth:364048663582081034> / Upon Victory: Changes battle territory to a <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "Witch")) {
         message.channel.send("Witch <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:55 \nItem Limit: <:cweapon:364048663527424002> \nScroll Critical Hit / \nSecret Art (30G): Steals (number of Spell Cards in target enemy cepter\'s hand x40)G.");
    }
    if (message.content.startsWith(prefix + "witch")) {
         message.channel.send("Witch <:crarityr:364045147085864960> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:55 \nItem Limit: <:cweapon:364048663527424002> \nScroll Critical Hit / \nSecret Art (30G): Steals (number of Spell Cards in target enemy cepter\'s hand x40)G.");
    }
    if (message.content.startsWith(prefix + "Wyvern")) {
         message.channel.send("Wyvern <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:60+ <:cair:364048663518904327> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / Can move to any vacant <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "wyvern")) {
         message.channel.send("Wyvern <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:60+ <:cair:364048663518904327> \nLand Limit: <:cnoearth:364048663602790439> \nItem Limit: <:carmor:364048663556915200> \nAttacks First / Can move to any vacant <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "Yellow Ogre")) {
         message.channel.send("Yellow Ogre <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "YellowOgre")) {
         message.channel.send("Yellow Ogre <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "yellow ogre")) {
         message.channel.send("Yellow Ogre <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "yellowogre")) {
         message.channel.send("Yellow Ogre <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:50 MHP:50 G:80");
    }
    if (message.content.startsWith(prefix + "Yowie")) {
         message.channel.send("Yowie <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:70 \nCritical Hit: <:cneutral:364043997825597440> / Toll value for occupied territory randomly changes by 1/2 to 2.5x.");
    }
    if (message.content.startsWith(prefix + "yowie")) {
         message.channel.send("Yowie <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:40 HP:40 MHP:40 G:70 \nCritical Hit: <:cneutral:364043997825597440> / Toll value for occupied territory randomly changes by 1/2 to 2.5x.");
    }
  //EVO DRAGONS GO HERE
  if (message.content.startsWith(prefix + "Assault Dragon Super")) {
     message.channel.send("Assault Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:70-80 HP:30-55 110<=ST+HP<=135 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "AssaultDragonSuper")) {
         message.channel.send("Assault Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:70-80 HP:30-55 110<=ST+HP<=135 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "assault dragon super")) {
         message.channel.send("Assault Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:70-80 HP:30-55 110<=ST+HP<=135 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "assaultdragonsuper")) {
         message.channel.send("Assault Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:70-80 HP:30-55 110<=ST+HP<=135 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "Assault Dragon")) {
         message.channel.send("Assault Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:60-80 HP:5-35 70<=ST+HP<=110 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "AssaultDragon")) {
         message.channel.send("Assault Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:60-80 HP:5-35 70<=ST+HP<=110 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "assault dragon")) {
         message.channel.send("Assault Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:60-80 HP:5-35 70<=ST+HP<=110 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "assaultdragon")) {
         message.channel.send("Assault Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:60-80 HP:5-35 70<=ST+HP<=110 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "Great Dragon Super")) {
         message.channel.send("Great Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:60-80 HP:60-80 140<=ST+HP G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "GreatDragonSuper")) {
         message.channel.send("Great Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:60-80 HP:60-80 140<=ST+HP G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "great dragon super")) {
         message.channel.send("Great Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:60-80 HP:60-80 140<=ST+HP G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "greatdragonsuper")) {
         message.channel.send("Great Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:60-80 HP:60-80 140<=ST+HP G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "Great Dragon")) {
         message.channel.send("Great Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:40-75 HP:40-75 100<=ST+HP<=140 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "GreatDragon")) {
         message.channel.send("Great Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:40-75 HP:40-75 100<=ST+HP<=140 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "great dragon")) {
         message.channel.send("Great Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:40-75 HP:40-75 100<=ST+HP<=140 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "greatdragon")) {
         message.channel.send("Great Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:40-75 HP:40-75 100<=ST+HP<=140 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "Massive Dragon Super")) {
         message.channel.send("Massive Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:30-55 HP:70-80 110<=ST+HP<=135 G:(varies) \n(abilities vary).");
    }
    if (message.content.startsWith(prefix + "MassiveDragonSuper")) {
         message.channel.send("Massive Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:30-55 HP:70-80 110<=ST+HP<=135 G:(varies) \n(abilities vary).");
    }
    if (message.content.startsWith(prefix + "massive dragon super")) {
         message.channel.send("Massive Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:30-55 HP:70-80 110<=ST+HP<=135 G:(varies) \n(abilities vary).");
    }
    if (message.content.startsWith(prefix + "massivedragonsuper")) {
         message.channel.send("Massive Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:30-55 HP:70-80 110<=ST+HP<=135 G:(varies) \n(abilities vary).");
    }
    if (message.content.startsWith(prefix + "Massive Dragon")) {
         message.channel.send("Massive Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-35 HP:60-80 70<=ST+HP<=90 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "MassiveDragon")) {
         message.channel.send("Massive Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-35 HP:60-80 70<=ST+HP<=90 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "massive dragon")) {
         message.channel.send("Massive Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-35 HP:60-80 70<=ST+HP<=90 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "massivedragon")) {
         message.channel.send("Massive Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-35 HP:60-80 70<=ST+HP<=90 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "Puppy Dragon")) {
         message.channel.send("Puppy Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-55 HP:5-45 ST+HP<=60 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "PuppyDragon")) {
         message.channel.send("Puppy Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-55 HP:5-45 ST+HP<=60 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "puppy dragon")) {
         message.channel.send("Puppy Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-55 HP:5-45 ST+HP<=60 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "puppdragon")) {
         message.channel.send("Puppy Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-55 HP:5-45 ST+HP<=60 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "Young Dragon")) {
         message.channel.send("Young Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-65 HP:5-65 50<=ST+HP<=100 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "YoungDragon")) {
         message.channel.send("Young Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-65 HP:5-65 50<=ST+HP<=100 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "young dragon")) {
         message.channel.send("Young Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-65 HP:5-65 50<=ST+HP<=100 G:(varies) \n(abilities vary)");
    }
    if (message.content.startsWith(prefix + "youngdragon")) {
         message.channel.send("Young Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-65 HP:5-65 50<=ST+HP<=100 G:(varies) \n(abilities vary)");
    }    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
