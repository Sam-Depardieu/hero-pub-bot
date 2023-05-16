module.exports = {
    name: 'giveaways-button',
    async runSlash(client, interaction) {
      const role = interaction.guild.roles.cache.get('1086058273414852658');
      if (role) {
        if (interaction.member.roles.cache.has(role.id)) {
          await interaction.member.roles.remove(role);
          await interaction.reply({ content: 'Le rôle giveaway vous a été retiré.', ephemeral: true });
        } else {
          await interaction.member.roles.add(role);
          await interaction.reply({ content: 'Vous avez bien reçu le rôle giveaway !', ephemeral: true });
        }
      } else {
        console.log('Le rôle giveaway est introuvable.');
        await interaction.reply({ content: 'Une erreur est survenue, veuillez réessayer plus tard.', ephemeral: true });
      }
    },
  };
  