const Discord = require("discord.js");

const helplist = "`.helplist`"

module.exports = {
    name: "help",
    run: (client, message) => {
        const embed0 = new Discord.MessageEmbed()
            .setTitle("Prefix: `.`")
            .setAuthor(`Gambit Help Guide`)
            .setColor(0x5126c7)
            .setThumbnail(`https://pbs.twimg.com/profile_images/1272524082135916553/JIbe7HpA_400x400.jpg`)
            .setDescription(`Hello <@${message.author.id}>, please familiarize yourself with this bot by reading over this embed!\n\nIf you would like a list of all the commands,\n use the online guide **[here](https://thiccsupreme.gitbook.io/gambit/)**.`)
            .setImage(`https://pbs.twimg.com/profile_banners/911289505163956225/1592228395/600x200`)
            .setFooter("Made by @FootlockerRU")
            .addField("**Information Commands**", "ℹ️", false)
            .addField("**Fun Commands**", "🎉", false)
            .addField("**Moderation Commands**", "📈", false)
            .addField("**NSFW Commands**", "🔞", false)
            .addField("**Owner Commands**", "🚀", false)
            .setTimestamp()
        message.channel.send(embed0).then(m => {
            m.react("ℹ️")
            m.react("🎉")
            m.react("📈")
            m.react("🔞")
            m.react("🚀")

            const filter = (reaction, user) => reaction.emoji.name === "ℹ️" && user.id === message.author.id;
            const collector = m.createReactionCollector(filter, { max: 9, time: 5 * 60 * 1000 });

            collector.on('collect', () => {

                const embed = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("🎙️ Informational Commands\n\n ")
                    .addField("Catchall Generator", "`.catchall <domain>`")
                    .addField("Crypto Converter", "`.crypto <crypto currency> <currency of choice>`")
                    .addField("Currency Converter", "`.currency <init currency> <amount> <final currency>`")
                    .addField("Delay Calculator", "`.delaycalc <task number> <proxy count>`")
                    .addField("Gmail J1g", "`.gmail <your email (must be gmail)>`")
                    .addField("Fee Calculator", "`.fee <selling price>`")
                    .addField("Instagram Account Information", "`.instagram <username>`")
                    .addField("Invite Count (Top 5)", "`.invites`")
                    .addField("Bot Marketplaces", "`.marketplaces`")
                    .addField("Server Member Count", "`.membercount`")
                    .addField("System Information", "`.sysinfo`")
                    .addField("Ping", "`.ping`")
                    .addField("Server Information", "`.serverinfo`")
                    .addField("Website Status Checker", "`.status <url>`")
                    .addField("Twitter Account Information", "`.twitter <username>`")
                    .addField("Bot Uptime", "`.uptime`")
                    .addField("WHo Is?", "`.whois`")
                m.edit(embed)
            });

            const filter1 = (reaction, user) => reaction.emoji.name === "🎉" && user.id === message.author.id;
            const collector1 = m.createReactionCollector(filter1, { max: 9, time: 5 * 60 * 1000 })

            collector1.on('collect', () => {
                const embed1 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("🎉 Fun Commands")
                    .addField("8-Ball", "`.8ball <query>`")
                    .addField("Text to ASCII", "`.ascii <text>`")
                    .addField("Profile Picture Enlarger", "`.av`")
                    .addField("Blackjack", "`.blackjack`")
                    .addField("Math Caluclator", "`.calculate <equation>`")
                    .addField("Cat / Dog Pics", "`.cat / .dog`")
                    .addField("Flip a Coin", "`.coinflip`")
                    .addField("Diceroll", "`.dice`")
                    .addField("Get a Rating", "`.rate <anything>`")
                    .addField("Rock Paper Scissors", "`.rps`")
                m.edit(embed1)
            });
            
            const filter2 = (reaction, user) => reaction.emoji.name === "📈" && user.id === message.author.id;
            const collector2 = m.createReactionCollector(filter2, { max: 9, time: 5 * 60 * 1000 });

            collector2.on('collect', () => {

                const embed2 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("📈 Moderation Commands")
                    .addField("**Add Role**", "`.addrole <user> <role>`")
                    .addField("**Ban**", "`.ban <user>`")
                    .addField("**Change Bot Nickname**", "`.setbotnick <new nickname>`")
                    .addField("**Clear Chat**", "`.clear <number of messages>`")
                    .addField("**Kick**", "`.kick <user>`")
                    .addField("**Mute**", "`.mute <user> <duration (s,m,h,d)`")
                    .addField("**Remove Role**", "`.removerole <user> <role>`")
                    .addField("Snipe Recently Deleted Message", "`.snipe`")
                    .addField("**Unmute**", "`.unmute <user>`")
                m.edit(embed2)
            });
            const filter3 = (reaction, user) => reaction.emoji.name === "🔞" && user.id === message.author.id;
            const collector3 = m.createReactionCollector(filter3, { max: 9, time: 5 * 60 * 1000 });
            
            collector3.on('collect', () => {

                const embed3 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("🔞 NSFW Commands")
                    .addField("**4K**", "`.4k`", true)
                    .addField("**Ass**", "`.ass`", true)
                    .addField("**Boobs**", "`.boobs`", true)
                    .addField("**GIF**", "`.nsfwgif`", true)
                    .addField("**Hentai**", "`.hentai`", true)
                    .addField("**Pussy**", "`.pussy`", true)
                    .addField("**Thighs**", "`.thighs`", true)
                m.edit(embed3)
            });

            const filter4 = (reaction, user) => reaction.emoji.name === "🚀" && user.id === message.author.id;
            const collector4 = m.createReactionCollector(filter4, { max: 9, time: 5 * 60 * 1000 })

            collector4.on('collect', () => {
                const embed1 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .setAuthor("🚀 Owner Commands")
                    .addField("Eval Command", "`.eval <command>`")
                    .addField("Mass DM", "`.massdm <content>`")
                    .addField("Terminate the Bot", "`.shutdown`")
                m.edit(embed1)
            });
        })
    }
};