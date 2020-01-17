const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("De avatar van deze persoon wordt opgehaald.");
    let target = message.mentions.users.first() || message.author;
    var embedParent1 = new discord.RichEmbed()
    .setTitle(`**Avatar van opgevraagde persoon:**`)
    .setImage(target.displayAvatarURL)
    .setFooter(`©️ Nintedo's Mansion`, "https://bit.ly/2uYYSGa")
    .setColor("#fa9600")
    .setTimestamp()
    await message.channel.send(embedParent1);
  
    msg.delete();

  }
  
  module.exports.help = {
      name: "avatar"
  }