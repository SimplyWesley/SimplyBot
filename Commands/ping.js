module.exports.run = async(bot, message, args) => {

    // message.channel.send("Pong " + (message.createdTimestamp - Date.now()) + "ms"); 
    message.channel.send("Pong " + (Date.now() - (message.createdTimestamp)) + "ms"); 

}

module.exports.help = {
    name: "ping"
}