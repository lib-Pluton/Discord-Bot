const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const narcosağla = new Discord.MessageEmbed()
    .setAuthor('Botu Ağlattın İyimi?')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media1.tenor.com/images/54390a29de562a245497485caa0aa619/tenor.gif`)
    return message.channel.send(narcosağla);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ağla',
  description: 'Bot U Ağlatırsınız',
  usage: 'ağla'
};