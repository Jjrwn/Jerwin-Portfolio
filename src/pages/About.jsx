import Section from "../components/Section";
import { Link } from "react-router-dom";

export default function About() {
  const timeline = [
    {
      year: "2025",
      title: "B.S. Information Technology",
      org: "STI College Pasay-EDSA",
      desc: "Graduated with a focus on web technologies and software engineering. Continued developing skills in both front-end and back-end frameworks through personal projects and self-learning.",
    },
    {
      year: "2024",
      title: "IT Intern",
      org: "NBI - Evidence Management Division",
      desc: "Completed a 3-month internship and developed an Excel-based inventory management system using VBA automation, improving record processing efficiency. Gained hands-on experience in data management, workflow optimization, and secure handling of sensitive information.",
    },
    {
      year: "2021",
      title: "Started College",
      org: "STI College Pasay-EDSA",
      desc: "Began studying Information Technology, building foundational knowledge in programming, web development, and computer systems.",
    },
  ];

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-100 
                        leading-tight"
            >
              Just a back-end dev
              <br />
              <em className="text-gradient not-italic"> getting started</em>
            </h2>
          </div>

          <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
            <p>
              I'm Jerwin, a fresh IT graduate from Makati City who discovered
              web development and never looked back. I focus on back-end
              development, building secure and scalable APIs and server-side
              applications using Node.js, Express, and MongoDB.
            </p>

            <p>
              Over the past year, I've been building personal projects, taking
              online courses, and continuously improving my skills in
              JavaScript, React, and backend development fundamentals.
            </p>

            <p>
              I'm currently looking for a junior back-end developer role or
              internship where I can contribute, continue learning, and grow as
              part of a team that values building reliable and meaningful
              software.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5">
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              I may not have years of professional experience yet, but I learn
              quickly, ask thoughtful questions, and care deeply about the
              quality of the work I deliver.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-dark
                    transition-colors shadow-lg shadow-accent/25"
          >
            Let's connect
          </Link>
        </div>
        <div>
          <p className="font-mono text-xs text-stone-400 tracking-widest uppercase mb-8">
            My Journey
          </p>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full bg-accent mt-1 flex-shrink-0 group-hover:scale-125 
                               transition-transform"
                  />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-stone-200 dark:bg-stone-800 m-1" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="font-mono text-xs text-accent">
                    {item.year}
                  </span>

                  <h3 className="font-display font-bold text-stone-900 dark:text-stone-100 mt-0.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-accent/80 font-medium mb-1">
                    {item.org}
                  </p>

                  <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </Section>
  );
}
