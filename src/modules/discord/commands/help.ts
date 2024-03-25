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
                { name: '!!ping', value: "If I don't respond, I'm having a crisis.." },
                { name: '!!hearmeout', value: ";)"},
                { name: '!!love', value: "Do I love you?"},
                { name: '!!why', value: "Why do I exist?"},
                { name: '!!spank', value: "You perv~"},
                { name: '!!scream', value: "Check out how hard I can scream!"},
            )
        message.reply({ embeds: [helpList] });
    },
} satisfies DSCommand;