const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    run: (client, message) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`**${message.guild.name}'s Info**`)
            .setThumbnail(message.guild.iconURL())
            .setColor(0x5126c7)
            .addField("Server Owner", `<@${message.guild.ownerID}>`, false)
            .addField("Server Creation Date", new Date(message.guild.createdAt).toLocaleDateString(), false)
            .addField("Member Count", message.guild.memberCount, true)
            .addField("MFA Level", message.guild.mfaLevel, true)
            .addField("Server Region", message.guild.region, true)
            .setFooter(`ID: ${message.guild.id}`)
        message.channel.send(embed);
    }
}
