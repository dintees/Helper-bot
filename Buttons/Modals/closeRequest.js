const { Modal, TextInputComponent, showModal } = require('discord-modals')

module.exports = {
    id: "close-request-submit",

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const modal = new Modal().setCustomId("close-request-modal")
        .setTitle("Podsumowanie zgłoszenia")
        .addComponents(
            new TextInputComponent()
                .setCustomId("close-request-description")
                .setLabel("Opis wykonanych kroków + notatki")
                .setStyle("LONG")
                .setRequired(true),
        );

        showModal(modal, { client: client, interaction: interaction })
    }
}