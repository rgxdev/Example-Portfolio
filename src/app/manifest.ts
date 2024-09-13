import { MetadataRoute } from "next";
import { constants } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: constants.name,
		short_name: constants.name,
		description: constants.description,
		start_url: "/",
		display: "standalone",
		// TODO: CHANGE YOUR COLORS IF YOU NEED TO
		background_color: "#e22721",
		theme_color: "#e22721",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
