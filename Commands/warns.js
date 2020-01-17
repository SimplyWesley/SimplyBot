const discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

var warns = require(`../warnings.json`);

module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan dit niet doen");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een gebruiker op of deze gebruiker is niet op deze server");

    let warnamount = "" 
    if (warns[user.id] != undefined) {
    warnamount = warns[user.id].warns
    }else {
    warnamount = 0
}

    // var warnamount = warns[user.id].warns || 0

    if (warnamount === 0) return message.channel.send("Deze gebruiker geeft geen waarschuwingen");

    var warnamountEmbed = new discord.RichEmbed()
        .setTitle("Warns")
        .setColor("#fa9600")
        .setDescription("In dit menu kan je zien hoeveel warns iemand heeft")
        .addField("Deze gebruiker heeft: ", `${warnamount} waarschuwing(en)`)
        .setFooter(`©️ Nintedo's Mansion`, "https://bit.ly/2uYYSGa")
        .setTimestamp();

        message.channel.send(warnamountEmbed);

}

module.exports.help = {
    name: "warns"
}