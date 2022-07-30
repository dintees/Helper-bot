const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { channelNames } = require('../../config.json');

module.exports = {
    name: "modalSubmit",

    async execute(modal, client) {
        if (modal.customId !== "error-modal") return;
        await modal.deferReply({ ephemeral: true })

        const name = modal.getTextInputValue("error-form-name")
        const age = modal.getTextInputValue("error-form-age")
        const description = modal.getTextInputValue("error-form-description")
        const reason = modal.getSelectMenuValues("error-form-reason")

        if (isNaN(age)) return modal.followUp({ embeds: [new MessageEmbed().setColor("RED").setDescription("Age is a number, please provide it as such.")] })

        const proposalsChannel = client.channels.cache.find(channel => channel.name === channelNames.proposalsChannel);

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

            const Embed = new MessageEmbed().setColor("BLUE")
                .addFields(
                    { name: "Autor zgłoszenia", value: `<@${modal.user.id}>`, inline: true },
                    { name: "Imię i nazwisko", value: name, inline: true },
                    { name: "Wiek", value: age, inline: true },
                    { name: "Kategoria", value: reason[0] },
                    { name: "Opis", value: '`' + description + '`' }
                )
                .setAuthor({ name: modal.user.tag, iconURL: modal.user.displayAvatarURL({ dynamic: true }) })

            if (reason[0] == "Propozycja" || reason[0] == "Inne") Embed.setThumbnail('https://i.imgur.com/G2lLITB.png');
            else Embed.setThumbnail('https://i.imgur.com/Ec34Ymy.png');

            await proposalsChannel.send({ embeds: [Embed], components: [Row] }).then(async msg => {
                // add thread
                const thread = await msg.startThread({
                    name: reason[0],
                    reason: description
                })

                // add members to the thread
                await thread.members.add('570925710084931585'); // Bartko13
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