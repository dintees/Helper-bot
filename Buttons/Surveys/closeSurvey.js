const { Modal, TextInputComponent, showModal } = require('discord-modals')

module.exports = {
    id: "close-survey",

    async execute(interaction, client) {
        const modal = new Modal().setCustomId("close-survey-modal")
            .setTitle("Podsumowanie sugestii")
            .addComponents(
                new TextInputComponent()
                    .setCustomId("survey-description")
                    .setLabel("Opis podjętych działań")
                    .setStyle("LONG")
                    .setRequired(true),
            );

        showModal(modal, { client: client, interaction: interaction })
    }
}