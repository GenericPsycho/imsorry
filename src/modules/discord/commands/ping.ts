import { DSCommand } from "../extendedclient";

export default {
	name: "ping",
	description: "If I don't respond, I'm having a crisis..",
	async execute(client, message) {
		message.reply("Pong!");
	},
} satisfies DSCommand;