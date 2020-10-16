const Discord = require("discord.js");
const fetch = require("node-fetch");


module.exports = {
    name: "convert",
    run: (client, message, args) => {
        const init = args[0]
        const amt = args[1]
        const final = args[2]

        if (typeof init == 'string' && !isNaN(amt) && typeof final == 'string') {
            calculate();
            } else {
                message.channel.send("Format must be `.convert <initial currency> <amount> <final currency>`");
            }

            function calculate() {
                fetch('https://free.currconv.com/api/v7/convert?q=' + init + '_' + final + '&compact=ultra&apiKey=6635fc3a4ad72b214f5e')
                .then(res => res.json())
                .then(res => {
                    const rate = JSON.stringify(res).substring(11,JSON.stringify(res).length-1);
                    const finalAmt = (amt * rate).toFixed(2);
                    const embed = new Discord.MessageEmbed()
                    .setAuthor("Currency Converter")
                    .setColor(0x5126c7)
                    .setDescription(amt + " " + init + " is " + finalAmt + " " + final)
                    .setFooter("Rate: " + '1 ' + init + ' = ' + rate + ' ' + final)
                    message.channel.send(embed)
                })
            }
    }
}