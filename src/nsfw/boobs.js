const snekfetch = require('snekfetch');
const Discord = require('discord.js');

module.exports = {
    name: "boobs",
    run: async (client, msg) => {
        if (!msg.channel.nsfw) return msg.reply("Please use this command in an NSFW channel")

        const id = [Math.floor(Math.random() * 10930)];
        const res = await snekfetch.get(`http://api.oboobs.ru/boobs/${id}`);
        const preview = res.body[0]["PREVIEW".toLowerCase()];
        const image = `http://media.oboobs.ru/${preview}`;

        const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setImage(image)
            .setFooter("NSFW!")
            .setTimestamp()
        msg.channel.send(embed)
    }
}