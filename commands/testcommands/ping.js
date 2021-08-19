const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
    message.channel.send({ content: 'Pong!' })
}

module.exports.help = {
    name: 'ping',
    aliases: []
}