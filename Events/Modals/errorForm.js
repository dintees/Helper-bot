const { Modal } = require('discord-modals')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name: "modalSubmit",

    async execute(modal, client) {
        if (modal.customId !== "error-modal") return;
        await modal.deferReply({ ephemeral: true })

        const name = modal.getTextInputValue("error-form-name")
        const age = modal.getTextInputValue("error-form-age")
        const description = modal.getTextInputValue("error-form-description")

        if (isNaN(age)) return modal.followUp({ embeds: [new MessageEmbed().setColor("RED").setDescription("Age is a number, please provide it as such.")] })


        const proposalsChannel = client.channels.cache.find(channel => channel.name === 'errors');

        if (proposalsChannel) {

            // to user
            modal.followUp({
                embeds: [
                    new MessageEmbed()
                        .setColor("GREEN")
                        .setDescription("Formularz został wysłany. Dziękujemy!")
                ]
            })

            // to admin
            const Row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomId("close-request-submit")
                    .setStyle("DANGER")
                    .setLabel("Zamknij zgłoszenie")
            );

            proposalsChannel.send({
                embeds: [
                    new MessageEmbed().setColor("BLUE")
                        .addFields(
                            { name: "Autor zgłoszenia", value: `@${modal.user.tag}`, inline: true },
                            { name: "Imię i nazwisko", value: name, inline: true },
                            { name: "Wiek", value: age, inline: true },
                            { name: "Opis", value: description }
                        )
                        .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })
                ], components: [Row]
            })
        } else {
            // to user
            modal.followUp({
                embeds: [
                    new MessageEmbed()
                        .setColor("RED")
                        .setDescription("Błąd serwera. Formularz nie został wysłany. Opisz problem w wiadomości prywatnej do administratora serwera.")
                ]
            })
        }
    }
}