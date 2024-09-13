import { constants } from "@/lib/constants";
import BlurFade from "./magicui/blur-fade";
import Link from "next/link";

export function Contact() {
	return (
		<section id="contact" className="flex justify-center items-center w-full">
			<div className="py-4 mx-auto w-full max-w-6xl space-y-4 text-center">
				<BlurFade delay={constants.BLUR_FADE_DELAY * 20}>
					<h2 className="text-2xl font-bold">Contact</h2>
				</BlurFade>
				<BlurFade delay={constants.BLUR_FADE_DELAY * 21}>
					<p className="text-lg">
						You wanna get in touch? Just{" "}
						<Link
							href="mailto:jonas.werner.nov1999@gmail.com"
							className="text-blue-500"
						>
							mail
						</Link>{" "}
						me!
					</p>
				</BlurFade>
			</div>
		</section>
	);
}
