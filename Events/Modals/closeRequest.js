module.exports = {
    name: "modalSubmit",

    async execute(modal, client) {
        if (modal.customId !== "close-request-modal") return;
        await modal.deferReply()

        const description = modal.getTextInputValue("close-request-description")

        const embed = modal.message.embeds[0];

        // archive message threads
        const thread = modal.message.channel.threads.cache.find(t => t.id == modal.message.id);
        thread.setArchived(true);
        // thread.forEach(t => t.setArchived(true))

        embed.addFields(
            { name: "Zamknięte przez", value: `<@${modal.user.id}>` },
            { name: "Opis", value: '`' + description + '`' }
        )
            .setColor("GREEN")
            .setTimestamp()
        modal.followUp({ embeds: [embed] });
        modal.message.delete();
    }
}