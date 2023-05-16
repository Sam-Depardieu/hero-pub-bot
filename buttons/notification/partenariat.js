module.exports = {
    name: 'partenariat-button',
    async runSlash(client, interaction) {
      const role = interaction.guild.roles.cache.get('1086057982284017795');
      if (role) {
        if (interaction.member.roles.cache.has(role.id)) {
          await interaction.member.roles.remove(role);
          await interaction.reply({ content: 'Le rôle partenariat vous a été retiré.', ephemeral: true });
        } else {
          await interaction.member.roles.add(role);
          await interaction.reply({ content: 'Vous avez bien reçu le rôle partenariat !', ephemeral: true });
        }
      } else {
        console.log('Le rôle partenariat est introuvable.');
        await interaction.reply({ content: 'Une erreur est survenue, veuillez réessayer plus tard.', ephemeral: true });
      }
    },
  };
  