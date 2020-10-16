const Twit = require("twit");
const config = require("../../config.json");
const Discord = require("discord.js");

var T = new Twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret
});

module.exports = {
    name: "twitter",
    run: (client, message, args) => {
        if (args[0]) {
            T.get('/users/show', { screen_name: args[0] }, (err, data, response) => {
                if (!err) {
                    const embed = new Discord.MessageEmbed()
                        .setColor(0x1DCAFF)
                        .setAuthor(data.name, data.profile_image_url)
                        .setThumbnail(`${data.profile_image_url}`)
                        .addField("**Username:**", `@${data.screen_name}`)
                        .addField("**Bio:**", data.description.length === 0 ? "N/A" : data.description, true)
                        .addField("**Location:**", data.location.length === 0 ? "N/A" : data.location, false)
                        .addField("Protected Account:", data.protected ? "Yes ✅" : "Nope ❌")
                        .addField("**Date of Creation:**", data.created_at, false)
                        .addField("**Followers:**", data.followers_count, true)
                        .addField("**Following:**", data.friends_count, true)
                        .setFooter("Made by @FootlockerRU")
                        .setThumbnail()
                    message.channel.send(embed);
                    // console.log(data)
                } else {
                    const embed1 = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setTitle("Error!")
                        .setDescription(`Please try again or contact @FootlockerRU`)
                        .addField("Error Type:", err.message, true)
                        .addField("Error Code:", err.statusCode, true)
                    message.channel.send(embed1);
                    console.log(err)
                }

            })
        }
    }
};