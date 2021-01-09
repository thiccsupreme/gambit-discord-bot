const Discord = require("discord.js");
const axios = require("axios");


module.exports = {
    name: "variant",
    run: (client, message, args) => {
        var url = args[0];

        if (!url) {
            message.reply("Please provide a valid Shopify URL!")
        }

        const embed = new Discord.MessageEmbed()
        axios.get(`${url}.json`).then(
            (response) => {
                if (response.data.product.variants) {
                    const { product } = response.data
                    embed.setAuthor(product.title, product.images[0].src, url)
                    embed.setColor(0x5126c7)
                    product.variants.forEach((variant) => {
                        embed.addField(variant.title, variant.id, true)
                    })
                    embed.setFooter("@FootlockerRU")
                    message.channel.send(embed)
                } else {
                    embed.setTitle("ERR")
                    embed.setColor("RED")
                    embed.setDescription("No variants found.")
                    embed.setFooter("@FootlockerRU")
                    message.channel.send(embed)
                }
            }, (e) => {
                embed.setTitle('Error')
                embed.setDescription(`\`\`\`\nPlease input a valid Shopify product link! If there is an error with a legitimate link, the Spotify API is down!\`\`\``)
                embed.setFooter("@FootlockerRU")
                message.channel.send(embed)
            }
        )
    }
}
