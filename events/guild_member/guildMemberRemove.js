module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client,  member) {

        const channel = member.guild.channels.cache.find(ch => ch.id === `1086039727280509029`); // Remplacez "Nom-du-salon-vocal" par le nom de votre salon vocal

        if (!channel){ 
            const guild = member.guild;

            // Créer le salon vocal
            channel = await guild.channels.create(`🔍┇Membre : ${member.guild.memberCount}`, {
                type: 'GUILD_VOICE',
            }); // Vérifier que le salon vocal existe
        }
        channel.setName(`🔍┇Membre : ${member.guild.memberCount}`);
    },

};