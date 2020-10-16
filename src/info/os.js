const os = require("os");
const Discord = require("discord.js");

module.exports = {
    name: "sysinfo",
    run: (client, message, args) => {
      
        const embed = new Discord.RichEmbed()
            .setColor(0x5126c7)
            .setAuthor(`${message.author.username}'s system information!`, message.author.displayAvatarURL)
            .setDescription(`For any information about what any of the values provided by the bot click **[here](https://nodejs.org/api/)**.\n\n⚠️ **Disclaimer:** *Some of these values may not be 100% accurate, please do not depend on these values if making certain decisions about your system.*\n\n`)
            .setThumbnail()
            .addField("Platform:", os.platform(), true)
            .addField("Architecture:", os.arch(), true)
            .addField("Home Directory:", os.homedir(), true)
            .addField("Processor:", `${os.cpus().map(i => `${i.model}`)[0]}`, false)
            .addField("RAM:", `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, false)
            .addField("Free System Memory:", `${os.freemem() / 10000000} GB`, false)
            .addField("Host Name:", os.hostname(), false)
            .addField("Load Average (Mins)", os.loadavg(), false)
            .addField("OS Release:", os.release(), false)
            .addField("Temporary Directory:", os.tmpdir(), false)
            .addField("System Uptime:", `${os.uptime} seconds`, false)
            .addField("Endianness:", os.endianness(), false) // 'BE' for big endian and 'LE' for little endian.
            .setFooter(`Discord.JS Version: Discord.JS ${Discord.version}`)
            .setTimestamp()

        message.channel.send(embed);
    }
}