const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping test command",
    persmission: "ADMINISTRATOR",
    // options: [
    //     {
    //         name: "input",
    //         description: "pongg",
    //         type: "STRING",
    //         required: true
    //     }
    // ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({ content: "PONG", ephemeral: true })
    }
}