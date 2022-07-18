const { Modal, TextInputComponent, showModal } = require('discord-modals')

module.exports = {
    id: "age-submit",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction, client) {
        const modal = new Modal().setCustomId("age-modal")
        .setTitle("Age selector")
        .addComponents(
            new TextInputComponent()
                .setCustomId("age-modal")
                .setLabel("Age selector")
                .setStyle("SHORT")
                .setPlaceholder("Provide your Age")
                .setRequired(true)
        );

        showModal(modal, { client: client, interaction: interaction })
    }
}