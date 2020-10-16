const Discord = require("discord.js");

module.exports = {
    name: "delaycalc",
    category: "info",
    description: "calculates delay",
    run: (client, message, args) => {
        if (!args[0] || !args[1]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("ERROR")
                .setDescription("**Usage: ?delay <number of tasks> <number of proxies>**")
                .setColor("RED")
                .setFooter("Made by @FootlockerRU")
                .setTimestamp()
            msg.channel.send(embed);

        } else {
            const embed1 = new Discord.MessageEmbed()
                .setAuthor("Delay Calculator")
                .setColor(0x5126c7)
                .addField("Amount of Tasks:", args[0], true)
                .addField("Amount of Proxies:", args[1])
                .addField("Recommended Delay:", `${(3500 / (args[1] / args[0])).toFixed(0)}ms`)
                .setFooter("Made by @FootlockerRU")
            message.channel.send(embed1)
        }
    }
};