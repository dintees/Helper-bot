const { Modal } = require('discord-modals');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "modalSubmit",
    /**
     * 
     * @param {Modal} modal 
     */
    async execute(modal) {
        if (modal.customId !== "age-modal") return;
        await modal.deferReply({ ephemeral: true })

        const Age = modal.getTextInputValue("age-modal")
        if(isNaN(Age)) return modal.followUp({ embeds: [new MessageEmbed().setColor("RED").setDescription("Age is a number, please provide it as such.")] })

        modal.followUp({ embeds: [
            new MessageEmbed().setColor("GREEN")
            .setDescription(`You provided: ${Age}`)
        ]})
    }
}