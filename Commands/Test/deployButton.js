const { MessageEmbed, MessageActionRow, MessageButton, CommandInteraction } = require('discord.js')

module.exports = {
    name: "deploybuttons",
    description: "This is a test // Modal with age form",
    permission: "ADMINISTRATOR",

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const embed = new MessageEmbed()
            .setDescription("Click the **Answer** button to complete the form")
            .setColor("GREEN")

        const Row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("age-submit")
                .setStyle("SUCCESS")
                .setLabel("Answer")
        );

        interaction.reply({ embeds: [embed], components: [Row] });
    }
}