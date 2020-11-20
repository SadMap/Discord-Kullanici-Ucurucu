const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
cid ="" // Kanal idsi
client.on('message', msg => {
  if (msg.content === '?kontrol') {
    if (msg.channel.id == cid) {
      msg.guild.members.fetch()
      .then(m => {
          msg.channel.send(m.size)
        const re = m.filter(user => Date.now() - user.user.createdTimestamp  < 604800000)
        msg.channel.send(re.size)
        re.forEach(y => {
          y.kick({reasson:"7 Günden Yeni Hesap"})
          msg.channel.send(`✅ <@${y.id}> | ${y.user.tag} Kicklendi`)
        })
      })
    }
  }
});

client.login('Token');