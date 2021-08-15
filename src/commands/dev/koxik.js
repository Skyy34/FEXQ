module.exports = {
    name: "test",

    run: async ({ client, message }) => {

        if (message.channel.id !== '873865596377382945') {
            return;
        }

        let user = message.author;
        let avatar = user.displayAvatarURL({ size: 1024 });

        const embed = {
            color: 'RANDOM',
            title: "",
            url: '',
            author: {
                name: "123",
                icon_url: client.user.displayAvatarURL({ dynamic: true}),
                url: '',
            },
            description: "123",
            thumbnail: {
                url: ``,
            },
            image: {
                url: '',
            },
            timestamp: new Date(),
            footer: {
                text: `123`,
                icon_url: avatar,
            },
        };
        message.delete();
        message.channel.send({ embed: embed })
    }
}