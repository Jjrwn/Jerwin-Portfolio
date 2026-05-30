import { useState } from "react";
import Section from "../components/Section";
import { MdOutlineWorkHistory } from "react-icons/md";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { GiCampCookingPot } from "react-icons/gi";
import { MdOutlineSavings } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { GiNewspaper } from "react-icons/gi";
import { RiLoginCircleLine } from "react-icons/ri";

export default function Projects() {
  const projects = [
    {
      name: "Job Application tracker",
      tech: "HTML, CSS, Javascript",
      desc: "A Job application tracker built with plain HTML, CSS, and Javascript. I built for a college project. Help users organize applications, monitor progress, and stay consistent during the job search process.",
      tags: ["HTML", "CSS", "Javascript", "Local Storage"],
      category: "Front-End",
      color: "from-orange-400 to-red-500",
      icon: <MdOutlineWorkHistory />,
      github: "https://github.com/Jjrwn/JobApplicationTracker",
      demo: "https://jjrwn.github.io/JobApplicationTracker/",
      learning: "Grid, local storage, modal",
    },
    {
      name: "Recipe finder",
      tech: "React, Tailwind CSS, API",
      desc: "Browse and save your favorite recipes. Built with React and a free meal API. Practicing component structure and useEffect",
      tags: ["React", "Tailwind", "Fetch API", "Axios"],
      category: "Front-End",
      color: "from-red-300 to-pink-500",
      icon: <GiCampCookingPot />,
      github: "https://github.com/Jjrwn/recipe-finder",
      demo: "https://recipefinder-brown.vercel.app/",
      learning:
        "useEffect, API integration, Fetch & Axios requests, async data handling, React state management",
    },
    {
      name: "Personal Finance Dashboard",
      tech: "React, Tailwin CSS",
      desc: "A simple responsive personal finance tracker. This track income, expenses, and balance - with data save locally using local storage",
      tags: ["React", "Tailwind", "Loacl Storage"],
      category: "Front-End",
      color: "from-blue-300 to-green-500",
      icon: <MdOutlineSavings />,
      github: "https://github.com/Jjrwn/PersonalFinanceDashboard",
      demo: "https://personal-finance-dashboard-beige.vercel.app/",
      learning:
        "useState, event handling, controlled inputs, localStorage persistence, array state updates, conditional rendering ",
    },

    {
      name: "Todo-List App",
      tech: "React, Tailwind CSS",
      desc: "A simple task management app where users can add, complete, and remove tasks through a clean and responsive interface.",
      tags: ["React", "Tailwind"],
      category: "Front-End",
      color: "from-teal-300 to-yellow-500",
      icon: <FcTodoList />,
      github: "https://github.com/Jjrwn/todo-",
      demo: "https://todo-six-silk-46.vercel.app/",
      learning:
        "pages, reusable components, React Router, createContext, event handling, list rendering",
    },

    {
      name: "react-node-auth-system",
      tech: "React, Tailwin CSS, Node/Express, MongoDB Atlas",
      desc: "A full-stack authentication system where users can register and log in securely. It uses JWT for authentication, bcrypt for password hashing, and MongoDB Atlas for storing user data.",
      tags: ["MERN Stack, vercel, render"],
      category: "Full-Stack",
      color: "from-blue-700 to-green-600",
      icon: <FiLogIn />,
      github: "https://github.com/Jjrwn/react-node-auth-system",
      demo: "https://react-auth-kohl.vercel.app/",
      learning:
        "JWT authentication, password hashing with bcrypt, building REST API with Express, handling POST and GET requests.",
    },

    {
      name: "rbac Academic-system",
      tech: "React, Tailwind CSS, Node/Express, MongoDB Atlas",
      desc: "A role-based access control (RBAC) system for an academic management application. It defines three user roles: Admin, Teacher, and Student. Each role has specific permissions to access different routes and perform certain actions within the application.",
      tags: ["MERN Stack, vercel, render"],
      category: "Full-Stack",
      color: "from-purple-700 to-indigo-600",
      icon: <HiMiniAcademicCap />,
      github: "https://github.com/Jjrwn/rbac-simple-academic-system",
      demo: "https://rbac-academic-system.vercel.app/",
      learning:
        "Role-based access control (RBAC) implementation, JWT authentication, Express middleware for route protection, MongoDB Atlas for user data management.",
    },

    {
      name: "NewsPulse",
      tech: "React, Tailwind CSS, NewsAPI (TechCrunch), Redis (Upstash)",
      desc: "A news aggregator app that fetches and displays the latest news articles from various sources using the NewsAPI. Users can search for news by keyword with only a 30 request per minute limit.",
      tags: ["React", "Tailwind", "NewsAPI", "Rate limiting with Redis"],
      category: "Full-Stack",
      color: "from-yellow-400 to-red-600",
      icon: <GiNewspaper />,
      github: "https://github.com/Jjrwn/newsPulse",
      demo: "https://news-pulse-blond.vercel.app/",
      learning:
        "API integration with NewsAPI, implementing rate limiting using Redis (Upstash), handling API responses and errors.",
    },

    {
      name: "mern-login-system",
      tech: "React, Node.js, Express, MongoDB, JWT, Nodemailer, Tailwind CSS",
      desc: "A full-stack authentication system featuring user registration, JWT-based login, OTP email verification, and password reset flow.",
      tags: ["Auth", "REST API", "OTP", "Full-Stack"],
      category: "Full-Stack",
      color: "from-indigo-500 to-blue-600",
      icon: <RiLoginCircleLine />,
      github: "https://github.com/Jjrwn/mern-login-system",
      demo: "https://mern-login-system-pi.vercel.app",
      learning:
        "Built a complete auth flow including OTP generation, email delivery with Nodemailer, JWT token management, and protected routes on both the frontend and backend. Learned how to handle security concerns like timing attacks, rate limiting, and email enumeration prevention.",
    },
  ];

  const filters = ["All", "Front-End", "Full-Stack"];

  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section title="Projects">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
              Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-stone-800 dark:text-stone-100 leading-tight">
              Things I've
              <br />
              <em className="text-gradient not-italic">built & learned</em>
            </h2>
            <p className="mt-3 text-stone-500 dark:text-stone-400 text-sm max-w-md">
              These are personal and school projects - no client work yet. Each
              taught me something new.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {filters.map((projectFilter) => (
              <button
                key={projectFilter}
                onClick={() => setActive(projectFilter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === projectFilter
                    ? "bg-accent text-white shadow-md shadow-accent/25"
                    : "border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-accent hover:text-accent"
                }`}
              >
                {projectFilter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((projectCard) => (
            <article
              key={projectCard.name}
              className="group relative p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 hover:border-accent/40 
                        hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${projectCard.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}
              >
                {projectCard.icon}
              </div>

              <h3 className="font-display font-bold text-lg text-stone-900 dark:text-stone-100 mb-2 group-hover:text-accent transition-colors">
                {projectCard.name}
              </h3>

              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4 flex-1">
                {projectCard.desc}
              </p>

              <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60">
                <PiBookOpenTextDuotone
                  size={12}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <p className="text-[11px] text-stone-500 dark:text-stone-400">
                  <span className="font-semibold text-stone-600 dark:text-stone-300">
                    Learned:
                  </span>{" "}
                  {projectCard.learning}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {projectCard.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={projectCard.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-accent transition-colors"
                >
                  <FaGithub size={13} /> View Code
                </a>

                {projectCard.demo && (
                  <a
                    href={projectCard.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-accent transition-colors"
                  >
                    <BiLinkExternal size={13} /> Live demo
                  </a>
                )}

                {!projectCard.demo && (
                  <span className="flex items-center gap-1.5 text-xs text-stone-300 dark:text-stone-600 cursor-default">
                    <BiLinkExternal size={13} /> No live demo yet
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
