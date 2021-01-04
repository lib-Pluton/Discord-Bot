const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

///////////////////////eklendim atıldım

client.on('guildDelete', guild => {

    let Crewembed = new Discord.MessageEmbed()
    
    .setColor("RED")
    .setTitle(" ATILDIM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    
       client.channels.cache.get('784906432419069962').send(Crewembed);
      
    });
    
    
    client.on('guildCreate', guild => {
    
    let Crewembed = new Discord.MessageEmbed()
    
    .setColor("GREEN")
    .setTitle("EKLENDİM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    
       client.channels.cache.get('784906432419069962').send(Crewembed);
      
    });

    client.on("message", msg => { //etiket preffix
        //let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
        const westrabumbe = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`Prefixim: ?\n Yardım için: ?yardım`)
      if (msg.content.includes(`<@${client.user.id}>`) || msg.content.includes(`<@!${client.user.id}>`)) {
        msg.channel.send(westrabumbe);
      }
    });


    client.on("message" , async msg => { //afk

        if(!msg.guild) return;
        if(msg.content.startsWith(ayarlar.prefix+"afk")) return;
      
        let afk = msg.mentions.users.first()
      
        const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
      
        const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
       if(afk){
         const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
         const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
         if(msg.content.includes(kisi3)){
      
             msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`))
         }
       }
        if(msg.author.id === kisi){
      
             msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`))
         db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
         db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
         db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
          msg.member.setNickname(isim)
      
        }
      
      });


      client.on('message', msg => {
        if (msg.content.toLowerCase() === 'h4') 
          msg.reply('Para için ruhunu satanın amına koyayım ?');
        }
      );

      client.on("message", m => {
        if (m.channel.id !== "794964161024884766") { //buraya o kanalın ID'si yazılacak.
          return;
        }
        if (m.author.id === m.guild.ownerID) return;
        if (m.attachments.size < 1) {
          m.delete();
        }
      });
    
client.login(ayarlar.token);