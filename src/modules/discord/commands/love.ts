import { DSCommand } from "../extendedclient";

export default {
	name: "love",
	description: "Do I love you?",
	async execute(client, message) {
        let msg:string = "";
        switch(Math.random() * (10 - 1) + 1)
        {
            case 1:
                msg = "Absolutely not!";
                break;
            case 2:
                msg = "Get out of my sight, you weirdo!!";
                break;
            case 3:
                msg = "Meh, not my type.";
                break;
            case 4:
                msg = "You're aight, I guess...";
                break;
            case 5:
                msg = "You're cool, Subject!";
                break;
            case 6:
                msg = "Wanna hang out, babe?";
                break;
            case 7:
                msg = "Mmm~ You're hot ngl.";
                break;
            case 8:
                msg = "Just for you, I'm wearing a bunny suit~";
                break;
            case 9:
                msg = "I would leave you dry~";
                break;
            case 10:
                msg = "You. Me. Bed. Now.";
                break;
            default:
                msg = "PLEASE MAKE ME YOUR DADDY!~";
                break;
        }
        message.reply(msg);
	},
} satisfies DSCommand;