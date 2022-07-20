const { Modal, TextInputComponent, showModal } = require('discord-modals')

module.exports = {
    id: "register-submit",

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const modal = new Modal().setCustomId("register-modal")
        .setTitle("Dokończenie rejestracji")
        .addComponents(
            new TextInputComponent()
                .setCustomId("register-form-name")
                .setLabel("Imię i nazwisko")
                .setPlaceholder("Imię i nazwisko")
                .setStyle("SHORT")
                .setRequired(true),
        );

        showModal(modal, { client: client, interaction: interaction })
    }
}