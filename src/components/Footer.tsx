"use client";

import Link from "next/link";
import {
	RiGithubFill,
	RiInstagramFill,
	RiTwitterXFill,
	RiYoutubeFill,
} from "react-icons/ri";
import { useEffect, useState } from "react";
import { constants } from "@/lib/constants";

const navigation = [
	{
		name: "GitHub",
		href: constants.socials.github,
		icon: RiGithubFill,
	},
	{
		name: "Instagram",
		href: constants.socials.instagram,
		icon: RiInstagramFill,
	},
	{
		name: "X",
		href: constants.socials.twitter,
		icon: RiTwitterXFill,
	},
	{
		name: "YouTube",
		href: constants.socials.youtube,
		icon: RiYoutubeFill,
	},
];

export default function Footer() {
	const year = new Date().getFullYear();
	const [currentTime, setCurrentTime] = useState<string>();

	// TODO: CHANGE YOUR DATE TIME FORMAT
	useEffect(() => {
		const updateTime = () => {
			const time = new Intl.DateTimeFormat("de-DE", {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
			}).format(new Date());
			setCurrentTime(time);
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<footer>
			<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-gray-300 hover:text-gray-500"
							target="_blank"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</Link>
					))}
				</div>
				<div className="mt-8 flex flex-col items-center md:order-1 md:mt-0">
					<p className="text-center text-xs leading-5 text-gray-300">
						&copy; {year} {constants.name}
					</p>
					<p className="text-center text-xs leading-5 text-gray-300">
						Current Time: {currentTime} Clock
					</p>
				</div>
			</div>
		</footer>
	);
}
