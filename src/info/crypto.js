const Discord = require("discord.js");
const cc = require("cryptocompare");
global.fetch = require('node-fetch');


const config = fs.readFileSync('config.json');
const json = JSON.parse(config)
var apiKey = json.API_KEY


cc.setApiKey(apiKey);

module.exports = {
    name: "crypto",
    category: "info",
    descriptiom: "n/a",
    run: async (client, msg, args) => {
        if (!args[0] || !args[1]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("ERROR")
                .setDescription("**Usage: ?crypto <crypto currency> <currency of choice>**")
                .setColor("RED")
                .setFooter("Made by @FootlockerRU")
                .setTimestamp()
            msg.channel.send(embed);
        } else {
            cc.priceFull(args[0].toUpperCase(), args[1].toUpperCase())
                .then(results => {
                    let allData = results[Object.keys(results)[0]];
                    let data = allData[Object.keys(allData)[0]];

                    const embed1 = new Discord.MessageEmbed()
                        .setTitle("Crypto Converter")
                        .setColor(0x5126c7)
                        .setThumbnail(`https://www.cryptocompare.com${data.IMAGEURL.toString()}`, true)
                        .addField('Current Price', data.PRICE.toString(), true)
                        .addField('24 Hour Change', data.CHANGE24HOUR.toFixed(2).toString(), true)
                        .addField("% Change over the previous 24hr", `%${data.CHANGEPCT24HOUR.toFixed(2).toString()}`, false)
                        .addField("Hour Low", data.LOWHOUR.toString(), true)
                        .addField("Hour High", data.HIGHHOUR.toString(), true)
                        .addBlankField(true)
                        .addField("Daily Low", data.LOWDAY.toString(), true)
                        .addField("Daily High", data.HIGHDAY.toString(), true)
                        .addBlankField(true)
                        .setTimestamp()
                        .setFooter("Made by @FootlockerRU")
                        msg.channel.send(embed1);
                })
        }
    }
}