const { MessageActionRow, MessageButton } = require('discord.js');
const { channelNames } = require('../../config.json')

module.exports = {
    id: "accept-survey",

    async execute(interaction, client) {
        const suggestionsChannel = client.channels.cache.find(channel => channel.name === channelNames.userSuggestionsChannel);

        let embed = interaction.message.embeds[0];
        embed.addFields({ name: "Zaakceptowane przez", value: '`' + interaction.user.username + '`' })
            .setFooter({ text: "BW Helper" })
            .setTimestamp()
        const message = await suggestionsChannel.send({ embeds: [embed], fetchReply: true });
        message.react('👍');
        message.react('👎');

        embed = interaction.message.embeds[0]
        embed.addFields({ name: "ID wiadomości", value: message.id })

        const Row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("close-survey")
                .setStyle("DANGER")
                .setLabel("Zakończ sugestię"),
        )

        interaction.update({ components: [Row], embeds: [embed] })
    }
}