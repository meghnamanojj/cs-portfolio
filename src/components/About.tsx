import { motion } from "motion/react";

const currently = [
  { label: "working on", value: "a password strength visualizer that roasts your passwords", emoji: "🔐", bg: "bg-lav" },
  { label: "learning", value: "network security, one TryHackMe room at a time", emoji: "📚", bg: "bg-mint" },
  { label: "playing", value: "something cozy, probably at 2am", emoji: "🎮", bg: "bg-peach" },
  { label: "drawing", value: "little guys, mostly dogs", emoji: "🎨", bg: "bg-bubble" },
];

const tilts = ["1.5deg", "-2deg", "-1deg", "2deg"];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <motion.h2
        className="mb-8 text-center text-4xl font-bold text-plum"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        a bit about me
      </motion.h2>

      <motion.div
        className="sticker mx-auto mb-14 max-w-2xl rotate-[-1deg] rounded-[2rem] border-4 border-plum bg-white p-8 text-center text-lg text-plum/80"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.4 }}
      >
        I'm a computer science student heading into cybersecurity, which mostly
        means I find it very fun to figure out how things break. I like building
        tools that make security feel less intimidating, because "just use a
        strong password" has never once helped anyone. Outside of that, I draw,
        I play games, and I have an unreasonable sweet tooth.
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {currently.map((item, i) => (
          <motion.div
            key={item.label}
            className={`sticker-sm rounded-[1.5rem] border-4 border-plum ${item.bg} p-5`}
            style={{ rotate: tilts[i] }}
            initial={{ opacity: 0, y: 25, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: tilts[i] }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", bounce: 0.5 }}
            whileHover={{ y: -6, rotate: 0, scale: 1.03 }}
          >
            <div className="mb-2 text-4xl">{item.emoji}</div>
            <p className="text-xs font-semibold uppercase tracking-widest text-plum/60">
              currently {item.label}
            </p>
            <p className="mt-1 font-medium text-plum">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}