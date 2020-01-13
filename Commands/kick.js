const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
        var reden = args.slice(1).join(" ") || "Geen reden opgegeven"
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        const member = message.guild.member(user);
        if (!member) return message.channel.send("Gelieve een persoon mee te geven!")
        if(!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send("Jij kan dit niet doen");
        message.member.send("**Kick**\n\nDeze gebruiker is succesvol gekickt uit de Nintendo's Mansion discord met de volgende reden:\n>>> " + reden)
        member.kick(reden)
        message.channel.send(user + " is succesvol gekickt!")
    }



module.exports.help = {

    name: "kick"

}