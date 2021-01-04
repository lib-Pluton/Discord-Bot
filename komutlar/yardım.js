const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** : **Guide Bot (Soon)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `?`")
.setThumbnail("https://cdn.discordapp.com/attachments/754806710857629837/794320799716474930/Screenshot_1.png")
.setDescription(`

▬▬▬▬▬▬[ :red_circle: **Tüm Komutlar** :red_circle: ]▬▬▬▬▬▬

> **» ?afk :** Sunucuda tekrar mesaj yazana kadar afk kalırsınız.
> **» ?ağla :** Botu ağlatırsın.
> **» ?atatürk :** Komutu yazdığınız kanala Atatürk resmi atar.
> **» ?ping :** Pinginizi öğrenebilirsiniz.
> **» ?avatar :** Etiketlediğiniz kullanıcının avatarını gösterir.
> **» ?id :** Etiketlediğiniz kişinin idsini öğrenirsiniz.
> **» ?nuke :** Kanalı silip tekrar açar. [Beta]
> **» ?say :** Sunucudaki online üyeleri, botları, offline üyeleri sayar.
> **» ?sorusor :** Bota soru sorabilirsin.
> **» ?tersyazı :** Yazdığınız yazıyı tersine çevirir.
> **» ?sunucuresmi :** Sunucu resmini gösterir.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ev3NGA6v2A)** **•** **[Botun Davet Linki](xxxxx)** **•** **[Developer : GuideTeam]()**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};