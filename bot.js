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
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
