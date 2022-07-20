const { Client, Intents, Collection } = require('discord.js')
const discordModals = require('discord-modals')
const dotenv = require('dotenv')

dotenv.config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, "GUILD_MEMBERS"] });
discordModals(client)

client.commands = new Collection();
client.buttons = new Collection();

require("./Handlers/Events")(client)
require("./Handlers/Commands")(client)
require("./Handlers/Buttons")(client)


client.login(process.env.TOKEN)

// client.once('ready', () => {
    // console.log("Server has been started!");
    // client.user.setActivity("Hello!")
// })

// client.on('interactionCreate', interaction => {
// 	if (!interaction.isModalSubmit()) return;
// 	// Get the data entered by the user
// 	const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
// 	const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
// 	console.log({ favoriteColor, hobbies });
//     console.log("lalalala");
// });

// client.on("interactionCreate", async interaction => {
//     // console.log(interaction);
//     if (!interaction.isCommand()) return;
//     const { commandName } = interaction

//     if (commandName == "ping") {
//         const row = new MessageActionRow()
//             .addComponents(
//                 new MessageButton()
//                     .setCustomId('primary')
//                     .setLabel('Open Modal')
//                     .setStyle('PRIMARY'),
//             );
//         const embed = new MessageEmbed()
//             .setColor('#0099ff')
//             .setTitle('Some title')
//             .setURL('https://discord.js.org')
//             .setDescription('Some description here');
//         await interaction.reply({ content: "pong " + interaction.options.getString('input'), ephemeral: true, components: [row], embeds: [embed] });


        // const modal = new Modal()
        //     .setCustomId('myModal')
        //     .setTitle('My Modal');
        // // Add components to modal
        // // Create the text input components
        // const favoriteColorInput = new TextInputComponent()
        //     .setCustomId('favoriteColorInput')
        //     // The label is the prompt the user sees for this input
        //     .setLabel("What's your favorite color?")
        //     // Short means only a single line of text
        //     .setStyle('SHORT');
        // const hobbiesInput = new TextInputComponent()
        //     .setCustomId('hobbiesInput')
        //     .setLabel("What's some of your favorite hobbies?")
        //     // Paragraph means multiple lines of text.
        //     .setStyle('PARAGRAPH');
        // // An action row only holds one text input,
        // // so you need one action row per text input.
        // const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
        // const secondActionRow = new MessageActionRow().addComponents(hobbiesInput);
        // // Add inputs to the modal
        // modal.addComponents(firstActionRow, secondActionRow);
        // // Show the modal to the user
        // await interaction.showModal(modal);

    // }

    // reactions
    // const collector = interaction.channel.createMessageComponentCollector();
    // collector.on('collect', async i => {
    //     if (i.customId === 'primary') {
    //         await i.deferUpdate();
    //         await wait(4000);
    //         await i.editReply({ content: 'A button was clicked!', components: [] });
    //     }
    // });
// })



