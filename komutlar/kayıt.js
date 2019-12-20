const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args, ops) => {
  const emoji = client.emojis.find("name", "tik");
  const emoji1 = client.emojis.find("name", "no");

  let verifyroless = message.guild.roles.find(`name`, "✓ Kayıt Sorumlusu");
  if (!message.member.roles.find("name", "✓ Kayıt Sorumlusu")) {
    return message.channel.send(
      `Bu Komutu Kullanmak için **Bot Commands** Rolüne Sahip Olman Lazım ${emoji1}`
    );
  }
  let toverify = message.guild.member(message.mentions.users.first());
  let verifyrole = message.guild.roles.find(`id`, "656919594870767664");
  if (!verifyrole)
    return message.channel.send(
      `Rol Bulunamadı Lütfen <@&KAYITLI ÜYE ROLÜ ID> Adıyla Rol Oluşturunuz.`
    );
  if (!toverify) return message.channel.send("Bir kullanıcıdan bahsetmelisin.");
  await toverify.addRole(verifyrole.id);

  let veriflog = message.guild.channels.find(`id`, "656927883813715968");
  if (!veriflog)
    return message.channel.send(
      "Doğrulama Kullanıcı Log Kanalı bulunamadı. Lütfen '「kayıt」' Adlı Kanal Oluşturunuz.`"
    );
  let vUser = message.guild.member(message.mentions.users.first());
  vUser.removeRole("656845097887072256");

  let verifembed = new Discord.RichEmbed()
    .setColor(`black`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`${vUser} Kişisine ${verifyrole} Rolü Verildi.`);
  veriflog.send(verifembed);
  let emojilan = message.guild.emojis.find(emoji => emoji.name === "tik");
  message.react(emojilan);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["erkek"]
};

exports.help = {
  name: "erkek",
  description: "Kullanıcı İçin Doğrulandı Rolünü Verir.",
  usage: "erkek"
};