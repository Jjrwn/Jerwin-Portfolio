import Section from "../components/Section";

export default function Skills() {
  const SkillCategories = [
    {
      title: "Frontend",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "HTML & CSS", level: 85, label: "Comfortable" },
        { name: "JavaScript (ES6+)", level: 70, label: "Learning" },
        { name: "React", level: 65, label: "Learning" },
        { name: "Tailwind CSS", level: 78, label: "Comfortable" },
      ],
    },
    {
      title: "Backend",
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "Node.js / Express", level: 65, label: "Learning" },
        { name: "MongoDB (NoSQL)", level: 65, label: "Learning" },
        { name: "REST APIs", level: 60, label: "Learning" },
        { name: "MySQL", level: 60, label: "Learning" },
      ],
    },
    {
      title: "Backend Concepts",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MVC Architecture", level: 65, label: "Learning" },
        { name: "Authentication (JWT)", level: 60, label: "Learning" },
        { name: "API Design", level: 60, label: "Learning" },
        { name: "Database Modeling", level: 60, label: "Learning" },
      ],
    },
    {
      title: "Development Tools",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Git & GitHub", level: 70, label: "Comfortable" },
        { name: "VS Code", level: 85, label: "Comfortable" },
        { name: "Figma (basics)", level: 55, label: "Learning" },
        { name: "npm / vite", level: 70, label: "Comfortable" },
      ],
    },
  ];

  const levelColors = {
    Comfortable: "text-emerald-500",
    Learning: "text-blue-500",
  };

  const learning = [
    "TypeScript",
    "Next.js",
    "Docker (basics)",
    "Testing (Jest)",
    "PostgreSQL",
    "GraphQL",
  ];

  function SkillBar({ name, level, label }) {
    return (
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
            {name}
          </span>

          <span
            className={`text-[11px] font-mono font-medium ${levelColors[label] || "text-stone-400"}`}
          >
            {label}
          </span>
        </div>
        <div className="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-1000"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <Section>
      <div className="space-y-14">
        <div className="max-w-xl">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-100
                    leading-tight"
          >
            What I know
            <br />
            <em className="text-gradient not-italic">(so far)</em>
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 leading-relaxed">
            These percentages reflect my honest self-assessment of my current
            skills. As a recent graduate, I'm continuously improving through
            personal projects, online learning, and hands-on development. I'm
            committed to growing and strengthening these skills as I start my
            career in software development.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {SkillCategories.map(({ title, color, skills }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-100 shadow-sm
                        hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white 
                            bg-gradient-to-r ${color}`}
                >
                  {title}
                </div>
              </div>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="font-mono text-xs text-stone-400 tracking-widest uppercase mb-4">
            On my learning list
          </p>
          <div className="flex flex-wrap gap-3">
            {learning.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rouded-full border border-dashed border-stone-300 dark:border-stone-700
                          text-stone-500 dark:text-stone-400 hover:border-accent hover:text-accent transition-color"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
