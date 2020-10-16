const { Client, Collection, RichEmbed } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
})

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
}); // configures the directory .env where the bot token is stored


["handler"].forEach(handler => {
    require(`./cmdhandler/${handler}`)(client);
}); // requires the folder handler to be able to execute commands


client.on("ready", async () => {

    console.log("Gambit is Online")

    client.on("message", async message => {
        const prefix = "$";

        if (message.author.bot) return; // if the author is a bot, the bot won't respond
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return; // if a message doens't start with "." the bot will not respond
        if (!message.member) message.member = await message.guild.fetchMember(message);

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase(); // converts the string into lowercase

        if (cmd.length === 0) return;

        let command = client.commands.get(cmd);
        if (!command) command = client.commands.get(client.aliases.get(cmd));

        if (command)
            command.run(client, message, args);
    });


    client.snipes = new Map();
    client.on('messageDelete', function (message, channel) {
        client.snipes.set(message.channel.id, {
            content: message.content,
            author: message.author.tag,
            av: message.author.displayAvatarURL,
            image: message.attachments.first() ? message.attachments.first().proxyURL : null

        }
        );

    });
});
client.login(process.env.TOKEN)
