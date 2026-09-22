import { motion } from "motion/react";

function App() {
  return (
    <main className="min-h-screen bg-cream px-6 py-24 text-plum">
      <section className="mx-auto max-w-3xl text-center">
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
          Computer science student who likes building playful things,
          drawing, and collecting way too much candy.
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
      </section>
    </main>
  );
}

export default App;