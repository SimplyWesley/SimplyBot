const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    
    // var botIcon = bot.user.displayAvatarURL;

    // var helpstaffEmbed = new discord.RichEmbed()
    // .setDescription("Commands")
    // .setColor("#fa9600")
    // .setThumbnail(botIcon)
    // .setDescription("**SimplyBot** \n\n **__Commands__** \n!helpall - Bekijk deze lijst \n!serverinfo - Bekijk de info over de server \n!botinfo - Bekijk de info over de SimplyBot \n!ban - Ban iemand uit de server \n!kick - Kick iemand uit de server \n!ticket - Maak een ticket aan \n!close - Sluit een ticket \n!nick - Verander de nickname van de opgevraagde persoon \n!clear - Verwijder een bepaald aantal berichten \n!avatar - Bekijk de profielfoto van de opgevraagde persoon \n!regels - Bekijk de regels \n!idee - Maak een idee aan \n!warn - Warn een gebruiker (4 warns is een kick) \n!lockdown - Dit lockt het kanaal voor een bepaald aantal uren, minuten of seconden. \n!ping - Check de ping van de server \n!leden - Bekijk het aantal leden in de server \n!warns - Bekijk het aantal waarschuwingen dat een gebruiker heeft \n!userinfo - Bekijk informatie over de opgevraagde gebruiker")    
    // .setFooter("©️Nintendo's Mansion")
    // .setTimestamp();

    var botIcon = bot.user.displayAvatarURL;

    var helpstaffEmbed = new discord.RichEmbed()
    .setDescription("Commands")
    .setColor("#fa9600")
    .setThumbnail(botIcon)
    .setDescription("**SimplyBot** \n\n **__Commands__**")
    .addField("!helpall", "Bekijk deze lijst")
    .addField("!ban", "Ban een persoon uit de discord")
    .addField("!clear", "Verwijder een bepaald aantal berichten")
    .addField("!kick", "Kick een persoon uit de discord")
    .addField("!lockdown", "Sluit het kanaal voor de benoemde tijd")
    .addField("!nick", "Verander de nickname van een gebruiker")
    .addField("!close", "Sluit een ticket kanaal")
    .addField("!warn", "Geef een gebruiker een waarschuwing")
    // .addField("!warns", "Bekijk het aantal waarschuwingen van een gebruiker")
    .setFooter("©️Nintendo's Mansion")
    .setTimestamp();

    if(!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send("Jij kan dit niet doen");

    return message.channel.send(helpstaffEmbed);
    }


module.exports.help = {

    name: "helpall"
    
}