
const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv')
dotenv.config()
const{TOKEN, CLIENT_ID, GUILD_ID} = process.dotenv


const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}`);
});


client.login(token);