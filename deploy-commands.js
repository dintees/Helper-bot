// const { SlashCommandBuilder } = require('@discordjs/builders');
// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');
// const dotenv = require('dotenv')

// dotenv.config();

// const commands = [
// 	// new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')
//         // .addStringOption(option => option.setName('input').setDescription('Please enter the string').setRequired(true)),
        
// 	// new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
// 	// new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
// ]
// 	.map(command => command.toJSON());

// const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

// rest.put(Routes.applicationCommands(process.env.APP_ID), { body: commands })
// 	.then(() => console.log('Successfully registered application commands.'))
// 	.catch(console.error);