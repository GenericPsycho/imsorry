import { DSCommand } from "../extendedclient";

export default {
	name: "spank",
	description: "You perv~",
	async execute(client, message) {
		let msg:string = "";
        switch(Math.floor(Math.random() * (5 - 1) + 1))
        {
            case 1:
                msg = "Dude WTF?!";
                break;
            case 2:
                msg = "Hey!!";
                break;
            case 3:
                msg = "Mmmmm~...";
                break;
            case 4:
                msg = "*Harder Daddy~*";
                break;
        }
        message.reply(msg);
	},
} satisfies DSCommand;