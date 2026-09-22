import { motion } from "motion/react";
import { projects } from "../content/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        className="mb-12 text-center text-4xl font-black text-plum"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Stuff I've built
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="rounded-3xl bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
            whileHover={{ y: -8, rotate: -1 }}
          >
            <div className="mb-3 text-4xl">{p.emoji}</div>
            <h3 className="text-xl font-bold text-plum">{p.title}</h3>

            {p.status && (
              <span className="mt-2 inline-block rounded-full bg-peach px-3 py-1 text-xs font-bold text-plum">
                {p.status === "building" ? "building now" : "coming soon"}
              </span>
            )}

            <p className="mt-2 text-plum/70">{p.blurb}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-mint px-3 py-1 text-sm font-medium text-plum"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-3 text-sm font-bold">
              {p.live && (
                <a href={p.live} className="rounded-full bg-lav px-4 py-2">
                  Live demo
                </a>
              )}
              {p.code && (
                <a href={p.code} className="rounded-full bg-peach px-4 py-2">
                  Code
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}