const Discord = require("discord.js");
const ms = require("ms");


module.exports = {
    name: "mute",
    category: "info",
    description: "mutes a user for x amt of time",
    run: (client, message, args) => {
        if (!message.member.roles.find(r => r.name === "KICK_MEMBERS")) return message.channel.send("You do not have permission to send this command")

            let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if (!user) return message.reply("We couldn't find this member, please try again");

            let role1 = message.guild.roles.find(role => role.name === "GAMERS");
            let role2 = message.guild.roles.find(role => role.name === "MUTED");

            if (!role2) message.reply("Couldn't find this role");

            let time = args[1];

            if (!time) {
                return message.reply("You did not specify the length of the mute!");
            }


            user.removeRole(role1.id);
            user.addRole(role2.id);

            const Embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setDescription(`${user.user} has now been muted for ${ms(ms(time))}`)
            .setTimestamp()
            message.channel.send(Embed)

            setTimeout(function () {
                user.addRole(role1.id)
                user.removeRole(role2.id);
                const Embed1 = new Discord.MessageEmbed()
                .setColor(0x5126c7)
                .setDescription(`${person.user} has now been unmuted!`)
                .setTimestamp()
                message.channel.send(Embed1)
            }, ms(time));
            
    }
}