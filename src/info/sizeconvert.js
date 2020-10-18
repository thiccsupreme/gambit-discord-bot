const Discord = require("discord.js");

const sizesUS = [
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
    "13"
];

const sizesEU = [
    "38",
    "38.5",
    "39",
    "40",
    "41",
    "42",
    "43",
    "43.5",
    "44",
    "44.5",
    "45",
    "45.5",
    "46",
    "46.5",
    "47"
];

module.exports = {
    name: "convert",
    run: (client, message, args) => {


        for (var i = 0; i < sizesUS.length; i++) {


            if (args[0] > 13 || args[0] < 6) {
                return message.channel.send("The supported size range is 6-13 US Mens");
            }

            if (args[0] == sizesUS[i]) {

                const embed = new Discord.MessageEmbed()
                    .setTitle("Shoe Size Converter")
                    .setColor(0x5126c7)
                    .setDescription(`**[This](http://www.statman.info/conversions/mens_shoes.html)** site was used to make this converter!`)
                    .addField(`Inputted US Size:`, args[0])
                    .addField(`EU Size:`, sizesEU[i])
                    .addField(`UK Size:`, sizesUS[i] - 0.5)
                    .setFooter("Made by @FootlockerRU")
                    .setTimestamp()
                message.channel.send(embed)
            }
        }
    }
}
