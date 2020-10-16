const Discord = require("discord.js");
const { promptMessage } = require("../utils/function");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "info",
    description: "rps",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setTitle("Welcome to Rock Paper Scissors!")
            .setFooter("Made by @FootlockerRU")
            .setDescription("React with 🗻 for rock, 📰 for paper, and ✂ for scissors!")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Victory Royale! 😎";
            } else if (me === clientChosen) {
                return "Tied...";
            } else {
                return "Loser lmao 😂😂😂";
            }
        }
    }
}