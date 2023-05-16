const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('support-button')
            .setLabel('Support')
            .setEmoji('☎️')
            .setStyle('SUCCESS'),
    )
module.exports = {
    name: 'support',
    description: 'msg de recrutement',
    permissions: ['ADMINISTRATOR'],
    async run(client, message, args){
        const embed = new MessageEmbed()
            .setTitle("**<:5512ankhashy:1086068679608901702> Vous souhaitez faire une demande sur HERO PUB ?**")
            .setDescription("<:1889ankhashocked:1086068879547187260> **Si vous avez des questions, des problèmes ou si vous avez besoin d'aide, n'hésitez pas à créer un ticket en cliquant sur le boutton ci-dessous.\nNotre équipe de support sera heureuse de vous aider dans les plus brefs délais !**")
            .setFooter({ text: 'Pour en faire une demande il suffit d\'ouvrir un ticket en cliquant sur les boutton ci-dessous', iconURL: message.guild.iconURL() })
        await message.channel.send({
            embeds: [embed],
            components: [buttons]
        })
    }
}