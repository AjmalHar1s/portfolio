"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    year: "2023 — Present",
    role: "Freelance & Contract Engineer",
    company: "unBug",
    description:
      "Delivering custom web applications and taking end-to-end ownership of project architecture for international clients.",
  },
  {
    year: "2021 — 2023",
    role: "React JS Developer",
    company: "PlaySpots",
    description:
      "Built complex, scalable applications using React and Redux, ensuring seamless performance and consistent feature delivery.",
  },
  {
    year: "2020 — 2021",
    role: "Full Stack Lead & Co-Founder",
    company: "DashScholar",
    description:
      "Architected and launched an educational platform serving 1,000+ daily active users.",
  },
];

export default function Experience() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-[#F4F4F0] dark:bg-[#0A0A0A] transition-colors duration-300">
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
          {/* Top border for the list */}
          <div className="h-px w-full bg-[#111111]/10 dark:bg-[#EDEDED]/10" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: smoothEase,
                delay: index * 0.1,
              }}
              className="group flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 py-8 sm:py-12 border-b border-[#111111]/10 dark:border-[#EDEDED]/10 hover:bg-[#111111]/[0.02] dark:hover:bg-[#EDEDED]/[0.02] transition-colors -mx-6 px-6 sm:-mx-12 sm:px-12 lg:-mx-24 lg:px-24"
            >
              {/* Year Column */}
              <div className="lg:w-1/5 text-[#111111]/50 dark:text-[#EDEDED]/50 font-mono text-sm tracking-widest shrink-0">
                {exp.year}
              </div>

              {/* Role & Company Column */}
              <div className="lg:w-2/5 shrink-0">
                <h3 className="text-2xl sm:text-3xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight mb-2 group-hover:text-[#009D8D] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-[#111111]/60 dark:text-[#EDEDED]/60 font-medium text-lg">
                  {exp.company}
                </p>
              </div>

              {/* Description Column */}
              <div className="lg:w-2/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <p className="text-[#111111]/60 dark:text-[#EDEDED]/60 font-light leading-relaxed">
                  {exp.description}
                </p>
                <div className="hidden sm:flex p-3 rounded-full bg-transparent text-[#111111]/20 dark:text-[#EDEDED]/20 group-hover:bg-[#009D8D] group-hover:text-white transition-all duration-300 shrink-0">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
