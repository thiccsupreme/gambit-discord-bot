const Discord = require("discord.js");
const isUp = require("is-up");

module.exports = {
    name: "status",
    run: async (client, message, args) => {

        const url = args[0];
        if (!url) return message.channel.send("Please input a valid URL \n*(also make sure to include the `http://` or the `https://` part of the URL)*");
        if (url.startsWith("https://") || url.startsWith("http://")) {

            const check = await isUp(url);

            if (check === false) {
                const embed = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setDescription("**Site is down** 🚫")
                    .setFooter("Made by @FootlockerRU")
                    .setTimestamp()
                message.channel.send(embed)
            } else {
                const embed1 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setDescription("**Site is up** ✅")
                    .setFooter("Made by @FootlockerRU")
                    .setTimestamp()
                message.channel.send(embed1);
            }
        } else {
            message.channel.send("Please include the `http://` or the `https://` part of the URL");
        }

    }
};