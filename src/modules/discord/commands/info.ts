import { DSCommand } from "../extendedclient";

export default {
	name: "info",
	description: "More about my insides *(that sounded weird-)",
	async execute(client, message) {
		message.reply("> **Created by** : GenericPsycho\n> **Based on the UtilityDust template** : Created by GaryCraft\n> **Hosted by the SpaceProject** : Created by GaryCraft\n> **Profile by** : J_ToxicWaste (formally known as Lian)");
	},
} satisfies DSCommand;