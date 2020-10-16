const Discord = require("discord.js");

module.exports = {
    name: "snipe",
    run: (client, message) => {

        const msg = client.snipes.get(message.channel.id)
        if (!msg) return message.channel.send("There are no deleted messages")
        const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setAuthor(msg.author, msg.av)
            .setDescription(msg.content)
        if (msg.image) embed.setImage(msg.image)
        message.channel.send(embed)
    }
}
