module.exports = {
    name: "modalSubmit",

    async execute(modal, client) {
        if (modal.customId !== "close-request-modal") return;
        await modal.deferReply()

        const description = modal.getTextInputValue("close-request-description")

        let embed = modal.message.embeds[0];
        // embed.addField("Zamknięcie zgłoszenia", `Zamknięto przez **${modal.user.tag}**\n**Opis:**\n${description}`)
        embed.addFields(
            { name: "Zamknięto przez", value: `@${modal.user.tag}` },
            { name: "Opis", value: description }
        )
            .setColor("GREEN")
            .setTimestamp()
        modal.followUp({ embeds: [embed] });
        modal.message.delete();
    }
}