const Discord = require("discord.js");
const beautify = require('beautify');
const { typeOf } = require("mathjs");
const fs = require("fs");

module.exports = {
    name: "eval",
    run: async (client, message, args) => {


        const config = fs.readFileSync('config.json');
            const json = JSON.parse(config)
            var owner = json.ownerID

        if(message.author.id !== owner) {
            return message.channel.send("You aren't the bot owner").then(m => m.delete(5000));
        }
        if(!args[0]) {
            return message.channel.send("Please provide a command to evaluate").then(l => l.delete(5000));
        }

        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return
            }
            const toEval = args.join(" ");
            const evaluted = eval(toEval) 

           const embed = new Discord.MessageEmbed()
            .setColor(0x5126c7)
            .setTimestamp()
            .setDescription(`**Eval Command used by <@${message.author.id}>**`)
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .addField("Command to evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
            .addField("Evaluated:", evaluted)
            .addField("Type Of:", typeof(evaluted))
            message.channel.send(embed);
        } catch(e) {
            const embed1 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTimestamp()
            .setDescription(e)
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setTitle("ERR")
            .addField("Type Of:", typeof(evaluted))
            message.channel.send(embed1);
        }
    }
}