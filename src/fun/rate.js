const Discord = require("discord.js");

module.exports = {
    name: "rate",
    run: (client, message, args) => {
        let ratedItem = message.content.split(/\s+/g).slice(1).join(" ");
        if (!ratedItem) return message.channel.send("Please provide and item to be rated");

        const rating = Math.floor(Math.random() * 10) + 0;

        const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setTitle("Get a Rating!")
            .setDescription(`I'd give ${ratedItem} a ${rating}/10`)
            .setFooter("Made with love by @FootlockerRU <3")
        message.channel.send(embed);
    }
}