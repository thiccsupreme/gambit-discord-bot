module.exports = {
    name: "nick",
    run: (client, message, args) => {
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You do not have permission to use this command");

        try {
            const changeNickUser = message.mentions.users.first();
            const usr = message.guild.members.cache.get(changeNickUser.id);

            if (!changeNickUser || !usr) {
                message.channel.send("Please provide a username of someone in this guild")
            }

            args.shift();s

            const newNick = args.join(" ");

            usr.setNickname(newNick);

            message.channel.send(`Your intended user's nickname has been set to ${usr}`)
        } catch (e) {
            message.channel.send(`There's been an error: (${e}) :pensive:\nPlease try again!`)
        }
    }
}
