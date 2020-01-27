const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var gebruikers = message.guild.members.filter(member => !member.user.bot).size;

    var bots = message.guild.members.filter(member => member.user.bot).size;

    var icon = message.guild.iconURL;
        
    var serverEmbed = new discord.RichEmbed()
        .setDescription("**Server info**")
        .setColor("#fa9600")
        .setThumbnail(icon)
        .addField(`Server ID:`, `${message.guild.id}`, true)
        .addField(`:crown: Owner:`, `${message.guild.owner}`, true) 
        .addField(":tools: Server gemaakt op", message.guild.createdAt)
        .addField("Je bent gejoint op", message.member.joinedAt)
        .addField(":busts_in_silhouette: Aantal leden", gebruikers)
        .addField(":robot: Aantal Bots",bots )
        .addField(":robot: Bot naam", bot.user.username)
        .addField(`:bust_in_silhouette: Laaste gebruiker gejoind:`, `${message.guild.joinedAt.toDateString()}`, true)
        .addField(`:file_folder: Channels:`, `${message.guild.channels.size}`)
        .setFooter(`©️ Nintedo's Mansion`, "https://bit.ly/2uYYSGa")
        .setTimestamp();

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}