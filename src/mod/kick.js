const Discord = require("discord.js");

module.exports = {
    name: "kick",
    run: (client, message) => {
        let member = message.mentions.users.first();

        if (message.member.hasPermission("ADMINISTRATOR")) {
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                const embed = new Discord.MessageEmbed()
                    .setTitle("Successfully Kicked the Mentioned User!")
                    .setColor("GREEN")
                    .setThumbnail(member.displayAvatarURL())
                    .addField("Username", memberTarget, true)
                    .addField("ID", member.id, true)
                    .setTimestamp()
                message.channel.send(embed)
            } else {
                const embed1 = new Discord.MessageEmbed()
                    .setTitle("Error")
                    .setColor("RED")
                    .setDescription("Error: Could not kick the mentioned member! Please make sure you have correctly formatted the command!\n\n`.kick <user>`")
                message.channel.send(embed1)
            }
        } else {
            message.channel.send("You do not have the proper permissions to use this command.")
        }
    }
}
