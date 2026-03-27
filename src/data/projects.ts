export interface Project {
  id: string;
  title: string;
  role: string;
  tech: string[];
  problem: string;
  impact: string;
  edge: string;
  image: string; // The URL to the royalty-free image
  liveLink: string;
}

export const featuredProjects: Project[] = [
  {
    id: "g9-lexia",
    title: "G9 Lexia & G9 Edu",
    role: "Project Manager & Lead Developer",
    tech: ["MERN Stack", "React Native", "AI Integration"],
    problem:
      "Indian learners needed a seamless, secure platform to master the German language.",
    impact:
      "Directed the complete product lifecycle from 0 to 100. Engineered a platform featuring DRM-protected video, an AI doubt-clearance chatbot, and interactive gamification.",
    edge: "Bridged communication between cross-border stakeholders and managed a remote development team to deliver both the web app and mobile ecosystem on time.",
    // Abstract interface illustration
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    liveLink: "#",
  },
  {
    id: "synq-fit",
    title: "Synq Fit",
    role: "Full-Stack UI Engineer",
    tech: ["React.js", "Node.js", "AWS", "Microservices"],
    problem:
      "Gym owners required real-time biometric tracking for members during workouts.",
    impact:
      "Built the full-stack architecture and frontend interface integrating live Bluetooth heart-rate sensor data. Engineered automated post-workout graphical reports via email.",
    edge: "Executed 100% remotely alongside an international co-developer, delivering a highly responsive, microservices-backed product.",
    // Dark analytics/dashboard visualization
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    liveLink: "#",
  },
  {
    id: "fifa-app",
    title: "FIFA World Cup Prediction App",
    role: "Frontend Engineer",
    tech: ["React", "PWA", "REST APIs"],
    problem:
      "Required a high-performance prediction platform built, tested, and shipped in under 12 days.",
    impact:
      "Delivered the entire frontend and API integration under a brutal deadline. The app went viral regionally and handled massive traffic spikes without crashing.",
    edge: "Proves the ability to execute flawless frontend architecture and complex API integrations under extreme pressure and tight deadlines.",
    // High-energy stadium/crowd (relevance to FIFA)
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200&auto=format&fit=crop",
    liveLink: "#",
  },
  {
    id: "ordrr-link",
    title: "Ordrr.link",
    role: "Founder & Lead Engineer",
    tech: ["TypeScript", "Next.js", "MongoDB", "Supabase"],
    problem:
      "Social media sellers needed a streamlined way to manage incoming orders without heavy enterprise software.",
    impact:
      "Single-handedly architected and deployed a live micro-SaaS platform from the ground up, currently serving active e-commerce stores.",
    edge: "Demonstrates deep understanding of modern authentication, database architecture, and end-to-end product deployment.",
    // Clean, minimalist tech office/laptop setup
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop",
    liveLink: "#",
  },
];
