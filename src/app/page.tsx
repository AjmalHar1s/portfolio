import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RemoteReliability from "@/components/RemoteReliability";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Marquee />
      <Projects />
      <RemoteReliability />
      <Footer />
    </main>
  );
}