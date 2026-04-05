"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  // 1. Live Time State (IST / Kerala Time)
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. Magnetic Button State
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3; // 0.3 dictates the "pull" strength
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleScrollToWork = () => {
    const section = document.getElementById("works-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reveal Animation
  const slideUp = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-end pb-20 px-6 sm:px-12 lg:px-24 max-w-[100rem] mx-auto relative">
      {/* Top Status Badge & Live Clock */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-16"
      >
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009D8D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#009D8D]"></span>
          </div>
          <span className="uppercase tracking-widest text-xs font-bold text-[#111111]/60 dark:text-[#EDEDED]/60">
            Available for remote roles
          </span>
        </div>

        {/* The Live Clock */}
        {mounted && (
          <div className="hidden sm:flex items-center gap-3 border-l border-[#111111]/10 dark:border-[#EDEDED]/10 pl-8">
            <span className="uppercase tracking-widest text-xs font-bold text-[#111111]/40 dark:text-[#EDEDED]/40">
              Local Time (IND)
            </span>
            <span className="font-mono text-sm font-medium text-[#111111] dark:text-[#EDEDED] w-[100px]">
              {time}
            </span>
          </div>
        )}
      </motion.div>

      {/* Massive Typography */}
      <div className="flex flex-col gap-2 sm:gap-4 mb-12">
        <div className="overflow-hidden pb-4 -mb-4">
          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="text-[4.5rem] sm:text-[7rem] lg:text-[9rem] leading-[0.9] font-medium tracking-[-0.03em] text-[#111111] dark:text-[#EDEDED] hover:text-[#009D8D] dark:hover:text-[#009D8D] transition-colors duration-500 cursor-default"
          >
            Haris.
          </motion.h1>
        </div>

        {/* FIX: Added pb-6 and -mb-6 to give the "g" descender room to render before hitting the hidden overflow boundary */}
        <div className="overflow-hidden pb-6 -mb-6">
          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[3.5rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-medium tracking-[-0.03em] text-[#111111]/50 dark:text-[#EDEDED]/50 cursor-default"
          >
            Frontend Engineer.
          </motion.h1>
        </div>
      </div>

      {/* Bottom Row: Paragraph and Interactive CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-t border-[#111111]/10 dark:border-[#EDEDED]/10 pt-8 mt-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-xl text-lg sm:text-xl md:text-2xl leading-relaxed text-[#111111]/70 dark:text-[#EDEDED]/70 font-light"
        >
          I focus on how products behave, using clean architecture and modern
          frameworks to make complex systems feel intuitive.
        </motion.p>

        {/* Magnetic Button Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="p-4 -m-4" // Expand hover area without shifting layout
        >
          <motion.button
            ref={buttonRef}
            onClick={handleScrollToWork}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1,
            }}
            className="group flex items-center gap-4 text-xl font-medium border-b border-[#111111] dark:border-[#EDEDED] pb-1 hover:text-[#009D8D] hover:border-[#009D8D] dark:hover:text-[#009D8D] dark:hover:border-[#009D8D] transition-colors cursor-pointer"
          >
            View Work
            <ArrowDownRight className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
