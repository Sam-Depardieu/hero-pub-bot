const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('accept-button')
            .setLabel('Accepter')
            .setStyle('SUCCESS'),

        new MessageButton()
            .setCustomId('reject-button')
            .setLabel('Refuser')
            .setStyle('DANGER'),
    )


module.exports = {
    name: 'verification',
    description: 'Commande verification',
    permissions: ['ADMINISTRATOR'],
    async run(client, message, args){
        await message.channel.send({
            content: 'https://media.discordapp.net/attachments/1086983610076250132/1086983753181700146/boost.png?width=687&height=229',
            components: [buttons]
        })
    },
    async runSlash(client, interaction) {
        await interaction.reply({
            files: [`${process.cwd()}/image/verification.png`],
            components: [buttons]
        })
    }
};