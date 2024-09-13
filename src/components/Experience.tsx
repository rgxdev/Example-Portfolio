import { link } from "fs";
import Link from "next/link";
import BlurFade from "./magicui/blur-fade";
import { constants } from "@/lib/constants";


// TODO: Change your Experiences here

export default function Experience() {
	const experiences = [
		{
			company: "Example Company",
			title: "Sernior Developer",
			period: "Sept 2022 - Sept 2023",
			logo: "https://schulsync.com/logos/logo-nobg.png",
			link: "https://www.schulsync.com",
		},
		{
			company: "Example Company",
			title: "Sernior Developer",
			period: "Sept 2022 - Sept 2023",
			logo: "https://schulsync.com/logos/logo-nobg.png",
			link: "https://www.schulsync.com",
		},
		{
			company: "Example Company",
			title: "Sernior Developer",
			period: "Sept 2022 - Sept 2023",
			logo: "https://schulsync.com/logos/logo-nobg.png",
			link: "https://www.schulsync.com",
		},
	];

	return (
		<section id="experience">
			<div className="w-full max-w-6xl mx-auto py-8">
				<BlurFade delay={constants.BLUR_FADE_DELAY * 7}>
					<h2 className="text-xl font-bold mb-4">Experience</h2>
				</BlurFade>
				{experiences.map((experience, index) => (
					<BlurFade key={index} delay={constants.BLUR_FADE_DELAY * (8 + index)}>
						<div className="flex items-center justify-between py-4 border-b border-neutral-700 ">
							<div className="flex items-center space-x-4">
								<img
									src={experience.logo}
									alt={`${experience.company} logo`}
									className="w-12 h-12 rounded-full"
									draggable="false"
								/>
								<div>
									<Link href={experience.link} target="_blank">
										<h4 className="text-lg font-semibold text-white">
											{experience.company}
										</h4>
									</Link>
									<p className="text-sm text-gray-400">{experience.title}</p>
								</div>
							</div>
							<span className="text-sm text-gray-400">{experience.period}</span>
						</div>
					</BlurFade>
				))}
			</div>
		</section>
	);
}
