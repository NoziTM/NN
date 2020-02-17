const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token
const prefix = ("$");

const index = require('./index.json');

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('$help > Mp Bot - Papers Bot').catch(console.error)
});

bot.on ('message', message => {
    var prefix = '$'
   
  if (message.content === prefix + "help"){
    var embed = new Discord.RichEmbed()
        .setTitle('**Commandes:**')
        .setDescription('')
        .addField('$mpall',"MP tout le serveur.")
        .addField('$Invite',"Envoie un lien pour invité le bot Ou [Click Ici](https://discordapp.com/api/oauth2/authorize?client_id=606165721902350356&permissions=27649&scope=bot) ", true)
        .addField('$Ping',"Affiche le ping du bot.")
        .setColor('0xff0101')
        .setFooter('Created By Kasa#0400')
  message.channel.sendEmbed(embed);
  }
  })

bot.on('message', msg => {

    if (msg.content === '$Invite') {
        msg.reply('Go DM');
        msg.member.send('**Voici le lien:** https://discordapp.com/api/oauth2/authorize?client_id=606165721902350356&permissions=27649&scope=bot');
    }
    if (msg.content === '$invite') {
        msg.reply('Go DM');
        msg.member.send('**Voici le lien:** https://discordapp.com/api/oauth2/authorize?client_id=606165721902350356&permissions=27649&scope=bot');
    }
    if(msg.content.startsWith(`${prefix}mpall`)) {
        msg.channel.sendMessage("**Envoie des DM à** **" + msg.guild.memberCount + "** **en cours, 2 Minutes Restant**")
    }
    if(msg.content.startsWith(`${prefix}ping`)) {

        let embed = new Discord.RichEmbed()
            .setColor(0x43f033)
            .setDescription(`Loading...`)
            .setTimestamp()
        msg.channel.send(embed).then(msg => {
            embed.setColor(0x43f033)
            embed.setDescription(`:ping_pong: Pong! **\`${bot.pings[0]}ms\`**`)
            embed.setFooter(`Voici Le Ping Du Bot`)
            embed.setTimestamp()
            msg.edit(embed)
        })
      
      }
});
 
bot.on("message", msg => {
     if(msg.content.startsWith(`${prefix}mpall`)) {
       
                  var args = msg.content.split(" ").slice(2);
                  var msge = args.join('');
       
                   if(!msg.guild.member(msg.author).hasPermission("ADMINISTRATOR")) return msg.channel.send(":x: MP Annulé, Tu n'as pas la permission d'utiliser cette commande!");
                   if(!msge) return msg.channel.send("Précise un message")
                   var mpall =new Discord.RichEmbed()
                        .addField("Message :", msge);
         
                   msg.delete()
                   msg.guild.members.map(m => m.send(mpall))
           
               
       
           }
 
});

bot.login(token);
