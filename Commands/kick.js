const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!kickUser) return message.channel.send("Deze speler bestaat niet of is niet op deze server");

    var reason = arguments.join(" ").slice(22);

    // 0x00000002 = KICK_USERS
    // 0x00002000 = MANNAGE_MESSAGES
    if (!message.member.hasPermission(0x00000002)) return message.channel.send("Jij kan dit niet doen");

    if (kickUser.hasPermission(0x00002000)) return message.channel.send("Je kan deze gebruiker niet kicken");

    var kickEmbed = new discord.RichEmbed()
        .setDescription("Latest kick information")
        .setColor("#fa9600")
        .addField("Gekickt door: ", message.author)
        .addField("Gekickte gebruiker: ", kickUser)
        .addField("Reden: ", reason)
        .setFooter("©️Nintendo's Mansion")
        .setTimestamp();

        var kickChannel = message.guild.channels.find(c => c.name == "logs");
        if (!kickChannel) return message.channel.send("Kan geen log kanaal vinden");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kickEmbed);

    return;
}

module.exports.help = {
    name: "kick"
}