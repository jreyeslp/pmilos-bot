require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

// Bot ready for kicking it!
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// Send a remote file
client.on('message', (message) => {
  if(message && message.content.startsWith("pmilos")) {
    message.channel.send({
      files: ['https://cdn.discordapp.com/attachments/440900194414886925/754375865034604684/pm.gif']
    })
      .then(console.log)
      .catch(console.error);
  }
});

client.login(process.env.BOT_TOKEN);