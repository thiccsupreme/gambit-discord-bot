const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "thighs",
    run: async (client, msg) => {
        if (!msg.channel.nsfw) return msg.reply("Please use this command in an NSFW channel")
        superagent.get('https://nekobot.xyz/api/image').query({ type: 'thigh' }).end((err, response) => {

            const embed = new Discord.MessageEmbed()
                .setColor(0x5126c7)
                .setImage(response.body.message)
                .setFooter("NSFW!")
                .setTimestamp()
            msg.channel.send(embed);
        })
    }
};