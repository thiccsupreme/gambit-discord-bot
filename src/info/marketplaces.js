const Discord = require("discord.js");

module.exports = {
    name: "marketplaces",
    category: "info",
    description: "makes a list of all the marketplaces",
    run: (client, message, args) => {
        const Embed2 = new Discord.MessageEmbed()
                .setColor(0x5126c7)
                .addField('**__Tidal Marketplace__**', "[Discord Link](https://discord.gg/tidal) | [Twitter](https://twitter.com/tidalmarket)")
                .addField('**__Botmart__**', "[Discord Link](https://discord.gg/botmart) | [Twitter](https://twitter.com/botmrt)")
                .addField('**__BotBroker__**', "[Website](https://https://botbroker.io/) | [Twitter](https://twitter.com/BotBroker)")
                .addField('**__MRKT__**', "[Discord Link](https://discord.gg/vsGne7g) | [Twitter](https://twitter.com/OfficialMRKT)")
                .setTimestamp()
                .setFooter("Made by @FootlockerRU")
            message.channel.send(Embed2); 
        }
    }
