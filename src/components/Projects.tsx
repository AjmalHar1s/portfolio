"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { featuredProjects, Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="works-section" className="py-32 px-6 sm:px-12 lg:px-24 bg-[#F4F4F0] dark:bg-[#0A0A0A] transition-colors duration-300 relative">
      <div className="max-w-[85rem] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight mb-4">
            Curated Work
          </h2>
          <p className="text-lg text-[#111111]/60 dark:text-[#EDEDED]/60 font-light max-w-2xl">
            Selected projects demonstrating complex frontend architecture and
            modern user interfaces.
          </p>
        </motion.div>

        {/* The Single-Row Stack */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {featuredProjects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
                delay: index * 0.1,
              }}
              className="group text-left pt-6 sm:pt-10 px-6 sm:px-10 pb-0 rounded-[1.5rem] bg-white dark:bg-[#111111] border border-[#111111]/5 dark:border-[#EDEDED]/5 hover:border-[#009D8D]/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row items-stretch gap-8 lg:gap-16 cursor-pointer"
            >
              {/* Left Side: Text Content */}
              <div className="flex flex-col w-full md:w-3/5 h-full justify-center">
                {/* Top Row */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[#111111]/40 dark:text-[#EDEDED]/40 font-semibold text-sm sm:text-base tracking-wide mt-2">
                    {project.title}
                  </span>
                  <div className="p-2 rounded-full bg-[#111111]/5 dark:bg-[#EDEDED]/5 group-hover:bg-[#009D8D] group-hover:text-white text-[#111111]/40 dark:text-[#EDEDED]/40 transition-colors duration-300 md:hidden">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-[1.75rem] lg:text-4xl font-medium text-[#111111] dark:text-[#EDEDED] leading-[1.3] tracking-[-0.01em] mb-6">
                  {project.impact.split(".")[0]}{" "}
                  {/* <span className="inline-flex items-center px-3 py-1 mx-1 -translate-y-1 rounded-full bg-[#009D8D]/10 text-[#009D8D] text-sm sm:text-base font-semibold whitespace-nowrap">
                    ✨ {project.tech[0]}
                  </span> */}
                </h3>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-auto pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#F4F4F0] dark:bg-[#0A0A0A] text-[#111111]/70 dark:text-[#EDEDED]/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="hidden md:flex p-3 rounded-full bg-[#111111]/5 dark:bg-[#EDEDED]/5 group-hover:bg-[#009D8D] group-hover:text-white text-[#111111]/40 dark:text-[#EDEDED]/40 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="relative w-full md:w-2/5 h-48 sm:h-64 md:h-[300px] md:self-end rounded-2xl overflow-hidden shrink-0 ">
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  fill
                  className="object-cover object-top transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Popup Modal (Unchanged) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#111111]/40 dark:bg-black/70 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-[#F4F4F0] dark:bg-[#0A0A0A] rounded-[2rem] shadow-2xl border border-[#111111]/10 dark:border-[#EDEDED]/10 flex flex-col
              [&::-webkit-scrollbar]:w-3
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-track]:my-6
              [&::-webkit-scrollbar-thumb]:bg-[#111111]/15
              dark:[&::-webkit-scrollbar-thumb]:bg-[#EDEDED]/15
              hover:[&::-webkit-scrollbar-thumb]:bg-[#009D8D]
              [&::-webkit-scrollbar-thumb]:border-[4px]
              [&::-webkit-scrollbar-thumb]:border-solid
              [&::-webkit-scrollbar-thumb]:border-[#F4F4F0]
              dark:[&::-webkit-scrollbar-thumb]:border-[#0A0A0A]
              [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md text-[#111111] dark:text-[#EDEDED] hover:bg-[#009D8D] hover:text-white transition-colors shadow-sm"
              >
                <X size={24} />
              </button>

              <div className="w-full h-[250px] sm:h-[400px] relative bg-[#111111]/5 dark:bg-[#EDEDED]/5 shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>

              <div className="p-8 sm:p-12 flex flex-col gap-8">
                <div>
                  <p className="text-[#009D8D] font-semibold tracking-widest uppercase text-xs mb-3">
                    {selectedProject.role}
                  </p>
                  <h3 className="text-3xl sm:text-5xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight mb-6">
                    {selectedProject.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-sm font-medium rounded-full border border-[#111111]/10 dark:border-[#EDEDED]/20 text-[#111111]/80 dark:text-[#EDEDED]/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px w-full bg-[#111111]/10 dark:bg-[#EDEDED]/10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                  <div>
                    <h4 className="text-lg font-medium text-[#111111] dark:text-[#EDEDED] mb-3">
                      The Problem
                    </h4>
                    <p className="text-[#111111]/60 dark:text-[#EDEDED]/60 font-light leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#111111] dark:text-[#EDEDED] mb-3">
                      The Impact
                    </h4>
                    <p className="text-[#111111]/60 dark:text-[#EDEDED]/60 font-light leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pb-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#009D8D] hover:bg-[#008275] text-white px-8 py-4 rounded-xl font-medium transition-colors w-full sm:w-fit justify-center shadow-lg shadow-[#009D8D]/20"
                  >
                    Visit Live Project <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
