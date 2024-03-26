import { DSCommand } from "../extendedclient";
const { EmbedBuilder } = require('discord.js');

export default {
    name: "help",
    description: "What can I do for you?",
    async execute(client, message) {
        const helpList = new EmbedBuilder()
            .setColor(0x6633CC)
            .setTitle("Here's what I can do for you, darling~")
            .addFields(
                { name: 'TECHNICAL STUFF', value: "`!!ping` - If I don't respond, **I'm having a crisis...**\n`!!invite` - Bring me somewhere else!\n`!!info` - More about my insides *(that sounded weird-)*.\n`!!why` - Why do I exist?" },
                { name: '*FUN* GAMES~', value: "`!!hearmeout` - ;)\n`!!love` - Do I love you?\n`!!spank` - You perv~\n`!!scream` - Check out how hard I can scream!\n`!!meat` - *Y'know what I'm talking about~*"},
            )
        message.reply({ embeds: [helpList] });
    },
} satisfies DSCommand;