import { Check, Copy, Download, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RESUME_DOWNLOAD_NAME, RESUME_PATH } from "../lib/assets";

function Hero() {
	const { scrollY } = useScroll();
	const [viewportHeight, setViewportHeight] = useState(1000);

	useEffect(() => {
		const handleResize = () => setViewportHeight(window.innerHeight);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const y = useTransform(
		scrollY,
		[0, viewportHeight],
		[0, viewportHeight * 0.75],
	);

	const opacity = useTransform(
		scrollY,
		[viewportHeight * 0.5, viewportHeight * 0.8],
		[1, 0],
	);
	const scale = useTransform(
		scrollY,
		[viewportHeight * 0.5, viewportHeight * 1.5],
		[1, 0.5],
	);

	const [copied, setCopied] = useState(false);
	const handleCopy = async () => {
		await navigator.clipboard.writeText("priyanshugupta2569@gmail.com");
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<>
			{/* Main Content Container */}
			<div id="hero" className="relative h-screen w-screen flex justify-center items-center overflow-hidden">
				<motion.div
					className="flex flex-col items-center gap-y-4"
					style={{ y, opacity, scale }}
				>
					<p className="text-white text-xl sm:text-2xl md:text-[30px] leading-tight mb-2 font-mono">
						Hello, I'm
					</p>

					<h1 className="text-white font-[Doto] text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold leading-none mb-2 text-center px-4">
						PRIYANSHU GUPTA
					</h1>

					<div className="bg-blue-500 font-mono py-1 px-2 rounded-xl">Computer Science Engineering Student · Software Developer</div>
					<p className="text-white/60 font-mono text-sm">Full Stack Developer</p>

					<p className="text-white/70 mb-4 text-center text-sm sm:text-base md:text-lg px-4 font-mono">
						I build full-stack applications and solve practical problems with code, <br />
						turning ideas into{" "}
						<span className="text-white underline underline-offset-4">
							real-world products
						</span>
						.
					</p>

					<div className="flex flex-col sm:flex-row items-center gap-2">
						<a href="#projects" className="bg-blue-500 hover:bg-blue-600 py-3 px-4 font-semibold rounded-xl flex gap-2 whitespace-nowrap items-center">View Projects <FolderOpen /></a>
						<a href="#contact" onClick={(event) => { event.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="border border-white/20 bg-white/5 py-3 px-4 font-semibold rounded-xl flex gap-2 items-center text-white">Contact Me</a>
						<a href={RESUME_PATH} download={RESUME_DOWNLOAD_NAME} className="bg-white/10 border border-white/20 py-3 px-4 font-semibold rounded-xl flex gap-2 items-center text-white"><Download size={18}/> Download Resume</a>
						<button
							className="bg-transparent px-3 sm:px-5 py-2 sm:py-0 flex gap-2 items-center text-white/50 hover:text-white/80 font-mono text-xs sm:text-sm md:text-base truncate max-w-[200px] sm:max-w-none"
							onClick={handleCopy}
						>
							<span className="truncate">priyanshugupta2569@gmail.com</span>
							{copied ? <Check size={16} /> : <Copy size={16} />}
						</button>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default Hero;
