import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiAstro,
  SiAngular,
  SiFlutter,
  SiDart,
  SiGooglecolab,
  SiPostgresql,
  SiSupabase,
  SiSwagger,
  SiPostman,
  SiJest,
  SiGit,
} from "react-icons/si";

const capabilityItems = [
  { name: "HTML5", caption: "Hypertext Markup Language", category: "language-framework", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", caption: "Cascading Style Sheet", category: "language-framework", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", caption: "Java Script", category: "language-framework", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React.js", caption: "React Js", category: "language-framework", icon: SiReact, color: "#61DAFB" },
  { name: "Typescript", caption: "Type Script", category: "language-framework", icon: SiTypescript, color: "#3178C6" },
  { name: "Vue.js", caption: "Vue Js", category: "language-framework", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Node.js", caption: "Node Js", category: "language-framework", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", caption: "Express Js", category: "language-framework", icon: SiExpress, color: "#FFFFFF" },
  { name: "Next.js", caption: "Next Js", category: "language-framework", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Astro.js", caption: "Astro Js", category: "language-framework", icon: SiAstro, color: "#FF5D01" },
  { name: "Angular.js", caption: "Angular Js", category: "language-framework", icon: SiAngular, color: "#DD0031" },
  { name: "Flutter", caption: "Flutter", category: "language-framework", icon: SiFlutter, color: "#02569B" },
  { name: "Dart", caption: "Dart", category: "language-framework", icon: SiDart, color: "#0175C2" },
  {
    name: "Python",
    caption: "Python",
    category: "language-framework",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Vscode",
    caption: "Visual Studio Code",
    category: "tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  { name: "PostgreSQL", caption: "PostgreSQL", category: "tools", icon: SiPostgresql, color: "#336791" },
  { name: "Supabase", caption: "Supabase", category: "tools", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Google Colaboratory", caption: "Google Colaboratory", category: "tools", icon: SiGooglecolab, color: "#F9AB00" },
  { name: "Swagger UI", caption: "Swagger UI", category: "tools", icon: SiSwagger, color: "#85EA2D" },
  { name: "Postman", caption: "Postman", category: "tools", icon: SiPostman, color: "#FF6C37" },
  { name: "Jest", caption: "Unit Testing Jest", category: "tools", icon: SiJest, color: "#C21325" },
  { name: "Git", caption: "Git", category: "tools", icon: SiGit, color: "#F05032" },
];

export default function Capability() {
  const [activeCategory, setActiveCategory] = useState("language-framework");

  const filteredItems = capabilityItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="capability"
      className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden px-6 py-20 z-10"
    >
      <div className="relative z-10 container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Capability
          </h2>
          <p className="text-gray-400 mb-4">
            I’m continuously developing my skills and capabilities.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("language-framework")}
              className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all ${
                activeCategory === "language-framework"
                  ? "bg-white/20 text-white border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)]"
                  : "bg-transparent text-white/70 border-white/20 hover:bg-white/5"
              }`}
            >
              Language & Framework
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("tools")}
              className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all ${
                activeCategory === "tools"
                  ? "bg-white/20 text-white border-white/40 shadow-[0_0_18px_rgba(255,255,255,0.22)]"
                  : "bg-transparent text-white/70 border-white/20 hover:bg-white/5"
              }`}
            >
              Tools
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:shadow-blue-500/20 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.08,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                  {Icon ? (
                    <Icon size={26} style={{ color: item.color }} />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-7 h-7 object-contain"
                    />
                  )}
                </div>
                <p className="text-xs md:text-sm text-gray-300 mt-1">{item.caption}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
