const Discord = require("discord.js");

module.exports = {
    name: "help",
    run: (client, message) => {
        const embed0 = new Discord.MessageEmbed()
            .setTitle("Prefix: `.`")
            .setAuthor(`Gambit Help Guide`)
            .setColor(0x5126c7)
            .setThumbnail(`https://pbs.twimg.com/profile_images/1272524082135916553/JIbe7HpA_400x400.jpg`)
            .setDescription(`Hello <@${message.author.id}>, please familiarize yourself with this bot by reading over this embed!\n\n`)
            .setImage(`https://pbs.twimg.com/profile_banners/911289505163956225/1592228395/600x200`)
            .setFooter("Made by @FootlockerRU")
            .addField("**Information Commands**", "ℹ️", false)
            .addField("**Fun Commands**", "🎉", false)
            .addField("**Moderation Commands - `Being Fixed`**", "N/A", false)
            .addField("**NSFW Commands**", "🔞", false)
            .setTimestamp()
        message.channel.send(embed0).then(m => {
            m.react("ℹ️")
            m.react("🎉")
            // m.react("📈")
            m.react("🔞")

            const filter = (reaction, user) => reaction.emoji.name === "ℹ️" && user.id === message.author.id;
            const collector = m.createReactionCollector(filter, { max: 9, time: 5 * 60 * 1000 });

            collector.on('collect', () => {

                const embed = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .addField("**Crypto Conversion**", "`.crypto <crypto> <real currency>`")
                    .addField("**Delay Calculator**", "`.delaycalc <task #> <amount of proxies>`")
                    .addField("**Gmail Dot Trick**", "`.gmail <your gmail>`")
                    .addField("**Fee Calculator**", "`.fee <your selling price>s`")
                    .addField("**Bot Marketplaces**", "`.marketplaces`")
                    .addField("**Ping**", "`.ping`")
                    .addField("**Server Information**", "`.serverinfo`")
                    .addField("**Twitter User Information**", "`.twitter <username>`")
                    .addField("**Bot Uptime**", "`.uptime`")
                    .addField("**Who Is?**", "`.whois`")
                    .addField("**Catchall Generator**", "`.catchall <domain>`")
                    .addField("**Currency Converter**", "`.convert <initial currency> <amount> <final currency>`")
                    .addField("**Member Count**", "`.membercount`")
                    .addField("**Website Status Checker**", "`.status <url>` **(must include `https://` or `http://`)**")
                    .addField("**Invites Leaderboard (Top 5)**", "`.invites`")
                m.edit(embed).then(m => {
                    m.reactions.resolve("ℹ️").users.remove(message.author.id);
                })
            });

            const filter1 = (reaction, user) => reaction.emoji.name === "🎉" && user.id === message.author.id;
            const collector1 = m.createReactionCollector(filter1, { max: 9, time: 5 * 60 * 1000 })

            collector1.on('collect', () => {
                const embed1 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .addField("**8Ball**", "`.8ball <your question>`")
                    .addField("**Avatar**", "`.av` or `.av @<user>`")
                    .addField("**Calculator**", "`.math <your math equation here>`")
                    .addField("**Cat Pictures**", "`.cat`")
                    .addField("**Coin Flip**", "`.coinflip`")
                    .addField("**Dice Roll**", "`.dice`")
                    .addField("**Dog Pictures**", "`.dog`")
                    .addField("**Rock Paper Scissors**", "`.rps`")
                    .addField("**Blackjack**", "`.blackjack`")
                    .addField("**Rate Anything**", "`.rate <anything>`")
                m.edit(embed1).then(m => {
                    m.reactions.resolve("🎉").users.remove(message.author.id);
                })
            });
            
            // const filter2 = (reaction, user) => reaction.emoji.name === "📈" && user.id === message.author.id;
            // const collector2 = m.createReactionCollector(filter2, { max: 9, time: 5 * 60 * 1000 });

            // collector2.on('collect', () => {

            //     const embed2 = new Discord.MessageEmbed()
            //         .setColor(0x5126c7)
            //         .addField("**Add Role**", "`.addrole <user> <role>`")
            //         .addField("**Ban**", "`.ban <user>`")
            //         .addField("**Purge Chat**", "`.clear <number of messages>`")
            //         .addField("**Kick**", "`.kick <user>`")
            //         .addField("**Mute**", "`.mute <user> <duration (s,m,h,d)`")
            //         .addField("**Remove Role**", "`.removerole <user> <role>`")
            //         .addField("**Unmute**", "`.unmute <user>`")
            //         .addField("**Change Bot Nickname**", "`.setbotnick <new nickname>`")
            //         .addField("Recently Deleted Message", "`.snipe`")
            //         .addField("Change User Nickname", "`.nickname <@user> <new nickname>`")
            //     m.edit(embed2).then(m => {
            //         m.reactions.resolve("📈").users.remove(message.author.id);
            //     })
            // });
            const filter3 = (reaction, user) => reaction.emoji.name === "🔞" && user.id === message.author.id;
            const collector3 = m.createReactionCollector(filter3, { max: 9, time: 5 * 60 * 1000 });
            
            collector3.on('collect', () => {

                const embed3 = new Discord.MessageEmbed()
                    .setColor(0x5126c7)
                    .addField("**4K**", "`.4k`")
                    .addField("**Ass**", "`.ass`")
                    .addField("**Boobs**", "`.boobs`")
                    .addField("**GIF**", "`.nsfwgif`")
                    .addField("**Hentai**", "`.hentai`")
                    .addField("**Pussy**", "`.pussy`")
                    .addField("**Thighs**", "`.thighs`")
                m.edit(embed3).then(m => {
                    m.reactions.resolve("🔞").users.remove(message.author.id);
                })
            });
        })
    }
};
