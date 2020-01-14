const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if (!banUser) return message.channel.send("Deze speler bestaat niet of is niet op deze server");

    var reason = arguments.join(" ").slice(22);

    if(!arguments) return message.channel.send("Gelieve een reden mee te geven")

    // 0x00000004 = BAN_MEMBERS

    if (!message.member.hasPermission(0x00000004)) return message.channel.send("Jij kan dit niet doen");

    if (banUser.hasPermission(0x00000004)) return message.channel.send("Je kan deze gebruiker niet bannen");

    var banEmbed = new discord.RichEmbed()
        .setDescription("**Ban**")
        .setColor("#fa9600")
        .addField("Geband door: ", message.author)
        .addField("Gebande gebruiker ", banUser)
        .addField("Reden: ", reason)
        .setFooter("©️Nintendo's Mansion")
        .setTimestamp();

    var banChannel = message.guild.channels.find(c => c.name == "logs");
    if (!banChannel) return message.channel.send("Kan geen log kanaal vinden");

    message.guild.member(banUser).ban(reason);

    banChannel.send(banEmbed);

    return;
}

module.exports.help = {
    name: "ban"
}