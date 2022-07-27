const { MessageEmbed, MessageActionRow, MessageButton, CommandInteraction } = require('discord.js')

module.exports = {
    name: "register-form",
    description: "Form to new members",
    permission: "ADMINISTRATOR",

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        // if(!interaction.member.permissions.has("ADMINISTRATOR")) return;
        const embed = new MessageEmbed()
            .setDescription("Regulamin:\n**1.** ...\ncdn...")
            .setColor("BLUE")
            .setThumbnail('https://i.imgur.com/G2lLITB.png')

        const Row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("register-submit")
                .setStyle("PRIMARY")
                .setLabel("Akceptuję regulamin")
        );

        interaction.reply({ embeds: [embed], components: [Row] });
    }
}