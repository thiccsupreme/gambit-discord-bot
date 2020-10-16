const Discord = require("discord.js");

module.exports = {
    name: "uptime",
    category: "info",
    description: "shows how long the bot has been up",
    run: (client, message, args) => {

        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
        }
        const embed = new Discord.MessageEmbed()
            .setAuthor(`GambitIO`)
            .setColor(0x5126c7)
            .setDescription(`I have been online for: ${duration(client.uptime)}`)
            .setTimestamp()
            .setFooter("Made by @FootlockerRU")
            message.channel.sendEmbed(embed);
    }
}