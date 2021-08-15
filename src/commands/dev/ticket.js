const { MessageButton } = require('discord-buttons')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ticket",
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let button = new MessageButton()
            .setStyle('red')
            .setLabel('Stwórz ticket')
            .setID('OPEN_TICKET')
        let embed = new MessageEmbed()
            .setAuthor(`Ticket`, client.user.displayAvatarURL())
            .setThumbnail()
            .setImage()
            .setColor("0xA84BFF")
            .setDescription(`Potrzebujesz pomocy? 
            Stworz ticket!`) //treść embeda na kanale do otwierania ticketow po przez kliknięcie w guzik
        message.channel.send(' ', {
            button: button,
            embed: embed
        })
    }
}