import About from "@/components/About";
import { Contact } from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import { rubik } from "@/lib/fonts";



export default function Home() {
	
	return (
		<>
			<main className="relative flex flex-col overflow-hidden mx-auto sm:px-10 px-5 mt-20 justify-center items-center ">
				<div
					className={`max-w-7xl w-full ${rubik.className} mx-auto w-full  space-y-8`}
				>
					<Hero />
					<About />
					<Experience />
					<Skills />
					<Projects />
					<Contact />
					<Footer />
				</div>
			</main>
		</>
	);
}
