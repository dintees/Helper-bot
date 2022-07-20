const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "modalSubmit",

    async execute(modal, client) {
        if (modal.customId !== "register-modal") return;
        await modal.deferReply({ ephemeral: true })

        const name = modal.getTextInputValue("register-form-name");

        modal.member.setNickname(name);
        const memberRole = modal.member.guild.roles.cache.find(r => r.name == "Member")
        modal.member.roles.remove(memberRole)

        modal.followUp({ embeds: [new MessageEmbed().setDescription("Witamy na serwerze!")] })

    }
}