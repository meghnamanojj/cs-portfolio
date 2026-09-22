import { motion } from "motion/react";

const links = [
  {
    label: "Email me",
    href: "mailto:meghna.manoj005@gmail.com",
    emoji: "✉️",
    bg: "bg-lav",
  },
  {
    label: "GitHub",
    href: "https://github.com/meghnamanojj",
    emoji: "🐙",
    bg: "bg-mint",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/meghna-thaivalappil-manoj-9b8508309",
    emoji: "💼",
    bg: "bg-peach",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <motion.h2
        className="text-4xl font-black text-plum"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Player 2 wanted
      </motion.h2>

      <motion.p
        className="mx-auto mt-4 max-w-md text-lg text-plum/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Internships, projects, or just to say hi. My inbox is open.
      </motion.p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className={`flex items-center gap-2 rounded-full ${l.bg} px-7 py-3 font-bold text-plum`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", bounce: 0.5 }}
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">{l.emoji}</span>
            {l.label}
          </motion.a>
        ))}
      </div>

      <motion.p
        className="mt-16 text-sm text-plum/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Built with React, Tailwind, and too much candy. 🍬
      </motion.p>
    </section>
  );
}