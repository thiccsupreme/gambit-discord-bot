const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "shopify",
    run: async (client, message, args) => {

        const url = args[0];
        if (!url) {
            message.channel.send("Please input a valid URL \n*(also make sure to include the `http://` or the `https://` part of the URL)*");
        }

        if (url.startsWith("https://") || url.startsWith("http://")) {
            let website = args[0].toLowerCase()

            website = website.substring(website.indexOf('://') + 3)
            website = website.substring(0, website.indexOf('/') !== -1 ? website.indexOf('/') : website.length)
            website = 'https://' + website

            axios.get(website + '/admin')
                .then((response) => {
                    const isShopifySite = response.request.res.responseUrl.indexOf('myshopify.com')
                    const embed = new Discord.MessageEmbed()
                    embed.setAuthor('Shopify Site Checker', "https://i.imgur.com/bxQgHNB.png", website)
                    embed.setColor(0x5126c7)
                    embed.setDescription(`**This website is ${isShopifySite ? 'a' : 'not a'} Shopify site!\n\nClick [here](${website}) to visit the site!**\n`)
                    embed.setFooter("@FootlockerRU")
                    embed.setTimestamp()
                    message.channel.send(embed)
                })
                .catch(() => {
                    const embed = new Discord.MessageEmbed()
                    embed.setAuthor('Shopify Site Checker', "https://i.imgur.com/bxQgHNB.png", website)
                    embed.setColor(0x5126c7)
                    embed.setDescription('**This website is not a Shopify site :(**')
                    embed.setFooter("@FootlockerRU")
                    embed.setTimestamp()
                    message.channel.send(embed)
                })
        } else {
            message.channel.send("Please include the `http://` or the `https://` part of the URL");
        }
    }
}
