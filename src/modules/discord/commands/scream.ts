import { DSCommand } from "../extendedclient";

export default {
	name: "scream",
	description: "Check out how hard I can scream!",
	async execute(client, message) {
		let msg:string = "";
        let random = Math.floor(Math.random() * (500 - 1) + 1);
        for(let i =  0; i<random; i++)
        {
            if(i<=random - (random/4)) msg += "A";
            else if(i> random- (random/4) && i<=random - (random/8)) msg += "H";
            else msg += "!";
        }
        message.reply(msg);
	},
} satisfies DSCommand;