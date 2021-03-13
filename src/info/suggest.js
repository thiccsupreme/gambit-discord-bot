const Discord = require("discord.js");

module.exports = {
    name:"suggest", // Needs a #suggestions channel in the guild for the command to work
    run: (client, message, args) => {
        let channel = message.guild.channels.cache.find(channel => channel.name === "suggestions");
        
        if(!channel) {
            message.channel.send("There is no channel in this server named `#suggestions`");
        }
        
        let suggestion = args.join(" ");
        
        const embed = new Discord.MessageEmbed()
        .setColor(0x5126c7)
        .setAuthor(message.author.tag, message.author.displayAvatarURL( { dynamic: true }))
        .setDescription(`**${suggestion}**`)
        .setTimestamp()
        .setFooter("@alwaysflushed")

        channel.send(embed).then(msg => { 
            msg.react("👍")
            msg.react("👎")
            message.delete()
        });
    }
}
