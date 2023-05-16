const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'boostmsg',
    description: 'msg du boost',
    permissions: ['ADMINISTRATOR'],
    async run(client, message, args){
        const embed = new MessageEmbed()
            .setTitle("**<:5388ankhasmile:1086047444334289067> Vous avez boost HERO PUB ?**")
            .setDescription("**<:7358ankhaheart:1086047446846668961> __Voici vos avantages__** \n \n 1 **Boost** \n \n- **__Rôle personnalisé à vie__** \n- Rôle <@&1086048301092184135> \n- Rôle <@&1086061877282480260> haut placée \n- **__Salon personnalisé 1 mois__** dans la catégorie VISIBILITÉ \n \n ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ \n \n **2 Boosts** \n \n- **__Rôle personnalisé à vie__** \n- Rôle <@&1086048301092184135> \n- Rôle <@&1086048779922325574> \n- Rôle <@&1086061877282480260> haut placée \n- **__Salon personnalisé 2 mois__** dans la catégorie VISIBILITÉ \n- **__Mention__** <@&1086058160902643742> dans votre salon personnalisé \n \n <:7358ankhaheart:1086047446846668961> **Merci de votre soutient !**")
            .setImage("https://media.discordapp.net/attachments/1086983610076250132/1086983753181700146/boost.png?width=687&height=229")
        await message.channel.send({
            embeds: [embed]
        })
        
    }
}