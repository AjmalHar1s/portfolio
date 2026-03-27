"use client";

import { motion } from "framer-motion";
import { Globe2, Clock, ShieldCheck } from "lucide-react";

export default function RemoteReliability() {
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-[#F4F4F0] dark:bg-[#0A0A0A] border-t border-[#111111]/10 dark:border-[#EDEDED]/10 transition-colors duration-300">
      <div className="max-w-[85rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Massive Statement */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-3 mb-8">
                {/* Subtle Teal Accent */}
                <span className="h-2 w-2 rounded-full bg-[#009D8D]" />
                <span className="text-[#009D8D] font-semibold tracking-widest uppercase text-xs">
                  Remote Collaboration
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight leading-[1.1] mb-8">
                Built for <br className="hidden lg:block" /> Global Execution.
              </h2>

              <p className="text-xl text-[#111111]/60 dark:text-[#EDEDED]/60 font-light leading-relaxed mb-10">
                I don't just write code; I drive projects forward across time
                zones.
              </p>

              {/* Minimal Region Tags */}
              <div className="flex flex-wrap gap-3">
                {["🇩🇪 Germany", "🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🇮🇳 India"].map(
                  (region) => (
                    <span
                      key={region}
                      className="px-4 py-2 text-sm font-medium rounded-full border border-[#111111]/10 dark:border-[#EDEDED]/20 text-[#111111]/80 dark:text-[#EDEDED]/80"
                    >
                      {region}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Editorial Text Blocks */}
          <div className="lg:col-span-7 flex flex-col gap-12 sm:gap-16 pt-2 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
              className="flex gap-6 sm:gap-8 items-start"
            >
              <div className="mt-1 text-[#111111]/20 dark:text-[#EDEDED]/20 hidden sm:block">
                <Globe2 size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight mb-4">
                  Seamless Cross-Border Workflow
                </h3>
                <p className="text-lg text-[#111111]/60 dark:text-[#EDEDED]/60 font-light leading-relaxed">
                  Building software for international clients requires empathy,
                  clear communication, and absolute reliability. My priority is
                  to make the team's workflow smoother through proactive updates
                  and taking true ownership of my tasks.
                </p>
              </div>
            </motion.div>

            <div className="h-px w-full bg-[#111111]/10 dark:bg-[#EDEDED]/10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
              className="flex gap-6 sm:gap-8 items-start"
            >
              <div className="mt-1 text-[#111111]/20 dark:text-[#EDEDED]/20 hidden sm:block">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight mb-4">
                  Asynchronous Efficiency
                </h3>
                <p className="text-lg text-[#111111]/60 dark:text-[#EDEDED]/60 font-light leading-relaxed">
                  I thrive in asynchronous environments. I structure my pull
                  requests, documentation, and hand-offs so that the rest of the
                  team never has to wait on me to unblock their work.
                </p>
              </div>
            </motion.div>

            <div className="h-px w-full bg-[#111111]/10 dark:bg-[#EDEDED]/10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: smoothEase, delay: 0.3 }}
              className="flex gap-6 sm:gap-8 items-start"
            >
              <div className="mt-1 text-[#111111]/20 dark:text-[#EDEDED]/20 hidden sm:block">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#111111] dark:text-[#EDEDED] tracking-tight mb-4">
                  Zero Micromanagement
                </h3>
                <p className="text-lg text-[#111111]/60 dark:text-[#EDEDED]/60 font-light leading-relaxed">
                  I take end-to-end ownership of the features I build. Managers
                  trust me to execute independently, from initial architecture
                  discussions to final production deployment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
