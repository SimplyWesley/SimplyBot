const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var gebruikers = message.guild.members.filter(member => !member.user.bot).size;

    return message.channel.send(`Momenteel hebben we ${gebruikers} leden in onze Discord server! \n \nWil jij helpen om er meer te krijgen? Deel dan deze link met je vrienden: https://discord.gg/wjkXfuM`);

}

module.exports.help = {
    name: "leden"
}