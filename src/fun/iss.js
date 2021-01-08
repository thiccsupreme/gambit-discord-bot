const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports = {
    name: "iss",
    run: (client, message, args) => {

        let issInfo = "http://api.open-notify.org/iss-now.json";

        fetch(issInfo).then(res => res.json()).then(res => {

            const currentTime = new Date(res.timestamp * 1000).toLocaleString();

            const embed = new Discord.MessageEmbed()
                .setColor(0x5126c7)
                .setAuthor("International Space Station", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.onlinelabels.com%2Fimages%2Fclip-art%2Fwilliamtheaker%2FRocket-190970.png&f=1&nofb=1", "https://www.nasa.gov/mission_pages/station/main/index.html")
                .setDescription(`**Latitude: ${res.iss_position.latitude}\nLongitude: ${res.iss_position.longitude}\nTimestamp: ${currentTime}**`)
                .setTimestamp()
            message.channel.send(embed)

        });

    }
} 
