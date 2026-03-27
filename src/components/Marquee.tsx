"use client";

import { motion } from "framer-motion";

const techStack = [
  "React.js", "TypeScript", "Next.js", "MongoDB", "Node.js", 
  "AWS", "Microservices", "Tailwind CSS", "Framer Motion", "Supabase"
];

export default function Marquee() {
  return (
    <div className="py-8 border-y border-[#111111]/10 dark:border-[#EDEDED]/10 overflow-hidden flex bg-[#F4F4F0] dark:bg-[#0A0A0A]">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {/* We map the array twice to create a seamless infinite loop */}
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="flex items-center">
            <span className="text-xl sm:text-2xl font-medium tracking-tight px-8 text-[#111111] dark:text-[#EDEDED]">
              {tech}
            </span>
            <span className="text-[#111111]/30 dark:text-[#EDEDED]/30 text-2xl">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}