const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    bot.channels.get('662398705927979033').send("Dit bericht wordt momenteel ingeladen, even geduld!").then(async msg => {
        msg.react("✅")
        msg.react("❌")
        message.delete()
        var id = msg.id

        var embed = new discord.RichEmbed()
            .setTitle(`Nieuw idee van ${message.member.displayName}`)
            .addField("Inhoud idee", args.slice(0).join(" "))
            .addField("Status", "Stem ronde")
            .setTimestamp()
            .setColor("#fa9600")
            .setFooter(`Id: ${msg.id}`);

        msg.edit(embed)
        message.member.send(embed)
    })

}

module.exports.help = {
    name: "idee",
    name1: "suggestie"

}