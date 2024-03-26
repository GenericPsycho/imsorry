import { DSCommand } from "../extendedclient";

export default {
	name: "invite",
	description: "Bring me somewhere else!",
	async execute(client, message) {
		message.reply("Ask <@609864949375827969>!");
	},
} satisfies DSCommand;