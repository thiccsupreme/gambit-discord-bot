const Discord = require("discord.js");

module.exports = {
    name: "8ball",
    run: (client, message, args) => {
        let question = message.content.split(" ").slice(1).join(" ");
        const answers = [
            "It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes - definitely",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Yes.",
            "Signs point to yes",
            "Reply hazy, try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful"
        ];

        if (!question) return message.channel.send("Please ask a question for me to answer");
        const embed = new Discord.MessageEmbed()
            .setTitle("🎱 8-Ball")
            .setColor(0x5126c7)
            .addField(`**Your Question: ${question}**`, answers[~~(Math.random() * answers.length)])
            .setTimestamp()
            .setFooter("Made by @FootlockerRU")
        message.channel.send(embed);
    }
};