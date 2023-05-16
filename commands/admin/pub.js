const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'pub',
    description: 'Commande pub',
    permissions: ['ADMINISTRATOR'],
    async run(client, message, args){
        const embed = new MessageEmbed()
            
            
            
        message.channel.send({ embeds: [embed] });
    }
};