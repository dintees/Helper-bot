const { MessageEmbed, MessageActionRow, MessageButton, CommandInteraction } = require('discord.js')

module.exports = {
    name: "proposals-form",
    description: "Modal with error form",
    permission: "ADMINISTRATOR",

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const embed = new MessageEmbed()
            .setDescription("Jeżeli zauważyłeś/aś błąd lub chciałabyś/chciałbyś podzielić się tym, co można zmienić na serwerze, wypełnij formularz")
            .setColor("BLUE")

        const Row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("proposal-submit")
                .setStyle("PRIMARY")
                .setLabel("Zgłoś błąd / propozycję")
        );

        interaction.reply({ embeds: [embed], components: [Row] });
    }
}