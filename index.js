const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = "TOKEN";

const language = 'tr';

const texts = {
  "tr": {
    "ready": "{0} kullanıcı adıyla giriş yapıldı.",
    "command": "?kontrol",
    "kickreason": "Bu hesap 7 günden daha yeni!",
    "kickbroadcast": "✅ <@{0}> | {1} sunucudan atıldı!"
  },
  "en": {
    "ready": "Logged in with username {0}.",
    "command": "?control",
    "kickreason": "This account is newer than 7 days!",
    "kickbroadcast": "✅ <@{0}> | {1} kicked from server!"
  }
};

client.on('ready', () => {
  console.log(texts[language]["ready"].replace("{0}", `${client.user.tag}`));
});
const cid ="" // Kanal idsi
client.on('message', msg => {
  if (msg.content === texts[language][command]) {
    if (msg.channel.id == cid) {
      msg.guild.members.fetch()
      .then(m => {
          msg.channel.send(m.size)
        const re = m.filter(user => Date.now() - user.user.createdTimestamp  < 604800000)
        msg.channel.send(re.size)
        re.forEach(y => {
          y.kick({reasson:texts[language][kickreason]})
          msg.channel.send(texts[language][kickbroadcast].replace("{0}", `${y.id}`).replace("{1}", `${y.user.tag}`))
        })
      })
    }
  }
});

client.login('TOKEN');
