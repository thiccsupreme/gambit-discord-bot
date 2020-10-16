const Discord = require("discord.js");

module.exports = {
    name: "addrole",
    category: "info",
    description: "adds a role to the user",
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You do not have permission to use this command");
        let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0]);
        if (!rMember) return message.reply("Please provide a person to apply the specified role to");
        let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
        if (!role) return message.reply("Please provide a role to apply");


        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("You do not have permission to use this command");

        if (rMember.roles.has(role.id)) {
            return message.reply(`${rMember.displayName} already has this role`)
        } else {
            await rMember.addRole(role.id).catch(e => console.log)
            const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setDescription(`${role.name} has been given to ${rMember.displayName}`)
            message.channel.send(embed);
        }
    }
}