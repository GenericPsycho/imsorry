import { DSCommand } from "../extendedclient";
const { EmbedBuilder } = require('discord.js');

export default {
    name: "meat",
    description: "*Y'know what I'm talking about~*",
    async execute(client, message) {
        let prob: number = Math.floor(Math.random() * (100 - 1) + 1);
        if (prob <= 16) message.reply("OH FUCK NO, YOU PERVERT!!");
        else if (prob > 16 && prob <= 32) message.reply("You can't force me!");
        else if (prob > 32 && prob <= 50) message.reply("No...");
        else if (prob > 75 && prob <= 95) message.reply("I would like to, but... maybe another time, 'k?");
        else if (prob > 95 && prob <= 99) message.reply("I would love to show you my *meat~*... but what if someone see us?");
        else {
            const dm = new EmbedBuilder()
                .setColor(0x6633CC)
                .setTitle("*Is this what you wanted, honey?~*")
                .setImage('https://cdn.discordapp.com/attachments/1217165726859788378/1221993856816644096/bazonkas.png')
                .setFooter({ text: 'Drawing by @j_toxicwaste' });
            message.reply("*;)*")
            message.author.send({ embeds: [dm] });
        }
    },
} satisfies DSCommand;