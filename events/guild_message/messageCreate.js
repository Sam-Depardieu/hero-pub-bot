const { MessageEmbed } = require("discord.js");
var msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11, msg12, msg13, msg14, msg15, msg16, msg17, msg18, msg19, msg20, msg21, msg22, msg23 = null
module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(client, message, reaction) {
        if (message.author.bot) return;
        let prefix = "!";
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        
        let user = message.mentions.users.first();
        if(user){
            if(user.id === client.user.id) message.channel.send("Mon prefix sur ce serveur est -> \`\`"+ prefix+"\`\`");
        }
        if(message.content === "Hey"|| message.content === "hey" || message.content === "Bonjour" || message.content === "bonjour" || message.content === "Salut" || message.content === "salut" || message.content === "Hello" || message.content === "hello"){
            message.react("👋")
        }

        const insultes = ['insulte', 'insulte2', 'insulte3']; // Remplacez ces insultes par celles que vous souhaitez détecter
        const lowerCaseMessage = message.content.toLowerCase();
        for (const insulte of insultes) {
            if (lowerCaseMessage.includes(insulte.toLowerCase())) {
                message.delete(message.author);
            }
        }
        const regex = /discord\.gg\/\w+/g;
        // On vérifie si le message contient un lien discord.gg
        if (message.channelId === "1086038715018793030" || message.channelId === "1086038880471502868" || regex.test(message.content) ) {
            const embed = new MessageEmbed()
                .setDescription("<:arrow:1086337581043691592> **Merci de lire le <#1023187062767239268>**\n<:arrow:1086337581043691592> **Description non obligatoire**\n<:arrow:1086337581043691592> **Slowmode de 2h**")
                .setImage('https://media.discordapp.net/attachments/1085579017215807498/1086391672608395314/Sans_titre_3.png?width=458&height=114')
            if(message.channelId === "1086072587861364806")
            {
                if(msg1 != null){msg1.delete()}
                msg1 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086035928193179708")
            {
                if(msg2 != null){msg2.delete()}
                msg2 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086035645878784010")
            {
                if(msg3 != null){msg3.delete()}
                msg3 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086036450535030835")
            {
                if(msg4 != null){msg4.delete()}
                msg4 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086036600561074357")
            {
                if(msg5 != null){msg5.delete()}
                msg5 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086036999993040987")
            {
                if(msg6 != null){msg6.delete()}
                msg6 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086037128405852241")
            {
                if(msg7 != null){msg7.delete()}
                msg7 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086037284685615204")
            {
                if(msg8 != null){msg8.delete()}
                msg8 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086037752803491920")
            {
                if(msg9 != null){msg9.delete()}
                msg9 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086037962325766164")
            {
                if(msg10 != null){msg10.delete()}
                msg10 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086038267293610034")
            {
                if(msg11 != null){msg11.delete()}
                msg11 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086038715018793030")
            {
                if(msg12 != null){msg12.delete()}
                msg12 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086038880471502868")
            {
                if(msg13 != null){msg13.delete()}
                msg13 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1086039158205722736")
            {
                if(msg14 != null){msg14.delete()}
                msg14 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1092801683928658021")
            {
                if(msg15 != null){msg8.delete()}
                msg15 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1092801884131164312")
            {
                if(msg16 != null){msg9.delete()}
                msg16 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1092801966142402610")
            {
                if(msg17 != null){msg10.delete()}
                msg17 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1092802060866551960")
            {
                if(msg18 != null){msg11.delete()}
                msg18 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1092802147923542097")
            {
                if(msg19 != null){msg12.delete()}
                msg19 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1092802232900141147")
            {
                if(msg20 != null){msg13.delete()}
                msg20 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1092802310196953260")
            {
                if(msg21 != null){msg14.delete()}
                msg21 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1092803341165265018")
            {
                if(msg22 != null){msg13.delete()}
                msg22 = await message.channel.send({ embeds:[embed] }) 
            }
            if(message.channelId === "1092803412506202122")
            {
                if(msg23 != null){msg14.delete()}
                msg23 = await message.channel.send({ embeds:[embed] }) 
            }
        }
                
        if (!message.content.startsWith(prefix)) return;

        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if (!message.member.permissions.has([cmd.permissions])) return message.reply(`Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`) pour taper cette commande!`);

        if (cmd) cmd.run(client, message, args);
    },

};