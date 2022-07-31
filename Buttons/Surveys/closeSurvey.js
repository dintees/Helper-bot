const { Modal, TextInputComponent, showModal } = require('discord-modals')
const { MessageSelectMenu } = require('discord.js');

module.exports = {
    id: "close-survey",

    async execute(interaction, client) {
        const modal = new Modal().setCustomId("close-survey-modal")
            .setTitle("Podsumowanie sugestii")
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId("survey-closure-type")
                    .setPlaceholder("Sposób zakończenia")
                    .addOptions([
                        { label: "Zgodnie z wynikami głosowania", description: "Rozpatrzenie zależy od wyników głosowania", value: "voting" },
                        { label: "Zaakceptuj", description: "Akceptacja niezależnie od wyników głosowania", value: "acceptance" },
                        { label: "Odrzuć", description: "Odrzucenie niezależnie od wyników głosowania", value: "rejection" },
                    ]),
                new TextInputComponent()
                    .setCustomId("survey-description")
                    .setLabel("Opis podjętych działań")
                    .setStyle("LONG")
                    .setRequired(true),
            );

        showModal(modal, { client: client, interaction: interaction })
    }
}