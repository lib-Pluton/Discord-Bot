const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** : **Samurai Bot(Soon)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `?`")
.setThumbnail("https://raw.githubusercontent.com/PlutonLib/PlutonLib/master/img/profile.gif")
.setDescription(`

▬▬▬▬▬▬[ :red_circle: **Tüm Komutlar** :red_circle: ]▬▬▬▬▬▬

> **» ?afk :** Sunucuda tekrar mesaj yazana kadar afk kalırsınız.
> **» ?atatürk :** Komutu yazdığınız kanala Atatürk resmi atar. --> Yakında birden çok gif ve fotoğraftan oluşan bir komut olacak.
> **» ?ping :** Pinginizi öğrenebilirsiniz.
> **» ?avatar :** Etiketlediğiniz kullanıcının avatarını gösterir.
> **» ?id :** Etiketlediğiniz kişinin idsini öğrenirsiniz.
> **» ?nuke :** Kanalı silip tekrar açar. [Beta]
> **» ?say :** Sunucudaki online üyeleri, botları, offline üyeleri sayar.
> **» ?tersyazı :** Yazdığınız yazıyı tersine çevirir.
> **» ?sunucuresmi :** Sunucu resmini gösterir.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**

**» Bağlantılar** 
**[Github : https://github.com/PlutonLib/Discord-Bot]
**[Developer : Plü#0851]**
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
