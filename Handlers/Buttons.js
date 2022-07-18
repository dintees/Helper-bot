const { Client } = require('discord.js')
const { promisify } = require('util')
const { glob } = require('glob')
const PG = promisify(glob)
const Ascii = require('ascii-table')

/**
 * 
 * @param {Client} client 
 */
module.exports = async (client) => {
    const Table = new Ascii("Buttons handler");
    const buttonsFolder = await PG(`${process.cwd().replace(/\\/g, '/').replace(/\ /g, '\\ ')}/Buttons/*/*.js`);

    buttonsFolder.map(async file => {
        const buttonFile = require(file)
        if (!buttonFile.id) return;

        client.buttons.set(buttonFile.id, buttonFile);
        Table.addRow(buttonFile.id, "✅ LOADED")
    })
    console.log(Table.toString());
}