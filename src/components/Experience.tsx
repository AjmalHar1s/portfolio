"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    year: "Jan 2026 — Present",
    role: "Contract Frontend Engineer & SaaS Founder",
    company: "Ordrr.link / PaperChief",
    description:
      "Architecting and deploying full-stack SaaS platforms including an order-management system for social sellers and a tech-enabled career service platform.",
    achievements: [
      "Engineered Ordrr.link from ground up, enabling social media sellers to manage high-volume orders.",
      "Built and scaled PaperChief, a tech-enabled resume writing service based in Kerala.",
      "Led cross-functional remote teams and managed end-to-end product development pipelines.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://ordrr.link",
  },
  {
    id: 2,
    year: "Nov 2023 — Dec 2025",
    role: "Lead Frontend Developer & Technical PM",
    company: "G9 Edu International",
    description:
      "Engineered the complete web ecosystem for the G9 Lexia platform, including dashboards and corporate website.",
    achievements: [
      "Delivered 98% of project milestones strictly on Agile schedules.",
      "Built secure authentication systems seamlessly integrated with backend APIs.",
      "Mentored junior developers and enforced strict code review protocols.",
    ],
    tech: ["React", "Redux", "TypeScript", "REST APIs", "AWS"],
    link: "",
  },
  {
    id: 3,
    year: "Nov 2021 — Mar 2023",
    role: "Web Developer",
    company: "PlaySpots",
    description:
      "Built high-performance React applications including a viral FIFA World Cup prediction app that boosted user engagement by 200%.",
    achievements: [
      "Developed a viral FIFA World Cup prediction app, boosting platform engagement by 200%.",
      "Optimized frontend performance, reducing load times by 35%.",
      "Engineered responsive, mobile-first UI with complex state management.",
    ],
    tech: ["React", "JavaScript", "HTML/CSS", "Firebase"],
    link: "",
  },
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<
    (typeof experiences)[0] | null
  >(null);

  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedExp]);

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-[#F4F4F0] dark:bg-[#0A0A0A] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight mb-4">
            Experience
          </h2>
        </motion.div>

        <div className="flex flex-col">
          <div className="h-px w-full bg-[#111111]/10 dark:bg-[#EDEDED]/10" />

          {experiences.map((exp, index) => (
            <motion.button
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: smoothEase,
                delay: index * 0.1,
              }}
              // Switched to strict CSS Grid
              className=" text-left group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 sm:py-12 border-b border-[#111111]/10 dark:border-[#EDEDED]/10 hover:bg-[#111111]/[0.02] dark:hover:bg-[#EDEDED]/[0.02] transition-colors -mx-6 px-6 sm:-mx-12 sm:px-12 lg:-mx-24 lg:px-24 cursor-pointer items-start lg:items-center"
            >
              {/* Year Column (3 spans) */}
              <div className="lg:col-span-3 text-[#111111]/50 dark:text-[#EDEDED]/50 font-mono text-sm tracking-widest">
                {exp.year}
              </div>

              {/* Role & Company Column (4 spans) */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight mb-2 group-hover:text-[#009D8D] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-[#111111]/60 dark:text-[#EDEDED]/60 font-medium text-lg">
                  {exp.company}
                </p>
              </div>

              {/* Description Column (5 spans) */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full">
                <p className="text-[#111111]/60 dark:text-[#EDEDED]/60 font-light leading-relaxed line-clamp-2 sm:max-w-[85%]">
                  {exp.description}
                </p>
                {/* Arrow perfectly aligned to the right via ml-auto */}
                <div className="hidden sm:flex p-3 rounded-full bg-[#111111]/5 dark:bg-[#EDEDED]/5 group-hover:bg-[#009D8D] group-hover:text-white text-[#111111]/40 dark:text-[#EDEDED]/40 transition-all duration-300 shrink-0 ml-auto">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* The Dossier Modal (Unchanged) */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-[#111111]/40 dark:bg-black/70 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              className="relative w-full max-w-3xl max-h-full overflow-y-auto bg-[#F4F4F0] dark:bg-[#0A0A0A] rounded-[2rem] shadow-2xl border border-[#111111]/10 dark:border-[#EDEDED]/10 flex flex-col p-8 sm:p-12
              [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#111111]/15 dark:[&::-webkit-scrollbar-thumb]:bg-[#EDEDED]/15 hover:[&::-webkit-scrollbar-thumb]:bg-[#009D8D] [&::-webkit-scrollbar-thumb]:border-[4px] [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-[#F4F4F0] dark:[&::-webkit-scrollbar-thumb]:border-[#0A0A0A] [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-[#111111]/5 dark:bg-[#EDEDED]/10 text-[#111111] dark:text-[#EDEDED] hover:bg-[#009D8D] hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-10 pr-12">
                <span className="text-[#009D8D] font-mono text-sm tracking-widest block mb-4">
                  {selectedExp.year}
                </span>
                <h3 className="text-3xl sm:text-4xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight mb-2">
                  {selectedExp.role}
                </h3>
                <p className="text-xl text-[#111111]/60 dark:text-[#EDEDED]/60 font-light">
                  {selectedExp.company}
                </p>
              </div>

              <div className="mb-10">
                <h4 className="text-sm font-semibold tracking-widest uppercase text-[#111111]/40 dark:text-[#EDEDED]/40 mb-6">
                  Key Impact
                </h4>
                <ul className="flex flex-col gap-4">
                  {selectedExp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-[#111111]/70 dark:text-[#EDEDED]/70 font-light leading-relaxed text-lg"
                    >
                      <CheckCircle2
                        size={24}
                        className="text-[#009D8D] shrink-0 mt-0.5"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h4 className="text-sm font-semibold tracking-widest uppercase text-[#111111]/40 dark:text-[#EDEDED]/40 mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-sm font-medium rounded-full border border-[#111111]/10 dark:border-[#EDEDED]/20 text-[#111111]/80 dark:text-[#EDEDED]/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedExp.link && (
                <div className="mt-auto pt-6 border-t border-[#111111]/10 dark:border-[#EDEDED]/10">
                  <a
                    href={selectedExp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-medium text-[#111111] dark:text-[#EDEDED] hover:text-[#009D8D] dark:hover:text-[#009D8D] transition-colors"
                  >
                    View Company / Product <ArrowUpRight size={20} />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
