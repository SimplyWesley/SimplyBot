const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;
        
    var regelsEmbed = new discord.RichEmbed()
        .setDescription("**Regels Nintendo's Mansion**")
        .setColor("#fa9600")
        .setThumbnail(icon)
        .addField("Regel 1:", "Wees respectvol en irriteer of val andere spelers niet lastig.")
        .addField("Regel 2:", "Maak geen reclame voor je eigen server / twitch / youtube, tenzij je toestemming hebt.")
        .addField("Regel 3:", "Gebruik geen racistische taal en post geen racistische beelden, waaronder memes.")
        .addField("Regel 4:", "Spam niet te veel en denk na bij het versturen van berichten naar iedereen.")
        .addField("Regel 5:", "Wees beleefd in spreek kanalen en schreeuw niet of speel geen harde muziek door de microfoon.")
        .addField("Regel 6:", "Plaats je berichten in de juiste kanalen.")
        .addField("Regel 7:", "Plaats geen persoonlijke gegevens van iemand zonder toestemming.")
        .addField("Regel 8:", "Vraag niet naar beheerdersrollen of andere specifieke rollen.")
        .addField("Regel 9:", "Controleer de regels regelmatig, want de regels kunnen veranderen!")
        .setFooter("©️Nintendo's Mansion")
        .setTimestamp();

    return message.channel.send(regelsEmbed);

}

module.exports.help = {
    name: "regels"
}