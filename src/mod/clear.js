module.exports = {
    name: "clear",
    category: "info",
    description: "clears the channel",
    run: (client, message, args) => {
        if (!message.member.roles.find(r => r.name === "ADMINISTRATOR")) return message.channel.send("You do not have permission to send this command")




        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send("That's not a number!").then(m => m.delete(5000));
        }


        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        }else{
            deleteAmount = parseInt(args[0])
        }
        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Chat has been cleared :)`)).then(m => m.delete(5000))
}}