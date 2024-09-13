import { constants } from "@/lib/constants";
import BlurFade from "./magicui/blur-fade";
import Markdown from "react-markdown";

export default function About() {
	return (
		<>
			<section id="about">
				<div className="mx-auto w-full max-w-6xl space-y-4">
					<BlurFade delay={constants.BLUR_FADE_DELAY * 3}>
						<h2 className="text-xl font-bold">About</h2>
					</BlurFade>
					<BlurFade delay={constants.BLUR_FADE_DELAY * 4}>
						<Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
							{constants.about}
						</Markdown>
					</BlurFade>
				</div>
			</section>
		</>
	);
}
