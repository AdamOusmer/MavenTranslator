const {Client} = require("discord.js");

const client = new Client({
    intents: [
        1 << 0,
        1 << 1,
        1 << 9,
        1 << 10,
        1 << 14,
        1 << 15
    ]
})

client.on("ready", () => {
    console.log("Bot is ready");
});

client.on("messageCreate", (message) => {

    console.log(message.content);

});

client.on('messageReactionAdd',  (reaction, user) => {

    console.log('Reaction added:', reaction.emoji.name);

    switch (reaction.emoji.name) {
        case '🇫🇷':
            createThread(reaction.message);
            break;
        case '🇺🇸':
            createThread(reaction.message);
            break;
        case '🇬🇧':
            createThread(reaction.message);
            break;
        case '🇪🇸':
            createThread(reaction.message);
            break;
        default:
            break;
    }
});

function createThread(message){
    const channel = message.channel;
    try {
        const thread = channel.threads.create({
            name: `Translation - Traduction`,
            autoArchiveDuration: 60, // Set the auto-archive duration (in minutes)
        });
        const threadSender = message.guild.channels.cache.get(thread.id);

    } catch (error) {
        console.error(error);
    }
}

client.login("MTE1OTcxNDU3NjUxNDk0NTA3NQ.GViBYS.L9nB4ZV9DTLusKo_EA7TKFBWf924SjpDtbP2vw")