import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Jjrwn", label: "GitHub" },
  {
    icon: <IoMdMail />,
    href: "mailto:jerwinmacasinag0328@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
          <span className="text-gradient">J</span>erwin
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-500 text-center">
          © {new Date().getFullYear()} · Open to work · Built with React +
          Tailwind
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded-full text-stone-500 hover:text-accent dark:hover:text-accent hover:bg-stone-100 dark:hover:bg-stone-800 transition-all"
            >
              <span className="text-lg group-hover:text-accent transition-colors">
                {icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
