const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let target = message.mentions.users.first() || message.author;
  if(target){
    var userinf = new Discord.RichEmbed()
        .setAuthor(target.username)
        .setThumbnail(target.avatarURL)
        .setDescription("Gebruikers informatie!")
        .addField("Voledige gebruikersnaam:", `${target.username}#${target.discriminator}`)
        .addField("Discord ID:", target.id)
        .addField("Aangemaakt op:", target.createdAt)
        .addField("Je bent gejoint op:". target.joinedAt)
        .setColor("#fa9600")
        .setTimestamp()
        .setFooter(`©️ Nintedo's Mansion`, "https://bit.ly/2uYYSGa");

        message.channel.send(userinf);
}
}
module.exports.help = {
    name: "userinfo"
}