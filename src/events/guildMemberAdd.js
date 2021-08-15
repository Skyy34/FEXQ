module.exports = (client) => {
    const Discord = require('discord.js');
    client.on('guildMemberAdd', guildMember =>{
        const guildId = '869678837582155796';
        const channel = guildMember.guild.channels.cache.get('869678837582155798')

        const Embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ size: 2048, format: 'gif', dynamic: true }))
        .setColor('PURPLE')
        .setDescription(`Witaj ${guildMember.user}\n` +
        '\n' +
        'Witaj na discordzie **uekeyFX x Design**' +
        '\n' +
        'Mam nadzieję że zostaniesz za dłużej')
        .setFooter(`Jesteś ${client.guilds.cache.get(guildId).memberCount} osobą na naszym serwerze!.`, guildMember.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }))
        .setTimestamp()

        channel.send(Embed)
    })
}