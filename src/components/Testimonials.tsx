"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with Haris was a game-changer. He delivered a flawless web application that exceeded our expectations and boosted our online presence.",
    name: "Sam",
    role: "SrishTmax",
  },
  {
    quote:
      "When it comes to technical expertise, I trust this guy with all my heart. His ability to solve complex problems and implement cutting-edge solutions has been invaluable.",
    name: "Abid",
    role: "MD, G9 Edu & Lexia",
  },
];

export default function Testimonials() {
// const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-[#F4F4F0] dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-[85rem] mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="h-2 w-2 rounded-full bg-[#009D8D]" />
          <span className="text-[#009D8D] font-semibold tracking-widest uppercase text-xs">
            Client Endorseements
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.2,
              }}
              className="flex flex-col"
            >
              {/* Massive decorative quote mark */}
              <span className="text-6xl sm:text-8xl font-serif text-[#111111]/10 dark:text-[#EDEDED]/10 leading-none h-12 sm:h-16 mb-4">
                "
              </span>
              <p className="text-2xl sm:text-3xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight leading-snug mb-10">
                {testimonial.quote}
              </p>
              <div className="mt-auto flex flex-col">
                <span className="text-lg font-bold text-[#111111] dark:text-[#EDEDED]">
                  {testimonial.name}
                </span>
                <span className="text-[#111111]/50 dark:text-[#EDEDED]/50 text-sm">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
