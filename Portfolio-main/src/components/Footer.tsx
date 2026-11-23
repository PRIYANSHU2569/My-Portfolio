function Footer() {
	return <footer className="border-t border-white/20 p-5 text-white/40 text-sm font-mono mt-10 sm:mt-20 md:mt-40">
		<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between mx-4 sm:mx-10 md:mx-20">
			<p className="text-center sm:text-left">© 2026 Priyanshu Gupta</p>
			<div className="flex flex-wrap justify-center gap-5">
				<a href="https://github.com/PRIYANSHU2569" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
				<a href="https://www.linkedin.com/in/priyanshu-gupta-7474502b7/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
				<a href="mailto:priyanshugupta2569@gmail.com" className="hover:text-white">Email</a>
			</div>
		</div>
	</footer>;
}
export default Footer;
