const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('modo-button')
            .setLabel('Modérateur')
            .setStyle('SUCCESS'),

        new MessageButton()
            .setCustomId('market-button')
            .setLabel('Marketing')
            .setStyle('SUCCESS'),
    )
module.exports = {
    name: 'recrutement',
    description: 'msg de recrutement',
    permissions: ['ADMINISTRATOR'],
    async run(client, message, args){
        const embed = new MessageEmbed()
            .setTitle("**<:5512ankhashy:1086068679608901702> Vous souhaitez postuler sur HERO PUB ?**")
            .setDescription("**<:1889ankhashocked:1086068879547187260> __Voici nos conditions en tant que MODERATEUR__** \n \n - Avoir minimum **15 ans** \n- Être **actif et mature**\n- Présenter une **candidature bien construite et fourni** \n- **Publier le serveur** 2 fois par semaines (**non obligatoire**)\n- Avoir une **orthographe correct**\n- Vérifier minimum **50 publicités par semaines** \n\n\n**<:1889ankhashocked:1086068879547187260> __Voici nos conditions en tant que MARKETING__** \n \n - Avoir minimum **13 ans** \n- Être **actif et mature**\n- Présenter une **candidature bien construite et fourni** \n- **Publier le serveur** 1 fois par jours (**obligatoire**)\n- Faire minimum **__10 invitations par semaines__**\n- Publier le serveur sur minimum **20 autres serveurs publicitaire**\n \n<:6756ankhahearts1:1086068680800075796> *Vous possédez ces critères ? Et acceptez nos conditions ? Alors postulez !* \n")
            .setImage(`https://media.discordapp.net/attachments/1086983610076250132/1086983755970920478/recrutement.png?width=687&height=229`)
            .setFooter({ text: 'Pour postuler il suffit d\'ouvrir un ticket en cliquant sur les boutton ci-dessous', iconURL: message.guild.iconURL() });
        await message.channel.send({
            embeds: [embed],
            components: [buttons]
        })
        
    }
}