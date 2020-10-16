const Discord = require("discord.js");


const fees = {
    "PayPal": x => (0.029 * x) + 0.3,
    "eBay": x => 0.1 * x + fees.PayPal(x),
    "Stripe": x => (0.029 * x) + 0.3,
    "Mercari": x => 0.1 * x,
    "GOAT": x => (x * 0.095) + 5,
    "StockX | Level 1": x => 0.125 * x,
    "StockX | Level 2": x => 0.12 * x, 
    "StockX | Level 3": x => 0.115 * x, 
    "StockX | Level 4": x => 0.11 * x, 
    "BotBroker": x => 0.09 * x, 
    "Grailed": x => (0.06 * x) + fees.PayPal(x),
    "Stadium Goods": x => x * 0.2,
    "Flight Club": x => x * 0.2,
    "Depop": x => (x * .1) + fees.PayPal(x),
    "Bump US": x => (0.06 * x) + fees.PayPal(x)
}

module.exports = {
    name: "fee",
    run: (client, message, args) => {
        const [, num] = message.content.split(" ");
        if (isNaN(num)) return message.channel.send("Please provide a your selling price.")

        const embed = new Discord.MessageEmbed()
        .setDescription(`Hey <@${message.author.id}>, here is a list of the final payouts for a sale worth $${args[0]} on some of the most popular selling platforms!`)
        .setColor(0x5126c7)
        .setAuthor("Fee Calculator")
        Object.keys(fees).forEach(fee => {
            embed.addField(`**${fee}**`, `$${Number(num - fees[fee](num)).toFixed(2)}`, true)})
        .setFooter("Made by @FootlockerRU", "https://i.imgur.com/bxQgHNB.png")


        message.channel.send(embed)
    }
}