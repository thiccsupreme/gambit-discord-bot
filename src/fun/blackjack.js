const Discord = require("discord.js");

module.exports = {
    name: "blackjack",
    aliases: "bj",
    run: (client, message, args) => {
        if (!message.guild.me.hasPermission("ADD_REACTIONS")) return message.channel.send("Permissions to add reactions are required");

        let card1 = Math.floor(Math.random() * 9) + 2
        let card2 = Math.floor(Math.random() * 9) + 2

        let botCard1 = Math.floor(Math.random() * 9) + 2
        let botCard2 = Math.floor(Math.random() * 9) + 2

        let total = card1 + card2
        let botTotal = botCard1 + botCard2

        let playerArray = []
        let botArray = []
        playerArray.push(card1)
        playerArray.push(card2)
        botArray.push(botCard1)
        botArray.push(botCard2)


        const embed = new Discord.MessageEmbed()
            .setAuthor("Blackjack", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fdownload_30448.png&f=1&nofb=1")
            .setTitle("✅ = Hit\n❌ = Stand")
            .setColor(0x5126c7)
            .setDescription(`**Your hand: ${card1},${card2} : ${total}\n Bots Hand: ${botCard1},||Hidden||**`)
        message.channel.send(embed).then(m => {
            m.react("✅").then(r => {
                m.react("❌")
                const standFilter = (reaction, user) =>
                    reaction.emoji.name === "❌" && user.id === message.author.id;

                const hitFilter = (reaction, user) =>
                    reaction.emoji.name === "✅" && user.id === message.author.id;

                const stand = m.createReactionCollector(standFilter, {
                    time: 60000,
                    max: 1
                });

                const hit = m.createReactionCollector(hitFilter, {
                    time: 60000,
                });

                let sum2 = botArray.reduce(function (a, b) {
                    return a + b;
                }, 0);
                let botCount;
                botCount = sum2

                let sum1 = playerArray.reduce(function (a, b) {
                    return a + b;
                }, 0);
                let playerCount;
                playerCount = sum1

                if (playerCount > 21 && botCount > 21) {
                    embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                        .setColor("RED")
                    m.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount === 21 && botCount < 21) {
                    embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n You Won!`)
                        .setColor("GREEN")
                    m.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (botCount === 21 && playerCount < 21) {
                    embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                        .setColor("RED")
                    m.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (botCount === 21 && playerCount > 21) {
                    embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                        .setColor("RED")
                    m.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount > 21 && botCount < 21) {
                    embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                        .setColor("RED")
                    m.edit(embed)
                    hit.stop()
                    stand.stop()
                } else if (playerCount === 21 && botCount > 21) {
                    embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n You Won!`)
                        .setColor("GREEN")
                    m.edit(embed)
                    hit.stop()
                    stand.stop()
                }

                stand.on("collect", r => {
                    let sum2 = botArray.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let botCount;
                    botCount = sum2

                    let sum1 = playerArray.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let playerCount;
                    playerCount = sum1

                    if (playerCount > 21 && botCount > 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                            .setColor("RED")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (playerCount < 21 && botCount > 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n You Won!`)
                            .setColor("GREEN")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (playerCount === 21 && botCount < 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n You Won!`)
                            .setColor("GREEN")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (botCount === 21 && playerCount < 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                            .setColor("RED")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (botCount === 21 && playerCount > 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                            .setColor("RED")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (playerCount === 21 && botCount > 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n You Won!`)
                            .setColor("GREEN")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (playerCount > botCount) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n You Won!`)
                            .setColor("GREEN")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (botCount > playerCount) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                            .setColor("RED")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    }

                })

                hit.on("collect", r => {
                    let playerCard3 = Math.floor(Math.random() * 9) + 2
                    let botCard3 = Math.floor(Math.random() * 9) + 2
                    playerArray.push(playerCard3)
                    botArray.push(botCard3)


                    let sum2 = botArray.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let botCount;
                    botCount = sum2

                    let sum1 = playerArray.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                    let playerCount;
                    playerCount = sum1

                    if (playerCount > 21 && botCount > 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                            .setColor("RED")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (playerCount === 21 && botCount < 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n You Won!`)
                            .setColor("GREEN")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (playerCount > 21 && botCount < 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                            .setColor("RED")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (botCount === 21 && playerCount < 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                            .setColor("RED")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (botCount === 21 && playerCount > 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n I Won!`)
                            .setColor("RED")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else if (playerCount === 21 && botCount > 21) {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botArray} = ${botCount}**\n You Won!`)
                            .setColor("GREEN")
                        m.edit(embed)
                        hit.stop()
                        stand.stop()
                    } else {
                        embed.setDescription(`**Your hand: ${playerArray} = ${playerCount}\n Bots Hand: ${botCard1}, ||Hidden||**`)
                        m.edit(embed)
                    }

                })
            })

        })

    }
}