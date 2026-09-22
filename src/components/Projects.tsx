import { motion } from "motion/react";
import { projects } from "../content/projects";

const tilts = ["-2deg", "1.5deg", "-1deg", "2deg"];
const bgs = ["bg-lav", "bg-mint", "bg-peach", "bg-bubble"];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        className="mb-14 text-center text-4xl font-bold text-plum"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        stuff I've built
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="sticker relative rounded-[2rem] border-4 border-plum bg-white p-7"
            style={{ rotate: tilts[i % tilts.length] }}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: tilts[i % tilts.length] }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, type: "spring", bounce: 0.45 }}
            whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
          >
            <div
              className={`absolute -top-4 left-8 ${bgs[i % bgs.length]} rotate-[-5deg] px-8 py-1 text-xs font-semibold opacity-90`}
            >
              {p.status === "building"
                ? "in progress"
                : p.status === "planned"
                  ? "coming soon"
                  : "live"}
            </div>

            <motion.div
              className="mb-3 text-5xl"
              whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              {p.emoji}
            </motion.div>

            <h3 className="text-2xl font-bold text-plum">{p.title}</h3>
            <p className="mt-2 text-plum/70">{p.blurb}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border-2 border-plum bg-cream px-3 py-1 text-sm font-medium text-plum"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3 text-sm font-semibold">
              {p.live && (
                <motion.a
                  href={p.live}
                  className="sticker-sm rounded-full border-4 border-plum bg-lav px-5 py-2"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94, x: 4, y: 4, boxShadow: "0px 0px 0 #3D3553" }}
                >
                  live demo
                </motion.a>
              )}
              {p.code && (
                <motion.a
                  href={p.code}
                  className="sticker-sm rounded-full border-4 border-plum bg-peach px-5 py-2"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94, x: 4, y: 4, boxShadow: "0px 0px 0 #3D3553" }}
                >
                  code
                </motion.a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}