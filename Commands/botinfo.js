const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;
        
        var botEmbed = new discord.RichEmbed()
            .setDescription("**SimplyBot info**")
            .setColor("#fa9600")
            .setThumbnail(botIcon)
            .addField("Bot naam", bot.user.username)
            .addField("Gemaakt door", "SimplyWesley")
            .addField("Gemaakt op", bot.user.createdAt)
            .setFooter("©️Nintendo's Mansion")
            .setTimestamp();

        return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "botinfo"
}