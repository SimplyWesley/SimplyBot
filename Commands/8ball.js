const discord = module.require('discord.js');
var fortunes = [
  "Ja!!",
  "Nee zeker weten niet",
  "Misschien",
  "Hoe moet ik dat weten?",
  "Misschien wel ja.",
  "Nee dat denk ik niet.",
  "Elmo's zijn cool!",
  "Panda's zijn cool!",
  "Ingewikkeld",
  "Het is moeilijk om te zeggen",
  "Nou    \n\n\nNEEE!",
  "Daar vraag je me wat!",
  "Ach zal ik daar maar ja op zeggen",
  ":ok:",
  "Duits is een rot taal",
  "Frans is een rot taal",
  "ENGELS is de beste taal!",
  "Dat moet je niet aan mij vragen!",
  "IK BEN EEN BOT!"


];


module.exports.run = async (bot, message, args) => {
  var boticon = bot.user.displayAvatarURL;
  if (!args[0]) {
    return message.channel.send(":x: " + "| Gelieve een vraag aan de heilige 8ball te vragen")
  }
  var embedParent1 = new discord.RichEmbed()
    .setTitle(`**Het antwoord van 8ball is:**\n`)
    .setDescription(fortunes[Math.floor(Math.random() * fortunes.length)])
    .setColor("#56f442")
    .setFooter("©️Nintedo's Mansion")
    .setTimestamp();
  if (args[0]) message.channel.send(embedParent1);
  else message.channel.send(":x: " + "| Sorry ik kan geen antwoord geven op deze vraag");
}

module.exports.help = {
  name: "8ball"
}