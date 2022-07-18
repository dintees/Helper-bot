const { Modal, TextInputComponent, showModal } = require('discord-modals')

module.exports = {
    id: "error-submit",

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const modal = new Modal().setCustomId("error-modal")
        .setTitle("Zgłaszanie błędu/propozycji")
        .addComponents(
            new TextInputComponent()
                .setCustomId("error-form-name")
                .setLabel("Imię i nazwisko")
                .setStyle("SHORT")
                .setRequired(true),
            new TextInputComponent()
                .setCustomId("error-form-age")
                .setLabel("Podaj swój wiek")
                .setStyle("SHORT")
                .setPlaceholder("Wiek")
                .setRequired(true),
            new TextInputComponent()
                .setCustomId("error-form-description")
                .setLabel("Opis błędu/propoycji zmiany")
                .setStyle("LONG")
                .setRequired(true),
        );

        showModal(modal, { client: client, interaction: interaction })
    }
}