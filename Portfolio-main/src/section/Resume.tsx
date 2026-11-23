import { Award, BriefcaseBusiness, FileText, Trophy } from "lucide-react";
import { RESUME_DOWNLOAD_NAME, RESUME_PATH } from "../lib/assets";

const achievements = [
  "Solved 600+ DSA problems across LeetCode, GeeksforGeeks, and CodeChef.",
  "Maintained a 365+ day coding streak on LeetCode.",
  "LeetCode rating: 1442; GeeksforGeeks contest rating: 1768 (global rank 6162).",
  "Adobe Hackathon 2026 — Round 2 qualifier.",
  "Flipkart GRID — Round 2 qualifier.",
];

function Resume() {
  return (
    <>
      <section
        id="experience"
        className="relative my-32 z-10 px-4 sm:px-8 md:px-16 lg:px-24 py-12 flex flex-col gap-12 mx-5"
      >
        <div className="w-fit relative inline-block px-6 py-4">
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Doto]">
            Experience &amp; Achievements
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/15 bg-white/3 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <BriefcaseBusiness className="text-blue-400" />
              <h3 className="text-xl font-semibold text-white">
                Experience &amp; Activities
              </h3>
            </div>
            <div className="space-y-6 text-white/70">
              <div>
                <h4 className="text-white font-medium">
                  Junior Frontend Developer Intern — YuvaIntern
                </h4>
                <p className="text-sm mt-1">
                  Internship completed · Certificate issued August 11, 2026
                </p>
                <p className="text-sm mt-2">
                  Recognized for dedication, professionalism, and willingness to learn and grow during the internship.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-8 mb-4">
              <Award className="text-blue-400" />
              <h3 className="text-xl font-semibold text-white">
                Certifications
              </h3>
            </div>
            <ul className="space-y-3 text-white/70">
              <li>
                <a
                  className="hover:text-white underline underline-offset-4"
                  href="https://www.geeksforgeeks.org/certificate/2564ed2197431151560a363a0272d03a"
                  target="_blank"
                  rel="noreferrer"
                >
                  GeeksforGeeks 160 Days DSA Challenge
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white underline underline-offset-4"
                  href="https://www.coursera.org/account/accomplishments/verify/RY63MV5VHUCJ"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Bits and Bytes of Computer Networking — Coursera
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/3 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Trophy className="text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Highlights</h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex gap-3 text-white/70 leading-relaxed"
                >
                  <span className="text-blue-400">✦</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        id="resume"
        className="relative w-full my-32 flex items-center justify-center px-6"
      >
        <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/3 backdrop-blur-md px-8 md:px-16 py-14 flex flex-col items-center text-center shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Let’s build something<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/60 text-lg leading-relaxed">
            Download my résumé for details on my education, projects, skills,
            and experience.
          </p>
          <a
            href={RESUME_PATH}
            download={RESUME_DOWNLOAD_NAME}
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-blue-500/40 bg-blue-500/5 text-blue-400 font-medium hover:bg-blue-500/10 hover:border-blue-500/60 transition-all duration-300"
          >
            <FileText size={20} />
            Download résumé
          </a>
        </div>
      </section>
    </>
  );
}

export default Resume;
