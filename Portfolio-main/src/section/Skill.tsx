import {
  SiCplusplus,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Code2, Database, KeyRound, Mail, Workflow } from "lucide-react";

const categories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
      { name: "SQL", icon: SiMysql, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss, color: "text-blue-400" },
      { name: "React.js", icon: SiReact, color: "text-cyan-400" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
			{ name: "REST APIs", icon: Workflow, color: "text-blue-400" },
			{ name: "JWT Authentication", icon: KeyRound, color: "text-blue-400" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: Database, color: "text-blue-500" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "VS Code", icon: VscCode, color: "text-blue-400" },
      { name: "Inngest", icon: Workflow, color: "text-purple-400" },
			{ name: "Nodemailer", icon: Mail, color: "text-blue-400" },
    ],
  },
  {
    category: "Core Computer Science",
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: Code2,
        color: "text-cyan-300",
      },
      { name: "OOPs", icon: Code2, color: "text-cyan-300" },
      { name: "DBMS", icon: Database, color: "text-blue-400" },
      { name: "Operating Systems", icon: Code2, color: "text-white" },
      { name: "Computer Networks", icon: Workflow, color: "text-purple-400" },
    ],
  },
];

function Skill() {
  return (
    <section
      id="skills"
      className="relative my-37.5 z-10 px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 flex flex-col gap-12 mx-5 rounded-t-4xl"
    >
      <div className="w-fit relative inline-block px-6 py-4">
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Doto]">
          Skills &amp; Tools
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto w-full">
        {categories.map(({ category, skills }) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-white mb-5">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/3 border border-white/10 backdrop-blur-md hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon className={`text-xl ${color}`} />
                  <span className="text-white/90 text-sm font-medium">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
