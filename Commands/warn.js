const discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async(bot, message, args) => {

    //warn gebruiker reden

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, jij kunt deze gebruiker niet warnen");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een gebruiker op of deze gebruiker is niet op deze server");

    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je kunt deze gebruiker niet warnen");

    var reason = args.join(" ").slice(22);


    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("Warn")
        .setColor("#fa9600")
        .addField("Warned gebruiker", user)
        .addField("Gewarned door", message.author)
        .addField("Aantal warns", warns[user.id].warns)
        .addField("Reden", reason)
        .setFooter("©️Nintendo's Mansion")
        .setTimestamp();

    var warnChannel = message.guild.channels.find(`name`, "logs");
    if (!warnChannel) return message.channel.send("Kan het kanaal niet vinden");

    warnChannel.send(warnEmbed);
    message.channel.send("Deze gebruiker is succesvol gewarnt!");

    if (warns[user.id].warns == "3"){

        var warnmessage = new discord.RichEmbed()
        .setDescription("PAS OP " + user)
        .setColor("#fa9600")
        .addField("Bericht", "Nog één warn en je krijgt een kick!!!!");

        message.channel.send(warnmessage);
        
    }
    if (warns[user.id].warns == "4"){ 

        message.guild.member(user).ban(reason);
        message.channel.send(`${user} is verbannen!!`);
        
    }

}

module.exports.help = {
    name: "warn"
}