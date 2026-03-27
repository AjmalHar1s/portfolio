"use client";

import { ArrowUpRight } from "lucide-react";

// Highly optimized inline SVGs to avoid library dependency errors
function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F0] dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-[100rem] mx-auto px-6 sm:px-12 lg:px-24 pt-32 pb-12">
        {/* Massive Call to Action */}
        <div className="flex flex-col mb-32">
          <p className="text-[#111111]/40 dark:text-[#EDEDED]/40 font-semibold tracking-widest uppercase text-sm mb-6">
            Ready to Build?
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-[7rem] font-medium text-[#111111] dark:text-[#EDEDED] tracking-[-0.03em] leading-[0.9] mb-10">
            Let's Collaborate.
          </h2>

          <a
            href="mailto:hello@ajmalharis.com"
            className="group flex items-center gap-4 text-2xl sm:text-4xl lg:text-5xl font-light text-[#111111]/70 dark:text-[#EDEDED]/70 hover:text-[#009D8D] dark:hover:text-[#009D8D] transition-colors w-fit"
          >
            hello@ajmalharis.com
            <div className="p-3 sm:p-4 rounded-full bg-[#111111]/5 dark:bg-[#EDEDED]/10 group-hover:bg-[#009D8D]/10 group-hover:text-[#009D8D] transition-all duration-300 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </a>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-[#111111]/10 dark:border-[#EDEDED]/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium text-[#111111] dark:text-[#EDEDED]">
              Haris.
            </p>
            <p className="text-[#111111]/50 dark:text-[#EDEDED]/50 text-sm">
              © {new Date().getFullYear()} Frontend UI Engineer.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#111111]/60 dark:text-[#EDEDED]/60 hover:text-[#009D8D] dark:hover:text-[#009D8D] transition-colors font-medium"
            >
              <LinkedinIcon size={22} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#111111]/60 dark:text-[#EDEDED]/60 hover:text-[#009D8D] dark:hover:text-[#009D8D] transition-colors font-medium"
            >
              <GithubIcon size={22} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
