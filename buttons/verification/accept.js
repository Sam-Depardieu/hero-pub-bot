module.exports = {
    name: 'accept-button',
    async runSlash(client, interaction) {
        await interaction.member.roles.add('1085314627098923159');
        await interaction.reply({ content: 'Bienvenue sur le serveur !', ephemeral: true});
    }
};