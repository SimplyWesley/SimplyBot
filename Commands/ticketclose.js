const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // Id van category van tickets.
    const categoryId = "662396132562829342";

    // Als bericht in ticket kanaal is dan verwijder kanaal ander zend bericht
    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else {

        message.channel.send("Gelieve dit commando in een ticket kanaal te doen.");

    }

    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Het ticket " + message.channel.name + " is succesvol gesloten")
        .setDescription("Het ticket " + message.channel.name + " is gesloten.")
        .setColor("#fa9600")
        .setFooter("©️Nintendo's Mansion")
        .setTimestamp();

    // Vind kanaal voor de logs.
    var logChannel = message.guild.channels.find("name", "logs");
    if (!logChannel) return message.channel.send("Kanaal bestaat niet");

    logChannel.send(embedCloseTicket);

}

module.exports.help = {
    name: "close",
    description: "Sluit een ticket af"
}