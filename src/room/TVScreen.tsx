import { Html } from "@react-three/drei";
import { useState, useEffect } from "react";
import { projects } from "../content/projects";

export default function TVScreen() {
  const [channel, setChannel] = useState(0);
  const [static_, setStatic] = useState(false);

  const change = (dir: number) => {
    setStatic(true);
    setTimeout(() => {
      setChannel((c) => (c + dir + projects.length) % projects.length);
      setStatic(false);
    }, 220);
  };

  useEffect(() => {
    const t = setInterval(() => setStatic((s) => (s ? s : false)), 5000);
    return () => clearInterval(t);
  }, []);

  const p = projects[channel];

  return (
    <Html
      transform
      distanceFactor={2.4}
      position={[0, 1.5, -4.2]}
      className="pointer-events-auto"
    >
      <div className="h-[150px] w-[270px] overflow-hidden rounded-md bg-[#0d1117] p-3 font-[Fredoka] text-[#B8F2E6]">
        {static_ ? (
          <div className="flex h-full items-center justify-center bg-[repeating-linear-gradient(0deg,#222_0px,#444_2px,#111_4px)] text-xs tracking-widest text-white/70">
            • • •
          </div>
        ) : (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-[#FFB8D0]">
              <span>ch {channel + 1}</span>
              <span>
                {p.status === "building"
                  ? "in progress"
                  : p.status === "planned"
                    ? "coming soon"
                    : "live"}
              </span>
            </div>

            <div className="mt-1 text-2xl">{p.emoji}</div>
            <p className="text-[13px] font-semibold leading-tight text-white">
              {p.title}
            </p>
            <p className="mt-1 line-clamp-3 text-[9px] leading-snug text-[#B8F2E6]/80">
              {p.blurb}
            </p>

            <div className="mt-auto flex flex-wrap gap-1">
              {p.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-sm bg-[#C8B6FF]/20 px-1 text-[8px] text-[#C8B6FF]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-between">
              <button
                onClick={() => change(-1)}
                className="rounded-sm bg-[#C8B6FF] px-2 text-[10px] font-bold text-[#0d1117]"
              >
                ◀ prev
              </button>
              <div className="flex gap-1">
                {projects.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 w-3 rounded-full ${i === channel ? "bg-[#FFB8D0]" : "bg-white/20"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => change(1)}
                className="rounded-sm bg-[#C8B6FF] px-2 text-[10px] font-bold text-[#0d1117]"
              >
                next ▶
              </button>
            </div>
          </div>
        )}
      </div>
    </Html>
  );
}