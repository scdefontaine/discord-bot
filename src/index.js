require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// messages return
client.on('message', msg => {

  // ping pong
  if (msg.content === '/ping') {
    msg.reply('Pong!');
  }

  if (msg.content === '/hello') {
    msg.reply('Hello World!');
  }

});

//make sure this line is the last line
client.login(process.env.FIN_BOT_TOKEN);