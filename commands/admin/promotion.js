const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'promo',
    description: 'msg du promo',
    permissions: ['ADMINISTRATOR'],
    async run(client, message, args){
        message.delete(message.author);
        const embed = new MessageEmbed()
            .setColor("PURPLE")
            .setThumbnail(message.guild.iconURL())
            .setTitle("**<:7358ankhaheart:1086047446846668961> __Promotions Bump__**")
            .setDescription("**<:1889ankhashocked:1086068879547187260> __IMPORTANT__** \n\n<:7504ankhasip:1086047445714219008> Afin de mettre en avant **HERO PUB** nous utilisons plusieurs bots pour **BUMP** le serveur .\n| Pour **effectuer un BUMP** il faut **utiliser les commandes** dans le salon <#1086044553657725020> .\n| Nous **utilisons aussi des sites internet** sur le quelle vous pourrez voter en cliquant sur le **lien du site** directement.\n\n**<:6756ankhahearts1:1086068680800075796> __Les voici :__**\n\n<:arrow:1086337581043691592> Bot <@528557940811104258> | commande \n \`\`/bump\`\`\n| Peut effectuer la commande toute les **2HEURES**\n\n<:arrow:1086337581043691592> Bot <@302050872383242240> | commande \n \`\`/bump\`\`\n| Peut effectuer la commande toute les **2HEURES**\n\n<:arrow:1086337581043691592> Bot <@678211574183362571> | commande \n\`\`/bump\`\`\n| Peut effectuer la commande toute les **3HEURES**\n\n<:arrow:1086337581043691592> Bot <@873722451547291678> | commande \n \`\`/bump\`\`\n| Peut effectuer la commande toute les **1HEURES**\n\n<:arrow:1086337581043691592> Bot <@776897904404987946> | commande \n\`\`/promo\`\`\n| Peut effectuer la commande toute les **5HEURES**\n\n<:arrow:1086337581043691592> Bot <@476259371912003597> | commande \`\`/bump\`\`\n| Peut effectuer la commande toute les **2HEURES**\n\n**<:4328ankhaping:1086047442178412725>__Liens sites__**\n\n <:arrow:1086337581043691592> [TOP.GG](https://top.gg/servers/1022953369498820618/vote) | Peut effectuer le vote toute les **12HEURES**\n<:arrow:1086337581043691592> [SERVEUR-PRIVE.NET](https://serveur-prive.net/discord/hero-pub-14101) | Peut effectuer le vote toute les **1HEURES**\n\n**<:Cadeaumj_MJ:1089208340816605254> __Récompenses__**\n\n<:arrow:1086337581043691592> **Vous gagnerez le rôle <@&1088950969095692409> **\n<:arrow:1086337581043691592> **Accès au salon <#1088952077130154176> **\n<:arrow:1086337581043691592> **__Publication automatique de votre publicité toute les 2Heures | pendant 1 mois__**\n\n<:1889ankhashocked:1086068879547187260> **__POUR OBTENIR VOS RECOMPENSES MERCI DE VOUS RENDRE DANS LE SALON <#1086045298142498837> ET OUVRIR UN TICKET !__**")
        await message.channel.send({
            embeds: [embed]
        })
        
    }
}