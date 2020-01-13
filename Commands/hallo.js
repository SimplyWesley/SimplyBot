const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("Hai");

}

module.exports.help = {
    name: "hallo"
}