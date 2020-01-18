const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    //!announcement

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan dit niet doen");

    var splitser = "//";

    if(args[0] == null){

        var useMessage = new discord.RichEmbed()
            .setTitle("Hoe te gebruiken:")
            .setColor("#fa9600")
            .setDescription(`Maak een announcement door gebruik te maken van: \n!announcement <Titel> ${splitser} <Bericht> ${splitser} <Kanaal>`)
            .setFooter(`©️ Nintedo's Mansion`, "https://bit.ly/2uYYSGa")
            .setTimestamp();

            return message.channel.send(useMessage)

    }

    message.delete();

    args = args.join(" ").split(splitser);

    if(args[2] == undefined) args[2] = "ideas";

    var options = {

        titel: args[0] || "Announcement",
        bericht: args[1] || "Geen info meegegeven",
        kanaal: args[2].trim()

    }

    var announcer = message.author;

    var announcementEmbed = new discord.RichEmbed()
        .setTitle(options.titel)
        .setDescription(options.bericht)
        .setFooter(`©️ Nintedo's Mansion`, "https://bit.ly/2uYYSGa")
        .setTimestamp();

    var announcementChannel = message.guild.channels.find(c => c.name == options.kanaal);
    if(!announcementChannel) return message.channel.send("Kan het kanaal niet vinden");

    announcementChannel.send(announcementEmbed);

}
  
  module.exports.help = {
      name: "announcement"
  }