const request = require('request');
const cheerio = require('cheerio');
const Discord = require("discord.js");

module.exports = {
    name: "dog",
    category: "info",
    description: "shows a pic of a dog",
    run: (client, message, args) => {
        image(message);

    }

};

function image(message) {

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "cute dog",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };





    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }


        $ = cheerio.load(responseBody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));


        if (!urls.length) {

            return;
        }

        message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    })};