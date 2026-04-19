import { FaGithub } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";

export default function Home() {
  const badges = [
    { id: 1, label: "IT Graduate", sub: "2025" },
    { id: 2, label: "Open to work", sub: "Junior roles & internships" },
    { id: 3, label: "Soft Skill", sub: "Quick learner" },
    { id: 4, label: "Soft Skill", sub: "Project management" },
    { id: 5, label: "Soft Skill", sub: "Attention to detail" },
    { id: 6, label: "Soft Skill", sub: "Team player" },
  ];
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 pt-16 relative overflow-hidden">
        <div
          className="absolute top-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl 
                        pointer-events-none"
        />
        <div
          className="absolute bottom-1/4 left-0 w-56 h-56 bg-orange-200/20 dark:bg-orange-900/10 
                       rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-7">
            <div>
              <p className="font-mono text-sm text-stone-500 dark:text-stone-400 mb-2 tracking-widest uppercase">
                Aspiring Full-Stack Developer
              </p>
              <h1
                className="font-display text-5xl md:text-6xl font-black text-stone-900 dark:text-stone-100
                            leading-[0.95]"
              >
                Hi, I'm
                <br />
                <em className="text-gradient not-italic"> Jerwin Macasinag </em>
              </h1>
            </div>
            <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed max-w-md">
              A Information Technology graduate who loves turning ideas into
              working web apps. Still learning every day - and excited about it.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark 
                            transition-colors shadow-lg shadow-accent/25"
              >
                See my projects
              </Link>
              <Link
                to="/contact"
                className=" flex px-6 py-3 border gap-3 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300
                          rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Say Hello <MdWavingHand size={20} />
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://github.com/Jjrwn"
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-accent transition-colors"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://github.com/Jjrwn"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ml-1 text-xs text-stone-400 font-mono hover:text-accent transition-colors">
                  github.com/Jjrwn
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80 ">
              {badges.map((b, i) => {
                const positions = [
                  "absolute -top-14 left-10",
                  "absolute top-8 right-0",
                  "absolute top-24 -left-10",
                  "absolute bottom-10 right-30",
                  "absolute -bottom-10 left-1/2",
                  "absolute top-1/2 right-1/4",
                ];
                const delays = [
                  "",
                  "[animation-delay:3s]",
                  "[animation-delay:2s]",
                  "[animation-delay:3s]",
                  "[animation-delay:4s]",
                  "[animation-delay:5s]",
                  "[animation-delay:6s]",
                ];
                return (
                  <div
                    key={b.id}
                    className={`${positions[i]} bg-white dark:bg-stone-900 border grid-row-2 border-stone-200 dark:border-stone-700 
                              rounded-2xl px-4 py-2 shadow-lg animate-float ${delays[b.i]} `}
                  >
                    <p className="text-xs font-mono text-stone-500">
                      {b.label}
                    </p>
                    <p className="font-semibold text-stone-800 dark:text-stone-200 text-sm">
                      {b.sub}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8 animate-bounce">
        <GoArrowDown />
      </div>

      <div className="border-t border-stone-200 dark:border-stone-800 py-5 px-6">
        <p
          className="text-center text-xs font-mono text-stone-400 dark:text-stone-500 tracking-widest
        uppercase mb-3"
        >
          {" "}
          Currently exploring
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            "HTML & CSS",
            "JavaScript",
            "React",
            "Node.js / express.js",
            "Git",
            "Tailwind CSS",
            "MongoDB",
            "MySQL",
            "REST APIs",
          ].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-stone-400 dark:text-stone-500 tracking-wider uppercase 
                      hover:text-accent transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
