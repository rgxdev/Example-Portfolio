import BlurFade from "./magicui/blur-fade";
import { Badge } from "./ui/badge";
import { FaJava, FaCss3, FaHtml5, FaReact, FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { constants } from "@/lib/constants";

//TODO: CHANGE YOUR SKILLS HERE

const skills = [
	{
		name: "HTML",
		color: "bg-orange-500 text-white ml-0",
		icon: <FaHtml5 />,
	},
	{
		name: "CSS",
		color: "bg-blue-500 text-white",
		icon: <FaCss3 />,
	},
	{
		name: "JavaScript",
		color: "bg-yellow-500",
		icon: <SiJavascript />,
	},
	{
		name: "React",
		color: "bg-teal-500 text-white",
		icon: <FaReact />,
	},
	{
		name: "Java",
		color: "bg-gray-500 text-white",
		icon: <FaJava />,
	},
	{
		name: "Python",
		color: "bg-yellow-400 text-white",
		icon: <FaPython />,
	},
	{
		name: "TailwindCSS",
		color: "bg-sky-700 text-white",
		icon: <RiTailwindCssFill />,
	},
];

export default function Skills() {
	return (
		<section id="skills">
			<div className="mx-auto w-full max-w-6xl space-y-4">
				<BlurFade delay={constants.BLUR_FADE_DELAY * 12}>
					<h2 className="text-xl font-bold">Skills</h2>
				</BlurFade>
				<BlurFade delay={constants.BLUR_FADE_DELAY * 13}>
					<div className="flex flex-wrap gap-2">
						{skills.map((skill, index) => (
							<Badge
								key={index}
								className={`flex items-center space-x-2 px-2 py-1 rounded ${skill.color} hover:bg-slate-700`}
							>
								{skill.icon}
								<span>{skill.name}</span>
							</Badge>
						))}
					</div>
				</BlurFade>
			</div>
		</section>
	);
}
