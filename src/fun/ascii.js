const ascii = require("ascii-art");

module.exports = {
    name: "ascii",
    category: "info",
    description: "formats text",
    run: (client, message, args) => {
        if(!args[0]) return
        ascii.font(args.join(" "), "Doom", function (err, rendered) {
            rendered = rendered.trimRight();

            if (rendered.length > 1000) return message.channel.send("The message is too long!");

            message.channel.send(rendered, {
                code: "md"
            })
            message.delete(10).catch(console.error);
        })
    }
}