module.exports = {
    name: 'reject-button',
    async runSlash(client, interaction) {
        try {
            await interaction.member.send('Tu n\'as pas accepté les règles, donc tu est kick du serveur !')
        } catch(e) {
            await interaction.reply(`Le membre ${interaction.member.displayName} n'a pas accepté les règles, je l'ai kick !`)
        }
        await interaction.member.kick('Il n\'a pas accepté les règles!');
    }
};