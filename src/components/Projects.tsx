import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FaClipboard, FaFile, FaSignature } from "react-icons/fa";
import { FaTableColumns } from "react-icons/fa6";
import BlurFade from "./magicui/blur-fade";
import { constants } from "@/lib/constants";

export function Projects() {
	return (
		<section id="projects">
			<div className="py-4 mx-auto w-full max-w-6xl space-y-4">
				<BlurFade delay={constants.BLUR_FADE_DELAY * 17}>
					<h2 className="text-xl font-bold">Projects</h2>
				</BlurFade>
				<BlurFade delay={constants.BLUR_FADE_DELAY * 18}>
					<BentoGrid className="max-w-6xl mx-auto grid auto-rows-[15rem] md:auto-rows-[20rem] gap-4">
						{items.map((item, i) => (
							<BentoGridItem
								key={i}
								title={item.title}
								description={item.description}
								header={
									item.image ? (
										<div
											className="relative flex flex-1 w-full h-48 md:h-64 rounded-xl bg-cover bg-center"
											style={{ backgroundImage: `url(${item.image})` }}
										></div>
									) : (
										<Skeleton />
									)
								}
								className={cn("col-span-1", item.className)}
								icon={item.icon}
								link={item.link}
							/>
						))}
					</BentoGrid>
				</BlurFade>
			</div>
		</section>
	);
}

const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-blue-800"></div>
);


//TODO: CHANGE YOUR PROJECTS HERE

const items = [
	{
		title: "Example Project",
		description:
			"This an example description for my project lol",
		image: "/PATH/TO/IMAGE",
		className: "md:col-span-1",
		icon: <FaFile className="h-4 w-4 text-neutral-500" />,
		link: "https://d-aaron.dev",
	},
	{
		title: "Example Project",
		description:
			"This an example description for my project lol",
		image: "/PATH/TO/IMAGE",
		className: "md:col-span-1",
		icon: <FaFile className="h-4 w-4 text-neutral-500" />,
		link: "https://d-aaron.dev",
	},
	{
		title: "Example Project",
		description:
			"This an example description for my project lol",
		image: "/PATH/TO/IMAGE",
		className: "md:col-span-1",
		icon: <FaFile className="h-4 w-4 text-neutral-500" />,
		link: "https://d-aaron.dev",
	},
	{
		title: "Example Project",
		description:
			"This an example description for my project lol",
		image: "/PATH/TO/IMAGE",
		className: "md:col-span-1",
		icon: <FaFile className="h-4 w-4 text-neutral-500" />,
		link: "https://d-aaron.dev",
	}
];
