const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var gebruikers = message.guild.members.filter(member => !member.user.bot).size;

    var bots = message.guild.members.filter(member => member.user.bot).size;

    var icon = message.guild.iconURL;
        
    var serverEmbed = new discord.RichEmbed()
        .setDescription("**Server info**")
        .setColor("#fa9600")
        .setThumbnail(icon)
        .addField(`Owner:`, `${message.guild.owner}`, true)
        .addField("Bot naam", bot.user.username)
        .addField(`Server ID:`, `${message.guild.id}`, true)
        .addField("Server gemaakt op", message.guild.createdAt)
        .addField("Je bent gejoint op", message.member.joinedAt)
        .addField("Aantal leden", gebruikers)
        .addField("Aantal Bots",bots )
        .addField(`Laaste gebruiker gejoind:`, `${message.guild.joinedAt.toDateString()}`, true)
        .addField(`:file_folder: Channels:`, `${message.guild.channels.size}`)
        .setFooter("©️Nintendo's Mansion")
        .setTimestamp();

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}