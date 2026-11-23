import ProjectCard from "@/components/ui/ProjectCard";
import type { ProjectProps } from "@/components/ui/ProjectCard";
import { Users, CalendarCheck, Wallet, ShieldCheck, Brain, FileSearch, FileDown } from "lucide-react";

const projects: ProjectProps[] = [
	{
		name: "QuickEMS — Employee Management System",
		about: "A full-stack employee management system with role-based dashboards for employee records, attendance, leave, payroll, payslips, and profile operations.",
		features: [
			{ name: "Employee & Admin Management", about: "Role-based dashboards and protected employee management workflows.", icon: Users },
			{ name: "Attendance & Leave", about: "Attendance and checkout workflows with leave management and notifications.", icon: CalendarCheck },
			{ name: "Payroll & Payslips", about: "Payroll and payslip operations through modular REST APIs.", icon: Wallet },
			{ name: "Secure Access", about: "JWT authentication, role authorization, password hashing, and protected APIs.", icon: ShieldCheck },
		],
		tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
		code: "https://github.com/PRIYANSHU2569/FULLSTACK-EMS",
		live_demo: "https://fullstack-ems-khaki.vercel.app/dashboard",
	},
	{
		name: "AI Interview Preparation Platform",
		about: "An AI-powered interview preparation platform that analyzes resumes, prepares role-specific interview questions, and provides actionable resume feedback.",
		features: [
			{ name: "AI Interview Analysis", about: "Gemini AI generates personalized technical and behavioral interview questions.", icon: Brain },
			{ name: "Resume Evaluation", about: "ATS optimization, skill-gap analysis, and tailored improvement recommendations.", icon: FileSearch },
			{ name: "PDF Generation", about: "Generate downloadable, ATS-friendly resumes from dynamic content.", icon: FileDown },
			{ name: "Secure Platform", about: "JWT authentication and protected REST APIs backed by MongoDB.", icon: ShieldCheck },
		],
		tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Puppeteer"],
		code: "https://github.com/PRIYANSHU2569/interview-ai",
		live_demo: "https://interview-ai-frontend-sf02.onrender.com",
	},
];

function Project() {
	return <section id="projects" className="relative my-37.5 z-10 px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 flex flex-col gap-12 mx-5 rounded-t-4xl">
		<div className="w-fit relative inline-block px-6 py-4"><span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"/><span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"/><h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Doto]">Projects</h2></div>
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
	</section>;
}

export default Project;
