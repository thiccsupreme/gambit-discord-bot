module.exports = {
    name: "setbotnick", 
    run: (client, message, args) => {
        if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You do not have permission to use this command");
        var nickname = message.content.split (" ").slice (1).join (" ");
        message.guild.members.get(client.user.id).setNickname(nickname)
    }
}