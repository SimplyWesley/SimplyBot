const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
   
    // var botIcon = bot.user.displayAvatarURL;

    // var helpEmbed = new discord.RichEmbed()
    // .setDescription("Commands")
    // .setColor("#fa9600")
    // .setThumbnail(botIcon)
    // .setDescription("**SimplyBot** \n\n **__Commands__** \n!help - Bekijk deze lijst \n!serverinfo - Bekijk de info over de server \n!botinfo - Bekijk de info over de SimplyBot \n!ticket - Maak een ticket aan \n!avatar - Bekijk de profielfoto van de opgevraagde persoon \n!regels - Bekijk de regels \n!idee - Maak een idee aan \n!ping - Check de ping van de server \n!leden - Bekijk het aantal leden in de server \n!userinfo - Bekijk informatie over de opgevraagde gebruiker")
    // .setFooter("©️Nintendo's Mansion")
    // .setTimestamp();

    

    var botIcon = bot.user.displayAvatarURL;

    var helpEmbed = new discord.RichEmbed()
    .setDescription("Commands")
    .setColor("#fa9600")
    .setThumbnail(botIcon)
    .setDescription("**SimplyBot** \n\n **__Commands__**")
    .addField("!help", "Bekijk deze lijst")
    .addField("!8ball", "Stel een vraag aan de heilige 8ball")
    .addField("!avatar", "Bekijk de profielfoto van de opgevraagde gebruiker")
    .addField("!botinfo", "Bekijk info over mij")
    .addField("!leden", "Bekijk het aantal leden in deze discord")
    .addField("!ping", "Bekijk mijn ping")
    .addField("!regels", "Bekijk de regels")
    .addField("!serverinfo", "Bekijk info over de server")
    .addField("!idee", "Maak een idee aan")
    .addField("!ticket", "Maak een ticket aan")
    .addField("!userinfo", "Bekijk info over de opgevraagde gebruiker")
    .setFooter(`©️ Nintedo's Mansion`, "https://bit.ly/2uYYSGa")
    .setTimestamp();

    message.channel.send(helpEmbed);
}

module.exports.help = {

    name: "help"
    
}