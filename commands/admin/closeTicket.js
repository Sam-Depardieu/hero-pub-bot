const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'close',
    description: 'Commande closeTicket',
    permissions: ['SEND_MESSAGE'],
    async run(client, message, args){
        // On récupère tous les salons de la guilde

        // On filtre les salons qui contiennent le mot "ticket" dans leur nom
        if(message.channel.name.toLowerCase().includes('ticket'))
        {
            if (!message.member.roles.cache.some(role => role.id === '1086049074211475517') || !message.member.roles.cache.some(role => role.id === '1086051452545400922') || !message.member.permissions.has('ADMINISTRATOR')) {
                return message.reply("Vous n'avez pas la permission d'utiliser cette commande, attendez un responsable ou un staff !");
            }
            else{
                const msg =await message.channel.send(`Le salon "${message.channel.name}" sera supprimé dans 10 secondes.`);
                
                let count = 1;
                const interval = setInterval(() => {
                    msg.edit(`Le salon "${message.channel.name}" sera supprimé dans ${10-count} secondes.`);
                    
                    count++;
                    if (count > 10) {
                        clearInterval(interval);
                        message.channel.delete()
                    }
                }, 1000);
            }
        }
        else{
            message.delete()
            const msg =await message.reply(`Vous n'êtes pas dans un salon ticket.`);
            setTimeout(() => {
                msg.delete()
            }, 10000);
        }
        return;
    }
};