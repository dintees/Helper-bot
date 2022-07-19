const { Modal, TextInputComponent, showModal } = require('discord-modals');
const { MessageSelectMenu } = require('discord.js')

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
                new MessageSelectMenu()
                    .setCustomId("error-form-reason")
                    .setPlaceholder("Powód wysłania zgłoszenia")
                    .addOptions([
                        { label: "Błąd bota", description: "Np brak komendy, błąd podczas wykonywania komendy, dziwne zachowanie bota itp...", value: "Błąd bota" },
                        { label: "Bład serwera", description: "Brak roli, brak uprawnień, brak odpowiednich kanałów itp...", value: "błąd serwera" },
                        { label: "Propozycja", description: "Propozycja polepszenia funkcjonalności serwera", value: "Propozycja" },
                        { label: "Inne", description: "Inny powód, niewymieniony powyżej", value: "Inne" }
                    ]),
                new TextInputComponent()
                    .setCustomId("error-form-description")
                    .setLabel("Opis błędu/propoycji zmiany")
                    .setStyle("LONG")
                    .setRequired(true),
            );

        showModal(modal, { client: client, interaction: interaction })
    }
}