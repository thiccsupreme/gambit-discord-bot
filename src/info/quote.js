const Discord = require("discord.js");

module.exports = {
    name: "quote",
    run: async (client, message, args) => {

        const channelID = args[0]
        const msgID = args[1]

        const clientAV = client.user.displayAvatarURL

        if (!channelID || !msgID) {
            return message.channel.send("Please use the format `.quote <channel id> <message id>`")
        }

        try {
            const channel = client.channels.cache.get(channelID);

            const msg = await channel.messages.fetch(msgID)


            const msgContent = msg.content

            const author = msg.author.tag


            const embed = new Discord.MessageEmbed()
                .setTitle(`Quote a User`)
                .setColor(0x5126c7)
                .setDescription(`Channel ID: __${channelID}__\nMessage ID: __${msgID}__\n Author: __${author}__`)
                .addField("Message Content:", `**${msgContent}**`, false)
                .setFooter(client.user.tag, client.user.displayAvatarURL)
            message.channel.send(embed)

        } catch (err) {
            if (err) {
                return message.channel.send("Please use the format `.quote <channel id> <message id>`")
            }
        }
    }
}
