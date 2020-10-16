const Discord = require("discord.js")

module.exports = {
    name: "serverinfo",
    category: "info",
    description: "shows server information",
    run: (client, message, args) => {

        let Embed = new Discord.Message()
            .setColor(0xdfa914)
            .setTitle("Server Info")
            .setThumbnail(message.guild.iconURL)
            .setColor(0x5126c7)
            .setAuthor(`${message.guild.name}`, message.guild.iconURL)
            .addField("**Guild Name:**", `${message.guild.name}`)
            .addField("**Guild Owner:**", `${message.guild.owner}`)
            .addField("**Created On:**", `${message.guild.createdAt}`)
            .addField("**Member Count:**", `${message.guild.memberCount}`, true)
            .addField("**Role Count:**", `${message.guild.roles.size}`, true)
            .addField("**Channel Count:**", `${message.guild.channels.size}`, true)
            .setFooter("Made by @FootlockerRU")
        message.channel.send(Embed);
    }
}
