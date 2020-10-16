const Discord = require("discord.js");


module.exports = {
    name: "av",
    category: "info",
    description: "sends an embed with the author's pfp",
    run: (client, message, args) => {
        let user = message.mentions.users.first() || message.author
        const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setAuthor(user.tag, user.displayAvatarURL)
            .setImage(user.displayAvatarURL)
        message.channel.send(embed);

    }
};