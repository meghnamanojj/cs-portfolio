export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  live?: string;
  code?: string;
  emoji: string;
  status?: "building" | "planned";
};

export const projects: Project[] = [
  {
    title: "This portfolio",
    blurb:
      "A cozy pastel corner of the internet, built from scratch. Eventually it becomes an explorable 3D room.",
    tech: ["React", "TypeScript", "Tailwind", "Motion"],
    code: "https://github.com/meghnamanojj/cs-portfolio",
    emoji: "🏠",
  },
  {
    title: "Password strength visualizer",
    blurb:
      "Type a password and watch it get judged. Shows crack time, weak patterns, and whether it has turned up in a known breach.",
    tech: ["React", "Web Crypto API", "HIBP API"],
    emoji: "🔐",
    status: "building",
  },
  {
    title: "Phishing email trainer",
    blurb:
      "Safe or phishing? Click the suspicious bits of a fake email and find out what gave it away.",
    tech: ["React", "TypeScript"],
    emoji: "🎣",
    status: "planned",
  },
  {
    title: "Cipher playground",
    blurb:
      "Encode and decode messages with Caesar, Vigenère, and XOR ciphers, with the letters transforming as you type.",
    tech: ["React", "TypeScript"],
    emoji: "🧩",
    status: "planned",
  },
];