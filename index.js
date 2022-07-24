const { Client, Intents, Collection } = require('discord.js')
const discordModals = require('discord-modals')
const dotenv = require('dotenv')

dotenv.config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, "GUILD_MEMBERS"] });
// const client = new Client({ intents: new Intents(32767) });
discordModals(client)

client.commands = new Collection();
client.buttons = new Collection();

require("./Handlers/Events")(client)
require("./Handlers/Commands")(client)
require("./Handlers/Buttons")(client)


client.login(process.env.TOKEN)