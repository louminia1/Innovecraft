const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Innovecraft, **Help");
    console.log("Innovecraft a bien etait connecter");
});

bot.login(process.env.TOKEN);
