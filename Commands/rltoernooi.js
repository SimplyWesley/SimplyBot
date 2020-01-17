const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    //!announcement

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan dit niet doen");

    message.delete();

    var splitser = "//";

    if(args[0] == null){

        var useMessage = new discord.RichEmbed()
            .setTitle("Hoe te gebruiken:")
            .setColor("#fa9600")
            .setDescription(`Maak een announcement door gebruik te maken van: \n!announcement <Titel> ${splitser} <Bericht> ${splitser} <Algemene informatie> ${splitser} <Toernooi informatie> ${splitser} <Extra informatie> ${splitser} <Kanaal>`)
            .setFooter("©️Nintendo's Mansion")
            .setTimestamp();

            return message.channel.send(useMessage)

    }

    args = args.join(" ").split(splitser);

    if(args[5] == undefined) args[5] = "ideas";

    var options = {

        titel: args[0] || "Rocket League Announcement",
        bericht: args[1] || "Geen info meegegeven",
        algemeen: args[2] || "Geen info meegegeven",
        toernooi: args[3] || "Geen info meegegeven",
        extra: args[4] || "Geen bericht meegegeven",
        kanaal: args[5].trim()

    }

    var announcer = message.author;

    var announcementEmbed = new discord.RichEmbed()
        .setThumbnail("https://media1.tenor.com/images/70d595fdbe2755ac932c2e859504fa69/tenor.gif?itemid=7640468")
        .setTitle(options.titel)
        .setDescription(options.bericht)
        .addField("Algemene informatie:", options.algemeen)
        .addField("Toernooi informatie:", options.toernooi)
        .addField("Extra informatie:", options.extra)
        .setColor("#fa9600")
        .setImage("https://bit.ly/30trQcZ")
        .setFooter(`©️Nintedo's Mansion`, "https://bit.ly/2uYYSGa")
        .setTimestamp();

    var announcementChannel = message.guild.channels.find(c => c.name == options.kanaal);
    if(!announcementChannel) return message.channel.send("Kan het kanaal niet vinden");

    announcementChannel.send(announcementEmbed);

}
  
  module.exports.help = {
      name: "rltoernooi"
  }