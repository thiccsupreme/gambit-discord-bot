const fs = require("fs");

module.exports = {
    name: "shutdown",
    run: async (client, message, args) => {
        const config = fs.readFileSync('config.json');
        const json = JSON.parse(config)
        var owner = json.ownerID


        if (message.author.id !== owner) {
            message.channel.send("Nice try 😏")
        } else {
            await message.channel.send("Goodbye World 😔")
            console.log("Goodbye...")
            process.exit();
        }
    }
}