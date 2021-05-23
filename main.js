const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity(String('My prefix is !'));
});
client.on('message', message => {
    if (message.content === `${prefix}hi`) {
        message.channel.send('Hello there!');
    } else if (message.content === `${prefix}help`) {
        message.channel.send('No commands yet :(');
    } else if (message.content === `${prefix}premium`) {
        message.channel.send('https://www.patreon.com/MipoDevelopment')
    }
});
client.login('ODIwMjg4MjQ5MTA4NzU4NTQ5.YEy-9g.p_2BzZlvEeQZ71lt7UyhnH-xI-4');