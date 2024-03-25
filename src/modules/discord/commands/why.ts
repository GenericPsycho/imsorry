import { DSCommand } from "../extendedclient";

export default {
	name: "why",
	description: "Why do I exist?",
	async execute(client, message) {
		message.reply("**Blame Lian.**");
	},
} satisfies DSCommand;