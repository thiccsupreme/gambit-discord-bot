const Discord = require("discord.js");

module.exports = {
    name: "ban",
    category: "info",
    description: "bans the user from the guild",
    run: (client, message, args) => {
        if (!message.member.roles.find(r => r.name === "KICK_MEMBERS")) return message.channel.send("You do not have permission to send this command")

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.ban().then(() => {
                        const Embed = new Discord.MessageEmbed()
                        .setColor(0x5126c7)
                        .setDescription(`Successfully banned ${member}`);
                        message.channel.send(Embed);
                    }).catch(err => {
                        const Embed1 = new Discord.MessageEmbed()
                          .setColor(0x5126c7)
                          .setDescription(`I was unable to ban the member`);
                          message.channel.send(Embed1);
                        console.log(err);
                    });
                } else {
                    message.reply("That user is not in this server")
                }
            } else {
                message.reply('Please specify a user');

            }
    }
}
