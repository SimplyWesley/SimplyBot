const discord = require("discord.js");
const botconfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./Commands/", (err, files) => {
    if (err) console.log(err);
    var prefix = botconfig.prefix;
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.lengt <= 0) {
        console.log("Kon geen files vinden")
        return;
    }
    jsfiles.forEach((f, i) => {
        let fileGet = require(`./Commands/${f}`);
        bot.commands.set(fileGet.help.name, fileGet);
    })
    console.log(`Alle files zijn geladen`)
});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`);

    bot.user.setActivity("Updates maken", { type: "PLAYING" });

});



bot.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    var prefix = botconfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));
    
    if(commands) commands.run(bot, message, arguments);


    var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

    var msg = message.content.toLowerCase();

    for (var i = 0; i < swearWords["vloekWoorden"].length; i++) {

            if (msg.includes(swearWords["vloekWoorden"][i])) {

                message.delete();
            
                var swearEmbed = new discord.RichEmbed()
                .setDescription("**Gelieve niet te schelden of reclame te maken**")
                .setColor("#fa9600");

                message.channel.send(swearEmbed).then(msg => msg.delete(5000));
                
                return message.author.send(swearEmbed);
            }
    }

});


bot.login(process.env.token);