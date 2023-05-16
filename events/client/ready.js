module.exports = {
    name: 'ready',
    once: 'true',
    async execute(client) {
        console.log('Bot on!');
        const guild = client.guilds.cache.get('1022953369498820618');
        
        const activities = [
            { name: 'analyser les pubs du serveur', type: 'PLAYING' },
            { name: `${guild.memberCount} membres`, type: 'WATCHING' },
        ];
          
        let activityIndex = 0;
          
          
        setInterval(async () => {
            const members = await guild.members.fetch();
            activities[1].name = `${members.size} membres`;
            const { name, type, url } = activities[activityIndex];
            client.user.setActivity(name, { type, url });
            activityIndex = (activityIndex + 1) % activities.length;
        }, 5000); // 5000ms = 5s
          
        // Instantané
        const devGuild = await client.guilds.cache.get('1022953369498820618');       //test
        devGuild.commands.set(client.commands.map(cmd => cmd));
        /*const devGuild1 = await client.guilds.cache.get('880187438990000139');      //tristan
        devGuild1.commands.set(client.commands.map(cmd => cmd));
        const devGuild2 = await client.guilds.cache.get('901063224580001812');      //steven
        devGuild2.commands.set(client.commands.map(cmd => cmd));*/


        // Global - 1h minimum
    },
};