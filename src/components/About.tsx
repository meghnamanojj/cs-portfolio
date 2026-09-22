import { motion } from "motion/react";

const currently = [
  { label: "working on", value: "a password strength visualizer that roasts your passwords", emoji: "🔐" },
  { label: "learning", value: "network security, one TryHackMe room at a time", emoji: "📚" },
  { label: "playing", value: "something cozy, probably at 2am", emoji: "🎮" },
  { label: "drawing", value: "little guys, mostly dogs", emoji: "🎨" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <motion.h2
        className="mb-8 text-center text-4xl font-black text-plum"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        A bit about me
      </motion.h2>

      <motion.p
        className="mx-auto mb-12 max-w-2xl text-center text-lg text-plum/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        I'm a computer science student heading into cybersecurity, which mostly
        means I find it very fun to figure out how things break. I like building
        tools that make security feel less intimidating, because "just use a
        strong password" has never once helped anyone. Outside of that, I draw,
        I play games, and I have an unreasonable sweet tooth.
      </motion.p>

      <div className="grid gap-4 sm:grid-cols-2">
        {currently.map((item, i) => (
          <motion.div
            key={item.label}
            className="rounded-3xl bg-white p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", bounce: 0.4 }}
            whileHover={{ y: -4, rotate: 1 }}
          >
            <div className="mb-2 text-3xl">{item.emoji}</div>
            <p className="text-sm font-bold uppercase tracking-wide text-plum/50">
              currently {item.label}
            </p>
            <p className="mt-1 font-medium text-plum">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}