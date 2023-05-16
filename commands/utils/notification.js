const { MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('partenariat-button')
            .setLabel('Partenariat')
            .setEmoji('🤝')
            .setStyle('SUCCESS'),

        new MessageButton()
            .setCustomId('annonces-button')
            .setLabel('Annonces')
            .setEmoji('📢')
            .setStyle('SUCCESS'),

        new MessageButton()
            .setCustomId('giveaways-button')
            .setLabel('Giveaways')
            .setEmoji('🎉')
            .setStyle('SUCCESS'),

        new MessageButton()
            .setCustomId('autres-button')
            .setLabel('Autres')
            .setEmoji('📌')
            .setStyle('DANGER'),
            
    )
module.exports = {
    name: 'notif',
    description: 'panneau de notification',
    permissions: ['ADMINISTRATOR'],
    async run(client, message, args){
        const embed = new MessageEmbed()
            .setTitle("**<:4328ankhaping:1086047442178412725> Voici les différentes __notifications__ que vous propose HERO PUB :**")
            .setDescription(":handshake: | Notification Partenariats \n:loudspeaker: | Notification Annonces \n:tada: | Notification Giveaways \n:round_pushpin: | Notification Autres")
            .setImage("https://media.discordapp.net/attachments/1086983610076250132/1086983755631173632/notification.png?width=687&height=229")
        await message.channel.send({
            embeds: [embed],
            components: [buttons]
        })
        
    }
}