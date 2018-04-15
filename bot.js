const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === prefix + "Card") {
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
    if (message.content === prefix + "Goblin") {
       message.channel.send("Goblin <:crarityn:364048663661772800> <:cneutral:364043997825597440> \nST:20 HP:30 MHP:30 G:0");
    }
    if (message.content === prefix + "goblin") {
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
    if (message.content === prefix + "Stone Jizo") {
         message.channel.send("Stone Jizo <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:50 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive Anti-Spell \nSecret Art (100G): Transforms targeted territory into a <:cmulti:364048663393337345> land, then is destroyed.");
    }
    if (message.content === prefix + "StoneJizo") {
         message.channel.send("Stone Jizo <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:50 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive Anti-Spell \nSecret Art (100G): Transforms targeted territory into a <:cmulti:364048663393337345> land, then is destroyed.");
    }
    if (message.content === prefix + "stone jizo") {
         message.channel.send("Stone Jizo <:crarityr:364045147085864960> <:cneutral:364043997825597440> \nST:10 HP:30 MHP:30 G:50 \nItem Limit: <:cnoweapon:364048663309189152> <:cnoarmor:364048663598858240> \nDefensive Anti-Spell \nSecret Art (100G): Transforms targeted territory into a <:cmulti:364048663393337345> land, then is destroyed.");
    }
    if (message.content === prefix + "stonejizo") {
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
    if (message.content === prefix + "Gremlin") {
         message.channel.send("Gremlin <:craritys:364048663351132162> <:cair:364048663518904327> \nST:20 HP:30 MHP:30 G:60 \nItem Limit: <:cnoscroll:364048663653122048> \nBattle Start: Destroys opponent\'s item.");
    }
    if (message.content === prefix +  "gremlin") {
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
    if (message.content === prefix + "Spectre") {
         message.channel.send("Spectre <:crarityn:364048663661772800> <:cair:364048663518904327> \nST:0 HP:30 MHP:30 G:30 \nIn Battle: ST & HP= (random value between 10 and 70).");
    }
    if (message.content === prefix + "spectre") {
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
    if (message.content === prefix + "Massive Dragon Super") {
         message.channel.send("Massive Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:30-55 HP:70-80 110<=ST+HP<=135 G:(varies) \n(abilities vary).");
    }
    if (message.content === prefix + "MassiveDragonSuper") {
         message.channel.send("Massive Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:30-55 HP:70-80 110<=ST+HP<=135 G:(varies) \n(abilities vary).");
    }
    if (message.content === prefix + "massive dragon super") {
         message.channel.send("Massive Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:30-55 HP:70-80 110<=ST+HP<=135 G:(varies) \n(abilities vary).");
    }
    if (message.content === prefix + "massivedragonsuper") {
         message.channel.send("Massive Dragon Super <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:30-55 HP:70-80 110<=ST+HP<=135 G:(varies) \n(abilities vary).");
    }
    if (message.content === prefix + "Massive Dragon") {
         message.channel.send("Massive Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-35 HP:60-80 70<=ST+HP<=90 G:(varies) \n(abilities vary)");
    }
    if (message.content === prefix + "MassiveDragon") {
         message.channel.send("Massive Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-35 HP:60-80 70<=ST+HP<=90 G:(varies) \n(abilities vary)");
    }
    if (message.content === prefix + "massive dragon") {
         message.channel.send("Massive Dragon <:craritye:364048663611310081> ( <:cneutral:364043997825597440> <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> or <:cair:364048663518904327> ) \nST:0-35 HP:60-80 70<=ST+HP<=90 G:(varies) \n(abilities vary)");
    }
    if (message.content === prefix + "massivedragon") {
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
  //ITEM CARDS GO HERE
  if (message.content.startsWith(prefix + "Angel Cape")) {
       message.channel.send("Angel Cape <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50 \nHP+40 / Immune to Destroy Item and Steal Item effects.");
    }
    if (message.content.startsWith(prefix + "AngelCape")) {
         message.channel.send("Angel Cape <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50 \nHP+40 / Immune to Destroy Item and Steal Item effects.");
    }
    if (message.content.startsWith(prefix + "angel cape")) {
         message.channel.send("Angel Cape <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50 \nHP+40 / Immune to Destroy Item and Steal Item effects.");
    }
    if (message.content.startsWith(prefix + "angelcape")) {
         message.channel.send("Angel Cape <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50 \nHP+40 / Immune to Destroy Item and Steal Item effects.");
    }
    if (message.content.startsWith(prefix + "Angry Mask")) {
         message.channel.send("Angry Mask <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:60 \nHP+30 / Battle End: Opponent\'s HP- (damage your creature received in battle).");
    }
    if (message.content.startsWith(prefix + "AngryMask")) {
         message.channel.send("Angry Mask <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:60 \nHP+30 / Battle End: Opponent\'s HP- (damage your creature received in battle).");
    }
    if (message.content.startsWith(prefix + "angry mask")) {
         message.channel.send("Angry Mask <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:60 \nHP+30 / Battle End: Opponent\'s HP- (damage your creature received in battle).");
    }
    if (message.content.startsWith(prefix + "angrymask")) {
         message.channel.send("Angry Mask <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:60 \nHP+30 / Battle End: Opponent\'s HP- (damage your creature received in battle).");
    }
    if (message.content.startsWith(prefix + "Argent Key")) {
         message.channel.send("Argent Key <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:70 \nAttacks First / ST+10 / Attack Bonus: Moves equipped creature to random vacant land if opponent was not destroyed.");
    }
    if (message.content.startsWith(prefix + "ArgentKey")) {
         message.channel.send("Argent Key <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:70 \nAttacks First / ST+10 / Attack Bonus: Moves equipped creature to random vacant land if opponent was not destroyed.");
    }
    if (message.content.startsWith(prefix + "argent key")) {
         message.channel.send("Argent Key <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:70 \nAttacks First / ST+10 / Attack Bonus: Moves equipped creature to random vacant land if opponent was not destroyed.");
    }
    if (message.content.startsWith(prefix + "argentkey")) {
         message.channel.send("Argent Key <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:70 \nAttacks First / ST+10 / Attack Bonus: Moves equipped creature to random vacant land if opponent was not destroyed.");
    }
    if (message.content.startsWith(prefix + "Armet")) {
         message.channel.send("Armet <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:45 \nST-10 / HP+40");
    }
    if (message.content.startsWith(prefix + "armet")) {
         message.channel.send("Armet <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:45 \nST-10 / HP+40");
    }
    if (message.content.startsWith(prefix + "Aura Strike")) {
         message.channel.send("Aura Strike <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (equipped creature\'s base ST).");
    }
    if (message.content.startsWith(prefix + "AuraStrike")) {
         message.channel.send("Aura Strike <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (equipped creature\'s base ST).");
    }
    if (message.content.startsWith(prefix + "aura strike")) {
         message.channel.send("Aura Strike <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (equipped creature\'s base ST).");
    }
    if (message.content.startsWith(prefix + "aura strike")) {
         message.channel.send("Aura Strike <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (equipped creature\'s base ST).");
    }
    if (message.content.startsWith(prefix + "Battering Ram")) {
         message.channel.send("Battering Ram <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:40 \nST+30 / Instant Death: 100% against Defensive creatures.");
    }
    if (message.content.startsWith(prefix + "BatteringRam")) {
         message.channel.send("Battering Ram <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:40 \nST+30 / Instant Death: 100% against Defensive creatures.");
    }
    if (message.content.startsWith(prefix + "battering ram")) {
         message.channel.send("Battering Ram <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:40 \nST+30 / Instant Death: 100% against Defensive creatures.");
    }
    if (message.content.startsWith(prefix + "batteringram")) {
         message.channel.send("Battering Ram <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:40 \nST+30 / Instant Death: 100% against Defensive creatures.");
    }
    if (message.content.startsWith(prefix + "Battle Axe")) {
         message.channel.send("Battle Axe <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+40");
    }
    if (message.content.startsWith(prefix + "BattleAxe")) {
         message.channel.send("Battle Axe <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+40");
    }
    if (message.content.startsWith(prefix + "battle axe")) {
         message.channel.send("Battle Axe <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+40");
    }
    if (message.content.startsWith(prefix + "battleaxe")) {
         message.channel.send("Battle Axe <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+40");
    }
    if (message.content.startsWith(prefix + "Binding Whip")) {
         message.channel.send("Binding Whip <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+30 / Attack Bonus: Paralysis <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "BindingWhip")) {
         message.channel.send("Binding Whip <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+30 / Attack Bonus: Paralysis <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "binding whip")) {
         message.channel.send("Binding Whip <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+30 / Attack Bonus: Paralysis <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "bindingwhip")) {
         message.channel.send("Binding Whip <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+30 / Attack Bonus: Paralysis <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "Boomerang")) {
         message.channel.send("Boomerang <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+20 / HP+10 / Battle End: Recycles to Hand");
    }
    if (message.content.startsWith(prefix + "boomerang")) {
         message.channel.send("Boomerang <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+20 / HP+10 / Battle End: Recycles to Hand");
    }
    if (message.content.startsWith(prefix + "Buckler")) {
         message.channel.send("Buckler <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:20 \nNeutralizes: Attacks from creatures with ST of 30 and under.");
    }
    if (message.content.startsWith(prefix + "buckler")) {
         message.channel.send("Buckler <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:20 \nNeutralizes: Attacks from creatures with ST of 30 and under.");
    }
    if (message.content === prefix + "Burning Heart") {
         message.channel.send("Burning Heart <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70 \nST+20 / HP+20 / Upon Defeat: Destroys opponent.");
    }
    if (message.content === prefix + "BurningHeart") {
         message.channel.send("Burning Heart <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70 \nST+20 / HP+20 / Upon Defeat: Destroys opponent.");
    }
    if (message.content === prefix + "burning heart") {
         message.channel.send("Burning Heart <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70 \nST+20 / HP+20 / Upon Defeat: Destroys opponent.");
    }
    if (message.content === prefix + "burningheart") {
         message.channel.send("Burning Heart <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70 \nST+20 / HP+20 / Upon Defeat: Destroys opponent.");
    }
    if (message.content === prefix + "Burning Rod") {
         message.channel.send("Burning Rod <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (number of user\'s <:cfire:364048663355588609> and <:cearth:364048663582081034> territories x10). / Scroll Critical Hit: <:cwater:364048663447601154> or <:cair:364048663518904327>");
    }
    if (message.content === prefix + "BurningRod") {
         message.channel.send("Burning Rod <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (number of user\'s <:cfire:364048663355588609> and <:cearth:364048663582081034> territories x10). / Scroll Critical Hit: <:cwater:364048663447601154> or <:cair:364048663518904327>");
    }
    if (message.content === prefix + "burning rod") {
         message.channel.send("Burning Rod <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (number of user\'s <:cfire:364048663355588609> and <:cearth:364048663582081034> territories x10). / Scroll Critical Hit: <:cwater:364048663447601154> or <:cair:364048663518904327>");
    }
    if (message.content === prefix + "burningrod") {
         message.channel.send("Burning Rod <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (number of user\'s <:cfire:364048663355588609> and <:cearth:364048663582081034> territories x10). / Scroll Critical Hit: <:cwater:364048663447601154> or <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "Catapult")) {
         message.channel.send("Catapult <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:50 \nST+30 / HP+30");
    }
    if (message.content.startsWith(prefix + "catapult")) {
         message.channel.send("Catapult <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:50 \nST+30 / HP+30");
    }
    if (message.content === prefix + "Chain Mail") {
         message.channel.send("Chain Mail <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:10 \nHP+30");
    }
    if (message.content === prefix + "ChainMail") {
         message.channel.send("Chain Mail <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:10 \nHP+30");
    }
    if (message.content === prefix + "chain mail") {
         message.channel.send("Chain Mail <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:10 \nHP+30");
    }
    if (message.content === prefix + "chainmail") {
         message.channel.send("Chain Mail <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:10 \nHP+30");
    }
    if (message.content === prefix + "Chain Saw") {
         message.channel.send("Chain Saw <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+ (Length of opponent\'s chain in battle territory x20).");
    }
    if (message.content === prefix + "ChainSaw") {
         message.channel.send("Chain Saw <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+ (Length of opponent\'s chain in battle territory x20).");
    }
    if (message.content === prefix + "chain saw") {
         message.channel.send("Chain Saw <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+ (Length of opponent\'s chain in battle territory x20).");
    }
    if (message.content === prefix + "chainsaw") {
         message.channel.send("Chain Saw <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+ (Length of opponent\'s chain in battle territory x20).");
    }
    if (message.content.startsWith(prefix + "Chilling Blast")) {
         message.channel.send("Chilling Blast <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (number of User\'s <:cwater:364048663447601154> and <:cair:364048663518904327> territories x10). / Scroll Critical Hit: <:cfire:364048663355588609> and <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "ChillingBlast")) {
         message.channel.send("Chilling Blast <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (number of User\'s <:cwater:364048663447601154> and <:cair:364048663518904327> territories x10). / Scroll Critical Hit: <:cfire:364048663355588609> and <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "chilling blast")) {
         message.channel.send("Chilling Blast <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (number of User\'s <:cwater:364048663447601154> and <:cair:364048663518904327> territories x10). / Scroll Critical Hit: <:cfire:364048663355588609> and <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "chillingblast")) {
         message.channel.send("Chilling Blast <:crarityr:364045147085864960> <:cscroll:364048663691001876> - G:90 \nScroll Attack: ST= (number of User\'s <:cwater:364048663447601154> and <:cair:364048663518904327> territories x10). / Scroll Critical Hit: <:cfire:364048663355588609> and <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "Claw of Shade")) {
         message.channel.send("Claw of Shade <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:90 \nST+ (Number of creatures in play with same element as opponent x10).");
    }
    if (message.content.startsWith(prefix + "Claw ofShade")) {
         message.channel.send("Claw of Shade <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:90 \nST+ (Number of creatures in play with same element as opponent x10).");
    }
    if (message.content.startsWith(prefix + "Clawof Shade")) {
         message.channel.send("Claw of Shade <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:90 \nST+ (Number of creatures in play with same element as opponent x10).");
    }
    if (message.content.startsWith(prefix + "ClawofShade")) {
         message.channel.send("Claw of Shade <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:90 \nST+ (Number of creatures in play with same element as opponent x10).");
    }
    if (message.content.startsWith(prefix + "claw of shade")) {
         message.channel.send("Claw of Shade <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:90 \nST+ (Number of creatures in play with same element as opponent x10).");
    }
    if (message.content.startsWith(prefix + "claw ofshade")) {
         message.channel.send("Claw of Shade <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:90 \nST+ (Number of creatures in play with same element as opponent x10).");
    }
    if (message.content.startsWith(prefix + "clawof shade")) {
         message.channel.send("Claw of Shade <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:90 \nST+ (Number of creatures in play with same element as opponent x10).");
    }
    if (message.content.startsWith(prefix + "clawofshade")) {
         message.channel.send("Claw of Shade <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:90 \nST+ (Number of creatures in play with same element as opponent x10).");
    }
    if (message.content.startsWith(prefix + "Claymore")) {
         message.channel.send("Claymore <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:50 \nST+50");
    }
    if (message.content.startsWith(prefix + "claymore")) {
         message.channel.send("Claymore <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:50 \nST+50");
    }
    if (message.content.startsWith(prefix + "Diamond Armor")) {
         message.channel.send("Diamond Armor <:craritys:364048663351132162> <:carmor:364048663556915200> - G:60 \nAttacks Last / ST-30 / HP+60");
    }
    if (message.content.startsWith(prefix + "DiamondArmor")) {
         message.channel.send("Diamond Armor <:craritys:364048663351132162> <:carmor:364048663556915200> - G:60 \nAttacks Last / ST-30 / HP+60");
    }
    if (message.content.startsWith(prefix + "diamond armor")) {
         message.channel.send("Diamond Armor <:craritys:364048663351132162> <:carmor:364048663556915200> - G:60 \nAttacks Last / ST-30 / HP+60");
    }
    if (message.content.startsWith(prefix + "diamondarmor")) {
         message.channel.send("Diamond Armor <:craritys:364048663351132162> <:carmor:364048663556915200> - G:60 \nAttacks Last / ST-30 / HP+60");
    }
    if (message.content.startsWith(prefix + "Dragon Orb")) {
         message.channel.send("Dragon Orb <:craritys:364048663351132162> <:ctool:364048663762173953> - G:50 \nIn Battle: Transforms into a random elemental dragon.");
    }
    if (message.content.startsWith(prefix + "DragonOrb")) {
         message.channel.send("Dragon Orb <:craritys:364048663351132162> <:ctool:364048663762173953> - G:50 \nIn Battle: Transforms into a random elemental dragon.");
    }
    if (message.content.startsWith(prefix + "dragon orb")) {
         message.channel.send("Dragon Orb <:craritys:364048663351132162> <:ctool:364048663762173953> - G:50 \nIn Battle: Transforms into a random elemental dragon.");
    }
    if (message.content.startsWith(prefix + "dragonorb")) {
         message.channel.send("Dragon Orb <:craritys:364048663351132162> <:ctool:364048663762173953> - G:50 \nIn Battle: Transforms into a random elemental dragon.");
    }
    if (message.content.startsWith(prefix + "Drill Lance")) {
         message.channel.send("Drill Lance <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+20 / Penetrates");
    }
    if (message.content.startsWith(prefix + "DrillLance")) {
         message.channel.send("Drill Lance <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+20 / Penetrates");
    }
    if (message.content.startsWith(prefix + "drill lance")) {
         message.channel.send("Drill Lance <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+20 / Penetrates");
    }
    if (message.content.startsWith(prefix + "drilllance")) {
         message.channel.send("Drill Lance <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50 \nST+20 / Penetrates");
    }
    if (message.content.startsWith(prefix + "Eagle Rapier")) {
         message.channel.send("Eagle Rapier <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:40 \nAttacks First / ST+30");
    }
    if (message.content.startsWith(prefix + "EagleRapier")) {
         message.channel.send("Eagle Rapier <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:40 \nAttacks First / ST+30");
    }
    if (message.content.startsWith(prefix + "eagle rapier")) {
         message.channel.send("Eagle Rapier <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:40 \nAttacks First / ST+30");
    }
    if (message.content.startsWith(prefix + "eaglerapier")) {
         message.channel.send("Eagle Rapier <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:40 \nAttacks First / ST+30");
    }
    if (message.content.startsWith(prefix + "Eternal Mail")) {
         message.channel.send("Eternal Mail <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:40 \nHP+40 / Battle End: Recycles to Book.");
    }
    if (message.content.startsWith(prefix + "EternalMail")) {
         message.channel.send("Eternal Mail <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:40 \nHP+40 / Battle End: Recycles to Book.");
    }
    if (message.content.startsWith(prefix + "eternal mail")) {
         message.channel.send("Eternal Mail <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:40 \nHP+40 / Battle End: Recycles to Book.");
    }
    if (message.content.startsWith(prefix + "eternalmail")) {
         message.channel.send("Eternal Mail <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:40 \nHP+40 / Battle End: Recycles to Book.");
    }
    if (message.content.startsWith(prefix + "Force Anklet")) {
         message.channel.send("Force Anklet <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70 \nHP+ (Number of cards in user\'s hand x10).");
    }
    if (message.content.startsWith(prefix + "ForceAnklet")) {
         message.channel.send("Force Anklet <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70 \nHP+ (Number of cards in user\'s hand x10).");
    }
    if (message.content.startsWith(prefix + "force anklet")) {
         message.channel.send("Force Anklet <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70 \nHP+ (Number of cards in user\'s hand x10).");
    }
    if (message.content.startsWith(prefix + "forceanklet")) {
         message.channel.send("Force Anklet <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70 \nHP+ (Number of cards in user\'s hand x10).");
    }
    if (message.content.startsWith(prefix + "Gelatinous Armor")) {
         message.channel.send("Gelatinous Armor <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50 \nHP+40 / Battle End: User gains (amount of damage received from Normal Attacks during battle x5)G.");
    }
    if (message.content.startsWith(prefix + "GelatinousArmor")) {
         message.channel.send("Gelatinous Armor <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50 \nHP+40 / Battle End: User gains (amount of damage received from Normal Attacks during battle x5)G.");
    }
    if (message.content.startsWith(prefix + "gelatinous armor")) {
         message.channel.send("Gelatinous Armor <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50 \nHP+40 / Battle End: User gains (amount of damage received from Normal Attacks during battle x5)G.");
    }
    if (message.content.startsWith(prefix + "gelatinousarmor")) {
         message.channel.send("Gelatinous Armor <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50 \nHP+40 / Battle End: User gains (amount of damage received from Normal Attacks during battle x5)G.");
    }
    if (message.content === prefix + "Golden Goose") {
         message.channel.send("Golden Goose  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:0 \nUpon Defeat: User gains (equipped creature\'s MHP x7)G.");
    }
    if (message.content === prefix + "GoldenGoose") {
         message.channel.send("Golden Goose  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:0 \nUpon Defeat: User gains (equipped creature\'s MHP x7)G.");
    }
    if (message.content === prefix + "golden goose") {
         message.channel.send("Golden Goose  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:0 \nUpon Defeat: User gains (equipped creature\'s MHP x7)G.");
    }
    if (message.content === prefix + "goldengoose") {
         message.channel.send("Golden Goose  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:0 \nUpon Defeat: User gains (equipped creature\'s MHP x7)G.");
    }
    if (message.content === prefix + "Golden Hammer") {
         message.channel.send("Golden Hammer  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:50 \nST+40 / Attack Bonus: Gain 200G if opponent was not destroyed.");
    }
    if (message.content === prefix + "GoldenHammer") {
         message.channel.send("Golden Hammer  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:50 \nST+40 / Attack Bonus: Gain 200G if opponent was not destroyed.");
    }
    if (message.content === prefix + "golden hammer") {
         message.channel.send("Golden Hammer  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:50 \nST+40 / Attack Bonus: Gain 200G if opponent was not destroyed.");
    }
    if (message.content === prefix + "goldenhammer") {
         message.channel.send("Golden Hammer  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:50 \nST+40 / Attack Bonus: Gain 200G if opponent was not destroyed.");
    }
    if (message.content.startsWith(prefix + "Gremlin's Eye")) {
         message.channel.send("Gremlin\'s Eye <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:80 \nBattle Start: Destroys the opponent\'s item unless its Rarity is <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "Gremlin'sEye")) {
         message.channel.send("Gremlin\'s Eye <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:80 \nBattle Start: Destroys the opponent\'s item unless its Rarity is <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "Gremlins Eye")) {
         message.channel.send("Gremlin\'s Eye <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:80 \nBattle Start: Destroys the opponent\'s item unless its Rarity is <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "GremlinsEye")) {
         message.channel.send("Gremlin\'s Eye <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:80 \nBattle Start: Destroys the opponent\'s item unless its Rarity is <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "gremlin's eye")) {
         message.channel.send("Gremlin\'s Eye <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:80 \nBattle Start: Destroys the opponent\'s item unless its Rarity is <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "gremlins eye")) {
         message.channel.send("Gremlin\'s Eye <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:80 \nBattle Start: Destroys the opponent\'s item unless its Rarity is <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "gremlin'seye")) {
         message.channel.send("Gremlin\'s Eye <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:80 \nBattle Start: Destroys the opponent\'s item unless its Rarity is <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "gremlinseye")) {
         message.channel.send("Gremlin\'s Eye <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:80 \nBattle Start: Destroys the opponent\'s item unless its Rarity is <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "Long Sword")) {
         message.channel.send("Long Sword <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:10 \nST+30");
    }
    if (message.content.startsWith(prefix + "LongSword")) {
         message.channel.send("Long Sword <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:10 \nST+30");
    }
    if (message.content.startsWith(prefix + "long sword")) {
         message.channel.send("Long Sword <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:10 \nST+30");
    }
    if (message.content.startsWith(prefix + "longsword")) {
         message.channel.send("Long Sword <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:10 \nST+30");
    }
    if (message.content.startsWith(prefix + "Mace")) {
         message.channel.send("Mace <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:0 \nST+20");
    }
    if (message.content.startsWith(prefix + "mace")) {
         message.channel.send("Mace <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:0 \nST+20");
    }
    if (message.content === prefix + "Magic Shield") {
         message.channel.send("Magic Shield  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:20 \nHP+30 / Neutralizes: <:cscroll:364048663691001876> Attacks");
    }
    if (message.content === prefix + "MagicShield") {
         message.channel.send("Magic Shield  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:20 \nHP+30 / Neutralizes: <:cscroll:364048663691001876> Attacks");
    }
    if (message.content === prefix + "magic shield") {
         message.channel.send("Magic Shield  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:20 \nHP+30 / Neutralizes: <:cscroll:364048663691001876> Attacks");
    }
    if (message.content === prefix + "magicshield") {
         message.channel.send("Magic Shield  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:20 \nHP+30 / Neutralizes: <:cscroll:364048663691001876> Attacks");
    }
    if (message.content === prefix + "Magma Armor") {
         message.channel.send("Magma Armor <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:70 \nHP+ (Number of user\'s <:cfire:364048663355588609> and <:cearth:364048663582081034> territories x20).");
    }
    if (message.content === prefix + "MagmaArmor") {
         message.channel.send("Magma Armor <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:70 \nHP+ (Number of user\'s <:cfire:364048663355588609> and <:cearth:364048663582081034> territories x20).");
    }
    if (message.content === prefix + "magma armor") {
         message.channel.send("Magma Armor <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:70 \nHP+ (Number of user\'s <:cfire:364048663355588609> and <:cearth:364048663582081034> territories x20).");
    }
    if (message.content === prefix + "magmaarmor") {
         message.channel.send("Magma Armor <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:70 \nHP+ (Number of user\'s <:cfire:364048663355588609> and <:cearth:364048663582081034> territories x20).");
    }
    if (message.content === prefix + "Magma Flail") {
         message.channel.send("Magma Flail <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70 \nST+ (number of <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures in play x5). / Critical Hit: <:cair:364048663518904327> and <:cwater:364048663447601154>");
    }
    if (message.content === prefix + "MagmaFlail") {
         message.channel.send("Magma Flail <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70 \nST+ (number of <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures in play x5). / Critical Hit: <:cair:364048663518904327> and <:cwater:364048663447601154>");
    }
    if (message.content === prefix + "magma flail") {
         message.channel.send("Magma Flail <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70 \nST+ (number of <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures in play x5). / Critical Hit: <:cair:364048663518904327> and <:cwater:364048663447601154>");
    }
    if (message.content === prefix + "magmaflail") {
         message.channel.send("Magma Flail <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70 \nST+ (number of <:cfire:364048663355588609> & <:cearth:364048663582081034> creatures in play x5). / Critical Hit: <:cair:364048663518904327> and <:cwater:364048663447601154>");
    }
    if (message.content === prefix + "Magma Hammer") {
         message.channel.send("Magma Hammer <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:20 \nST+20 / Critical Hit: When equipped creature is <:cfire:364048663355588609> or <:cearth:364048663582081034>.");
    }
    if (message.content === prefix + "MagmaHammer") {
         message.channel.send("Magma Hammer <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:20 \nST+20 / Critical Hit: When equipped creature is <:cfire:364048663355588609> or <:cearth:364048663582081034>.");
    }
    if (message.content === prefix + "magma hammer") {
         message.channel.send("Magma Hammer <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:20 \nST+20 / Critical Hit: When equipped creature is <:cfire:364048663355588609> or <:cearth:364048663582081034>.");
    }
    if (message.content === prefix + "magmahammer") {
         message.channel.send("Magma Hammer <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:20 \nST+20 / Critical Hit: When equipped creature is <:cfire:364048663355588609> or <:cearth:364048663582081034>.");
    }
    if (message.content === prefix + "Magma Shield") {
         message.channel.send("Magma Shield <:craritys:364048663351132162> <:carmor:364048663556915200> - G:70 \nNeutralizes: Normal Attacks when equipped creature is <:cfire:364048663355588609> or <:cearth:364048663582081034>.");
    }
    if (message.content === prefix + "MagmaShield") {
         message.channel.send("Magma Shield <:craritys:364048663351132162> <:carmor:364048663556915200> - G:70 \nNeutralizes: Normal Attacks when equipped creature is <:cfire:364048663355588609> or <:cearth:364048663582081034>.");
    }
    if (message.content === prefix + "magma shield") {
         message.channel.send("Magma Shield <:craritys:364048663351132162> <:carmor:364048663556915200> - G:70 \nNeutralizes: Normal Attacks when equipped creature is <:cfire:364048663355588609> or <:cearth:364048663582081034>.");
    }
    if (message.content === prefix + "magmashield") {
         message.channel.send("Magma Shield <:craritys:364048663351132162> <:carmor:364048663556915200> - G:70 \nNeutralizes: Normal Attacks when equipped creature is <:cfire:364048663355588609> or <:cearth:364048663582081034>.");
    }
    if (message.content.startsWith(prefix + "Magus's Mirror")) {
         message.channel.send("Magus\'s Mirror <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30 \nHP+20 / Reflects: Scroll Attacks.");
    }
    if (message.content.startsWith(prefix + "Magus'sMirror")) {
         message.channel.send("Magus\'s Mirror <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30 \nHP+20 / Reflects: Scroll Attacks.");
    }
    if (message.content.startsWith(prefix + "Maguss Mirror")) {
         message.channel.send("Magus\'s Mirror <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30 \nHP+20 / Reflects: Scroll Attacks.");
    }
    if (message.content.startsWith(prefix + "MagussMirror")) {
         message.channel.send("Magus\'s Mirror <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30 \nHP+20 / Reflects: Scroll Attacks.");
    }
    if (message.content.startsWith(prefix + "magus's mirror")) {
         message.channel.send("Magus\'s Mirror <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30 \nHP+20 / Reflects: Scroll Attacks.");
    }
    if (message.content.startsWith(prefix + "magus'smirror")) {
         message.channel.send("Magus\'s Mirror <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30 \nHP+20 / Reflects: Scroll Attacks.");
    }
    if (message.content.startsWith(prefix + "magussmirror")) {
         message.channel.send("Magus\'s Mirror <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30 \nHP+20 / Reflects: Scroll Attacks.");
    }
    if (message.content === prefix + "Mirror Hoplon") {
         message.channel.send("Mirror Hoplon <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50 \nReflects: All if opponent did not equip an item.");
    }
    if (message.content === prefix + "MirrorHoplon") {
         message.channel.send("Mirror Hoplon <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50 \nReflects: All if opponent did not equip an item.");
    }
    if (message.content === prefix + "mirror hoplon") {
         message.channel.send("Mirror Hoplon <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50 \nReflects: All if opponent did not equip an item.");
    }
    if (message.content === prefix + "mirrorhoplon") {
         message.channel.send("Mirror Hoplon <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50 \nReflects: All if opponent did not equip an item.");
    }
    if (message.content.startsWith(prefix + "Moon Scimitar")) {
         message.channel.send("Moon Scimitar <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+30 / Attack Bonus: Sleep <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "MoonScimitar")) {
         message.channel.send("Moon Scimitar <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+30 / Attack Bonus: Sleep <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "moon scimitar")) {
         message.channel.send("Moon Scimitar <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+30 / Attack Bonus: Sleep <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "moonscimitar")) {
         message.channel.send("Moon Scimitar <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:30 \nST+30 / Attack Bonus: Sleep <:cmenchant:364048663447601153>.");
    }
    if (message.content.startsWith(prefix + "Murasame")) {
         message.channel.send("Murasame  <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:80  \nST+20 / Disables opponent\'s Neutralizes and Reflects abilities.");
    }
    if (message.content.startsWith(prefix + "murasame")) {
         message.channel.send("Murasame  <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:80  \nST+20 / Disables opponent\'s Neutralizes and Reflects abilities.");
    }
    if (message.content.startsWith(prefix + "Napalm Arrow")) {
         message.channel.send("Napalm Arrow  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50  \nST+30 / HP+20 / MHP-40 to opponent if no damage was dealt to opponent during battle.");
    }
    if (message.content.startsWith(prefix + "NapalmArrow")) {
         message.channel.send("Napalm Arrow  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50  \nST+30 / HP+20 / MHP-40 to opponent if no damage was dealt to opponent during battle.");
    }
    if (message.content.startsWith(prefix + "napalm arrow")) {
         message.channel.send("Napalm Arrow  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50  \nST+30 / HP+20 / MHP-40 to opponent if no damage was dealt to opponent during battle.");
    }
    if (message.content.startsWith(prefix + "napalmarrow")) {
         message.channel.send("Napalm Arrow  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:50  \nST+30 / HP+20 / MHP-40 to opponent if no damage was dealt to opponent during battle.");
    }
    if (message.content.startsWith(prefix + "Necro Plasma")) {
         message.channel.send("Necro Plasma  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=50 / In Battle: Transforms into Skeleton.");
    }
    if (message.content.startsWith(prefix + "NecroPlasma")) {
         message.channel.send("Necro Plasma  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=50 / In Battle: Transforms into Skeleton.");
    }
    if (message.content.startsWith(prefix + "necro plasma")) {
         message.channel.send("Necro Plasma  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=50 / In Battle: Transforms into Skeleton.");
    }
    if (message.content.startsWith(prefix + "necroplasma")) {
         message.channel.send("Necro Plasma  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=50 / In Battle: Transforms into Skeleton.");
    }
    if (message.content.startsWith(prefix + "Necro Scarab")) {
         message.channel.send("Necro Scarab  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:60  \nUpon Defeat: Transforms equipped creature into Skeleton.");
    }
    if (message.content.startsWith(prefix + "NecroScarab")) {
         message.channel.send("Necro Scarab  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:60  \nUpon Defeat: Transforms equipped creature into Skeleton.");
    }
    if (message.content.startsWith(prefix + "necro scarab")) {
         message.channel.send("Necro Scarab  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:60  \nUpon Defeat: Transforms equipped creature into Skeleton.");
    }
    if (message.content.startsWith(prefix + "necroscarab")) {
         message.channel.send("Necro Scarab  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:60  \nUpon Defeat: Transforms equipped creature into Skeleton.");
    }
    if (message.content.startsWith(prefix + "Neutral Cloak")) {
         message.channel.send("Neutral Cloak  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:50  \nHP+40 / In Battle: Equipped creature\'s element is <:cneutral:364043997825597440>.");
    }
    if (message.content.startsWith(prefix + "NeutralCloak")) {
         message.channel.send("Neutral Cloak  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:50  \nHP+40 / In Battle: Equipped creature\'s element is <:cneutral:364043997825597440>.");
    }
    if (message.content.startsWith(prefix + "neutral cloak")) {
         message.channel.send("Neutral Cloak  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:50  \nHP+40 / In Battle: Equipped creature\'s element is <:cneutral:364043997825597440>.");
    }
    if (message.content.startsWith(prefix + "neutralcloak")) {
         message.channel.send("Neutral Cloak  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:50  \nHP+40 / In Battle: Equipped creature\'s element is <:cneutral:364043997825597440>.");
    }
    if (message.content.startsWith(prefix + "Petrify Stone")) {
         message.channel.send("Petrify Stone  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:20  \nST=0 / HP=80");
    }
    if (message.content.startsWith(prefix + "PetrifyStone")) {
         message.channel.send("Petrify Stone  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:20  \nST=0 / HP=80");
    }
    if (message.content.startsWith(prefix + "petrify stone")) {
         message.channel.send("Petrify Stone  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:20  \nST=0 / HP=80");
    }
    if (message.content.startsWith(prefix + "petrifystone")) {
         message.channel.send("Petrify Stone  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:20  \nST=0 / HP=80");
    }
    if (message.content.startsWith(prefix + "Plate Mail")) {
         message.channel.send("Plate Mail  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50  \nHP+50");
    }
    if (message.content.startsWith(prefix + "PlateMail")) {
         message.channel.send("Plate Mail  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50  \nHP+50");
    }
    if (message.content.startsWith(prefix + "plate mail")) {
         message.channel.send("Plate Mail  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50  \nHP+50");
    }
    if (message.content.startsWith(prefix + "platemail")) {
         message.channel.send("Plate Mail  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:50  \nHP+50");
    }
    if (message.content.startsWith(prefix + "Prismatic Wand")) {
         message.channel.send("Prismatic Wand  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70  \nST & HP+40 if equipped creature\'s element is different from opponent\'s element.");
    }
    if (message.content.startsWith(prefix + "PrismaticWand")) {
         message.channel.send("Prismatic Wand  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70  \nST & HP+40 if equipped creature\'s element is different from opponent\'s element.");
    }
    if (message.content.startsWith(prefix + "prismatic wand")) {
         message.channel.send("Prismatic Wand  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70  \nST & HP+40 if equipped creature\'s element is different from opponent\'s element.");
    }
    if (message.content.startsWith(prefix + "prismaticwand")) {
         message.channel.send("Prismatic Wand  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70  \nST & HP+40 if equipped creature\'s element is different from opponent\'s element.");
    }
    if (message.content.startsWith(prefix + "Rag Doll")) {
         message.channel.send("Rag Doll  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:60  \nNeutralizes: <:cscroll:364048663691001876> Attacks / Neutralizes: Creatures with greater ST than equipped creature.");
    }
    if (message.content.startsWith(prefix + "RagDoll")) {
         message.channel.send("Rag Doll  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:60  \nNeutralizes: <:cscroll:364048663691001876> Attacks / Neutralizes: Creatures with greater ST than equipped creature.");
    }
    if (message.content.startsWith(prefix + "rag doll")) {
         message.channel.send("Rag Doll  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:60  \nNeutralizes: <:cscroll:364048663691001876> Attacks / Neutralizes: Creatures with greater ST than equipped creature.");
    }
    if (message.content.startsWith(prefix + "ragdoll")) {
         message.channel.send("Rag Doll  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:60  \nNeutralizes: <:cscroll:364048663691001876> Attacks / Neutralizes: Creatures with greater ST than equipped creature.");
    }
    if (message.content.startsWith(prefix + "Reactive Armor")) {
         message.channel.send("Reactive Armor  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50  \nBattle Start: Destroys opponent\'s weapon. / HP+30");
    }
    if (message.content.startsWith(prefix + "ReactiveArmor")) {
         message.channel.send("Reactive Armor  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50  \nBattle Start: Destroys opponent\'s weapon. / HP+30");
    }
    if (message.content.startsWith(prefix + "reactive armor")) {
         message.channel.send("Reactive Armor  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50  \nBattle Start: Destroys opponent\'s weapon. / HP+30");
    }
    if (message.content.startsWith(prefix + "reactivearmor")) {
         message.channel.send("Reactive Armor  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50  \nBattle Start: Destroys opponent\'s weapon. / HP+30");
    }
    if (message.content.startsWith(prefix + "Ring of the Succubus")) {
         message.channel.send("Ring of the Succubus  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / Attack Bonus: Opponent\'s Base ST=0.");
    }
    if (message.content.startsWith(prefix + "RingoftheSuccubus")) {
         message.channel.send("Ring of the Succubus  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / Attack Bonus: Opponent\'s Base ST=0.");
    }
    if (message.content.startsWith(prefix + "Ring of Succubus")) {
         message.channel.send("Ring of the Succubus  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / Attack Bonus: Opponent\'s Base ST=0.");
    }
    if (message.content.startsWith(prefix + "RingofSuccubus")) {
         message.channel.send("Ring of the Succubus  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / Attack Bonus: Opponent\'s Base ST=0.");
    }
    if (message.content.startsWith(prefix + "ring of the succubus")) {
         message.channel.send("Ring of the Succubus  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / Attack Bonus: Opponent\'s Base ST=0.");
    }
    if (message.content.startsWith(prefix + "ringofthesuccubus")) {
         message.channel.send("Ring of the Succubus  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / Attack Bonus: Opponent\'s Base ST=0.");
    }
    if (message.content.startsWith(prefix + "ring of succubus")) {
         message.channel.send("Ring of the Succubus  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / Attack Bonus: Opponent\'s Base ST=0.");
    }
    if (message.content.startsWith(prefix + "ringofthesuccubus")) {
         message.channel.send("Ring of the Succubus  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / Attack Bonus: Opponent\'s Base ST=0.");
    }
    if (message.content.startsWith(prefix + "Scale Armor")) {
         message.channel.send("Scale Armor  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:30  \nHP+40");
    }
    if (message.content.startsWith(prefix + "ScaleArmor")) {
         message.channel.send("Scale Armor  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:30  \nHP+40");
    }
    if (message.content.startsWith(prefix + "scale armor")) {
         message.channel.send("Scale Armor  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:30  \nHP+40");
    }
    if (message.content.startsWith(prefix + "scalearmor")) {
         message.channel.send("Scale Armor  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:30  \nHP+40");
    }
    if (message.content.startsWith(prefix + "Shadow Blaze")) {
         message.channel.send("Shadow Blaze  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=40 / Scroll Critical Hit: If the opponent has more than one copy of the enemy creature in play.");
    }
    if (message.content.startsWith(prefix + "ShadowBlaze")) {
         message.channel.send("Shadow Blaze  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=40 / Scroll Critical Hit: If the opponent has more than one copy of the enemy creature in play.");
    }
    if (message.content.startsWith(prefix + "shadow blaze")) {
         message.channel.send("Shadow Blaze  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=40 / Scroll Critical Hit: If the opponent has more than one copy of the enemy creature in play.");
    }
    if (message.content.startsWith(prefix + "shadowblaze")) {
         message.channel.send("Shadow Blaze  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=40 / Scroll Critical Hit: If the opponent has more than one copy of the enemy creature in play.");
    }
    if (message.content.startsWith(prefix + "Silver Plow")) {
         message.channel.send("Silver Plow  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30  \nST+10 / HP+20 / Battle End: Raises the level of battle territory by 1.");
    }
    if (message.content.startsWith(prefix + "SilverPlow")) {
         message.channel.send("Silver Plow  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30  \nST+10 / HP+20 / Battle End: Raises the level of battle territory by 1.");
    }
    if (message.content.startsWith(prefix + "silver plow")) {
         message.channel.send("Silver Plow  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30  \nST+10 / HP+20 / Battle End: Raises the level of battle territory by 1.");
    }
    if (message.content.startsWith(prefix + "silverplow")) {
         message.channel.send("Silver Plow  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30  \nST+10 / HP+20 / Battle End: Raises the level of battle territory by 1.");
    }
    if (message.content.startsWith(prefix + "Sling")) {
         message.channel.send("Sling  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / ST+10 / HP+10");
    }
    if (message.content.startsWith(prefix + "sling")) {
         message.channel.send("Sling  <:crarityn:364048663661772800> <:ctool:364048663762173953> - G:30  \nAttacks First / ST+10 / HP+10");
    }
    if (message.content.startsWith(prefix + "Soul Ray")) {
         message.channel.send("Soul Ray  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=30 / Battle End: Recycles to hand.");
    }
    if (message.content.startsWith(prefix + "SoulRay")) {
         message.channel.send("Soul Ray  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=30 / Battle End: Recycles to hand.");
    }
    if (message.content.startsWith(prefix + "soul ray")) {
         message.channel.send("Soul Ray  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=30 / Battle End: Recycles to hand.");
    }
    if (message.content.startsWith(prefix + "soulray")) {
         message.channel.send("Soul Ray  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:70  \nScroll Attack: ST=30 / Battle End: Recycles to hand.");
    }
    if (message.content.startsWith(prefix + "Spark Ball")) {
         message.channel.send("Spark Ball  <:crarityn:364048663661772800> <:cscroll:364048663691001876> - G:60  \nScroll Attack: ST=40");
    }
    if (message.content.startsWith(prefix + "SparkBall")) {
         message.channel.send("Spark Ball  <:crarityn:364048663661772800> <:cscroll:364048663691001876> - G:60  \nScroll Attack: ST=40");
    }
    if (message.content.startsWith(prefix + "spark ball")) {
         message.channel.send("Spark Ball  <:crarityn:364048663661772800> <:cscroll:364048663691001876> - G:60  \nScroll Attack: ST=40");
    }
    if (message.content.startsWith(prefix + "sparkball")) {
         message.channel.send("Spark Ball  <:crarityn:364048663661772800> <:cscroll:364048663691001876> - G:60  \nScroll Attack: ST=40");
    }
    if (message.content.startsWith(prefix + "Spectre's Robe")) {
         message.channel.send("Spectre\'s Robe  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:60  \nST & HP+ (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "Spectre'sRobe")) {
         message.channel.send("Spectre\'s Robe  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:60  \nST & HP+ (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "Spectres Robe")) {
         message.channel.send("Spectre\'s Robe  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:60  \nST & HP+ (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "SpectresRobe")) {
         message.channel.send("Spectre\'s Robe  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:60  \nST & HP+ (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "spectre's robe")) {
         message.channel.send("Spectre\'s Robe  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:60  \nST & HP+ (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "spectre'srobe")) {
         message.channel.send("Spectre\'s Robe  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:60  \nST & HP+ (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "spectres robe")) {
         message.channel.send("Spectre\'s Robe  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:60  \nST & HP+ (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "spectresrobe")) {
         message.channel.send("Spectre\'s Robe  <:crarityn:364048663661772800> <:carmor:364048663556915200> - G:60  \nST & HP+ (random value between 10 and 70).");
    }
    if (message.content.startsWith(prefix + "Sphere Shield")) {
         message.channel.send("Sphere Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:100  \nST=0 / Neutralizes: Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "SphereShield")) {
         message.channel.send("Sphere Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:100  \nST=0 / Neutralizes: Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "sphere shield")) {
         message.channel.send("Sphere Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:100  \nST=0 / Neutralizes: Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "sphereshield")) {
         message.channel.send("Sphere Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:100  \nST=0 / Neutralizes: Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "Spiked Shield")) {
         message.channel.send("Spiked Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:40  \nReflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "SpikedShield")) {
         message.channel.send("Spiked Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:40  \nReflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "spiked shield")) {
         message.channel.send("Spiked Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:40  \nReflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "spikedshield")) {
         message.channel.send("Spiked Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:40  \nReflects: 1/2 of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "Squid Mantle")) {
         message.channel.send("Squid Mantle  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50  \nHP+40 / In Battle: Disables opponent\'s Attack Bonus.");
    }
    if (message.content.startsWith(prefix + "SquidMantle")) {
         message.channel.send("Squid Mantle  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50  \nHP+40 / In Battle: Disables opponent\'s Attack Bonus.");
    }
    if (message.content.startsWith(prefix + "squid mantle")) {
         message.channel.send("Squid Mantle  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50  \nHP+40 / In Battle: Disables opponent\'s Attack Bonus.");
    }
    if (message.content.startsWith(prefix + "squidmantle")) {
         message.channel.send("Squid Mantle  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:50  \nHP+40 / In Battle: Disables opponent\'s Attack Bonus.");
    }
    if (message.content === prefix + "Storm Armor") {
         message.channel.send("Storm Armor  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:70  \nHP+ (Number of user\'s <:cair:364048663518904327> and <:cwater:364048663447601154> territories x20).");
    }
    if (message.content === prefix + "StormArmor") {
         message.channel.send("Storm Armor  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:70  \nHP+ (Number of user\'s <:cair:364048663518904327> and <:cwater:364048663447601154> territories x20).");
    }
    if (message.content === prefix + "storm armor") {
         message.channel.send("Storm Armor  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:70  \nHP+ (Number of user\'s <:cair:364048663518904327> and <:cwater:364048663447601154> territories x20).");
    }
    if (message.content === prefix + "stormarmor") {
         message.channel.send("Storm Armor  <:crarityr:364045147085864960> <:carmor:364048663556915200> - G:70  \nHP+ (Number of user\'s <:cair:364048663518904327> and <:cwater:364048663447601154> territories x20).");
    }
    if (message.content === prefix + "Storm Halberd") {
         message.channel.send("Storm Halberd  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70  \nST+ (number of <:cwater:364048663447601154> & <:cair:364048663518904327> creatures in play x5). / Critical Hit: <:cfire:364048663355588609> and <:cearth:364048663582081034>");
    }
    if (message.content === prefix + "StormHalberd") {
         message.channel.send("Storm Halberd  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70  \nST+ (number of <:cwater:364048663447601154> & <:cair:364048663518904327> creatures in play x5). / Critical Hit: <:cfire:364048663355588609> and <:cearth:364048663582081034>");
    }
    if (message.content === prefix + "storm halberd") {
         message.channel.send("Storm Halberd  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70  \nST+ (number of <:cwater:364048663447601154> & <:cair:364048663518904327> creatures in play x5). / Critical Hit: <:cfire:364048663355588609> and <:cearth:364048663582081034>");
    }
    if (message.content === prefix + "stormhalberd") {
         message.channel.send("Storm Halberd  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:70  \nST+ (number of <:cwater:364048663447601154> & <:cair:364048663518904327> creatures in play x5). / Critical Hit: <:cfire:364048663355588609> and <:cearth:364048663582081034>");
    }
    if (message.content === prefix + "Storm Shield") {
         message.channel.send("Storm Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:70  \nNeutralizes: Normal Attacks when equipped creature is <:cwater:364048663447601154> or <:cair:364048663518904327>.");
    }
    if (message.content === prefix + "StormShield") {
         message.channel.send("Storm Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:70  \nNeutralizes: Normal Attacks when equipped creature is <:cwater:364048663447601154> or <:cair:364048663518904327>.");
    }
    if (message.content === prefix + "storm shield") {
         message.channel.send("Storm Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:70  \nNeutralizes: Normal Attacks when equipped creature is <:cwater:364048663447601154> or <:cair:364048663518904327>.");
    }
    if (message.content === prefix + "stormshield") {
         message.channel.send("Storm Shield  <:craritys:364048663351132162> <:carmor:364048663556915200> - G:70  \nNeutralizes: Normal Attacks when equipped creature is <:cwater:364048663447601154> or <:cair:364048663518904327>.");
    }
    if (message.content === prefix + "Storm Spear") {
         message.channel.send("Storm Spear  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:20  \nST+20 / Critical Hit: When equipped creature is <:cwater:364048663447601154> or <:cair:364048663518904327>.");
    }
    if (message.content === prefix + "StormSpear") {
         message.channel.send("Storm Spear  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:20  \nST+20 / Critical Hit: When equipped creature is <:cwater:364048663447601154> or <:cair:364048663518904327>.");
    }
    if (message.content === prefix + "storm spear") {
         message.channel.send("Storm Spear  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:20  \nST+20 / Critical Hit: When equipped creature is <:cwater:364048663447601154> or <:cair:364048663518904327>.");
    }
    if (message.content === prefix + "stormspear") {
         message.channel.send("Storm Spear  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:20  \nST+20 / Critical Hit: When equipped creature is <:cwater:364048663447601154> or <:cair:364048663518904327>.");
    }
    if (message.content === prefix + "Stormcauser") {
         message.channel.send("Stormcauser  <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:55  \nST+60 / HP-30");
    }
    if (message.content === prefix + "stormcauser") {
         message.channel.send("Stormcauser  <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:55  \nST+60 / HP-30");
    }
    if (message.content.startsWith(prefix + "Sword of Pluck")) {
         message.channel.send("Sword of Pluck  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:40  \nST+40 / Critical Hit: When equipped creature has a Rarity of <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "SwordofPluck")) {
         message.channel.send("Sword of Pluck  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:40  \nST+40 / Critical Hit: When equipped creature has a Rarity of <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "sword of pluck")) {
         message.channel.send("Sword of Pluck  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:40  \nST+40 / Critical Hit: When equipped creature has a Rarity of <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "swordofpluck")) {
         message.channel.send("Sword of Pluck  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:40  \nST+40 / Critical Hit: When equipped creature has a Rarity of <:crarityn:364048663661772800>.");
    }
    if (message.content.startsWith(prefix + "Tearing Halo")) {
         message.channel.send("Tearing Halo  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:60  \nScroll Attack: ST=30 / Scroll Critical Hit: Unless equipped creature is <:cneutral:364043997825597440> / Immune to Destroy Item and Steal Item effects.");
    }
    if (message.content.startsWith(prefix + "TearingHalo")) {
         message.channel.send("Tearing Halo  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:60  \nScroll Attack: ST=30 / Scroll Critical Hit: Unless equipped creature is <:cneutral:364043997825597440> / Immune to Destroy Item and Steal Item effects.");
    }
    if (message.content.startsWith(prefix + "tearing halo")) {
         message.channel.send("Tearing Halo  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:60  \nScroll Attack: ST=30 / Scroll Critical Hit: Unless equipped creature is <:cneutral:364043997825597440> / Immune to Destroy Item and Steal Item effects.");
    }
    if (message.content.startsWith(prefix + "tearinghalo")) {
         message.channel.send("Tearing Halo  <:craritys:364048663351132162> <:cscroll:364048663691001876> - G:60  \nScroll Attack: ST=30 / Scroll Critical Hit: Unless equipped creature is <:cneutral:364043997825597440> / Immune to Destroy Item and Steal Item effects.");
    }
    if (message.content.startsWith(prefix + "Tombstone")) {
         message.channel.send("Tombstone  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:0  \nImmune to Destroy Item and Steal Item effects. / Upon Defeat: User draws cards until their hand contains 6 cards.");
    }
    if (message.content.startsWith(prefix + "tombstone")) {
         message.channel.send("Tombstone  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:0  \nImmune to Destroy Item and Steal Item effects. / Upon Defeat: User draws cards until their hand contains 6 cards.");
    }
    if (message.content.startsWith(prefix + "Tonfa")) {
         message.channel.send("Tonfa  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:30  \nAttacks Twice.");
    }
    if (message.content.startsWith(prefix + "tonfa")) {
         message.channel.send("Tonfa  <:craritys:364048663351132162> <:cweapon:364048663527424002> - G:30  \nAttacks Twice.");
    }
    if (message.content.startsWith(prefix + "Topaz Amulet")) {
         message.channel.send("Topaz Amulet  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:50  \nInstant Death: 60% against <:cfire:364048663355588609> and <:cair:364048663518904327> creatures. / Neutralizes: <:cfire:364048663355588609> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "TopazAmulet")) {
         message.channel.send("Topaz Amulet  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:50  \nInstant Death: 60% against <:cfire:364048663355588609> and <:cair:364048663518904327> creatures. / Neutralizes: <:cfire:364048663355588609> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "topaz amulet")) {
         message.channel.send("Topaz Amulet  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:50  \nInstant Death: 60% against <:cfire:364048663355588609> and <:cair:364048663518904327> creatures. / Neutralizes: <:cfire:364048663355588609> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "topazamulet")) {
         message.channel.send("Topaz Amulet  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:50  \nInstant Death: 60% against <:cfire:364048663355588609> and <:cair:364048663518904327> creatures. / Neutralizes: <:cfire:364048663355588609> <:cair:364048663518904327>");
    }
    if (message.content.startsWith(prefix + "Trident")) {
         message.channel.send("Trident  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:50  \nST+40 / HP+20");
    }
    if (message.content.startsWith(prefix + "trident")) {
         message.channel.send("Trident  <:crarityn:364048663661772800> <:cweapon:364048663527424002> - G:50  \nST+40 / HP+20");
    }
    if (message.content.startsWith(prefix + "Turquoise Amulet")) {
         message.channel.send("Turquoise Amulet  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:50  \nInstant Death: 60% against <:cwater:364048663447601154> and <:cearth:364048663582081034> creatures. / Neutralizes: <:cwater:364048663447601154> <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "TurquoiseAmulet")) {
         message.channel.send("Turquoise Amulet  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:50  \nInstant Death: 60% against <:cwater:364048663447601154> and <:cearth:364048663582081034> creatures. / Neutralizes: <:cwater:364048663447601154> <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "turquoise amulet")) {
         message.channel.send("Turquoise Amulet  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:50  \nInstant Death: 60% against <:cwater:364048663447601154> and <:cearth:364048663582081034> creatures. / Neutralizes: <:cwater:364048663447601154> <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "turquoiseamulet")) {
         message.channel.send("Turquoise Amulet  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:50  \nInstant Death: 60% against <:cwater:364048663447601154> and <:cearth:364048663582081034> creatures. / Neutralizes: <:cwater:364048663447601154> <:cearth:364048663582081034>");
    }
    if (message.content.startsWith(prefix + "Twin Spike")) {
         message.channel.send("Twin Spike  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30  \nST+20 / Attack Bonus: Transforms opponent into same creature as equipped creature.");
    }
    if (message.content.startsWith(prefix + "TwinSpike")) {
         message.channel.send("Twin Spike  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30  \nST+20 / Attack Bonus: Transforms opponent into same creature as equipped creature.");
    }
    if (message.content.startsWith(prefix + "twin spike")) {
         message.channel.send("Twin Spike  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30  \nST+20 / Attack Bonus: Transforms opponent into same creature as equipped creature.");
    }
    if (message.content.startsWith(prefix + "twinspike")) {
         message.channel.send("Twin Spike  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:30  \nST+20 / Attack Bonus: Transforms opponent into same creature as equipped creature.");
    }
    if (message.content.startsWith(prefix + "Vorpal Sword")) {
         message.channel.send("Vorpal Sword  <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:60  \nST+30 / Critical Hit: Creatures with MHP of 40 and up.");
    }
    if (message.content.startsWith(prefix + "VorpalSword")) {
         message.channel.send("Vorpal Sword  <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:60  \nST+30 / Critical Hit: Creatures with MHP of 40 and up.");
    }
    if (message.content.startsWith(prefix + "vorpal sword")) {
         message.channel.send("Vorpal Sword  <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:60  \nST+30 / Critical Hit: Creatures with MHP of 40 and up.");
    }
    if (message.content.startsWith(prefix + "vorpalsword")) {
         message.channel.send("Vorpal Sword  <:crarityr:364045147085864960> <:cweapon:364048663527424002> - G:60  \nST+30 / Critical Hit: Creatures with MHP of 40 and up.");
    }
    if (message.content.startsWith(prefix + "Warlock's Disk")) {
         message.channel.send("Warlock\'s Disk  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:110  \nIn Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "Warlock'sDisk")) {
         message.channel.send("Warlock\'s Disk  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:110  \nIn Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "WarlocksDisk")) {
         message.channel.send("Warlock\'s Disk  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:110  \nIn Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "warlock's disk")) {
         message.channel.send("Warlock\'s Disk  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:110  \nIn Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "warlock'sdisk")) {
         message.channel.send("Warlock\'s Disk  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:110  \nIn Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "warlocksdisk")) {
         message.channel.send("Warlock\'s Disk  <:crarityr:364045147085864960> <:ctool:364048663762173953> - G:110  \nIn Battle: Disables all effects and abilities. (Activates first.)");
    }
    if (message.content.startsWith(prefix + "Wonder Charm")) {
         message.channel.send("Wonder Charm  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70  \nNeutralizes: 80% of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "WonderCharm")) {
         message.channel.send("Wonder Charm  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70  \nNeutralizes: 80% of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "wonder charm")) {
         message.channel.send("Wonder Charm  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70  \nNeutralizes: 80% of damage received from Normal Attacks.");
    }
    if (message.content.startsWith(prefix + "wondercharm")) {
         message.channel.send("Wonder Charm  <:craritys:364048663351132162> <:ctool:364048663762173953> - G:70  \nNeutralizes: 80% of damage received from Normal Attacks.");
    }
  //SPELLS GO HERE
  if (message.content.startsWith(prefix + "Air Shift")) {
       message.channel.send("Air Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "AirShift")) {
         message.channel.send("Air Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "air shift")) {
         message.channel.send("Air Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "airshift")) {
         message.channel.send("Air Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cair:364048663518904327> land.");
    }
    if (message.content.startsWith(prefix + "Alarm")) {
         message.channel.send("Alarm <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:70 \nRemoves Fatigued from all creatures owned by the user.");
    }
    if (message.content.startsWith(prefix + "alarm")) {
         message.channel.send("Alarm <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:70 \nRemoves Fatigued from all creatures owned by the user.");
    }
    if (message.content.startsWith(prefix + "Assemble Cards")) {
         message.channel.send("Assemble Cards <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nHidden / User gains 500G if their hand contains at least one creature of each element. ( <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327> ) / If not, user draws 2 cards.");
    }
    if (message.content.startsWith(prefix + "AssembleCards")) {
         message.channel.send("Assemble Cards <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nHidden / User gains 500G if their hand contains at least one creature of each element. ( <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327> ) / If not, user draws 2 cards.");
    }
    if (message.content.startsWith(prefix + "assemble cards")) {
         message.channel.send("Assemble Cards <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nHidden / User gains 500G if their hand contains at least one creature of each element. ( <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327> ) / If not, user draws 2 cards.");
    }
    if (message.content.startsWith(prefix + "assemblecCards")) {
         message.channel.send("Assemble Cards <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nHidden / User gains 500G if their hand contains at least one creature of each element. ( <:cfire:364048663355588609> <:cwater:364048663447601154> <:cearth:364048663582081034> <:cair:364048663518904327> ) / If not, user draws 2 cards.");
    }
    if (message.content.startsWith(prefix + "Asteroid")) {
         message.channel.send("Asteroid <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100+ <:ccard:364048663426760705> \nLowers target territory\'s level by 1. / Synthesis: Asteroid (Changes effect to Target territory\'s level becomes 1.");
    }
    if (message.content.startsWith(prefix + "asteroid")) {
         message.channel.send("Asteroid <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100+ <:ccard:364048663426760705> \nLowers target territory\'s level by 1. / Synthesis: Asteroid (Changes effect to Target territory\'s level becomes 1.");
    }
    if (message.content.startsWith(prefix + "Barrier")) {
         message.channel.send("Barrier <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Anti-Spell <:csenchant:364048663464378391> to target Cepter. (For 5 rounds, target Cepter cannot be chosen as the target of a spell.)");
    }
    if (message.content.startsWith(prefix + "barrier")) {
         message.channel.send("Barrier <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Anti-Spell <:csenchant:364048663464378391> to target Cepter. (For 5 rounds, target Cepter cannot be chosen as the target of a spell.)");
    }
    if (message.content.startsWith(prefix + "Binding Mist")) {
         message.channel.send("Binding Mist <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Paralysis <:csenchant:364048663464378391> to target creature. (Creatures cannot attack or use items and their abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "BindingMist")) {
         message.channel.send("Binding Mist <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Paralysis <:csenchant:364048663464378391> to target creature. (Creatures cannot attack or use items and their abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "binding mist")) {
         message.channel.send("Binding Mist <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Paralysis <:csenchant:364048663464378391> to target creature. (Creatures cannot attack or use items and their abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "bindingmist")) {
         message.channel.send("Binding Mist <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Paralysis <:csenchant:364048663464378391> to target creature. (Creatures cannot attack or use items and their abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "Blackout")) {
         message.channel.send("Blackout <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:40 \nAdds Sleep <:csenchant:364048663464378391> to target enemy Cepter. (For 2 rounds, target enemy Cepter cannot claim tolls.)");
    }
    if (message.content.startsWith(prefix + "blackout")) {
         message.channel.send("Blackout <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:40 \nAdds Sleep <:csenchant:364048663464378391> to target enemy Cepter. (For 2 rounds, target enemy Cepter cannot claim tolls.)");
    }
    if (message.content.startsWith(prefix + "Blast Trap")) {
         message.channel.send("Blast Trap <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:30 \nAdds Explosion Trap <:csenchant:364048663464378391> to target creature. (Next time a Cepter stops here, they lose 40% of their Current Magic, and HP-20 to the creature on this territory.)");
    }
    if (message.content.startsWith(prefix + "BlastTrap")) {
         message.channel.send("Blast Trap <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:30 \nAdds Explosion Trap <:csenchant:364048663464378391> to target creature. (Next time a Cepter stops here, they lose 40% of their Current Magic, and HP-20 to the creature on this territory.)");
    }
    if (message.content.startsWith(prefix + "blast trap")) {
         message.channel.send("Blast Trap <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:30 \nAdds Explosion Trap <:csenchant:364048663464378391> to target creature. (Next time a Cepter stops here, they lose 40% of their Current Magic, and HP-20 to the creature on this territory.)");
    }
    if (message.content.startsWith(prefix + "blasttrap")) {
         message.channel.send("Blast Trap <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:30 \nAdds Explosion Trap <:csenchant:364048663464378391> to target creature. (Next time a Cepter stops here, they lose 40% of their Current Magic, and HP-20 to the creature on this territory.)");
    }
    if (message.content.startsWith(prefix + "Blaze Splash")) {
         message.channel.send("Blaze Splash <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nHP-30 to target <:cfire:364048663355588609> or <:cwater:364048663447601154> Creature.");
    }
    if (message.content.startsWith(prefix + "BlazeSplash")) {
         message.channel.send("Blaze Splash <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nHP-30 to target <:cfire:364048663355588609> or <:cwater:364048663447601154> Creature.");
    }
    if (message.content.startsWith(prefix + "blaze splash")) {
         message.channel.send("Blaze Splash <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nHP-30 to target <:cfire:364048663355588609> or <:cwater:364048663447601154> Creature.");
    }
    if (message.content.startsWith(prefix + "blazesplash")) {
         message.channel.send("Blaze Splash <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nHP-30 to target <:cfire:364048663355588609> or <:cwater:364048663447601154> Creature.");
    }
    if (message.content.startsWith(prefix + "Bounty Hunt")) {
         message.channel.send("Bounty Hunt <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:50 \nAdds Bounty <:csenchant:364048663464378391> to target creature. (Can\'t be moved or exchanged by Territory Command. If killed with a weapon, the Cepter that killed it gets 300G.)");
    }
    if (message.content.startsWith(prefix + "BountyHunt")) {
         message.channel.send("Bounty Hunt <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:50 \nAdds Bounty <:csenchant:364048663464378391> to target creature. (Can\'t be moved or exchanged by Territory Command. If killed with a weapon, the Cepter that killed it gets 300G.)");
    }
    if (message.content.startsWith(prefix + "bounty hunt")) {
         message.channel.send("Bounty Hunt <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:50 \nAdds Bounty <:csenchant:364048663464378391> to target creature. (Can\'t be moved or exchanged by Territory Command. If killed with a weapon, the Cepter that killed it gets 300G.)");
    }
    if (message.content.startsWith(prefix + "bountyhunt")) {
         message.channel.send("Bounty Hunt <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:50 \nAdds Bounty <:csenchant:364048663464378391> to target creature. (Can\'t be moved or exchanged by Territory Command. If killed with a weapon, the Cepter that killed it gets 300G.)");
    }
    if (message.content.startsWith(prefix + "Bright World")) {
         message.channel.send("Bright World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds No Conditions <:csenchant:364048663464378391> to the world. (For 6 rounds, all conditions and all costs besides magic are ignored when placing a creature.)");
    }
    if (message.content.startsWith(prefix + "BrightWorld")) {
         message.channel.send("Bright World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds No Conditions <:csenchant:364048663464378391> to the world. (For 6 rounds, all conditions and all costs besides magic are ignored when placing a creature.)");
    }
    if (message.content.startsWith(prefix + "bright world")) {
         message.channel.send("Bright World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds No Conditions <:csenchant:364048663464378391> to the world. (For 6 rounds, all conditions and all costs besides magic are ignored when placing a creature.)");
    }
    if (message.content.startsWith(prefix + "brightworld")) {
         message.channel.send("Bright World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds No Conditions <:csenchant:364048663464378391> to the world. (For 6 rounds, all conditions and all costs besides magic are ignored when placing a creature.)");
    }
    if (message.content.startsWith(prefix + "Burning Hail")) {
         message.channel.send("Burning Hail <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHP-20 to all <:cwater:364048663447601154> and <:cair:364048663518904327> creatures.");
    }
    if (message.content.startsWith(prefix + "BurningHail")) {
         message.channel.send("Burning Hail <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHP-20 to all <:cwater:364048663447601154> and <:cair:364048663518904327> creatures.");
    }
    if (message.content.startsWith(prefix + "burning hail")) {
         message.channel.send("Burning Hail <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHP-20 to all <:cwater:364048663447601154> and <:cair:364048663518904327> creatures.");
    }
    if (message.content.startsWith(prefix + "burninghail")) {
         message.channel.send("Burning Hail <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHP-20 to all <:cwater:364048663447601154> and <:cair:364048663518904327> creatures.");
    }
    if (message.content.startsWith(prefix + "Chaos Panic")) {
         message.channel.send("Chaos Panic <:craritys:364048663351132162> <:cmenchant:364048663447601153> - G:60 \nAdds Reverse Movement <:csenchant:364048663464378391> to all Cepters. (On the next turn, all Cepters will move backwards.)");
    }
    if (message.content.startsWith(prefix + "ChaosPanic")) {
         message.channel.send("Chaos Panic <:craritys:364048663351132162> <:cmenchant:364048663447601153> - G:60 \nAdds Reverse Movement <:csenchant:364048663464378391> to all Cepters. (On the next turn, all Cepters will move backwards.)");
    }
    if (message.content.startsWith(prefix + "chaos panic")) {
         message.channel.send("Chaos Panic <:craritys:364048663351132162> <:cmenchant:364048663447601153> - G:60 \nAdds Reverse Movement <:csenchant:364048663464378391> to all Cepters. (On the next turn, all Cepters will move backwards.)");
    }
    if (message.content.startsWith(prefix + "chaospanic")) {
         message.channel.send("Chaos Panic <:craritys:364048663351132162> <:cmenchant:364048663447601153> - G:60 \nAdds Reverse Movement <:csenchant:364048663464378391> to all Cepters. (On the next turn, all Cepters will move backwards.)");
    }
    if (message.content.startsWith(prefix + "Charging Step")) {
         message.channel.send("Charging Step <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:20 \nAdds Magic Steps <:csenchant:364048663464378391> to target Cepter. (Makes dice roll 2-4 for two rounds and user gains 50G every time they roll the dice.)");
    }
    if (message.content.startsWith(prefix + "ChargingStep")) {
         message.channel.send("Charging Step <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:20 \nAdds Magic Steps <:csenchant:364048663464378391> to target Cepter. (Makes dice roll 2-4 for two rounds and user gains 50G every time they roll the dice.)");
    }
    if (message.content.startsWith(prefix + "charging step")) {
         message.channel.send("Charging Step <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:20 \nAdds Magic Steps <:csenchant:364048663464378391> to target Cepter. (Makes dice roll 2-4 for two rounds and user gains 50G every time they roll the dice.)");
    }
    if (message.content.startsWith(prefix + "chargingstep")) {
         message.channel.send("Charging Step <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:20 \nAdds Magic Steps <:csenchant:364048663464378391> to target Cepter. (Makes dice roll 2-4 for two rounds and user gains 50G every time they roll the dice.)");
    }
    if (message.content.startsWith(prefix + "Chariot")) {
         message.channel.send("Chariot <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nMoves user\'s target creature 2 spaces. / Recycles to Book.");
    }
    if (message.content.startsWith(prefix + "chariot")) {
         message.channel.send("Chariot <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nMoves user\'s target creature 2 spaces. / Recycles to Book.");
    }
    if (message.content.startsWith(prefix + "Clairvoyance")) {
         message.channel.send("Clairvoyance <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:20 \nUser obtains magic equal to 1/2 the value of all of the Spell Cards in target Cepter\'s hand. / User views the Hidden cards in target Cepter\'s hand.");
    }
    if (message.content.startsWith(prefix + "clairvoyance")) {
         message.channel.send("Clairvoyance <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:20 \nUser obtains magic equal to 1/2 the value of all of the Spell Cards in target Cepter\'s hand. / User views the Hidden cards in target Cepter\'s hand.");
    }
    if (message.content.startsWith(prefix + "Cluster Burst")) {
         message.channel.send("Cluster Burst <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:90 \nHP-20 to all creatures of the most numerous element in play. (Including <:cneutral:364043997825597440>.)");
    }
    if (message.content.startsWith(prefix + "ClusterBurst")) {
         message.channel.send("Cluster Burst <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:90 \nHP-20 to all creatures of the most numerous element in play. (Including <:cneutral:364043997825597440>.)");
    }
    if (message.content.startsWith(prefix + "cluster burst")) {
         message.channel.send("Cluster Burst <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:90 \nHP-20 to all creatures of the most numerous element in play. (Including <:cneutral:364043997825597440>.)");
    }
    if (message.content.startsWith(prefix + "clusterburst")) {
         message.channel.send("Cluster Burst <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:90 \nHP-20 to all creatures of the most numerous element in play. (Including <:cneutral:364043997825597440>.)");
    }
    if (message.content.startsWith(prefix + "Dark World")) {
         message.channel.send("Dark World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Anti-Spell <:csenchant:364048663464378391> to the world. (For 6 rounds, all creatures with an <:csenchant:364048663464378391> cannot be targeted by spells.)");
    }
    if (message.content.startsWith(prefix + "DarkWorld")) {
         message.channel.send("Dark World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Anti-Spell <:csenchant:364048663464378391> to the world. (For 6 rounds, all creatures with an <:csenchant:364048663464378391> cannot be targeted by spells.)");
    }
    if (message.content.startsWith(prefix + "dark world")) {
         message.channel.send("Dark World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Anti-Spell <:csenchant:364048663464378391> to the world. (For 6 rounds, all creatures with an <:csenchant:364048663464378391> cannot be targeted by spells.)");
    }
    if (message.content.startsWith(prefix + "darkworld")) {
         message.channel.send("Dark World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Anti-Spell <:csenchant:364048663464378391> to the world. (For 6 rounds, all creatures with an <:csenchant:364048663464378391> cannot be targeted by spells.)");
    }
    if (message.content.startsWith(prefix + "Debility")) {
         message.channel.send("Debility <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40+ <:ccard:364048663426760705> \nST=0 to target creature. / Synthesis: Spells (MHP-20 to target creature.) User draws a card.");
    }
    if (message.content.startsWith(prefix + "debility")) {
         message.channel.send("Debility <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40+ <:ccard:364048663426760705> \nST=0 to target creature. / Synthesis: Spells (MHP-20 to target creature.) User draws a card.");
    }
    if (message.content.startsWith(prefix + "Disaster")) {
         message.channel.send("Disaster <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:120+ <:ccard:364048663426760705> \nHP-30 to all Fatigued creatures with MHP of 50 or more.");
    }
    if (message.content.startsWith(prefix + "disaster")) {
         message.channel.send("Disaster <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:120+ <:ccard:364048663426760705> \nHP-30 to all Fatigued creatures with MHP of 50 or more.");
    }
    if (message.content.startsWith(prefix + "Discord")) {
         message.channel.send("Discord <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:80+ <:ccard:364048663426760705> \nTransforms all of the most numerous kind of creature on the map into Goblins.");
    }
    if (message.content.startsWith(prefix + "discord")) {
         message.channel.send("Discord <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:80+ <:ccard:364048663426760705> \nTransforms all of the most numerous kind of creature on the map into Goblins.");
    }
    if (message.content.startsWith(prefix + "Disease")) {
         message.channel.send("Disease <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Ability -20 <:csenchant:364048663464378391> to target creature. (In battle, this creature is inflicted with ST & HP-20.) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "disease")) {
         message.channel.send("Disease <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Ability -20 <:csenchant:364048663464378391> to target creature. (In battle, this creature is inflicted with ST & HP-20.) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "Diselement")) {
         message.channel.send("Diselement <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:20+ <:ccard:364048663426760705> \nAdds Nullify Land Effect <:csenchant:364048663464378391> to target creature (No land effect). / Synthesis: Creatures (Changes target to all Fatigued creatures.)) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "diselement")) {
         message.channel.send("Diselement <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:20+ <:ccard:364048663426760705> \nAdds Nullify Land Effect <:csenchant:364048663464378391> to target creature (No land effect). / Synthesis: Creatures (Changes target to all Fatigued creatures.)) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "Dominant Growth")) {
         message.channel.send("Dominant Growth <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:50 \nAdds Growth Command <:csenchant:364048663464378391> to target creature. (MHP+20 when Terrain Change or Land Level Up are used on this creature\'s territory (max. 100).)");
    }
    if (message.content.startsWith(prefix + "DominantGrowth")) {
         message.channel.send("Dominant Growth <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:50 \nAdds Growth Command <:csenchant:364048663464378391> to target creature. (MHP+20 when Terrain Change or Land Level Up are used on this creature\'s territory (max. 100).)");
    }
    if (message.content.startsWith(prefix + "dominant growth")) {
         message.channel.send("Dominant Growth <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:50 \nAdds Growth Command <:csenchant:364048663464378391> to target creature. (MHP+20 when Terrain Change or Land Level Up are used on this creature\'s territory (max. 100).)");
    }
    if (message.content.startsWith(prefix + "dominantgrowth")) {
         message.channel.send("Dominant Growth <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:50 \nAdds Growth Command <:csenchant:364048663464378391> to target creature. (MHP+20 when Terrain Change or Land Level Up are used on this creature\'s territory (max. 100).)");
    }
    if (message.content.startsWith(prefix + "Drain Magic")) {
         message.channel.send("Drain Magic <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nUser steals 30% of target enemy Cepter\'s Current Magic.");
    }
    if (message.content.startsWith(prefix + "DrainMagic")) {
         message.channel.send("Drain Magic <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nUser steals 30% of target enemy Cepter\'s Current Magic.");
    }
    if (message.content.startsWith(prefix + "drain magic")) {
         message.channel.send("Drain Magic <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nUser steals 30% of target enemy Cepter\'s Current Magic.");
    }
    if (message.content.startsWith(prefix + "drainmagic")) {
         message.channel.send("Drain Magic <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nUser steals 30% of target enemy Cepter\'s Current Magic.");
    }
    if (message.content.startsWith(prefix + "Dream Terrain")) {
         message.channel.send("Dream Terrain <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Shared Toll Fees <:csenchant:364048663464378391> to user. (For 5 rounds, user gains 50% of tolls collected by other Cepters.)");
    }
    if (message.content.startsWith(prefix + "DreamTerrain")) {
         message.channel.send("Dream Terrain <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Shared Toll Fees <:csenchant:364048663464378391> to user. (For 5 rounds, user gains 50% of tolls collected by other Cepters.)");
    }
    if (message.content.startsWith(prefix + "dream terrain")) {
         message.channel.send("Dream Terrain <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Shared Toll Fees <:csenchant:364048663464378391> to user. (For 5 rounds, user gains 50% of tolls collected by other Cepters.)");
    }
    if (message.content.startsWith(prefix + "dreamterrain")) {
         message.channel.send("Dream Terrain <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Shared Toll Fees <:csenchant:364048663464378391> to user. (For 5 rounds, user gains 50% of tolls collected by other Cepters.)");
    }
    if (message.content.startsWith(prefix + "Earth Shift")) {
         message.channel.send("Earth Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "EarthShift")) {
         message.channel.send("Earth Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "earth shift")) {
         message.channel.send("Earth Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "earthshift")) {
         message.channel.send("Earth Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cearth:364048663582081034> land.");
    }
    if (message.content.startsWith(prefix + "Elemental Wrath")) {
         message.channel.send("Elemental Wrath <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:70 \nHP-20 to all creatures whose element doesn\'t match the land they\'re on.");
    }
    if (message.content.startsWith(prefix + "ElementalWrath")) {
         message.channel.send("Elemental Wrath <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:70 \nHP-20 to all creatures whose element doesn\'t match the land they\'re on.");
    }
    if (message.content.startsWith(prefix + "elemental wrath")) {
         message.channel.send("Elemental Wrath <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:70 \nHP-20 to all creatures whose element doesn\'t match the land they\'re on.");
    }
    if (message.content.startsWith(prefix + "elementalwrath")) {
         message.channel.send("Elemental Wrath <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:70 \nHP-20 to all creatures whose element doesn\'t match the land they\'re on.");
    }
    if (message.content.startsWith(prefix + "Energy Field")) {
         message.channel.send("Energy Field <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:60 \nAdds Magic Barrier <:csenchant:364048663464378391> to target creature. (Gain the following abilities: Neutralizes: Normal Attacks and Battle End: Opponent steals 100G.)");
    }
    if (message.content.startsWith(prefix + "EnergyField")) {
         message.channel.send("Energy Field <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:60 \nAdds Magic Barrier <:csenchant:364048663464378391> to target creature. (Gain the following abilities: Neutralizes: Normal Attacks and Battle End: Opponent steals 100G.)");
    }
    if (message.content.startsWith(prefix + "energy field")) {
         message.channel.send("Energy Field <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:60 \nAdds Magic Barrier <:csenchant:364048663464378391> to target creature. (Gain the following abilities: Neutralizes: Normal Attacks and Battle End: Opponent steals 100G.)");
    }
    if (message.content.startsWith(prefix + "energyfield")) {
         message.channel.send("Energy Field <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:60 \nAdds Magic Barrier <:csenchant:364048663464378391> to target creature. (Gain the following abilities: Neutralizes: Normal Attacks and Battle End: Opponent steals 100G.)");
    }
    if (message.content.startsWith(prefix + "Erosion")) {
         message.channel.send("Erosion <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:40+ <:ccard:364048663426760705> \nIf target Cepter has 2 or more of the same card in their hand, those cards are destroyed. / Synthesis: Spells (Changes target to all Cepters.)");
    }
    if (message.content.startsWith(prefix + "erosion")) {
         message.channel.send("Erosion <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:40+ <:ccard:364048663426760705> \nIf target Cepter has 2 or more of the same card in their hand, those cards are destroyed. / Synthesis: Spells (Changes target to all Cepters.)");
    }
    if (message.content.startsWith(prefix + "Escape")) {
         message.channel.send("Escape <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nTransports user to the nearest vacant land. (User cannot roll the dice this turn.)");
    }
    if (message.content.startsWith(prefix + "escape")) {
         message.channel.send("Escape <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nTransports user to the nearest vacant land. (User cannot roll the dice this turn.)");
    }
    if (message.content.startsWith(prefix + "Exchange")) {
         message.channel.send("Exchange \n Strange <:csinstant:364048663447863298> - G:60 \nExchanges target creature with another creature from its owner\'s hand.");
    }
    if (message.content.startsWith(prefix + "exchange")) {
         message.channel.send("Exchange \n Strange <:csinstant:364048663447863298> - G:60 \nExchanges target creature with another creature from its owner\'s hand.");
    }
    if (message.content.startsWith(prefix + "Exile")) {
         message.channel.send("Exile <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nReturns 1 creature with <:csenchant:364048663464378391> and no summoning conditions to its owner\'s hand.");
    }
    if (message.content.startsWith(prefix + "exile")) {
         message.channel.send("Exile <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nReturns 1 creature with <:csenchant:364048663464378391> and no summoning conditions to its owner\'s hand.");
    }
    if (message.content.startsWith(prefix + "Fat Body")) {
         message.channel.send("Fat Body <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nMHP+20 & ST-20 to target creature. (up to a max of 100 MHP).");
    }
    if (message.content.startsWith(prefix + "FatBody")) {
         message.channel.send("Fat Body <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nMHP+20 & ST-20 to target creature. (up to a max of 100 MHP).");
    }
    if (message.content.startsWith(prefix + "fat body")) {
         message.channel.send("Fat Body <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nMHP+20 & ST-20 to target creature. (up to a max of 100 MHP).");
    }
    if (message.content.startsWith(prefix + "fatbody")) {
         message.channel.send("Fat Body <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nMHP+20 & ST-20 to target creature. (up to a max of 100 MHP).");
    }
    if (message.content.startsWith(prefix + "Fear")) {
         message.channel.send("Fear <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100 \nReturns target Cepter\'s creature with the lowest MHP to their hand.");
    }
    if (message.content.startsWith(prefix + "fear")) {
         message.channel.send("Fear <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100 \nReturns target Cepter\'s creature with the lowest MHP to their hand.");
    }
    if (message.content.startsWith(prefix + "Fire Shift")) {
         message.channel.send("Fire Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "FireShift")) {
         message.channel.send("Fire Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "fire shift")) {
         message.channel.send("Fire Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "fireshift")) {
         message.channel.send("Fire Shift <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:100 \nChanges target territory belonging to user into a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "Flatland")) {
         message.channel.send("Flatland <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:100 \nHidden / If user has five or more level 2 territories, raise each land\'s level by 1. / If not, Recycles to book.");
    }
    if (message.content.startsWith(prefix + "flatland")) {
         message.channel.send("Flatland <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:100 \nHidden / If user has five or more level 2 territories, raise each land\'s level by 1. / If not, Recycles to book.");
    }
    if (message.content.startsWith(prefix + "Fluxion")) {
         message.channel.send("Fluxion <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100 \nHidden / User steals 30% of target enemy Cepter\'s magic if user possesses less Current Magic than opponent.");
    }
    if (message.content.startsWith(prefix + "fluxion")) {
         message.channel.send("Fluxion <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100 \nHidden / User steals 30% of target enemy Cepter\'s magic if user possesses less Current Magic than opponent.");
    }
    if (message.content.startsWith(prefix + "Fly")) {
         message.channel.send("Fly <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nUser uses 3 dice for their next roll.");
    }
    if (message.content.startsWith(prefix + "fly")) {
         message.channel.send("Fly <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nUser uses 3 dice for their next roll.");
    }
    if (message.content.startsWith(prefix + "Foresight")) {
         message.channel.send("Foresight <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:30 \nUser views the top 6 cards in their book, then selects 1 to place in their hand.");
    }
    if (message.content.startsWith(prefix + "foresight")) {
         message.channel.send("Foresight <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:30 \nUser views the top 6 cards in their book, then selects 1 to place in their hand.");
    }
    if (message.content.startsWith(prefix + "Form Portal")) {
         message.channel.send("Form Portal <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:140 \nTeleports user to the nearest gate. (User cannot roll the dice this turn.)");
    }
    if (message.content.startsWith(prefix + "FormPortal")) {
         message.channel.send("Form Portal <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:140 \nTeleports user to the nearest gate. (User cannot roll the dice this turn.)");
    }
    if (message.content.startsWith(prefix + "form portal")) {
         message.channel.send("Form Portal <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:140 \nTeleports user to the nearest gate. (User cannot roll the dice this turn.)");
    }
    if (message.content.startsWith(prefix + "formportal")) {
         message.channel.send("Form Portal <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:140 \nTeleports user to the nearest gate. (User cannot roll the dice this turn.)");
    }
    if (message.content.startsWith(prefix + "Freeze Cyclone")) {
         message.channel.send("Freeze Cyclone <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHP-20 to all <:cfire:364048663355588609> and <:cearth:364048663582081034> creatures.");
    }
    if (message.content.startsWith(prefix + "FreezeCyclone")) {
         message.channel.send("Freeze Cyclone <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHP-20 to all <:cfire:364048663355588609> and <:cearth:364048663582081034> creatures.");
    }
    if (message.content.startsWith(prefix + "freeze cyclone")) {
         message.channel.send("Freeze Cyclone <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHP-20 to all <:cfire:364048663355588609> and <:cearth:364048663582081034> creatures.");
    }
    if (message.content.startsWith(prefix + "freezecyclone")) {
         message.channel.send("Freeze Cyclone <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHP-20 to all <:cfire:364048663355588609> and <:cearth:364048663582081034> creatures.");
    }
    if (message.content.startsWith(prefix + "Gift")) {
         message.channel.send("Gift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nUser gains (User\'s rank x50)G. / User draws a number of cards equal to their rank from their book.");
    }
    if (message.content.startsWith(prefix + "gift")) {
         message.channel.send("Gift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nUser gains (User\'s rank x50)G. / User draws a number of cards equal to their rank from their book.");
    }
    if (message.content.startsWith(prefix + "Goblin\'s Lair")) {
         message.channel.send("Goblin\'s Lair <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:10+ <:ccard:364048663426760705> \nPlaces Goblin on land occupied by user if it is currently vacant. / Recycles to Hand.");
    }
    if (message.content.startsWith(prefix + "Goblin\'sLair")) {
         message.channel.send("Goblin\'s Lair <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:10+ <:ccard:364048663426760705> \nPlaces Goblin on land occupied by user if it is currently vacant. / Recycles to Hand.");
    }
    if (message.content.startsWith(prefix + "GoblinsLair")) {
         message.channel.send("Goblin\'s Lair <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:10+ <:ccard:364048663426760705> \nPlaces Goblin on land occupied by user if it is currently vacant. / Recycles to Hand.");
    }
    if (message.content.startsWith(prefix + "goblin\'s lair")) {
         message.channel.send("Goblin\'s Lair <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:10+ <:ccard:364048663426760705> \nPlaces Goblin on land occupied by user if it is currently vacant. / Recycles to Hand.");
    }
    if (message.content.startsWith(prefix + "goblins lair")) {
         message.channel.send("Goblin\'s Lair <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:10+ <:ccard:364048663426760705> \nPlaces Goblin on land occupied by user if it is currently vacant. / Recycles to Hand.");
    }
    if (message.content.startsWith(prefix + "goblinslair")) {
         message.channel.send("Goblin\'s Lair <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:10+ <:ccard:364048663426760705> \nPlaces Goblin on land occupied by user if it is currently vacant. / Recycles to Hand.");
    }
    if (message.content.startsWith(prefix + "Greed")) {
         message.channel.send("Greed <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds 1.5x Toll <:csenchant:364048663464378391> to target creature. (This creature\'s toll fees are multiplied by 1.5.) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "greed")) {
         message.channel.send("Greed <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds 1.5x Toll <:csenchant:364048663464378391> to target creature. (This creature\'s toll fees are multiplied by 1.5.) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "Growth Body")) {
         message.channel.send("Growth Body <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nMHP+10 to target creature (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "GrowthBody")) {
         message.channel.send("Growth Body <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nMHP+10 to target creature (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "growth body")) {
         message.channel.send("Growth Body <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nMHP+10 to target creature (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "growthbody")) {
         message.channel.send("Growth Body <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nMHP+10 to target creature (up to a max of 100).");
    }
    if (message.content.startsWith(prefix + "Haste")) {
         message.channel.send("Haste <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:70 \nAdds Dice 6-8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next two dice rolls yield from 6 to 8.)");
    }
    if (message.content.startsWith(prefix + "haste")) {
         message.channel.send("Haste <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:70 \nAdds Dice 6-8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next two dice rolls yield from 6 to 8.)");
    }
    if (message.content.startsWith(prefix + "Holy Banishment")) {
         message.channel.send("Holy Banishment <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:90 \nReturns target creature to its Cepter\'s hand if the creature\'s element differs from the territory it inhabits.)");
    }
    if (message.content.startsWith(prefix + "HolyBanishment")) {
         message.channel.send("Holy Banishment <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:90 \nReturns target creature to its Cepter\'s hand if the creature\'s element differs from the territory it inhabits.)");
    }
    if (message.content.startsWith(prefix + "holy banishment")) {
         message.channel.send("Holy Banishment <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:90 \nReturns target creature to its Cepter\'s hand if the creature\'s element differs from the territory it inhabits.)");
    }
    if (message.content.startsWith(prefix + "holybanishment")) {
         message.channel.send("Holy Banishment <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:90 \nReturns target creature to its Cepter\'s hand if the creature\'s element differs from the territory it inhabits.)");
    }
    if (message.content === prefix + "Holy Word 1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "HolyWord 1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "HolyWord1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "HW 1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "HW1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "holy word 1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "holyWord 1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "holyWord1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "hw 1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "hw1") {
         message.channel.send("Holy Word 1 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 1 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 1.)");
    }
    if (message.content === prefix + "Holy Word 3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "HolyWord 3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "HolyWord3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "HW 3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "HW3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "holy word 3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "holyword 3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "holyword3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "hw 3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "hw3") {
         message.channel.send("Holy Word 3 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Dice 3 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 3.)");
    }
    if (message.content === prefix + "Holy Word 6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "HolyWord 6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "HolyWord6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "HW 6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "HW6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "holy word 6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "holyword 6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "holyword6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "hw 6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "hw6") {
         message.channel.send("Holy Word 6 <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Dice 6 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 6.)");
    }
    if (message.content === prefix + "Holy Word 8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content === prefix + "HolyWord 8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content === prefix + "HolyWord8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content === prefix + "HW 8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content === prefix + "HW8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content === prefix + "holy word 8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content === prefix + "holyword 8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content === prefix + "holyword8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content === prefix + "hw 8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content === prefix + "hw8") {
         message.channel.send("Holy Word 8 <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:80 \nAdds Dice 8 <:csenchant:364048663464378391> to target Cepter. (Target Cepter\'s next dice roll yields a 8.)");
    }
    if (message.content.startsWith(prefix + "Home Ground")) {
         message.channel.send("Home Ground <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHidden / If user has 4 or more placed creatures whose element doesn\'t match the land they\'re on, the lands will change to match the creatures. / If not, Recycles to book.");
    }
    if (message.content.startsWith(prefix + "HomeGround")) {
         message.channel.send("Home Ground <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHidden / If user has 4 or more placed creatures whose element doesn\'t match the land they\'re on, the lands will change to match the creatures. / If not, Recycles to book.");
    }
    if (message.content.startsWith(prefix + "home ground")) {
         message.channel.send("Home Ground <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHidden / If user has 4 or more placed creatures whose element doesn\'t match the land they\'re on, the lands will change to match the creatures. / If not, Recycles to book.");
    }
    if (message.content.startsWith(prefix + "homeground")) {
         message.channel.send("Home Ground <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:100 \nHidden / If user has 4 or more placed creatures whose element doesn\'t match the land they\'re on, the lands will change to match the creatures. / If not, Recycles to book.");
    }
    if (message.content.startsWith(prefix + "Hyperactive")) {
         message.channel.send("Hyperactive <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Vigorous <:csenchant:364048663464378391> to target creature. (For 5 rounds, target creature gains the Vigorous ability.)");
    }
    if (message.content.startsWith(prefix + "hyperactive")) {
         message.channel.send("Hyperactive <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Vigorous <:csenchant:364048663464378391> to target creature. (For 5 rounds, target creature gains the Vigorous ability.)");
    }
    if (message.content.startsWith(prefix + "Immobilize")) {
         message.channel.send("Immobilize <:crarityr:364045147085864960> <:cmenchant:364048663447601153> - G:80 \nAdds Immobilize <:csenchant:364048663464378391> to all creatures. (Cannot be moved by Territory Commands.)");
    }
    if (message.content.startsWith(prefix + "immobilize")) {
         message.channel.send("Immobilize <:crarityr:364045147085864960> <:cmenchant:364048663447601153> - G:80 \nAdds Immobilize <:csenchant:364048663464378391> to all creatures. (Cannot be moved by Territory Commands.)");
    }
    if (message.content.startsWith(prefix + "Incineration")) {
         message.channel.send("Incineration \n Strange <:csinstant:364048663447863298> - G:10 \nUser gains (number of creatures destroyed thus far x20)G, then the number is reset.");
    }
    if (message.content.startsWith(prefix + "incineration")) {
         message.channel.send("Incineration \n Strange <:csinstant:364048663447863298> - G:10 \nUser gains (number of creatures destroyed thus far x20)G, then the number is reset.");
    }
    if (message.content.startsWith(prefix + "Influence")) {
         message.channel.send("Influence <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nChanges target territory into its owner\'s most numerous land element.");
    }
    if (message.content.startsWith(prefix + "influence")) {
         message.channel.send("Influence <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nChanges target territory into its owner\'s most numerous land element.");
    }
    if (message.content.startsWith(prefix + "Insect Swarm")) {
         message.channel.send("Insect Swarm <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:120 \nHP-20 to all creatures that are not at maximum HP.");
    }
    if (message.content.startsWith(prefix + "InsectSwarm")) {
         message.channel.send("Insect Swarm <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:120 \nHP-20 to all creatures that are not at maximum HP.");
    }
    if (message.content.startsWith(prefix + "insect swarm")) {
         message.channel.send("Insect Swarm <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:120 \nHP-20 to all creatures that are not at maximum HP.");
    }
    if (message.content.startsWith(prefix + "insectswarm")) {
         message.channel.send("Insect Swarm <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:120 \nHP-20 to all creatures that are not at maximum HP.");
    }
    if (message.content.startsWith(prefix + "Joint World")) {
         message.channel.send("Joint World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Cross-Element Chains <:csenchant:364048663464378391> to world. (For 6 rounds, <:cfire:364048663355588609> and <:cearth:364048663582081034> territories chain together and <:cwater:364048663447601154> and <:cair:364048663518904327> territories chain together.)");
    }
    if (message.content.startsWith(prefix + "JointWorld")) {
         message.channel.send("Joint World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Cross-Element Chains <:csenchant:364048663464378391> to world. (For 6 rounds, <:cfire:364048663355588609> and <:cearth:364048663582081034> territories chain together and <:cwater:364048663447601154> and <:cair:364048663518904327> territories chain together.)");
    }
    if (message.content.startsWith(prefix + "joint world")) {
         message.channel.send("Joint World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Cross-Element Chains <:csenchant:364048663464378391> to world. (For 6 rounds, <:cfire:364048663355588609> and <:cearth:364048663582081034> territories chain together and <:cwater:364048663447601154> and <:cair:364048663518904327> territories chain together.)");
    }
    if (message.content.startsWith(prefix + "jointworld")) {
         message.channel.send("Joint World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Cross-Element Chains <:csenchant:364048663464378391> to world. (For 6 rounds, <:cfire:364048663355588609> and <:cearth:364048663582081034> territories chain together and <:cwater:364048663447601154> and <:cair:364048663518904327> territories chain together.)");
    }
    if (message.content.startsWith(prefix + "Land Drain")) {
         message.channel.send("Land Drain <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nUser steals (number of target\'s possessed territories x30)G from target enemy Cepter.");
    }
    if (message.content.startsWith(prefix + "LandDrain")) {
         message.channel.send("Land Drain <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nUser steals (number of target\'s possessed territories x30)G from target enemy Cepter.");
    }
    if (message.content.startsWith(prefix + "land drain")) {
         message.channel.send("Land Drain <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nUser steals (number of target\'s possessed territories x30)G from target enemy Cepter.");
    }
    if (message.content.startsWith(prefix + "landdrain")) {
         message.channel.send("Land Drain <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nUser steals (number of target\'s possessed territories x30)G from target enemy Cepter.");
    }
    if (message.content.startsWith(prefix + "Land Transfer")) {
         message.channel.send("Land Transfer <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nReleases target territory from user\'s control and reverts it to magic at 70% of its value.");
    }
    if (message.content.startsWith(prefix + "LandTransfer")) {
         message.channel.send("Land Transfer <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nReleases target territory from user\'s control and reverts it to magic at 70% of its value.");
    }
    if (message.content.startsWith(prefix + "land transfer")) {
         message.channel.send("Land Transfer <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nReleases target territory from user\'s control and reverts it to magic at 70% of its value.");
    }
    if (message.content.startsWith(prefix + "landtransfer")) {
         message.channel.send("Land Transfer <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nReleases target territory from user\'s control and reverts it to magic at 70% of its value.");
    }
    if (message.content.startsWith(prefix + "Life Force")) {
         message.channel.send("Life Force <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:50 \nAdds Life Force <:csenchant:364048663464378391> to target Cepter. (Creature and Item Card\'s cost becomes 0G. When this Cepter uses a spell, that spell is neutralized and this <:csenchant:364048663464378391> vanishes.)");
    }
    if (message.content.startsWith(prefix + "LifeForce")) {
         message.channel.send("Life Force <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:50 \nAdds Life Force <:csenchant:364048663464378391> to target Cepter. (Creature and Item Card\'s cost becomes 0G. When this Cepter uses a spell, that spell is neutralized and this <:csenchant:364048663464378391> vanishes.)");
    }
    if (message.content.startsWith(prefix + "life force")) {
         message.channel.send("Life Force <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:50 \nAdds Life Force <:csenchant:364048663464378391> to target Cepter. (Creature and Item Card\'s cost becomes 0G. When this Cepter uses a spell, that spell is neutralized and this <:csenchant:364048663464378391> vanishes.)");
    }
    if (message.content.startsWith(prefix + "lifeforce")) {
         message.channel.send("Life Force <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:50 \nAdds Life Force <:csenchant:364048663464378391> to target Cepter. (Creature and Item Card\'s cost becomes 0G. When this Cepter uses a spell, that spell is neutralized and this <:csenchant:364048663464378391> vanishes.)");
    }
    if (message.content.startsWith(prefix + "Life Stream")) {
         message.channel.send("Life Stream <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:50 \nFully recovers the HP of all creatures owned by the user.");
    }
    if (message.content.startsWith(prefix + "LifeStream")) {
         message.channel.send("Life Stream <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:50 \nFully recovers the HP of all creatures owned by the user.");
    }
    if (message.content.startsWith(prefix + "life stream")) {
         message.channel.send("Life Stream <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:50 \nFully recovers the HP of all creatures owned by the user.");
    }
    if (message.content.startsWith(prefix + "lifestream")) {
         message.channel.send("Life Stream <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:50 \nFully recovers the HP of all creatures owned by the user.");
    }
    if (message.content.startsWith(prefix + "Liquid Form")) {
         message.channel.send("Liquid Form <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Random Ability Value <:csenchant:364048663464378391> to target creature. (In battle, target creature\'s ST & HP= Random value between 10-70.) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "LiquidForm")) {
         message.channel.send("Liquid Form <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Random Ability Value <:csenchant:364048663464378391> to target creature. (In battle, target creature\'s ST & HP= Random value between 10-70.) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "liquid form")) {
         message.channel.send("Liquid Form <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Random Ability Value <:csenchant:364048663464378391> to target creature. (In battle, target creature\'s ST & HP= Random value between 10-70.) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "liquidform")) {
         message.channel.send("Liquid Form <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:30 \nAdds Random Ability Value <:csenchant:364048663464378391> to target creature. (In battle, target creature\'s ST & HP= Random value between 10-70.) / User draws a card.");
    }
    if (message.content.startsWith(prefix + "Long Line")) {
         message.channel.send("Long Line <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nHidden / If user owns 4 or more territories in a row, user gains 500G. If not, user draws 2 cards.");
    }
    if (message.content.startsWith(prefix + "LongLine")) {
         message.channel.send("Long Line <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nHidden / If user owns 4 or more territories in a row, user gains 500G. If not, user draws 2 cards.");
    }
    if (message.content.startsWith(prefix + "long line")) {
         message.channel.send("Long Line <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nHidden / If user owns 4 or more territories in a row, user gains 500G. If not, user draws 2 cards.");
    }
    if (message.content.startsWith(prefix + "longline")) {
         message.channel.send("Long Line <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nHidden / If user owns 4 or more territories in a row, user gains 500G. If not, user draws 2 cards.");
    }
    if (message.content === prefix + "Magic Bolt") {
         message.channel.send("Magic Bolt <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:50 \nHP-20 to target enemy creature.");
    }
    if (message.content === prefix + "MagicBolt") {
         message.channel.send("Magic Bolt <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:50 \nHP-20 to target enemy creature.");
    }
    if (message.content === prefix + "magic bolt") {
         message.channel.send("Magic Bolt <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:50 \nHP-20 to target enemy creature.");
    }
    if (message.content === prefix + "magicbolt") {
         message.channel.send("Magic Bolt <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:50 \nHP-20 to target enemy creature.");
    }
    if (message.content === prefix + "Magic Shelter") {
         message.channel.send("Magic Shelter <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:70 \nAdds Anti-Spell Wall <:csenchant:364048663464378391> to target creature. (Target creature cannot be targeted by spells and will be treated as if it has the Defensive ability.)");
    }
    if (message.content === prefix + "MagicShelter") {
         message.channel.send("Magic Shelter <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:70 \nAdds Anti-Spell Wall <:csenchant:364048663464378391> to target creature. (Target creature cannot be targeted by spells and will be treated as if it has the Defensive ability.)");
    }
    if (message.content === prefix + "magic shelter") {
         message.channel.send("Magic Shelter <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:70 \nAdds Anti-Spell Wall <:csenchant:364048663464378391> to target creature. (Target creature cannot be targeted by spells and will be treated as if it has the Defensive ability.)");
    }
    if (message.content === prefix + "magicshelter") {
         message.channel.send("Magic Shelter <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:70 \nAdds Anti-Spell Wall <:csenchant:364048663464378391> to target creature. (Target creature cannot be targeted by spells and will be treated as if it has the Defensive ability.)");
    }
    if (message.content.startsWith(prefix + "Magical Leap")) {
         message.channel.send("Magical Leap <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:70 \nTransports user to any nearby territory of user\'s choice within 1 to 4 spaces. User cannot roll the dice this turn.");
    }
    if (message.content.startsWith(prefix + "MagicalLeap")) {
         message.channel.send("Magical Leap <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:70 \nTransports user to any nearby territory of user\'s choice within 1 to 4 spaces. User cannot roll the dice this turn.");
    }
    if (message.content.startsWith(prefix + "magical leap")) {
         message.channel.send("Magical Leap <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:70 \nTransports user to any nearby territory of user\'s choice within 1 to 4 spaces. User cannot roll the dice this turn.");
    }
    if (message.content.startsWith(prefix + "magicalleap")) {
         message.channel.send("Magical Leap <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:70 \nTransports user to any nearby territory of user\'s choice within 1 to 4 spaces. User cannot roll the dice this turn.");
    }
    if (message.content === prefix + "Magma Shift") {
         message.channel.send("Magma Shift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:120 \nChanges target level 3 or lower <:cfire:364048663355588609> territory into a <:cearth:364048663582081034> land, or changes target level 3 or lower <:cearth:364048663582081034> territory into a <:cfire:364048663355588609> land.");
    }
    if (message.content === prefix + "MagmaShift") {
         message.channel.send("Magma Shift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:120 \nChanges target level 3 or lower <:cfire:364048663355588609> territory into a <:cearth:364048663582081034> land, or changes target level 3 or lower <:cearth:364048663582081034> territory into a <:cfire:364048663355588609> land.");
    }
    if (message.content === prefix + "magma shift") {
         message.channel.send("Magma Shift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:120 \nChanges target level 3 or lower <:cfire:364048663355588609> territory into a <:cearth:364048663582081034> land, or changes target level 3 or lower <:cearth:364048663582081034> territory into a <:cfire:364048663355588609> land.");
    }
    if (message.content === prefix + "magmashift") {
         message.channel.send("Magma Shift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:120 \nChanges target level 3 or lower <:cfire:364048663355588609> territory into a <:cearth:364048663582081034> land, or changes target level 3 or lower <:cearth:364048663582081034> territory into a <:cfire:364048663355588609> land.");
    }
    if (message.content.startsWith(prefix + "Manna")) {
         message.channel.send("Manna <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:0 \nUser gains (lap number x50)G.");
    }
    if (message.content.startsWith(prefix + "manna")) {
         message.channel.send("Manna <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:0 \nUser gains (lap number x50)G.");
    }
    if (message.content === prefix + "Mass Growth") {
         message.channel.send("Mass Growth <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:30+ <:ccard:364048663426760705> \nMHP+5 to all creatures (up to a max of 100). / Synthesis: Items (Changes target to all creatures owned by the user.)");
    }
    if (message.content === prefix + "MassGrowth") {
         message.channel.send("Mass Growth <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:30+ <:ccard:364048663426760705> \nMHP+5 to all creatures (up to a max of 100). / Synthesis: Items (Changes target to all creatures owned by the user.)");
    }
    if (message.content === prefix + "mass growth") {
         message.channel.send("Mass Growth <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:30+ <:ccard:364048663426760705> \nMHP+5 to all creatures (up to a max of 100). / Synthesis: Items (Changes target to all creatures owned by the user.)");
    }
    if (message.content === prefix + "massgrowth") {
         message.channel.send("Mass Growth <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:30+ <:ccard:364048663426760705> \nMHP+5 to all creatures (up to a max of 100). / Synthesis: Items (Changes target to all creatures owned by the user.)");
    }
    if (message.content === prefix + "Mass Phantasm") {
         message.channel.send("Mass Phantasm <:crarityn:364048663661772800> <:cmenchant:364048663447601153> - G:70 \nAdds Nullified HP Effects <:csenchant:364048663464378391> to all creatures. (HP and MHP cannot be altered by spells.)");
    }
    if (message.content === prefix + "MassPhantasm") {
         message.channel.send("Mass Phantasm <:crarityn:364048663661772800> <:cmenchant:364048663447601153> - G:70 \nAdds Nullified HP Effects <:csenchant:364048663464378391> to all creatures. (HP and MHP cannot be altered by spells.)");
    }
    if (message.content === prefix + "mass phantasm") {
         message.channel.send("Mass Phantasm <:crarityn:364048663661772800> <:cmenchant:364048663447601153> - G:70 \nAdds Nullified HP Effects <:csenchant:364048663464378391> to all creatures. (HP and MHP cannot be altered by spells.)");
    }
    if (message.content === prefix + "massphantasm") {
         message.channel.send("Mass Phantasm <:crarityn:364048663661772800> <:cmenchant:364048663447601153> - G:70 \nAdds Nullified HP Effects <:csenchant:364048663464378391> to all creatures. (HP and MHP cannot be altered by spells.)");
    }
    if (message.content.startsWith(prefix + "Merciful World")) {
         message.channel.send("Merciful World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Mercy <:csenchant:364048663464378391> to world. (For 6 rounds, all Cepters cannot invade territories of Cepters ranked below them.)");
    }
    if (message.content.startsWith(prefix + "MercifulWorld")) {
         message.channel.send("Merciful World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Mercy <:csenchant:364048663464378391> to world. (For 6 rounds, all Cepters cannot invade territories of Cepters ranked below them.)");
    }
    if (message.content.startsWith(prefix + "merciful world")) {
         message.channel.send("Merciful World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Mercy <:csenchant:364048663464378391> to world. (For 6 rounds, all Cepters cannot invade territories of Cepters ranked below them.)");
    }
    if (message.content.startsWith(prefix + "mercifulworld")) {
         message.channel.send("Merciful World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Mercy <:csenchant:364048663464378391> to world. (For 6 rounds, all Cepters cannot invade territories of Cepters ranked below them.)");
    }
    if (message.content.startsWith(prefix + "Metal Form")) {
         message.channel.send("Metal Form <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:70 \nAdds Metallization <:csenchant:364048663464378391> to target creature. (Has Neutralizes: Normal Attacks, but cannot use armor.)");
    }
    if (message.content.startsWith(prefix + "MetalForm")) {
         message.channel.send("Metal Form <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:70 \nAdds Metallization <:csenchant:364048663464378391> to target creature. (Has Neutralizes: Normal Attacks, but cannot use armor.)");
    }
    if (message.content.startsWith(prefix + "metal form")) {
         message.channel.send("Metal Form <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:70 \nAdds Metallization <:csenchant:364048663464378391> to target creature. (Has Neutralizes: Normal Attacks, but cannot use armor.)");
    }
    if (message.content.startsWith(prefix + "metalform")) {
         message.channel.send("Metal Form <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:70 \nAdds Metallization <:csenchant:364048663464378391> to target creature. (Has Neutralizes: Normal Attacks, but cannot use armor.)");
    }
    if (message.content.startsWith(prefix + "Metamorphosis")) {
         message.channel.send("Metamorphosis <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80+ <:ccard:364048663426760705> \nUser selects an item or Spell Card from target enemy Cepter\'s hand and changes all copies of the selected card in all Cepters\' hands and books to Holy Word 6.");
    }
    if (message.content.startsWith(prefix + "metamorphosis")) {
         message.channel.send("Metamorphosis <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80+ <:ccard:364048663426760705> \nUser selects an item or Spell Card from target enemy Cepter\'s hand and changes all copies of the selected card in all Cepters\' hands and books to Holy Word 6.");
    }
    if (message.content.startsWith(prefix + "Miracle Call")) {
         message.channel.send("Miracle Call <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nUser draws 1 Evo Card from their book. / If an Evo Card can\'t be drawn, user draws 2 cards instead.");
    }
    if (message.content.startsWith(prefix + "MiracleCall")) {
         message.channel.send("Miracle Call <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nUser draws 1 Evo Card from their book. / If an Evo Card can\'t be drawn, user draws 2 cards instead.");
    }
    if (message.content.startsWith(prefix + "miracle call")) {
         message.channel.send("Miracle Call <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nUser draws 1 Evo Card from their book. / If an Evo Card can\'t be drawn, user draws 2 cards instead.");
    }
    if (message.content.startsWith(prefix + "miraclecall")) {
         message.channel.send("Miracle Call <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:70 \nUser draws 1 Evo Card from their book. / If an Evo Card can\'t be drawn, user draws 2 cards instead.");
    }
    if (message.content === prefix + "Mirror World") {
         message.channel.send("Mirror World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Extinction <:csenchant:364048663464378391> to world. (For 6 rounds, at Battle Start, if either creature has multiple copies in play, that creature is destroyed.)");
    }
    if (message.content === prefix + "MirrorWorld") {
         message.channel.send("Mirror World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Extinction <:csenchant:364048663464378391> to world. (For 6 rounds, at Battle Start, if either creature has multiple copies in play, that creature is destroyed.)");
    }
    if (message.content === prefix + "mirror world") {
         message.channel.send("Mirror World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Extinction <:csenchant:364048663464378391> to world. (For 6 rounds, at Battle Start, if either creature has multiple copies in play, that creature is destroyed.)");
    }
    if (message.content === prefix + "mirrorworld") {
         message.channel.send("Mirror World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Extinction <:csenchant:364048663464378391> to world. (For 6 rounds, at Battle Start, if either creature has multiple copies in play, that creature is destroyed.)");
    }
    if (message.content.startsWith(prefix + "Misty World")) {
         message.channel.send("Misty World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Anti-Spell <:csenchant:364048663464378391> to the world. (For 6 rounds, all Cepters cannot be targeted by spells.)");
    }
    if (message.content.startsWith(prefix + "MistyWorld")) {
         message.channel.send("Misty World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Anti-Spell <:csenchant:364048663464378391> to the world. (For 6 rounds, all Cepters cannot be targeted by spells.)");
    }
    if (message.content.startsWith(prefix + "misty world")) {
         message.channel.send("Misty World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Anti-Spell <:csenchant:364048663464378391> to the world. (For 6 rounds, all Cepters cannot be targeted by spells.)");
    }
    if (message.content.startsWith(prefix + "mistyworld")) {
         message.channel.send("Misty World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:50 \nAdds Anti-Spell <:csenchant:364048663464378391> to the world. (For 6 rounds, all Cepters cannot be targeted by spells.)");
    }
    if (message.content.startsWith(prefix + "Natural World")) {
         message.channel.send("Natural World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Abilities Disabled <:csenchant:364048663464378391> to the world. (For 6 rounds, Secret Art, Upon Defeat, and Battle End abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "NaturalWorld")) {
         message.channel.send("Natural World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Abilities Disabled <:csenchant:364048663464378391> to the world. (For 6 rounds, Secret Art, Upon Defeat, and Battle End abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "natural world")) {
         message.channel.send("Natural World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Abilities Disabled <:csenchant:364048663464378391> to the world. (For 6 rounds, Secret Art, Upon Defeat, and Battle End abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "naturalworld")) {
         message.channel.send("Natural World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Abilities Disabled <:csenchant:364048663464378391> to the world. (For 6 rounds, Secret Art, Upon Defeat, and Battle End abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "Obliteration")) {
         message.channel.send("Obliteration <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:80 \nAll Cepters lose (number of Element Gems owned x70)G. / If there is no Gem Store, all Cepters lose 10% of their current magic.");
    }
    if (message.content.startsWith(prefix + "obliteration")) {
         message.channel.send("Obliteration <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:80 \nAll Cepters lose (number of Element Gems owned x70)G. / If there is no Gem Store, all Cepters lose 10% of their current magic.");
    }
    if (message.content.startsWith(prefix + "Outrage")) {
         message.channel.send("Outrage <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nMoves target creature to adjacent enemy territory.");
    }
    if (message.content.startsWith(prefix + "outrage")) {
         message.channel.send("Outrage <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nMoves target creature to adjacent enemy territory.");
    }
    if (message.content.startsWith(prefix + "Pacifism")) {
         message.channel.send("Pacifism <:crarityn:364048663661772800> <:cmenchant:364048663447601153> - G:70 \nAdds No Invasions <:csenchant:364048663464378391> to all Cepters. (For 2 rounds, you cannot invade.)");
    }
    if (message.content.startsWith(prefix + "pacifism")) {
         message.channel.send("Pacifism <:crarityn:364048663661772800> <:cmenchant:364048663447601153> - G:70 \nAdds No Invasions <:csenchant:364048663464378391> to all Cepters. (For 2 rounds, you cannot invade.)");
    }
    if (message.content.startsWith(prefix + "Peace")) {
         message.channel.send("Peace <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:70 \nAdds Peace <:csenchant:364048663464378391> to target creature. (Cannot be invaded, and toll becomes 0G.)");
    }
    if (message.content.startsWith(prefix + "peace")) {
         message.channel.send("Peace <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:70 \nAdds Peace <:csenchant:364048663464378391> to target creature. (Cannot be invaded, and toll becomes 0G.)");
    }
    if (message.content.startsWith(prefix + "Penalize")) {
         message.channel.send("Penalize <:crarityr:364045147085864960> <:cmenchant:364048663447601153> - G:80 \nAdds Paralysis <:csenchant:364048663464378391> to all Evo Cards. (Can\'t attack or use items, and abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "penalize")) {
         message.channel.send("Penalize <:crarityr:364045147085864960> <:cmenchant:364048663447601153> - G:80 \nAdds Paralysis <:csenchant:364048663464378391> to all Evo Cards. (Can\'t attack or use items, and abilities do not activate.)");
    }
    if (message.content.startsWith(prefix + "Philosophy")) {
         message.channel.send("Philosophy <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nIf user has a card with the Synthesis ability in hand, draw 3 cards / If not, user draws 2 cards.");
    }
    if (message.content.startsWith(prefix + "philosophy")) {
         message.channel.send("Philosophy <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:50 \nIf user has a card with the Synthesis ability in hand, draw 3 cards / If not, user draws 2 cards.");
    }
    if (message.content.startsWith(prefix + "Plague")) {
         message.channel.send("Plague <:craritys:364048663351132162> <:cmenchant:364048663447601153> - G:100 \nAdds Poison <:csenchant:364048663464378391> to all creatures. (At the end of a battle, the creature\'s base HP is reduced by half of its MHP.)");
    }
    if (message.content.startsWith(prefix + "plague")) {
         message.channel.send("Plague <:craritys:364048663351132162> <:cmenchant:364048663447601153> - G:100 \nAdds Poison <:csenchant:364048663464378391> to all creatures. (At the end of a battle, the creature\'s base HP is reduced by half of its MHP.)");
    }
    if (message.content.startsWith(prefix + "Poison Mind")) {
         message.channel.send("Poison Mind <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nUser views the top 6 cards in target enemy Cepter\'s book, then selects 1 to destroy. / User draws a card.");
    }
    if (message.content.startsWith(prefix + "PoisonMind")) {
         message.channel.send("Poison Mind <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nUser views the top 6 cards in target enemy Cepter\'s book, then selects 1 to destroy. / User draws a card.");
    }
    if (message.content.startsWith(prefix + "poison mind")) {
         message.channel.send("Poison Mind <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nUser views the top 6 cards in target enemy Cepter\'s book, then selects 1 to destroy. / User draws a card.");
    }
    if (message.content.startsWith(prefix + "poisonmind")) {
         message.channel.send("Poison Mind <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:20 \nUser views the top 6 cards in target enemy Cepter\'s book, then selects 1 to destroy. / User draws a card.");
    }
    if (message.content.startsWith(prefix + "Prophecy")) {
         message.channel.send("Prophecy <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nUser draws 1 card of a specified type from their book.");
    }
    if (message.content.startsWith(prefix + "prophecy")) {
         message.channel.send("Prophecy <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nUser draws 1 card of a specified type from their book.");
    }
    if (message.content.startsWith(prefix + "Purify")) {
         message.channel.send("Purify <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:20 \nRemoves all <:csenchant:364048663464378391> effects from the map. User then gains (number of different <:csenchant:364048663464378391> removed x50)G.");
    }
    if (message.content.startsWith(prefix + "purify")) {
         message.channel.send("Purify <:crarityn:364048663661772800> <:cminstant:364048663498063874> - G:20 \nRemoves all <:csenchant:364048663464378391> effects from the map. User then gains (number of different <:csenchant:364048663464378391> removed x50)G.");
    }
    if (message.content.startsWith(prefix + "Quicksand")) {
         message.channel.send("Quicksand <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:100 \nAdds Force Stop <:csenchant:364048663464378391> to target creature. (The next Cepter who tries to pass this creature within 2 rounds must stop here.)");
    }
    if (message.content.startsWith(prefix + "quicksand")) {
         message.channel.send("Quicksand <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:100 \nAdds Force Stop <:csenchant:364048663464378391> to target creature. (The next Cepter who tries to pass this creature within 2 rounds must stop here.)");
    }
    if (message.content.startsWith(prefix + "Quietude")) {
         message.channel.send("Quietude <:craritys:364048663351132162> <:cmenchant:364048663447601153> - G:70 \nAdds Mute <:csenchant:364048663464378391> to all Cepters (Spells cannot be used for one round.)");
    }
    if (message.content.startsWith(prefix + "quietude")) {
         message.channel.send("Quietude <:craritys:364048663351132162> <:cmenchant:364048663447601153> - G:70 \nAdds Mute <:csenchant:364048663464378391> to all Cepters (Spells cannot be used for one round.)");
    }
    if (message.content.startsWith(prefix + "Quintessence")) {
         message.channel.send("Quintessence <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:80 \nChanges a target territory with a level lower than 4 to <:cmulti:364048663393337345>.");
    }
    if (message.content.startsWith(prefix + "quintessence")) {
         message.channel.send("Quintessence <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:80 \nChanges a target territory with a level lower than 4 to <:cmulti:364048663393337345>.");
    }
    if (message.content === prefix + "Ray of Law") {
         message.channel.send("Ray of Law <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:60 \nDestroys all cards with a value of 100G and up in all Cepters\' hands.");
    }
    if (message.content === prefix + "RayofLaw") {
         message.channel.send("Ray of Law <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:60 \nDestroys all cards with a value of 100G and up in all Cepters\' hands.");
    }
    if (message.content === prefix + "ray of law") {
         message.channel.send("Ray of Law <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:60 \nDestroys all cards with a value of 100G and up in all Cepters\' hands.");
    }
    if (message.content === prefix + "rayoflaw") {
         message.channel.send("Ray of Law <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:60 \nDestroys all cards with a value of 100G and up in all Cepters\' hands.");
    }
    if (message.content === prefix + "Ray of Purge") {
         message.channel.send("Ray of Purge <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:50 \nDestroys all <:csenchant:364048663464378391> spell cards in all Cepters\' hands.");
    }
    if (message.content === prefix + "RayofPurge") {
         message.channel.send("Ray of Purge <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:50 \nDestroys all <:csenchant:364048663464378391> spell cards in all Cepters\' hands.");
    }
    if (message.content === prefix + "ray of purge") {
         message.channel.send("Ray of Purge <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:50 \nDestroys all <:csenchant:364048663464378391> spell cards in all Cepters\' hands.");
    }
    if (message.content === prefix + "rayofpurge") {
         message.channel.send("Ray of Purge <:crarityr:364045147085864960> <:cminstant:364048663498063874> - G:50 \nDestroys all <:csenchant:364048663464378391> spell cards in all Cepters\' hands.");
    }
    if (message.content.startsWith(prefix + "Redivision")) {
         message.channel.send("Redivision <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:100 \nRedistributes all Cepters\' magic so that it is spread equally among them.");
    }
    if (message.content.startsWith(prefix + "redivision")) {
         message.channel.send("Redivision <:craritys:364048663351132162> <:cminstant:364048663498063874> - G:100 \nRedistributes all Cepters\' magic so that it is spread equally among them.");
    }
    if (message.content.startsWith(prefix + "Reincarnation")) {
         message.channel.send("Reincarnation <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:70 \nUser discards all cards from current hand and draws a number of cards equal to the number they discarded +1.");
    }
    if (message.content.startsWith(prefix + "reincarnation")) {
         message.channel.send("Reincarnation <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:70 \nUser discards all cards from current hand and draws a number of cards equal to the number they discarded +1.");
    }
    if (message.content.startsWith(prefix + "Release")) {
         message.channel.send("Release <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Unlock Limits <:csenchant:364048663464378391> to user. (For 4 rounds, ignore item restrictions and land restrictions.)");
    }
    if (message.content.startsWith(prefix + "release")) {
         message.channel.send("Release <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:50 \nAdds Unlock Limits <:csenchant:364048663464378391> to user. (For 4 rounds, ignore item restrictions and land restrictions.)");
    }
    if (message.content.startsWith(prefix + "Relief")) {
         message.channel.send("Relief <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:30 \nExchanges creatures in 2 of user\'s territories. / Recycles to Book");
    }
    if (message.content.startsWith(prefix + "relief")) {
         message.channel.send("Relief <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:30 \nExchanges creatures in 2 of user\'s territories. / Recycles to Book");
    }
    if (message.content.startsWith(prefix + "Remission")) {
         message.channel.send("Remission <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nTarget gate will be marked as passed. (Cannot be used on the final gate needed to complete a lap.)");
    }
    if (message.content.startsWith(prefix + "remission")) {
         message.channel.send("Remission <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nTarget gate will be marked as passed. (Cannot be used on the final gate needed to complete a lap.)");
    }
    if (message.content.startsWith(prefix + "Remote Switch")) {
         message.channel.send("Remote Switch <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:30 \nChanges the direction of all Path Switches. / Recycles to Book. / If no Path Switch is present, user draws a card.");
    }
    if (message.content.startsWith(prefix + "RemoteSwitch")) {
         message.channel.send("Remote Switch <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:30 \nChanges the direction of all Path Switches. / Recycles to Book. / If no Path Switch is present, user draws a card.");
    }
    if (message.content.startsWith(prefix + "remote switch")) {
         message.channel.send("Remote Switch <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:30 \nChanges the direction of all Path Switches. / Recycles to Book. / If no Path Switch is present, user draws a card.");
    }
    if (message.content.startsWith(prefix + "remoteswitch")) {
         message.channel.send("Remote Switch <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:30 \nChanges the direction of all Path Switches. / Recycles to Book. / If no Path Switch is present, user draws a card.");
    }
    if (message.content.startsWith(prefix + "Restore")) {
         message.channel.send("Restore <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:40 \nRemoves Fatigued from target creature. / Fully recovers target creature\'s HP.");
    }
    if (message.content.startsWith(prefix + "restore")) {
         message.channel.send("Restore <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:40 \nRemoves Fatigued from target creature. / Fully recovers target creature\'s HP.");
    }
    if (message.content.startsWith(prefix + "Revival")) {
         message.channel.send("Revival <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:80 \nTarget Cepter\'s book is reverted to the state it was in when the game began.");
    }
    if (message.content.startsWith(prefix + "revival")) {
         message.channel.send("Revival <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:80 \nTarget Cepter\'s book is reverted to the state it was in when the game began.");
    }
    if (message.content.startsWith(prefix + "Senility")) {
         message.channel.send("Senility <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:100 \nAdds Last Breath <:csenchant:364048663464378391> to target creature. (This creature is destroyed at the end of battle.)");
    }
    if (message.content.startsWith(prefix + "senility")) {
         message.channel.send("Senility <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:100 \nAdds Last Breath <:csenchant:364048663464378391> to target creature. (This creature is destroyed at the end of battle.)");
    }
    if (message.content.startsWith(prefix + "Sense of Wild")) {
         message.channel.send("Sense of Wild <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:80 \nUser draws a card. If the drawn card is a creature, it is summoned to a random vacant land.");
    }
    if (message.content.startsWith(prefix + "SenseofWild")) {
         message.channel.send("Sense of Wild <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:80 \nUser draws a card. If the drawn card is a creature, it is summoned to a random vacant land.");
    }
    if (message.content.startsWith(prefix + "sense of wild")) {
         message.channel.send("Sense of Wild <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:80 \nUser draws a card. If the drawn card is a creature, it is summoned to a random vacant land.");
    }
    if (message.content.startsWith(prefix + "senseofwild")) {
         message.channel.send("Sense of Wild <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:80 \nUser draws a card. If the drawn card is a creature, it is summoned to a random vacant land.");
    }
    if (message.content.startsWith(prefix + "Shatter")) {
         message.channel.send("Shatter <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:30 \nUser selects an Item or Spell Card from target enemy Cepter\'s hand and destroys it.");
    }
    if (message.content.startsWith(prefix + "shatter")) {
         message.channel.send("Shatter <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:30 \nUser selects an Item or Spell Card from target enemy Cepter\'s hand and destroys it.");
    }
    if (message.content.startsWith(prefix + "Shining Geyser")) {
         message.channel.send("Shining Geyser <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100+ <:ccard:364048663426760705> \nHP-30 to target enemy creature. / Synthesis: <:csinstant:364048663447863298> Spells (Changes effect to "HP-40.")");
    }
    if (message.content.startsWith(prefix + "ShiningGeyser")) {
         message.channel.send("Shining Geyser <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100+ <:ccard:364048663426760705> \nHP-30 to target enemy creature. / Synthesis: <:csinstant:364048663447863298> Spells (Changes effect to "HP-40.")");
    }
    if (message.content.startsWith(prefix + "shining geyser")) {
         message.channel.send("Shining Geyser <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100+ <:ccard:364048663426760705> \nHP-30 to target enemy creature. / Synthesis: <:csinstant:364048663447863298> Spells (Changes effect to "HP-40.")");
    }
    if (message.content.startsWith(prefix + "shininggeyser")) {
         message.channel.send("Shining Geyser <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100+ <:ccard:364048663426760705> \nHP-30 to target enemy creature. / Synthesis: <:csinstant:364048663447863298> Spells (Changes effect to "HP-40.")");
    }
    if (message.content === prefix + "Sigil of Drain") {
         message.channel.send("Sigil of Drain <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:20 \nAdds Drain Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (20G): User steals 10% of target enemy Cepter\'s Current Magic.)");
    }
    if (message.content === prefix + "SigilofDrain") {
         message.channel.send("Sigil of Drain <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:20 \nAdds Drain Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (20G): User steals 10% of target enemy Cepter\'s Current Magic.)");
    }
    if (message.content === prefix + "sigil of drain") {
         message.channel.send("Sigil of Drain <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:20 \nAdds Drain Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (20G): User steals 10% of target enemy Cepter\'s Current Magic.)");
    }
    if (message.content === prefix + "sigilofdrain") {
         message.channel.send("Sigil of Drain <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:20 \nAdds Drain Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (20G): User steals 10% of target enemy Cepter\'s Current Magic.)");
    }
    if (message.content === prefix + "Sigil of Float") {
         message.channel.send("Sigil of Float <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:40 \nAdds Move Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (50G): Adds Dice 5 <:csenchant:364048663464378391> to target Cepter.)");
    }
    if (message.content === prefix + "SigilofFloat") {
         message.channel.send("Sigil of Float <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:40 \nAdds Move Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (50G): Adds Dice 5 <:csenchant:364048663464378391> to target Cepter.)");
    }
    if (message.content === prefix + "sigil of float") {
         message.channel.send("Sigil of Float <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:40 \nAdds Move Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (50G): Adds Dice 5 <:csenchant:364048663464378391> to target Cepter.)");
    }
    if (message.content === prefix + "sigiloffloat") {
         message.channel.send("Sigil of Float <:crarityr:364045147085864960> <:csenchant:364048663464378391> - G:40 \nAdds Move Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (50G): Adds Dice 5 <:csenchant:364048663464378391> to target Cepter.)");
    }
    if (message.content === prefix + "Sigil of Shrink") {
         message.channel.send("Sigil of Shrink <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Shrink Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (50G): MHP-10 to target creature.)");
    }
    if (message.content === prefix + "SigilofShrink") {
         message.channel.send("Sigil of Shrink <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Shrink Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (50G): MHP-10 to target creature.)");
    }
    if (message.content === prefix + "sigil of shrink") {
         message.channel.send("Sigil of Shrink <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Shrink Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (50G): MHP-10 to target creature.)");
    }
    if (message.content === prefix + "sigilofshrink") {
         message.channel.send("Sigil of Shrink <:craritys:364048663351132162> <:csenchant:364048663464378391> - G:40 \nAdds Shrink Spell <:csenchant:364048663464378391> to target creature with no Secret Art. (Grants Secret Art (50G): MHP-10 to target creature.)");
    }
    if (message.content.startsWith(prefix + "Sneak Hand")) {
         message.channel.send("Sneak Hand <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100 \nHidden / User steals an Item Card from the hand of a target enemy Cepter with two or more Item Cards.");
    }
    if (message.content.startsWith(prefix + "SneakHand")) {
         message.channel.send("Sneak Hand <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100 \nHidden / User steals an Item Card from the hand of a target enemy Cepter with two or more Item Cards.");
    }
    if (message.content.startsWith(prefix + "sneak hand")) {
         message.channel.send("Sneak Hand <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100 \nHidden / User steals an Item Card from the hand of a target enemy Cepter with two or more Item Cards.");
    }
    if (message.content.startsWith(prefix + "sneakhand")) {
         message.channel.send("Sneak Hand <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100 \nHidden / User steals an Item Card from the hand of a target enemy Cepter with two or more Item Cards.");
    }
    if (message.content.startsWith(prefix + "Solid World")) {
         message.channel.send("Solid World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Land Protection <:csenchant:364048663464378391> to the world. (For 6 rounds, lands cannot have their level lowered and their element cannot be changed by spells.)");
    }
    if (message.content.startsWith(prefix + "SolidWorld")) {
         message.channel.send("Solid World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Land Protection <:csenchant:364048663464378391> to the world. (For 6 rounds, lands cannot have their level lowered and their element cannot be changed by spells.)");
    }
    if (message.content.startsWith(prefix + "solid world")) {
         message.channel.send("Solid World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Land Protection <:csenchant:364048663464378391> to the world. (For 6 rounds, lands cannot have their level lowered and their element cannot be changed by spells.)");
    }
    if (message.content.startsWith(prefix + "solidworld")) {
         message.channel.send("Solid World <:crarityr:364045147085864960> <:cglobal:364049704293629954> - G:70 \nAdds Land Protection <:csenchant:364048663464378391> to the world. (For 6 rounds, lands cannot have their level lowered and their element cannot be changed by spells.)");
    }
    if (message.content.startsWith(prefix + "Spartoi")) {
         message.channel.send("Spartoi <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:30+ <:ccard:364048663426760705> \nPlaces a Skeleton on a random vacant land.");
    }
    if (message.content.startsWith(prefix + "spartoi")) {
         message.channel.send("Spartoi <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:30+ <:ccard:364048663426760705> \nPlaces a Skeleton on a random vacant land.");
    }
    if (message.content.startsWith(prefix + "Speed Penalty")) {
         message.channel.send("Speed Penalty <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:70 \nUser steals (target\'s lap # - user\'s lap # x100)G from the enemy with the highest lap number. (If user has highest lap number, no G will be taken.)");
    }
    if (message.content.startsWith(prefix + "SpeedPenalty")) {
         message.channel.send("Speed Penalty <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:70 \nUser steals (target\'s lap # - user\'s lap # x100)G from the enemy with the highest lap number. (If user has highest lap number, no G will be taken.)");
    }
    if (message.content.startsWith(prefix + "speed penalty")) {
         message.channel.send("Speed Penalty <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:70 \nUser steals (target\'s lap # - user\'s lap # x100)G from the enemy with the highest lap number. (If user has highest lap number, no G will be taken.)");
    }
    if (message.content.startsWith(prefix + "speedpenalty")) {
         message.channel.send("Speed Penalty <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:70 \nUser steals (target\'s lap # - user\'s lap # x100)G from the enemy with the highest lap number. (If user has highest lap number, no G will be taken.)");
    }
    if (message.content.startsWith(prefix + "Spirit Walk")) {
         message.channel.send("Spirit Walk <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:20 \nAdds Distant Movement <:csenchant:364048663464378391> to target creature. (Creature can move to any vacant land.)");
    }
    if (message.content.startsWith(prefix + "SpiritWalk")) {
         message.channel.send("Spirit Walk <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:20 \nAdds Distant Movement <:csenchant:364048663464378391> to target creature. (Creature can move to any vacant land.)");
    }
    if (message.content.startsWith(prefix + "spirit walk")) {
         message.channel.send("Spirit Walk <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:20 \nAdds Distant Movement <:csenchant:364048663464378391> to target creature. (Creature can move to any vacant land.)");
    }
    if (message.content.startsWith(prefix + "spiritwalk")) {
         message.channel.send("Spirit Walk <:crarityn:364048663661772800> <:csenchant:364048663464378391> - G:20 \nAdds Distant Movement <:csenchant:364048663464378391> to target creature. (Creature can move to any vacant land.)");
    }
    if (message.content.startsWith(prefix + "Squeeze")) {
         message.channel.send("Squeeze <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:50 \nUser chooses a card from target Cepter\'s hand and destroys it. / Target Cepter gains 150G.");
    }
    if (message.content.startsWith(prefix + "squeeze")) {
         message.channel.send("Squeeze <:crarityn:364048663661772800> <:csinstant:364048663447863298> - G:50 \nUser chooses a card from target Cepter\'s hand and destroys it. / Target Cepter gains 150G.");
    }
    if (message.content.startsWith(prefix + "Steal Gem")) {
         message.channel.send("Steal Gem <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nUser steals one random element gem from target enemy Cepter. / If there is no Gem Store, user will steal 80G from target enemy Cepter.");
    }
    if (message.content.startsWith(prefix + "StealGem")) {
         message.channel.send("Steal Gem <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nUser steals one random element gem from target enemy Cepter. / If there is no Gem Store, user will steal 80G from target enemy Cepter.");
    }
    if (message.content.startsWith(prefix + "steal gem")) {
         message.channel.send("Steal Gem <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nUser steals one random element gem from target enemy Cepter. / If there is no Gem Store, user will steal 80G from target enemy Cepter.");
    }
    if (message.content.startsWith(prefix + "stealgem")) {
         message.channel.send("Steal Gem <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:40 \nUser steals one random element gem from target enemy Cepter. / If there is no Gem Store, user will steal 80G from target enemy Cepter.");
    }
    if (message.content === prefix + "Stone Blast") {
         message.channel.send("Stone Blast <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nHP-30 to target <:cearth:364048663582081034> or <:cair:364048663518904327> creature.");
    }
    if (message.content === prefix + "StoneBlast") {
         message.channel.send("Stone Blast <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nHP-30 to target <:cearth:364048663582081034> or <:cair:364048663518904327> creature.");
    }
    if (message.content === prefix + "stone blast") {
         message.channel.send("Stone Blast <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nHP-30 to target <:cearth:364048663582081034> or <:cair:364048663518904327> creature.");
    }
    if (message.content === prefix + "stoneblast") {
         message.channel.send("Stone Blast <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:80 \nHP-30 to target <:cearth:364048663582081034> or <:cair:364048663518904327> creature.");
    }
    if (message.content === prefix + "Storm Shift") {
         message.channel.send("Storm Shift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:120 \nChanges target level 3 or lower <:cwater:364048663447601154> territory into a <:cair:364048663518904327> land, or changes target level 3 or lower <:cair:364048663518904327> territory into a <:cwater:364048663447601154> land.");
    }
    if (message.content === prefix + "StormShift") {
         message.channel.send("Storm Shift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:120 \nChanges target level 3 or lower <:cwater:364048663447601154> territory into a <:cair:364048663518904327> land, or changes target level 3 or lower <:cair:364048663518904327> territory into a <:cwater:364048663447601154> land.");
    }
    if (message.content === prefix + "storm shift") {
         message.channel.send("Storm Shift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:120 \nChanges target level 3 or lower <:cwater:364048663447601154> territory into a <:cair:364048663518904327> land, or changes target level 3 or lower <:cair:364048663518904327> territory into a <:cwater:364048663447601154> land.");
    }
    if (message.content === prefix + "stormshift") {
         message.channel.send("Storm Shift <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:120 \nChanges target level 3 or lower <:cwater:364048663447601154> territory into a <:cair:364048663518904327> land, or changes target level 3 or lower <:cair:364048663518904327> territory into a <:cwater:364048663447601154> land.");
    }
    if (message.content.startsWith(prefix + "Subsidence")) {
         message.channel.send("Subsidence <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100+ <:ccard:364048663426760705> \nLowers level of target enemy Cepter\'s highest level territory by 1. / Synthesis: Subsidence (Changes target to all Cepters.).");
    }
    if (message.content.startsWith(prefix + "subsidence")) {
         message.channel.send("Subsidence <:crarityr:364045147085864960> <:csinstant:364048663447863298> - G:100+ <:ccard:364048663426760705> \nLowers level of target enemy Cepter\'s highest level territory by 1. / Synthesis: Subsidence (Changes target to all Cepters.).");
    }
    if (message.content.startsWith(prefix + "Sudden Impact")) {
         message.channel.send("Sudden Impact <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nHidden / Lowers level of target level 4 territory by 1.");
    }
    if (message.content.startsWith(prefix + "SuddenImpact")) {
         message.channel.send("Sudden Impact <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nHidden / Lowers level of target level 4 territory by 1.");
    }
    if (message.content.startsWith(prefix + "sudden impact")) {
         message.channel.send("Sudden Impact <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nHidden / Lowers level of target level 4 territory by 1.");
    }
    if (message.content.startsWith(prefix + "suddenimpact")) {
         message.channel.send("Sudden Impact <:craritys:364048663351132162> <:csinstant:364048663447863298> - G:100 \nHidden / Lowers level of target level 4 territory by 1.");
    }    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
