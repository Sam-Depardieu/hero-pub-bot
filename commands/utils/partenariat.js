const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('part-button')
            .setLabel('Partenariat')
            .setStyle('SUCCESS'),
    )
module.exports = {
    name: 'partenariat',
    description: 'msg de recrutement',
    permissions: ['ADMINISTRATOR'],
    async run(client, message, args){
        const embed = new MessageEmbed()
            .setTitle("**<:5512ankhashy:1086068679608901702> Vous souhaitez faire un partenariat sur HERO PUB ?**")
            .setDescription("<:1889ankhashocked:1086068879547187260> **__Aucune conditions (serveur viens d'ouvrir)__**")
            .setFooter({ text: 'Pour en faire une demande il suffit d\'ouvrir un ticket en cliquant sur les boutton ci-dessous', iconURL: message.guild.iconURL() })
        await message.channel.send({
            embeds: [embed],
            components: [buttons]
        })
    }
}