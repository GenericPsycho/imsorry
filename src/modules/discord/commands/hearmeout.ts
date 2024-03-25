import { DSCommand } from "../extendedclient";

export default {
	name: "hearmeout",
	description: "Y'know",
	async execute(client, message) {
        let msg:string = "";
        switch(Math.random() * (5 - 1) + 1)
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
            default:
                msg = "Tell me more~";
                break;
        }
        message.reply(msg);
	},
} satisfies DSCommand;