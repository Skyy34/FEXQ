const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
module.exports = async (client, button) => {
    await button.reply.defer()
    let buttonClicker = button.clicker.member;
    let guild = button.guild;

    if (button.id === 'OPEN_TICKET') {
        let alreadyOpenedTicket = client.channels.cache.filter(m => m.type == "text" && m.name.includes("ticket-")).map(m => m.name.split("ticket-")[1]);
        let already = alreadyOpenedTicket.some(v => buttonClicker.user.username == v)
        console.log(already)
        if (already === true) {
            return await buttonClicker.user.send(new MessageEmbed().setAuthor(`Błąd!`).setColor("RED").setDescription(`Posiadasz już utworzony ticket!`))
        }
        let ticketChannel = await guild.channels.create(`ticket-${buttonClicker.user.username}`, {
            type: "text",
            parent: '876395476717539328', //id kategori w której maja się otwierać tickety
            permissionOverwrites: [
                {
                    id: buttonClicker.user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: '876393941430304828', //id roli z dostępem do ticketow
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                }
            ]
        })
        let openedTicket = new MessageEmbed()
            .setAuthor(`Nowy ticket!`)
            .setColor("0xA768FF")
            .setThumbnail(buttonClicker.user.displayAvatarURL({ dynamic: true }))
            .setDescription('Witaj właśnie utworzyles ticket') //tytuł embeda na otwartym tickecie
        let supportButton = new MessageButton()
            .setLabel("Zamknij ticket")
            .setEmoji("🔒")
            .setStyle("gray")
            .setID("TICKET_CLOSE")
        /*let claimTicket = new MessageButton()
            .setLabel("Zajmij ticket!")
            .setEmoji("📌")
            .setStyle("gray")
            .setID(`TICKET_CLAIM_${button.channel.id}`)*/
        ticketChannel.send(`${buttonClicker.user}`, {
            embed: openedTicket,
            components: new MessageActionRow().addComponent(supportButton)
        })
    }
    if (button.id === `TICKET_CLOSE`) {
        let ticketChannel = button.channel;

        let deletingTicket = new MessageEmbed()
            .setAuthor(`Ticket został zamknięty`)
            .setColor("0xFF0000")
            .setDescription(`Ticket zostanie usunięty za (**5**) sekund!`)
        ticketChannel.send(deletingTicket)
        setTimeout(() => { ticketChannel.delete() }, 5000);

    }
    /*if(button.id == `TICKET_CLAIM_${button.channel.id}`) {
        let ticketChannel = button.channel;
        let createdBy = client.users.cache.get(ticketChannel.name.split("ticket-")[1])
        let claimEmbed = new MessageEmbed()
            .setColor("0xFF00F7")
            .setAuthor(`Ticket zajęty!`)
            .setDescription(`${button.clicker.user} przejął kontrole nad tym ticketem!`)
        button.channel.edit({
            parentID: "859333485688389642",
            permissionOverwrites: [
                {
                    id: createdBy.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: '858433897671032854',
                    deny: ["VIEW_CHANNEL"]
                }
            ]
        })
        button.channel.send(claimEmbed)
    }*/
    if (button.id === 'WERYFIKACJA') {
        let buttonClicker = button.clicker.member;
        button.clicker.member.roles.add('873865595706302475') //id roli którą ma dodać
        buttonClicker.user.send(new MessageEmbed()
            .setAuthor(`Weryfikacja!`)
            .setDescription(`> Twoja weryfikacja została zakończona poprawnie!`)
            .setColor("0x15FF00"))
    }

}