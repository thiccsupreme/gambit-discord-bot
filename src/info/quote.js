module.exports = {
    name: "quote",
    run: async (client, message, args) => {

        const channelID = args[0]
        const msgID = args[1]


        if (!channelID || !msgID) {
            return message.channel.send("Please use the format `.quote <channel id> <message id>`")
        }

        try {
            const channel = client.channels.cache.get(channelID);

            const msg = await channel.messages.fetch(msgID)


            const msgContent = msg.content

            message.channel.send(msgContent)
        } catch (err) {
            if (err) {
                return message.channel.send("Please use the format `.quote <channel id> <message id>`")
            }
        }
    }
}
