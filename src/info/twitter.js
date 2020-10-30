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

                    const fulldate = data.created_at.split(" ");

                    const embed = new Discord.MessageEmbed()
                        .setColor(0x1DCAFF)
                        .setAuthor(data.name, data.profile_image_url, `https://twitter.com/${data.screen_name}`)
                        .setThumbnail(`${data.profile_image_url}`)
                        .addField("**Username:**", `@${data.screen_name}`)
                        .addField("**Bio:**", data.description.length === 0 ? "N/A" : data.description,false)
                        .addField("**Date of Creation:**", `${fulldate[0]} ${fulldate[1]} ${fulldate[2]} ${fulldate[5]}`, false)
                        .addField("**Location:**", data.location.length === 0 ? "N/A" : data.location, true)
                        .addField("Protected Account:", data.protected ? "Yes ✅" : "Nope ❌", true)
                        .addField("Verified Account:", data.verified ? "Yes ✅" : "Nope ❌", true)
                        .addField("**Followers:**", data.followers_count, true)
                        .addField("**Following:**", data.friends_count, true)
                        .addField("**Tweet Count:**", data.statuses_count, true)
                        .setFooter("Made by @FootlockerRU")
                        .setTimestamp()
                    message.channel.send(embed);
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
