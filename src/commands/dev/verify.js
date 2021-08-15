const { MessageButton } = require('discord-buttons')
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "verify",
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let embed = new MessageEmbed()
            .setAuthor(`Weryfikacja!`)
            .setColor('0xFF82FD')
            .setDescription(`Aby się zweryfikować kliknij w guzik poniżej!`)
        let button = new MessageButton()
            .setStyle('blurple')
            .setEmoji('✅')
            .setLabel('Zweryfikuj się')
            .setID('WERYFIKACJA')
        message.channel.send(' ', {
            embed: embed,
            button: button
        })
    }
}