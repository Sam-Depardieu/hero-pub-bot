const { MessageEmbed, Collection } = require("discord.js");

module.exports = {
    name: 'giveaway',
    description: 'Lance un giveaway.',
    permissions: ['ADMINISTRATOR'],
    run(client, message, args) {
      
        if (args.length < 3) {
            return message.reply(`Utilisation: !giveaway <durée> <nombre de gagnants> <prix>`);
        }
        
        const duration = args[0]; // Durée du giveaway en minutes
        const winners = parseInt(args[1]); 
        const prize = args.slice(2).join(' '); 
        
        if (isNaN(duration)) {
            return message.reply('La durée doit être un nombre valide en minutes.');
        }
        
        const giveawayEmbed = new MessageEmbed()
            .setTitle(`🎉 Giveaway: ${prize}`)
            .setDescription(`Réagissez avec 🎉 pour participer !\nDurée: **${duration} minutes**\nNombre de gagnants: **${winners}**`)
            .setColor('#00ff00')
            .setTimestamp();
        
        message.channel.send({ embeds: [giveawayEmbed] }).then(async (msg) => {
            await msg.react('🎉');
            
            const chooseWinners = () => {
                    
                const participants = new Collection();
                participants = msg.reactions.cache.get('🎉').users.cache.filter((u) => !u.bot);
                
                if (participants.size < winners) {
                    return message.channel.send("Il n'y a pas assez de participants pour choisir des gagnants !");
                }
                
                const winnersArray = participants.array().sort(() => Math.random() - 0.5).slice(0, winners);
                
                const winnersEmbed = new MessageEmbed()
                    .setTitle(`🎉 Gagnants du giveaway: ${prize} 🎉`)
                    .setDescription(`Félicitations à ${winnersArray.join(', ')} !`)
                    .setColor('#00ff00')
                    .setTimestamp();
                message.channel.send({ embeds: [winnersEmbed] });
            };
            
            setTimeout(chooseWinners, duration * 60 * 1000);
        });
        },
  };