const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let nickeduser = message.mentions.users.first();

    let nickReason = args.join(" ").slice(22);

    if(!nickeduser) return message.channel.send("Noem een gebruiker");

    if(!nickReason) return message.channel.send("Vul een naam in");

    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Jij kan dit niet doen");

    message.guild.members.get(nickeduser.id).setNickname(nickReason)

    message.channel.send("De naam is succesvol verandert naar " + nickeduser);
}

module.exports.help = {

    name: "nick"

}