const Discord = require("discord.js");

module.exports = {
    name: "whois",
    category: "info",
    description: "sends an embed with the author's info",
    run: (client, message, args) => {
        let member = message.mentions.members.first() || message.member,
            user = member.user;

        let embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setThumbnail(message.author.displayAvatarURL)
            .setAuthor(`${message.author.username}'s Info`, message.author.displayAvatarURL)
            .addField("**User:**", `<@${message.author.id}>`, true)
            .addField("**Full Username:**", `${message.author.username}#${message.author.discriminator}`, true)
            .addField("**Presence:**", `${message.author.presence.status}`, true)
            .addField("**Date of Account Creation:**", `${message.author.createdAt}`, true)
            .addField("**Server Join Date:**", member.joinedAt)
            .addField('Roles:', member.roles.map(r => `${r}`).join(' '), true)
            .setFooter(`ID: ${message.author.id}`)
        message.channel.send(embed);
    }
}