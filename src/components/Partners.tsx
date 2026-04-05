"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "PlaySpots", type: "Sports Tech" },
  { name: "G9 Edu", type: "EdTech" },
  { name: "DashScholar", type: "E-Learning" },
  { name: "DealBreaker", type: "E-Commerce" },
  { name: "Postnat", type: "Healthcare" },
  { name: "Al Marsa", type: "Marine" },
];

export default function Partners() {
  return (
    <section className="bg-[#F4F4F0] dark:bg-[#0A0A0A] transition-colors duration-300 pt-8 pb-16">
      <div className="max-w-[100rem] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-2 w-2 rounded-full bg-[#009D8D]" />
          <span className="text-[#009D8D] font-semibold tracking-widest uppercase text-xs">
            Previously Partnered With
          </span>
        </div>

        {/* The 1px Hairline Grid Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          // This creates the perfect 1px border grid effect
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-[#111111]/10 dark:bg-[#EDEDED]/10 border border-[#111111]/10 dark:border-[#EDEDED]/10"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-[#F4F4F0] dark:bg-[#0A0A0A] flex flex-col justify-center items-center py-10 px-4 group hover:bg-[#111111]/[0.02] dark:hover:bg-[#EDEDED]/[0.02] transition-colors cursor-default"
            >
              <span className="text-[#111111]/40 dark:text-[#EDEDED]/40 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 group-hover:text-[#009D8D]/60 transition-colors">
                {partner.type}
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#111111]/80 dark:text-[#EDEDED]/80 tracking-tight group-hover:text-[#009D8D] transition-colors text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
