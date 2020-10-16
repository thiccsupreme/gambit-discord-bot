module.exports = {
    name: "invites",
    run: (client, message) => {
        const { guild } = message

        guild.fetchInvites().then((invites) => {
            const inviteCounter = {}

            invites.forEach((invite) => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${username}#${discriminator}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
            })

            let replyText = "Invite Leaderboard: "

            const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

            sortedInvites.length = 5

            for (const invite of sortedInvites) {
                const count = inviteCounter[invite]

                replyText += `\n ${invite} has invited ${count} members!`
            }

            message.channel.send(replyText)
        })
    }
}