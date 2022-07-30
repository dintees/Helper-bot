module.exports = {
    id: "refuse-survey",

    execute(interaction) {
        interaction.message.delete();
    }
}