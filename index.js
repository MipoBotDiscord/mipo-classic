const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
});

if (message.content === `${prefix}ping`) {
    message.channel.send('Pong.');
} else if (message.content === `${prefix}beep`) {
    message.channel.send('Boop.');
}

client.login('ODIwMjg4MjQ5MTA4NzU4NTQ5.YEy-9g.p_2BzZlvEeQZ71lt7UyhnH-xI-4');