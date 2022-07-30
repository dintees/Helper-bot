const { MessageEmbed } = require('discord.js');
const { channelNames } = require('../../config.json')

module.exports = {
    name: "modalSubmit",

    async execute(modal, client) {
        if (modal.customId !== "close-survey-modal") return;
        await modal.deferReply({ ephemeral: true })

        const description = modal.getTextInputValue("survey-description");

        const suggestionsChannel = client.channels.cache.find(channel => channel.name === channelNames.userSuggestionsChannel);
        const messageID = modal.message.embeds[0].fields.find(f => f.name === "ID wiadomości").value;

        try {

            // a mesasge from user channel
            const message = await suggestionsChannel.messages.fetch(messageID)

            const votesFor = message.reactions.cache.get('👍').count;
            const votesAgainst = message.reactions.cache.get('👎').count;

            // remove all reactions
            await message.reactions.removeAll();

            // edit message
            const embed = message.embeds[0];

            embed.addFields(
                { name: 'Wyniki głosowania', value: '👍 - **' + votesFor.toString() + '** || 👎 - **' + votesAgainst.toString() + '**' },
                { name: 'Podsumowanie', value: '`' + description + '`' }
            );
            if (votesFor > votesAgainst) {
                embed.setColor("GREEN");
                embed.setThumbnail('https://i.imgur.com/Wv4YZwu.png');
            }
            else {
                embed.setColor("RED");
                // embed.setThumbnail('')
            }

            await message.edit({ embeds: [embed] });
            await modal.followUp({ embeds: [new MessageEmbed().setDescription('Wiadomość na kanale `@' + channelNames.userSuggestionsChannel + '` została edytowana.').setColor("GREEN")] })
            await modal.message.delete();
        } catch (err) {
            await modal.followUp({ embeds: [new MessageEmbed().setDescription("Coś poszło nie tak...").setColor("RED")] });
        }
    }
}