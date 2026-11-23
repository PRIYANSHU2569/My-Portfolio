import EducationCard from "@/components/ui/EducationCard";
import { PROFILE_IMAGE_PATH } from "../lib/assets";

function About() {
	return (
		<section id="about" className="relative my-37.5 z-10 px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 flex flex-col gap-12 mx-5 rounded-t-4xl">
			<div className="w-fit relative inline-block px-6 py-4">
				<span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
				<span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Doto]">About Me</h2>
			</div>
			<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<div className="flex flex-col gap-8">
					<div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto lg:mx-0 overflow-hidden rounded-full border border-white/20 shadow-[0_0_35px_rgba(59,130,246,0.18)]">
						<img src={PROFILE_IMAGE_PATH} alt="Priyanshu Gupta" className="w-full h-full object-cover" />
					</div>
					<p className="text-gray-300 text-base sm:text-lg leading-relaxed">
						I’m a Computer Science and Engineering undergraduate at VIT Bhopal University, graduating in 2027. I build full-stack web applications with React, Node.js, Express, and MongoDB, and enjoy working on secure APIs and AI-powered tools. Solving 600+ problems across coding platforms has strengthened my foundations in data structures, algorithms, and core computer science.
					</p>
					<div className="grid grid-cols-2 gap-4 max-w-xl">
						{[["600+", "DSA problems solved"], ["365+ days", "LeetCode streak"], ["8.95", "CGPA"], ["2027", "Expected graduation"]].map(([value, label]) => (
							<div key={label} className="rounded-2xl border border-white/15 bg-white/3 backdrop-blur-md p-5">
								<h3 className="text-2xl sm:text-3xl font-bold text-white">{value}</h3>
								<p className="text-white/50 text-sm mt-2">{label}</p>
							</div>
						))}
					</div>
				</div>
				<div className="relative max-w-2xl">
					<div className="absolute left-4 top-2 bottom-2 w-0.5 bg-linear-to-b from-blue-500 via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.9)]" />
					<div className="flex gap-6">
						<div className="w-10 flex justify-center pt-2 z-10"><div className="w-5 h-5 rounded-full border-2 border-blue-500 bg-black shadow-[0_0_15px_rgba(59,130,246,0.9)]" /></div>
						<div className="flex-1"><EducationCard standard="B.Tech in Computer Science and Engineering" institute="VIT Bhopal University" result="8.95 CGPA" from="September 2023" to="May 2027 (expected)" /></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
