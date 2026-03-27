"use client";

import { motion } from "framer-motion";

const partners = [
  "PlaySpots",
  "G9 Edu",
  "TLC Private Ltd",
  "SrishTmax",
  "DashScholar",
  "Hegirafs",
  "Al Marsa",
];

export default function Partners() {
  return (
    <section className="py-12 border-b border-[#111111]/10 dark:border-[#EDEDED]/10 bg-[#F4F4F0] dark:bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
        <p className="text-[#111111]/40 dark:text-[#EDEDED]/40 font-semibold tracking-widest uppercase text-xs shrink-0">
          Previously Partnered With
        </p>

        <div className="flex flex-wrap gap-x-12 gap-y-6 items-center">
          {partners.map((partner, index) => (
            <motion.span
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl sm:text-2xl font-medium text-[#111111]/60 dark:text-[#EDEDED]/60 tracking-tight hover:text-[#009D8D] dark:hover:text-[#009D8D] transition-colors cursor-default"
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
