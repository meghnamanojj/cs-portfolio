import { Html } from "@react-three/drei";
import { useState } from "react";
import { projects } from "../content/projects";

export default function TVScreen() {
  const [channel, setChannel] = useState(0);
  const [isStatic, setIsStatic] = useState(false);

  const change = (dir: number) => {
    setIsStatic(true);
    setTimeout(() => {
      setChannel((c) => (c + dir + projects.length) % projects.length);
      setIsStatic(false);
    }, 220);
  };

  const p = projects[channel];

  return (
    <Html
      transform
      occlude
      distanceFactor={0.6}
      position={[0, 1.5, -4.16]}
      style={{ fontFamily: "Fredoka, sans-serif" }}
      className="pointer-events-auto"
    >
      <div className="h-[124px] w-[220px] overflow-hidden rounded-md bg-[#0d1117] p-2 text-[#B8F2E6]">
        {isStatic ? (
          <div className="flex h-full items-center justify-center bg-[repeating-linear-gradient(0deg,#222_0px,#444_2px,#111_4px)] text-[10px] tracking-widest text-white/70">
            • • •
          </div>
        ) : (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between text-[8px] uppercase tracking-widest text-[#FFB8D0]">
              <span>ch {channel + 1}</span>
              <span>
                {p.status === "building"
                  ? "in progress"
                  : p.status === "planned"
                    ? "coming soon"
                    : "live"}
              </span>
            </div>

            <div className="mt-1 text-lg leading-none">{p.emoji}</div>
            <p className="text-[11px] font-semibold leading-tight text-white">
              {p.title}
            </p>
            <p className="mt-1 line-clamp-3 text-[8px] leading-snug text-[#B8F2E6]/80">
              {p.blurb}
            </p>

            <div className="mt-auto flex items-center justify-between">
              <button
                onClick={() => change(-1)}
                className="rounded-sm bg-[#C8B6FF] px-1.5 text-[9px] font-bold text-[#0d1117]"
              >
                ◀
              </button>
              <div className="flex gap-1">
                {projects.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 w-2.5 rounded-full ${
                      i === channel ? "bg-[#FFB8D0]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => change(1)}
                className="rounded-sm bg-[#C8B6FF] px-1.5 text-[9px] font-bold text-[#0d1117]"
              >
                ▶
              </button>
            </div>
          </div>
        )}
      </div>
    </Html>
  );
}