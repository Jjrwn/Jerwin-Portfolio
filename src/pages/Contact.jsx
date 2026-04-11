import Section from "../components/Section";
import { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MdOutlineMail />,
      label: "Email",
      value: "jerwinmacasinag0328@gmail.com",
      href: "mailto:jerwinmacasinag0328@gmail.com",
    },
    {
      icon: <LuMapPin />,
      label: "Location",
      value: "Makati, Philippines",
      href: null,
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      label: "Github",
      href: "https://github.com/Jjrwn",
      note: "See my code",
    },
    {
      icon: <FaLinkedin />,
      label: "Linkedin",
      href: "https://www.linkedin.com/in/jerwin-macasinag-724a9233b/",
      note: "Connect with me",
    },
    {
      icon: <FaFileAlt />,
      label: "Resume",
      href: "/resume/jerwin-macasinag.pdf",
      note: "View CV",
    },
  ];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <div>
            <p className=" font-mono text-xs text-accent tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-black text-stone-900 dark:text-stone-100
                        leading-tight"
            >
              let's
              <br />
              <em className="text-gradient not-italic"> get in touch</em>
            </h2>
          </div>

          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            I'm active looking for junior developer positions and internships.
            If you have an opportunity, a project, or just want to chat about
            web dev - I'd genuinely love to hear from you.
          </p>

          <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5 space-y-3">
            <p className="text-sm font-semibold text-accent">
              What I'm looking for:
            </p>
            <ul className="space-y-1.5">
              {[
                "Junior / entry-level developer roles",
                "Internship / training opportunities (paid preferred)",
                "Freelance projects to grow my portfolio",
                "Mentorship or code review partners",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {contactInfo.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-700
                          text-stone-600 dark:text-stone-400 hover:border-accent hover:text-accent transition-all group"
              >
                <span className="text-lg group-hover:text-accent transition-colors">
                  {icon}
                </span>

                <div className="flex flex-col">
                  <span className="text-xs font-medium">{label}</span>

                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-stone-500 hover:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-stone-500">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {socials.map(({ icon, label, note, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-xl border-stone-200 dark:border-stone-700 
                          text-stone-600 dark:text-stone-400 hover:border-accent hover:text-accent transition-all 
                          text-center group"
              >
                <span className="text-lg group-hover:text-accent transition-colors">
                  {icon}
                </span>
                <span className="text-xs font-medium">{label}</span>
                <span className="text-xs text-stone-400">{note}</span>
              </a>
            ))}
          </div>
        </div>
        <div
          className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl 
                        p-8 shadow-sm"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
              <IoCheckmarkCircleSharp size={48} className="text-accent" />
              <h3 className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
                message sent! <MdSentimentSatisfiedAlt />
              </h3>
              <p className="text-stone-500 dark:text-stone-400">
                Thanks for reaching out! I'll get back to you as soon as I can
                -- within a day.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="text-sm text-accent hover:underline"
              >
                send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="font-display font-bold text-xl text-stone-900 dark:text-stone-100 mb-1">
                  Let's work together
                </h3>
                <p className="text-sm text-stone-400">
                  I read every message personally.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jerwin Macasinag"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800
                            text-stone-900 dark:text-stone-100 text-sm placeholder-stone-400 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="name@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800
                            text-stone-900 dark:text-stone-100 text-sm placeholder-stone-400 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Jerwin! We have a junior dev opening..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 
                            text-stone-900 dark:text-stone-100 text-sm placeholder-stone-400 focus:outline-none focus:border-accent 
                            transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-accent text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-accent-dark
                          transition-colors shadow-lg shadow-accent/25 disabled:opacity-70"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <LuSend size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
