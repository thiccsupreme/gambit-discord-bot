const Discord = require("discord.js");
const { roll } = require("roll");


module.exports = {
  name: "dice",
  category: "info",
  description: "rolls a die",
  run: (client, message, args, roll) => {
    var Roll = require('roll'),
      roll = new Roll();
    var oneDie = roll.roll('d6');
    const embed = new Discord.MessageEmbed()
      .setColor(0x5126c7)
      .setTitle("You rolled a...")
      .setDescription(`**${oneDie.result}**`)
      .setTimestamp()
    message.channel.send(embed)
  }

};