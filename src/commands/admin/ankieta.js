const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ankieta",
    desc: "Wysyła podany tekst!",
    perm: ["dev"],
    usage: "<tekst>",
    run: async ({ client, message, args }) => {
        const str = args.join(" ")
        const res = str.split("|")
        if (!res[0]) return message.channel.send("Podaj autora wiadomości! (nie zapomnij o znaku `|` przed autorem a treścią!)")
        if (!res[1]) return message.channel.send("Podaj treść wiadomości!")
        let user = message.author;
        let avatar = user.displayAvatarURL({ size: 1024 });
        const embed = {
            color: 'RANDOM',
            title: ``,
            url: '',
            author: {
                name: res[0],
                icon_url: client.user.displayAvatarURL({ dynamic: true }),
                url: '',
            },
            description: res[1],
            thumbnail: {
                url: "attachment://_reakcja",
            },
            image: {
                url: '',
            },
            footer: {
                text: ``,
                icon_url: ``,
            },
        };
        message.delete();
        message.channel.send({ embed: embed })
            .then(message => {
                message.react("✅")
                message.react("❎")
            })
    }
}