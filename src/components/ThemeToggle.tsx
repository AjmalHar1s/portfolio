"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Crucial Next.js step: We only render the toggle after the component has mounted on the client.
  // This prevents the "Hydration Mismatch" error where the server thinks it's light mode but the user's browser is in dark mode.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a hidden placeholder of the exact same size to prevent layout shift
    return <div className="fixed top-6 right-6 sm:top-8 sm:right-12 w-[46px] h-[46px]" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 sm:top-8 sm:right-12 z-50 p-3 rounded-full bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-[#111111]/10 dark:border-[#EDEDED]/10 text-[#111111]/70 dark:text-[#EDEDED]/70 hover:text-[#009D8D] dark:hover:text-[#009D8D] hover:border-[#009D8D]/30 dark:hover:border-[#009D8D]/30 transition-all duration-300 shadow-sm hover:shadow-md"
      aria-label="Toggle Dark Mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}