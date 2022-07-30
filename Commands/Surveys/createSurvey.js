const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const { channelNames } = require('../../config.json')

module.exports = {
    name: "create-survey",
    description: "Command to create survey",
    // permission: "ADMINISTRATOR",

    options: [
        {
            name: "content",
            description: "The content of the question",
            type: "STRING",
            required: true
        }
    ],

    execute(interaction, client) {

        // to user
        interaction.reply({
            embeds: [new MessageEmbed()
                .setColor("GREEN")
                .setDescription("Twoja sugestia została wysłana do zaakceptowania. Po zaakceptowaniu pojawi się na kanale `@sugestie`.")
            ], ephemeral: true
        });


        // to admin
        const Embed = new MessageEmbed()
            .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setColor("AQUA")
            .addFields([
                { name: "Autor", value: `<@${interaction.user.id}>` },
                { name: "Treść sugestii", value: '`' + interaction.options.getString('content') + '`' },
            ])

        const Row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("accept-survey")
                .setStyle("SUCCESS")
                .setLabel("Zaakceptuj sugestię"),
            new MessageButton()
                .setCustomId("refuse-survey")
                .setStyle("DANGER")
                .setLabel("Odrzuć sugestię"),
        )


        const suggestionsChannel = client.channels.cache.find(channel => channel.name === channelNames.suggestionsChannel);
        if (suggestionsChannel) suggestionsChannel.send({ embeds: [Embed], components: [Row] })
    }
}