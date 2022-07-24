const { channelNames } = require('../../config.json');

module.exports = {
    name: "messageCreate",
    execute(message) {
        // add reaction to messages in "ogłoszenia" channel
        if (message.channel.name === channelNames.announcementsChannel) message.react('✅')
    }
}