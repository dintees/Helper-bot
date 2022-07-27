const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Check bot ping",
    channels: ['test'],
    // permission: "ADMINISTRATOR",
    // options: [
    //     {
    //         name: "input",
    //         description: "pong",
    //         type: "STRING",
    //         required: true
    //     }
    // ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction, client) {
        if (interaction.channel.name !== 'test') return interaction.reply({ content: "This command is now in developer mode.", ephemeral: true })
        interaction.reply({ content: `PONG ${client.ws.ping} ms (API)`, ephemeral: true });
    }
}