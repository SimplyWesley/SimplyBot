const discord = require("discord.js");

const moment = require('moment-timezone');

module.exports.run = async(bot, message, args) => {

    var x = new Date();
    
    var y = moment.tz(x, "Europe/Brussels");

    var time = y.format('hh:mm:ss a');

    var timeEmbed = new discord.RichEmbed()
    
        .setTitle("Time")
        .addField("Het is op dit moment ", time)
        .setColor("#56f442")
        .setFooter("©️Nintedo's Mansion")
        .setTimestamp();
        
        return message.channel.send(timeEmbed);

}

module.exports.help = {
    name: "time"
}