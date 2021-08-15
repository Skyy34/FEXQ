module.exports = {
    name: 'king',
    run: async ({ client, message, args, MessageEmbed }) => {
        message.channel.send(`Ogłoszenie...`).then(m => {
            let pingembed = new MessageEmbed()
                .setAuthor(`INFO`)
                .setColor("0xA768FF")
                .setDescription(`Podczas tworzenia ticketa wystarczy napisać "ticket odbiór nagrody"`)
                .setFooter(`Ogłoszenie dodał ${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            return m.edit(pingembed)
        })
    }
}