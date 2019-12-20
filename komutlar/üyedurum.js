const Discord = require('discord.js');
exports.run = (client, message, args, tools) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor('#00CED1')
        .setThumbnail(message.guild.iconURL)
        .addField('**Üyeler**', `**${message.guild.memberCount}**`, true)
        .addBlankField(true)
        .addField('**Kullanıcılar**', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
        .addField('**Botlar**', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
        .addField('**Üye Durumları**', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Çevrimiçi\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Boşta\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Yayında`)
        .setFooter(`Sunucu Sahibi: ${message.guild.owner.user.tag}`)
    message.channel.send(embed);
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum","üyeler","durumlar","durum"],
  permLevel: 0
};

module.exports.help = {
  name: 'üyedurum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};