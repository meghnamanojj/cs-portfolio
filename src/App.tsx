import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const doodles = [
  { emoji: "🎵", top: "14%", left: "8%", depth: 1.4, delay: 0 },
  { emoji: "🍬", top: "18%", left: "84%", depth: 0.8, delay: 0.4 },
  { emoji: "🐾", top: "72%", left: "12%", depth: 1.1, delay: 0.8 },
  { emoji: "🎨", top: "66%", left: "82%", depth: 1.6, delay: 1.2 },
  { emoji: "✨", top: "38%", left: "90%", depth: 0.6, delay: 0.6 },
  { emoji: "🎮", top: "82%", left: "48%", depth: 1.3, delay: 1.0 },
  { emoji: "🔐", top: "10%", left: "45%", depth: 0.9, delay: 0.2 },
];

function Doodle({
  emoji,
  top,
  left,
  depth,
  delay,
  mx,
  my,
}: {
  emoji: string;
  top: string;
  left: string;
  depth: number;
  delay: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const x = useTransform(mx, (v) => v * depth * -80);
  const y = useTransform(my, (v) => v * depth * -80);

  return (
    <motion.span
      className="pointer-events-none absolute text-5xl"
      style={{ top, left, x, y }}
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {emoji}
    </motion.span>
  );
}

function App() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <main className="text-plum">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {doodles.map((d) => (
          <Doodle key={d.emoji} {...d} mx={sx} my={sy} />
        ))}

        <div className="relative max-w-2xl">
          <motion.div
            className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 rotate-[-6deg] bg-mint/80 px-10 py-1 text-sm font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            hi hi hi
          </motion.div>

          <motion.div
            className="sticker rotate-[-2deg] rounded-[2rem] border-4 border-plum bg-white px-8 py-12 text-center"
            initial={{ scale: 0.7, opacity: 0, rotate: -12 }}
            animate={{ scale: 1, opacity: 1, rotate: -2 }}
            transition={{ type: "spring", bounce: 0.45, duration: 0.9 }}
          >
            <motion.h1
              className="text-6xl font-bold tracking-tight sm:text-7xl"
              whileHover={{ scale: 1.04, rotate: 1 }}
            >
              I'm Meghna
            </motion.h1>

            <p className="mx-auto mt-5 max-w-md text-lg text-plum/80">
              CS student heading into cybersecurity. I like figuring out how
              things break, then making them less scary to look at.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.a
                href="#projects"
                className="sticker-sm rounded-full border-4 border-plum bg-lav px-7 py-3 font-semibold"
                whileHover={{ scale: 1.06, rotate: -3 }}
                whileTap={{ scale: 0.94, x: 4, y: 4, boxShadow: "0px 0px 0 #3D3553" }}
              >
                see my stuff
              </motion.a>
              <motion.a
                href="#contact"
                className="sticker-sm rounded-full border-4 border-plum bg-bubble px-7 py-3 font-semibold"
                whileHover={{ scale: 1.06, rotate: 3 }}
                whileTap={{ scale: 0.94, x: 4, y: 4, boxShadow: "0px 0px 0 #3D3553" }}
              >
                say hi
              </motion.a>
            </div>
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