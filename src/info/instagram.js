const Discord = require("discord.js");
const axios = require("axios");


module.exports = {
    name: "instagram",
    run: async (client, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.reply("Please specify a user!")
                .then(message.delete(5000));
        }

        let url, response, account, details;
        try {
            url = `https://instagram.com/${args[0]}/?__a=1`;
            response = await axios.get(url)
            account = response.data
            details = account.graphql.user
        } catch (error) {
            return message.channel.send(`Please specify a real account!`)
        }


        const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setTitle(details.full_name)
            .setURL(details.external)
            .setThumbnail(details.profile_pic_url_hd)
            .setFooter("Made by @FootlockerRU")
            .addField("Username:", `@${details.username}`, true)
            .addField("Full Name:", details.full_name == 0 ? "N/A" : details.full_name, true)
            .addField("Bio:", details.biography.length == 0 ? "N/A" : details.biography, false)
            .addField("Followers:", details.edge_followed_by.count, true)
            .addField("Following:", details.edge_follow.count, true)
            .addField("Posts:", details.edge_owner_to_timeline_media.count, true)
            .addField("Private Account:", details.is_private ? "Yes 🔐" : "Nope 🔓", true)
            .addField("Business Account:", details.is_business_account ? "Yes ✅" : "Nope ❌", true)
            .addField("Highlight Reel:", details.highlight_reel_count == 0 ? "0" : details.highlight_reel_count, true)
        message.channel.send(embed);
    }
};