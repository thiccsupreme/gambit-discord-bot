const snekfetch = require('snekfetch');
const Discord = require('discord.js');

module.exports = {
    name: "ass",
    run: async (client, msg) => {
        if (!msg.channel.nsfw) return msg.reply("Please use this command in an NSFW channel")

        const id = [Math.floor(Math.random() * 4923)];
        const res = await snekfetch.get(`http://api.obutts.ru/butts/${id}`);
        const preview = res.body[0]["PREVIEW".toLowerCase()];
        const image = `http://media.obutts.ru/${preview}`;

        const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setImage(image)
            .setFooter("NSFW!")
            .setTimestamp()
        msg.channel.send(embed)
    }
}