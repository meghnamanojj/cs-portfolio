import Contact from "./components/Contact";
import About from "./components/About";
import { motion } from "motion/react";
import Projects from "./components/Projects";

const doodles = [
  { emoji: "🎵", top: "12%", left: "10%", delay: 0 },
  { emoji: "🍬", top: "20%", left: "82%", delay: 0.4 },
  { emoji: "🐾", top: "70%", left: "15%", delay: 0.8 },
  { emoji: "🎨", top: "62%", left: "80%", delay: 1.2 },
  { emoji: "✨", top: "38%", left: "88%", delay: 0.6 },
  { emoji: "🎮", top: "80%", left: "45%", delay: 1.0 },
];

function App() {
  return (
    <main className="bg-cream text-plum">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {doodles.map((d) => (
          <motion.span
            key={d.emoji}
            className="pointer-events-none absolute text-4xl opacity-70"
            style={{ top: d.top, left: d.left }}
            animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: d.delay,
            }}
          >
            {d.emoji}
          </motion.span>
        ))}

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.p
            className="mb-4 text-lg text-plum/70"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            hi there, welcome to my corner
          </motion.p>

          <motion.h1
            className="text-6xl font-black tracking-tight sm:text-7xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          >
            I'm Meghna
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-xl text-plum/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Computer science student heading into cybersecurity. I like
            building playful things, drawing, and collecting way too much candy.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#projects"
              className="rounded-full bg-lav px-8 py-3 font-bold"
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              See my projects
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full bg-peach px-8 py-3 font-bold"
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Say hi
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default App;