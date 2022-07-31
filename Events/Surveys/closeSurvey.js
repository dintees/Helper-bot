const { MessageEmbed } = require('discord.js');
const { channelNames } = require('../../config.json')

module.exports = {
    name: "modalSubmit",

    async execute(modal, client) {
        if (modal.customId !== "close-survey-modal") return;
        await modal.deferReply({ ephemeral: true })

        const closureType = modal.getSelectMenuValues('survey-closure-type')[0];
        const description = modal.getTextInputValue("survey-description");

        const suggestionsChannel = client.channels.cache.find(channel => channel.name === channelNames.userSuggestionsChannel);
        const messageID = modal.message.embeds[0].fields.find(f => f.name === "ID wiadomości").value;

        try {
            // message from user channel
            const message = await suggestionsChannel.messages.fetch(messageID);
            const embed = message.embeds[0];

            if (closureType === 'voting') {
                const votesFor = message.reactions.cache.get('👍').count;
                const votesAgainst = message.reactions.cache.get('👎').count;

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
            } else if (closureType === 'acceptance') {
                embed.setColor("GREEN")
                    .setThumbnail('https://i.imgur.com/Wv4YZwu.png')
                    .addFields(
                        { name: 'Pełna akceptacja sugestii przez', value: '`' + modal.user.username + '`' },
                        { name: 'Podsumowanie', value: '`' + description + '`' }
                    );
            } else {
                embed.addFields(
                    { name: 'Odrzucenie sugestii przez', value: '`' + modal.user.username + '`' },
                    { name: 'Podsumowanie', value: '`' + description + '`' }
                )
                    .setColor("RED");
            }

            // remove all reactions
            await message.reactions.removeAll();

            await message.edit({ embeds: [embed] });
            await modal.followUp({ embeds: [new MessageEmbed().setDescription('Wiadomość na kanale `@' + channelNames.userSuggestionsChannel + '` została edytowana.').setColor("GREEN")] })
            await modal.message.delete();
        } catch (err) {
            console.log(err);
            await modal.reply({ embeds: [new MessageEmbed().setDescription("Coś poszło nie tak...").setColor("RED")], ephemeral: true });
        }
    }
}