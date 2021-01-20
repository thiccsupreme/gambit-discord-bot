const Discord = require("discord.js");

module.exports = {
    name: "purge",
    run: async (client, message, args) => {

        if (message.member.hasPermission("ADMINISTRATOR")) {

            if (!args[0]) return message.channel.send("Please specify how many messages you want to purge");

            if (isNaN(args[0])) return message.channel.send("Please enter a real number");

            if (args[0] > 100) return message.channel.send("I cannot clear more than 100 messages");

            if (args[0] < 1) return message.channel.send("You must clear at least 1 message");

            await message.channel.messages.fetch({
                limit: args[0]
            }).then(msgCount => {
                message.channel.bulkDelete(msgCount)
                const embed = new Discord.MessageEmbed()
                    .setAuthor("Successfully Cleared Messages")
                    .setColor("GREEN")
                    .setDescription(`**Successfully cleared ${args[0]} messages from this channel!**`)
                    .setTimestamp()
                message.channel.send(embed);
            })
        } else {
            message.channel.send("You do not have the proper permissions to use this command.")
        }
    }
}
