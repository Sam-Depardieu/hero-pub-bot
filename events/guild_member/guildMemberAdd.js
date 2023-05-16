module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client,  member) {
        console.log(`Nouveau membre (${member.id})`)
        
        /*const canvas = Canvas.createCanvas(600, 200);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage(`${process.cwd()}/image/bienvenue.png`);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Ajouter l'image de profil du membre
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
        const x = 415; // la position x du cercle
        const y = 42; // la position y du cercle
        const radius = 19.5; // le rayon du cercle
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(avatar, x - radius, y - radius, radius * 2, radius * 2);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'emoji.png');*/
        
        member.guild.channels.cache.get('1085579017215807498').send({ content:`<:7358ankhaheart:1086047446846668961> Bienvenue à ${member.user.username}, sur **HERO PUB** ! \n<:7504ankhasip:1086047445714219008> **__Souhaitez lui la bienvenue !__**`, files : [`${process.cwd()}/image/bienvenue.png`]});

        const channel = member.guild.channels.cache.find(ch => ch.id === `1086039727280509029`); // Remplacez "Nom-du-salon-vocal" par le nom de votre salon vocal

        if (!channel){ 
            const guild = member.guild;

            // Créer le salon vocal
            channel = await guild.channels.create(`🔍┇Membre : ${member.guild.memberCount}`, {
                type: 'GUILD_VOICE',
            }); // Vérifier que le salon vocal existe
        }
        channel.setName(`🔍┇Membre : ${member.guild.memberCount}`);

        /*const inviteRoleId10 = "1086048301092184135";
        const inviteRoleId25 = "1086048779922325574";
        
        const invites = await member.guild.invites.fetch();
        const inviter = invites.find(inv => inv.uses > inv.uses);
        if (!inviter) return;

        const inviteCount = inviter.uses;

        if (inviteCount >= 10) {
            const role = member.guild.roles.cache.get(inviteRoleId10);
            if (role) {
                member.roles.add(role).catch(console.error);
            }
        }

        if (inviteCount >= 25) {
            const role = member.guild.roles.cache.get(inviteRoleId25);
            if (role) {
                member.roles.add(role).catch(console.error);
            }
        }
        const inviteur = inviter ? inviter.inviter.username : 'Unknown';

        member.guild.channels.cache.get('1086996594714480730').send({ content:`<:6756ankhahearts1:1086068680800075796> **Bienvenue (__${member.user.username}__)** \n<:7358ankhaheart:1086047446846668961> **Invité par (__${inviteur}__)**`});
        inviter = null
         // Récupère les invitations pour le serveur*/
        
    },

};