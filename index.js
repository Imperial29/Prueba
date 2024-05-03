const { Client, GatewayIntentBits, Partials, EmbedBuilder , Collection } = require('discord.js');
const { Guilds , GuildMembers , GuildMessages } = GatewayIntentBits;
const { User , Message , GuildMember , ThreadMember} = Partials;

const client = new Client({ 
    intents: [131071 , Guilds , GuildMembers , GuildMessages], 
    partials: [User , Message , GuildMember , ThreadMember] 
});

client.events = new Collection;
client.commands = new Collection;

loadEvents(client);

const mySecret = process.env['LaMamalona']
client.login(mySecret).then(() => {
    client.user.setActivity(`Chambear simulator `);
});