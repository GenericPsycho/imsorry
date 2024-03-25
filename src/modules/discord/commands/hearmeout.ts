import { DSCommand } from "../extendedclient";

export default {
	name: "hearmeout",
	description: ";)",
	async execute(client, message) {
        let msg:string = "";
        switch(Math.floor(Math.random() * (6 - 1) + 1))
        {
            case 1:
                msg = "I'm listening~";
                break;
            case 2:
                msg = "Suprise me babe~";
                break;
            case 3:
                msg = "You want some boob therapy?~";
                break;
            case 4:
                msg = "Speak under my booty~";
                break;
            case 5:
                msg = "Tell me more~";
                break;
        }
        message.reply(msg);
	},
} satisfies DSCommand;