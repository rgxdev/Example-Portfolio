import Image from "next/image";
import BlurFade from "./magicui/blur-fade";
import BlurFadeText from "./magicui/blur-fade-text";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { constants } from "@/lib/constants";
import FlickeringGrid from "./magicui/flickering-grid";
import ShinyButton from "./magicui/shiny-button";

export default function Hero() {
	return (
		<section id="hero" className="w-full">
			<div className="mx-auto w-full max-w-6xl space-y-8 relative">
				<div className="flex flex-col-reverse sm:flex-row sm:items-center gap-8 sm:gap-4 justify-between">
					<div className="flex flex-col flex-1 space-y-4">
						<BlurFadeText
							delay={constants.BLUR_FADE_DELAY}
							className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl -mb-4"
							yOffset={8}
							text={`Hi, I'm`}
						/>
						<BlurFadeText
							delay={constants.BLUR_FADE_DELAY}
							className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
							yOffset={8}
							text={`${constants.name} 👋`}
							sparkle={true}
						/>
						<BlurFadeText
							className="max-w-full sm:max-w-[600px] text-base sm:text-lg md:text-xl mt-4 mb-6"
							delay={constants.BLUR_FADE_DELAY}
							text={constants.description}
						/>
						<BlurFade delay={constants.BLUR_FADE_DELAY}>
							<ShinyButton
								text="Hire me"
								href={`mailto:${constants.socials.email}`}
								className="sm:w-3/4 xl:w-1/2 w-full mb-10 -mt-6"
							/>
						</BlurFade>
					</div>

					<div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto sm:mx-0">
						<div className="absolute inset-0 flex justify-center items-center">
							<FlickeringGrid
								className="absolute z-0"
								squareSize={4}
								gridGap={6}
								color="#60A5FA"
								maxOpacity={0.5}
								flickerChance={0.1}
								height={400}
								width={500}
								style={{
									maskImage:
										"radial-gradient(circle, white 50%, transparent 80%)",
								}}
							/>
						</div>

						<div className="relative flex justify-center items-center">
							<BlurFade delay={constants.BLUR_FADE_DELAY}>
								<div className="absolute z-0 w-full h-full rounded-full bg-gradient-to-br from-[#BA42FF] to-[#00E1FF] animate-spin-slow blur-[1px] shadow-[0_-5px_20px_#BA42FF,0_5px_20px_#00E1FF]" />
								<div className="absolute z-0 w-full h-full rounded-full bg-gray-900 blur-[10px]" />

								<Avatar className="relative z-10 w-full h-full border rounded-full">
									<AvatarImage
										alt={constants.name}
										src={constants.profileimage}
										draggable={false}
									/>
									<AvatarFallback>{"JW"}</AvatarFallback>
								</Avatar>
							</BlurFade>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
