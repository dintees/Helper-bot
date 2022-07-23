module.exports = {
    name: "messageCreate",
    execute(message) {
        // add reaction to messages in "ogłoszenia" channel
        if (message.channel.name === "ogłoszenia") message.react('✅')
    }
}