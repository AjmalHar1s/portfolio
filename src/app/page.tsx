import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import RemoteReliability from "@/components/RemoteReliability";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle"; // Import the new toggle

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Drop the toggle right at the top */}
      <ThemeToggle />

      <Hero />
      <Partners />
      <Marquee />
      <Projects />
      <Experience />
      <Testimonials />
      <RemoteReliability />
      <Footer />
    </main>
  );
}
