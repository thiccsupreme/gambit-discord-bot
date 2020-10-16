const Discord = require("discord.js");

module.exports = {
    name: "unmute",
    category: "botinfo",
    description: "unmutes a user",
    run: (client, message, args) => {
        if (!message.member.roles.find(r => r.name === "KICK_MEMBERS")) return message.channel.send("You do not have permission to send this command")

        let mutedperson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
        if (!mutedperson) return message.reply("We couldn't find this member, please try again");

        let mainrole1 = message.guild.roles.find(role => role.name === "MUTED");
        let muterole1 = message.guild.roles.find(role => role.name === "GAMERS");

        if (!muterole1) message.reply("Couldn't find this role");


        mutedperson.removeRole(mainrole1.id);
        mutedperson.addRole(muterole1.id);

        const Embed9 = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setDescription(`${mutedperson.user} has now been unmuted!`)
            .setTimestamp()
            .setFooter("Made by @FootlockerRU")
        message.channel.send(Embed9)
    }}
