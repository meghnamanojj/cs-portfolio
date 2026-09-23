import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../content/projects";

const C = {
  ink: "#3D3553",
  mint: "#9FF0DC",
  rug: "#FFDCE8",
  lav: "#CDB8FF",
  cream: "#FFF8F0",
  bubble: "#FFB8D0",
  screen: "#241F33",
};

const ZOOM = 3.2;
const FOCUS_X = 820;
const FOCUS_Y = 300;

const VP_X = 600;
const VP_Y = 300;
const ray = (xTop: number) => VP_X + (xTop - VP_X) * ((800 - VP_Y) / (580 - VP_Y));

export default function Room() {
  const [open, setOpen] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [idx, setIdx] = useState(0);

  const grow = (id: string) => ({
    transform: hover === id ? "scale(1.05)" : "scale(1)",
    transformBox: "fill-box" as const,
    transformOrigin: "center" as const,
    transition: "transform 180ms ease",
    cursor: "pointer",
  });

  const camera = zoomed
    ? `translate(${600 - FOCUS_X * ZOOM}px, ${400 - FOCUS_Y * ZOOM}px) scale(${ZOOM})`
    : "translate(0px, 0px) scale(1)";

  const p = projects[idx];
  const next = () => setIdx((i) => (i + 1) % projects.length);
  const prev = () => setIdx((i) => (i - 1 + projects.length) % projects.length);

  const bulbs: [number, number][] = [
    [80, 78], [180, 82], [300, 45], [400, 18], [520, 40],
    [620, 72], [740, 84], [840, 48], [960, 18], [1080, 44], [1160, 62],
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 p-4"
         style={{ background: C.cream }}>

      <div className="relative w-full max-w-6xl">
        <svg viewBox="0 0 1200 800" className="w-full"
             style={{ borderRadius: 24, border: `6px solid ${C.ink}`,
                      boxShadow: `10px 10px 0 ${C.ink}`, display: "block",
                      overflow: "hidden" }}>

          <defs>
            <linearGradient id="wallG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF3C4" />
              <stop offset="60%" stopColor="#FFEDAC" />
              <stop offset="100%" stopColor="#F8DF97" />
            </linearGradient>
            <pattern id="stripes" width="88" height="10" patternUnits="userSpaceOnUse">
              <rect width="44" height="10" fill="#FFFFFF" opacity="0.28" />
            </pattern>
            <radialGradient id="roomLight" cx="0.5" cy="0.1" r="0.9">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#8A6E3C" stopOpacity="0.16" />
            </radialGradient>

            <linearGradient id="floorG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E8B98F" />
              <stop offset="35%" stopColor="#FFD3A8" />
              <stop offset="100%" stopColor="#FFDFBC" />
            </linearGradient>

            <radialGradient id="rugG" cx="0.42" cy="0.32" r="0.8">
              <stop offset="0%" stopColor="#FFEBF2" />
              <stop offset="100%" stopColor="#FFCFE0" />
            </radialGradient>

            <radialGradient id="glow">
              <stop offset="0%" stopColor="#FFF6C8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFF6C8" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="deskTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F3C9A6" />
              <stop offset="100%" stopColor="#E2AC83" />
            </linearGradient>
            <linearGradient id="deskEdge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C98F67" />
              <stop offset="100%" stopColor="#B87E58" />
            </linearGradient>
            <linearGradient id="legG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D69D74" />
              <stop offset="55%" stopColor="#BE8259" />
              <stop offset="100%" stopColor="#A87049" />
            </linearGradient>

            <linearGradient id="shell" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5B5273" />
              <stop offset="55%" stopColor="#453D5C" />
              <stop offset="100%" stopColor="#332C47" />
            </linearGradient>
            <linearGradient id="glare" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
              <stop offset="42%" stopColor="#FFFFFF" stopOpacity="0.05" />
              <stop offset="43%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="standG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5B5273" />
              <stop offset="50%" stopColor="#3C3452" />
              <stop offset="100%" stopColor="#2C2540" />
            </linearGradient>
            <linearGradient id="keyG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E9DFF3" />
            </linearGradient>
            <linearGradient id="baseG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EADFD2" />
            </linearGradient>

            <linearGradient id="plinth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F0C08F" />
              <stop offset="100%" stopColor="#D2996A" />
            </linearGradient>
            <radialGradient id="vinyl" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#4A4160" />
              <stop offset="100%" stopColor="#221D30" />
            </radialGradient>

            <filter id="stickerEdge" x="-25%" y="-25%" width="150%" height="150%">
              <feMorphology in="SourceAlpha" operator="dilate" radius="7" result="fat" />
              <feFlood floodColor="#FFFFFF" result="white" />
              <feComposite in="white" in2="fat" operator="in" result="edge" />
              <feMerge>
                <feMergeNode in="edge" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g style={{ transform: camera, transformOrigin: "0 0",
                      transition: "transform 700ms cubic-bezier(.4,0,.2,1)" }}>

            {/* wall */}
            <rect x="0" y="0" width="1200" height="580" fill="url(#wallG)" />
            <rect x="0" y="0" width="1200" height="580" fill="url(#stripes)" />
            <rect x="0" y="0" width="1200" height="18" fill="url(#baseG)" />
            <line x1="0" y1="18" x2="1200" y2="18" stroke={C.ink} strokeWidth="4" />

            {/* floor */}
            <rect x="0" y="580" width="1200" height="220" fill="url(#floorG)" />
            {[-260, -120, 20, 160, 300, 440, 580, 720, 860, 1000, 1140, 1280, 1420].map((xt) => (
              <line key={xt} x1={xt} y1="580" x2={ray(xt)} y2="800"
                    stroke="#D99F71" strokeWidth="2.5" opacity="0.55" />
            ))}
            {[598, 622, 656, 704, 768].map((y, i) => (
              <line key={y} x1="0" y1={y} x2="1200" y2={y}
                    stroke="#D99F71" strokeWidth="2" opacity={0.25 + i * 0.07} />
            ))}
            <rect x="0" y="580" width="1200" height="26" fill={C.ink} opacity="0.1" />

            {/* baseboard */}
            <rect x="0" y="552" width="1200" height="30" fill="url(#baseG)" />
            <rect x="0" y="552" width="1200" height="6" fill="#FFFFFF" opacity="0.9" />
            <line x1="0" y1="552" x2="1200" y2="552" stroke={C.ink} strokeWidth="4" />
            <line x1="0" y1="582" x2="1200" y2="582" stroke={C.ink} strokeWidth="4" />

            {/* fairy lights */}
            <path d="M0 40 Q150 110 300 45 Q450 -20 600 50 Q750 115 900 45 Q1050 -15 1200 55"
                  fill="none" stroke={C.ink} strokeWidth="3.5" strokeLinecap="round" />
            {bulbs.map(([x, y], i) => {
              const col = [C.bubble, C.mint, C.lav, "#FFF3B0"][i % 4];
              return (
                <g key={i}>
                  <circle cx={x} cy={y + 18} r="34" fill="url(#glow)" />
                  <line x1={x} y1={y} x2={x} y2={y + 8} stroke={C.ink} strokeWidth="3" />
                  <rect x={x - 5} y={y + 5} width="10" height="7" rx="2"
                        fill="#8D8299" stroke={C.ink} strokeWidth="2" />
                  <circle cx={x} cy={y + 19} r="10" fill={col}
                          stroke={C.ink} strokeWidth="3" />
                  <circle cx={x - 3} cy={y + 16} r="3" fill="#FFFFFF" opacity="0.85" />
                </g>
              );
            })}

            {/* rug */}
            {Array.from({ length: 34 }).map((_, i) => {
              const a = (i / 34) * Math.PI * 2;
              return <line key={i}
                           x1={760 + Math.cos(a) * 300} y1={712 + Math.sin(a) * 76}
                           x2={760 + Math.cos(a) * 318} y2={712 + Math.sin(a) * 81}
                           stroke="#F3B9CE" strokeWidth="3.5" strokeLinecap="round" />;
            })}
            <ellipse cx="760" cy="712" rx="300" ry="76" fill="url(#rugG)"
                     stroke={C.ink} strokeWidth="6" />
            <ellipse cx="760" cy="712" rx="252" ry="61" fill="none"
                     stroke="#FFFFFF" strokeWidth="9" opacity="0.85" />
            <ellipse cx="760" cy="712" rx="196" ry="44" fill="none"
                     stroke="#F7C4D8" strokeWidth="6" />
            <ellipse cx="760" cy="712" rx="140" ry="28" fill="none"
                     stroke="#FFFFFF" strokeWidth="7" opacity="0.7" />
            {Array.from({ length: 26 }).map((_, i) => {
              const a = (i / 26) * Math.PI * 2 + 0.3;
              const r = 0.45 + (i % 3) * 0.17;
              return <line key={i}
                           x1={760 + Math.cos(a) * 300 * r}
                           y1={712 + Math.sin(a) * 76 * r}
                           x2={760 + Math.cos(a) * 300 * r + 9}
                           y2={712 + Math.sin(a) * 76 * r}
                           stroke="#F7C4D8" strokeWidth="2.5" opacity="0.6" />;
            })}

            {/* ── side table + record player: about ── */}
            <g style={grow("about")}
               onMouseEnter={() => !zoomed && setHover("about")}
               onMouseLeave={() => setHover(null)}
               onClick={() => !zoomed && setOpen("about")}>

              <ellipse cx="470" cy="684" rx="110" ry="16" fill={C.ink} opacity="0.13" />

              <path d="M400 596 h20 l-5 82 h-12 Z" fill="url(#legG)"
                    stroke={C.ink} strokeWidth="4" strokeLinejoin="round" />
              <path d="M528 596 h20 l-5 82 h-12 Z" fill="url(#legG)"
                    stroke={C.ink} strokeWidth="4" strokeLinejoin="round" />
              <path d="M372 556 h204 l-20 20 h-164 Z" fill="url(#deskTop)"
                    stroke={C.ink} strokeWidth="5" strokeLinejoin="round" />
              <path d="M392 576 h164 v20 h-164 Z" fill="url(#deskEdge)"
                    stroke={C.ink} strokeWidth="5" strokeLinejoin="round" />

              <path d="M398 486 h150 v-64 h-150 Z" fill="#E7DCF2"
                    stroke={C.ink} strokeWidth="4" opacity="0.9" />
              <path d="M398 422 h150" stroke={C.ink} strokeWidth="4" fill="none" />

              <rect x="392" y="486" width="164" height="72" rx="8"
                    fill="url(#plinth)" stroke={C.ink} strokeWidth="5" />
              <rect x="392" y="486" width="164" height="12" rx="6"
                    fill="#FFFFFF" opacity="0.35" />

              <ellipse cx="452" cy="512" rx="46" ry="16" fill="#9C8FB8"
                       stroke={C.ink} strokeWidth="4" />
              <ellipse cx="452" cy="509" rx="42" ry="14" fill="url(#vinyl)" />
              <ellipse cx="452" cy="509" rx="30" ry="10" fill="none"
                       stroke="#5A5072" strokeWidth="1.5" />
              <ellipse cx="452" cy="509" rx="20" ry="6.5" fill="none"
                       stroke="#5A5072" strokeWidth="1.5" />
              <ellipse cx="452" cy="509" rx="10" ry="3.5" fill={C.bubble} />

              <circle cx="528" cy="500" r="9" fill="#BFB4D4"
                      stroke={C.ink} strokeWidth="3.5" />
              <path d="M528 500 L470 512" stroke={C.ink} strokeWidth="4"
                    strokeLinecap="round" fill="none" />
              <rect x="462" y="508" width="12" height="8" rx="2" fill={C.ink} />

              <circle cx="530" cy="540" r="7" fill={C.mint}
                      stroke={C.ink} strokeWidth="3" />
              <circle cx="408" cy="540" r="7" fill={C.bubble}
                      stroke={C.ink} strokeWidth="3" />

              <ellipse cx="596" cy="640" rx="34" ry="44" fill="url(#vinyl)"
                       stroke={C.ink} strokeWidth="4" />
              <ellipse cx="596" cy="640" rx="11" ry="14" fill={C.lav} />
              <ellipse cx="620" cy="646" rx="32" ry="42" fill="#7A6E96"
                       stroke={C.ink} strokeWidth="4" />
              <ellipse cx="620" cy="646" rx="10" ry="13" fill={C.mint} />

              <g opacity={hover === "about" ? 1 : 0}
                 style={{ transition: "opacity 250ms ease" }}>
                <circle cx="590" cy="452" r="7" fill={C.ink} />
                <path d="M597 452 v-26 l14 5" stroke={C.ink} strokeWidth="3.5"
                      fill="none" strokeLinecap="round" />
                <circle cx="630" cy="418" r="6" fill={C.ink} />
                <path d="M636 418 v-22" stroke={C.ink} strokeWidth="3.5"
                      fill="none" strokeLinecap="round" />
              </g>
            </g>

            {/* ── sewing machine: clickable ── */}
            <g style={grow("sewing")}
               onMouseEnter={() => !zoomed && setHover("sewing")}
               onMouseLeave={() => setHover(null)}
               onClick={() => !zoomed && setOpen("sewing")}>

              <ellipse cx="1095" cy="684" rx="100" ry="15" fill={C.ink} opacity="0.13" />

              <path d="M1040 596 h18 l-5 82 h-11 Z" fill="url(#legG)"
                    stroke={C.ink} strokeWidth="4" strokeLinejoin="round" />
              <path d="M1150 596 h18 l-5 82 h-11 Z" fill="url(#legG)"
                    stroke={C.ink} strokeWidth="4" strokeLinejoin="round" />
              <path d="M1012 556 h176 l-20 20 h-136 Z" fill="url(#deskTop)"
                    stroke={C.ink} strokeWidth="5" strokeLinejoin="round" />
              <path d="M1032 576 h136 v20 h-136 Z" fill="url(#deskEdge)"
                    stroke={C.ink} strokeWidth="5" strokeLinejoin="round" />

              <g transform="rotate(-4 1048 514)">
                <rect x="1008" y="506" width="80" height="17" rx="4" fill={C.bubble}
                      stroke={C.ink} strokeWidth="3.5" />
                <line x1="1016" y1="514" x2="1080" y2="514"
                      stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5 5" />
              </g>

              <rect x="1026" y="520" width="148" height="34" rx="7" fill="#B9F3E2"
                    stroke={C.ink} strokeWidth="5" />
              <rect x="1026" y="520" width="148" height="9" rx="5"
                    fill="#FFFFFF" opacity="0.5" />
              <rect x="1130" y="442" width="44" height="84" fill="#A8EBD8"
                    stroke={C.ink} strokeWidth="5" />
              <rect x="1030" y="438" width="144" height="38" rx="14" fill="#B9F3E2"
                    stroke={C.ink} strokeWidth="5" />
              <rect x="1038" y="443" width="126" height="9" rx="5"
                    fill="#FFFFFF" opacity="0.55" />
              <rect x="1022" y="438" width="36" height="62" rx="12" fill="#A8EBD8"
                    stroke={C.ink} strokeWidth="5" />

              <rect x="1033" y="492" width="16" height="9" rx="3" fill="#BFB4D4"
                    stroke={C.ink} strokeWidth="3" />
              <line x1="1041" y1="500" x2="1041" y2="519"
                    stroke={C.ink} strokeWidth="3.5" strokeLinecap="round" />

              <line x1="1096" y1="438" x2="1096" y2="404"
                    stroke={C.ink} strokeWidth="3.5" strokeLinecap="round" />
              <rect x="1084" y="406" width="24" height="32" rx="5" fill={C.lav}
                    stroke={C.ink} strokeWidth="4" />
              {[412, 418, 424, 430].map((y) => (
                <line key={y} x1="1086" y1={y} x2="1106" y2={y}
                      stroke="#A78BE8" strokeWidth="2" />
              ))}
              <path d="M1096 406 q-40 -18 -55 40 v54" fill="none"
                    stroke={C.lav} strokeWidth="3" strokeLinecap="round" />

              <circle cx="1180" cy="478" r="15" fill="#BFB4D4"
                      stroke={C.ink} strokeWidth="4" />
              <circle cx="1180" cy="478" r="5" fill={C.ink} />
              <circle cx="1148" cy="537" r="7" fill={C.bubble}
                      stroke={C.ink} strokeWidth="3" />
              <circle cx="1120" cy="537" r="7" fill="#FFF3B0"
                      stroke={C.ink} strokeWidth="3" />

              <ellipse cx="1155" cy="566" rx="19" ry="13" fill="#F2A0BC"
                       stroke={C.ink} strokeWidth="4" />
              {[[-10, -6], [4, -9], [12, -2]].map(([dx, dy], i) => (
                <line key={i} x1={1155 + dx} y1={566 + dy}
                      x2={1155 + dx * 1.7} y2={566 + dy * 2.4}
                      stroke={C.ink} strokeWidth="2.5" strokeLinecap="round" />
              ))}

              <g opacity={hover === "sewing" ? 1 : 0}
                 style={{ transition: "opacity 250ms ease" }}>
                <path d="M1000 400 q26 -22 52 0 q26 22 52 0" fill="none"
                      stroke={C.bubble} strokeWidth="4" strokeLinecap="round"
                      strokeDasharray="10 8" />
              </g>
            </g>

            {/* ── desk + monitor: projects ── */}
            <g style={zoomed ? { cursor: "default" } : grow("desk")}
               onMouseEnter={() => !zoomed && setHover("desk")}
               onMouseLeave={() => setHover(null)}
               onClick={() => { if (!zoomed) { setZoomed(true); setHover(null); } }}>

              <ellipse cx="780" cy="694" rx="250" ry="22" fill={C.ink} opacity="0.13" />

              <path d="M572 494 h30 l-6 190 h-20 Z" fill="url(#legG)"
                    stroke={C.ink} strokeWidth="4" strokeLinejoin="round" />
              <path d="M962 494 h30 l-6 190 h-20 Z" fill="url(#legG)"
                    stroke={C.ink} strokeWidth="4" strokeLinejoin="round" />

              <path d="M528 462 h508 l-22 22 h-464 Z" fill="url(#deskTop)"
                    stroke={C.ink} strokeWidth="5" strokeLinejoin="round" />
              <path d="M550 484 h464 v22 h-464 Z" fill="url(#deskEdge)"
                    stroke={C.ink} strokeWidth="5" strokeLinejoin="round" />
              {[478, 472, 468].map((y, i) => (
                <line key={i} x1={560 + i * 30} y1={y} x2={990 - i * 40} y2={y}
                      stroke="#C98F67" strokeWidth="2" opacity="0.5" />
              ))}

              <rect x="640" y="184" width="360" height="242" rx="18"
                    fill="url(#shell)" stroke={C.ink} strokeWidth="5" />
              <rect x="652" y="196" width="336" height="218" rx="12"
                    fill="#1E1A2B" stroke="#6A6088" strokeWidth="2" />
              <rect x="662" y="206" width="316" height="190" rx="7" fill={C.screen} />

              <g style={{ opacity: zoomed ? 0 : 1, transition: "opacity 300ms ease" }}>
                <rect x="680" y="224" width="130" height="74" rx="7" fill={C.mint} />
                <rect x="680" y="224" width="130" height="14" rx="7" fill="#7FD9C4" />
                <rect x="824" y="224" width="136" height="52" rx="7" fill={C.bubble} />
                <rect x="824" y="224" width="136" height="14" rx="7" fill="#F2A0BC" />
                <rect x="824" y="288" width="136" height="88" rx="7" fill={C.lav} />
                <rect x="824" y="288" width="136" height="14" rx="7" fill="#B49CF0" />
                <rect x="680" y="312" width="130" height="64" rx="7" fill="#FFF3B0" />
                <rect x="680" y="312" width="130" height="14" rx="7" fill="#F5E08C" />
              </g>

              <rect x="662" y="206" width="316" height="190" rx="7" fill="url(#glare)" />
              <circle cx="820" cy="412" r="4" fill={C.mint} opacity="0.9" />

              <path d="M800 426 h40 l10 34 h-60 Z" fill="url(#standG)"
                    stroke={C.ink} strokeWidth="4" strokeLinejoin="round" />
              <ellipse cx="820" cy="464" rx="82" ry="12" fill="url(#standG)"
                       stroke={C.ink} strokeWidth="4" />

              <path d="M636 466 h232 l14 26 h-260 Z" fill="url(#keyG)"
                    stroke={C.ink} strokeWidth="4" strokeLinejoin="round" />
              {[0, 1, 2].map((row) => (
                <g key={row}>
                  {Array.from({ length: 11 }).map((_, k) => (
                    <rect key={k} x={650 + k * 20 + row * 3} y={470 + row * 7}
                          width="13" height="4.5" rx="2" fill="#CBBEDD" />
                  ))}
                </g>
              ))}

              <path d="M902 470 q18 0 18 14 t-18 14 t-18 -14 t18 -14Z" fill="url(#keyG)"
                    stroke={C.ink} strokeWidth="4" />
              <line x1="902" y1="472" x2="902" y2="482" stroke="#CBBEDD" strokeWidth="2.5" />
            </g>

            {/* ── game console: contact ── */}
            <g style={grow("contact")}
               onMouseEnter={() => !zoomed && setHover("contact")}
               onMouseLeave={() => setHover(null)}
               onClick={() => !zoomed && setOpen("contact")}>

              <ellipse cx="700" cy="762" rx="100" ry="13" fill={C.ink} opacity="0.12" />

              <ellipse cx="700" cy="748" rx="92" ry="26" fill="#FFE7F0"
                       stroke={C.ink} strokeWidth="4" />

              <path d="M648 698 h104 q16 0 18 16 l4 30 q3 18 -14 20 q-16 2 -22 -14
                       l-6 -16 h-64 l-6 16 q-6 16 -22 14 q-17 -2 -14 -20 l4 -30
                       q2 -16 18 -16 Z"
                    fill={C.lav} stroke={C.ink} strokeWidth="5"
                    strokeLinejoin="round" />
              <path d="M656 702 h88 q8 0 9 7 h-106 q1 -7 9 -7 Z"
                    fill="#FFFFFF" opacity="0.4" />

              <rect x="667.5" y="704" width="9" height="24" rx="3" fill={C.ink} />
              <rect x="660" y="711.5" width="24" height="9" rx="3" fill={C.ink} />

              <circle cx="728" cy="707" r="6.5" fill={C.bubble}
                      stroke={C.ink} strokeWidth="3" />
              <circle cx="738" cy="717" r="6.5" fill={C.mint}
                      stroke={C.ink} strokeWidth="3" />
              <circle cx="718" cy="717" r="6.5" fill="#FFF3B0"
                      stroke={C.ink} strokeWidth="3" />
              <circle cx="728" cy="727" r="6.5" fill="#FFFFFF"
                      stroke={C.ink} strokeWidth="3" />

              <rect x="690" y="710" width="16" height="5" rx="2.5" fill={C.ink} />
              <rect x="690" y="720" width="16" height="5" rx="2.5" fill={C.ink} />

              <path d="M700 700 q-4 -34 -46 -44 q-40 -10 -54 16" fill="none"
                    stroke={C.ink} strokeWidth="4" strokeLinecap="round" />

              <g opacity={hover === "contact" ? 1 : 0}
                 style={{ transition: "opacity 250ms ease" }}>
                <path d="M780 682 q0 -14 14 -14 q8 0 10 8 q2 -8 10 -8 q14 0 14 14
                         q0 16 -24 28 q-24 -12 -24 -28 Z"
                      fill={C.bubble} stroke={C.ink} strokeWidth="3.5"
                      strokeLinejoin="round" />
                <path d="M826 634 q0 -10 10 -10 q6 0 7 6 q1 -6 7 -6 q10 0 10 10
                         q0 11 -17 20 q-17 -9 -17 -20 Z"
                      fill={C.mint} stroke={C.ink} strokeWidth="3"
                      strokeLinejoin="round" />
              </g>
            </g>

            {/* ── Simba ── */}
            <g style={grow("simba")}
               onMouseEnter={() => !zoomed && setHover("simba")}
               onMouseLeave={() => setHover(null)}
               onClick={() => !zoomed && setOpen("simba")}>
              <image href="/img/simba.png" x="0" y="460" width="350" height="350"
                     preserveAspectRatio="xMidYMax meet"
                     filter="url(#stickerEdge)" />
            </g>

            <rect x="0" y="0" width="1200" height="800" fill="url(#roomLight)"
                  pointerEvents="none" />
          </g>
        </svg>

        {/* ── zoomed screen content ── */}
        {zoomed && (
          <div style={{
            position: "absolute", left: "6.5%", right: "6.5%", top: "8%", bottom: "12%",
            borderRadius: 8, padding: "26px 30px", color: C.cream,
            display: "flex", flexDirection: "column",
            font: "400 18px Fredoka, sans-serif",
            opacity: 0, animation: "fadeIn 400ms ease 500ms forwards",
          }}>
            <div style={{ fontSize: 15, opacity: 0.55, marginBottom: 14 }}>
              ~/projects — {idx + 1} of {projects.length}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ font: "600 44px Fredoka, sans-serif", marginBottom: 14 }}>
                {p.emoji} {p.title}
                {p.status && (
                  <span style={{
                    marginLeft: 14, fontSize: 16, padding: "4px 14px",
                    borderRadius: 999, background: C.mint, color: C.ink,
                    verticalAlign: "middle",
                  }}>
                    {p.status}
                  </span>
                )}
              </div>

              <p style={{ fontSize: 21, lineHeight: 1.5, marginBottom: 18, maxWidth: 620 }}>
                {p.blurb}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {p.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: 15, padding: "5px 14px", borderRadius: 999,
                    background: "rgba(255,255,255,0.12)",
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 16 }}>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                     style={{ color: C.mint, fontSize: 18 }}>live →</a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer"
                     style={{ color: C.mint, fontSize: 18 }}>code →</a>
                )}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <button onClick={prev} style={screenBtn}>←</button>
              <button onClick={next} style={screenBtn}>→</button>

              <div style={{ display: "flex", gap: 8, marginLeft: 8 }}>
                {projects.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                          aria-label={`project ${i + 1}`}
                          style={{
                            width: 12, height: 12, borderRadius: 999, padding: 0,
                            border: "none", cursor: "pointer",
                            background: i === idx ? C.mint : "rgba(255,255,255,0.25)",
                          }} />
                ))}
              </div>

              <button onClick={() => setZoomed(false)}
                      style={{ ...screenBtn, marginLeft: "auto", width: "auto",
                               padding: "8px 18px", fontSize: 17 }}>
                ← back to the room
              </button>
            </div>
          </div>
        )}

        {/* ── panels ── */}
        {open && (
          <div className="absolute inset-0 flex items-center justify-center p-6"
               style={{ background: "rgba(61,53,83,0.45)", borderRadius: 24 }}
               onClick={() => setOpen(null)}>
            <div onClick={(e) => e.stopPropagation()}
                 style={{
                   background: C.cream, border: `6px solid ${C.ink}`,
                   boxShadow: `8px 8px 0 ${C.ink}`, borderRadius: 20,
                   padding: 28, maxWidth: 520, maxHeight: "80%", overflowY: "auto",
                   color: C.ink, font: "400 18px Fredoka, sans-serif",
                 }}>

              {open === "simba" && (
                <>
                  <h2 style={{ font: "600 34px Fredoka, sans-serif", marginBottom: 12 }}>
                    simba 🐶
                  </h2>
                  <p style={{ marginBottom: 10 }}>
                    pomeranian. professional loaf. supervises all of my homework and
                    contributes nothing.
                  </p>
                  <p style={{ marginBottom: 18 }}>
                    favourite hobbies: sleeping in doorways, eating things he shouldn't,
                    and being extremely fluffy.
                  </p>
                </>
              )}

              {open === "sewing" && (
                <>
                  <h2 style={{ font: "600 34px Fredoka, sans-serif", marginBottom: 12 }}>
                    things i make by hand 🧵
                  </h2>
                  <p style={{ marginBottom: 12 }}>
                    i sew. mostly clothes i couldn't find anywhere else, sometimes
                    repairs, occasionally something completely unnecessary.
                  </p>
                  <p style={{ marginBottom: 18 }}>
                    it's the same feeling as building software, honestly — take the thing
                    apart, figure out why it's shaped that way, put it back together
                    better.
                  </p>
                </>
              )}

              {open === "contact" && (
                <>
                  <h2 style={{ font: "600 34px Fredoka, sans-serif", marginBottom: 12 }}>
                    player 2 wanted 🎮
                  </h2>
                  <p style={{ marginBottom: 18 }}>
                    internships, projects, ctf teams, or just saying hi — all welcome.
                  </p>
                  <div style={{ display: "grid", gap: 12, marginBottom: 20 }}>
                    {[
                      ["📧 email", "mailto:meghna.manoj005@gmail.com"],
                      ["🐙 github", "https://github.com/meghnamanojj"],
                      ["💼 linkedin", "https://linkedin.com/in/meghna-thaivalappil-manoj-9b8508309"],
                    ].map(([label, href]) => (
                      <a key={label} href={href} target="_blank" rel="noreferrer"
                         style={{
                           display: "block", textDecoration: "none", color: C.ink,
                           background: "#FFFFFF", border: `4px solid ${C.ink}`,
                           boxShadow: `4px 4px 0 ${C.ink}`, borderRadius: 12,
                           padding: "12px 18px",
                           font: "600 19px Fredoka, sans-serif",
                         }}>
                        {label}
                      </a>
                    ))}
                  </div>
                </>
              )}

              {open === "about" && (
                <>
                  <h2 style={{ font: "600 34px Fredoka, sans-serif", marginBottom: 12 }}>
                    about me 🎧
                  </h2>
                  <p style={{ marginBottom: 12 }}>
                    i'm meghna. i'm a cs student heading into cybersecurity, and i find it
                    very fun to figure out how things break.
                  </p>
                  <p style={{ marginBottom: 12 }}>
                    i like building tools that make security feel less intimidating,
                    because "just use a strong password" has never once helped anyone.
                  </p>
                  <p style={{ marginBottom: 18 }}>
                    outside of that, i draw, i sew, i play games, and i have an
                    unreasonable sweet tooth.
                  </p>
                </>
              )}

              <button onClick={() => setOpen(null)}
                      style={{
                        background: C.bubble, border: `4px solid ${C.ink}`,
                        boxShadow: `4px 4px 0 ${C.ink}`, borderRadius: 12,
                        padding: "8px 18px", cursor: "pointer",
                        font: "600 18px Fredoka, sans-serif", color: C.ink,
                      }}>
                close
              </button>
            </div>
          </div>
        )}
      </div>

      <Link to="/" className="sticker-sm" style={{ textDecoration: "none" }}>
        ← back to the simple site
      </Link>

      <style>{`@keyframes fadeIn { to { opacity: 1 } }`}</style>
    </div>
  );
}

const screenBtn: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 12,
  border: "2px solid rgba(255,255,255,0.35)",
  background: "rgba(255,255,255,0.1)",
  color: "#FFF8F0",
  font: "600 20px Fredoka, sans-serif",
  cursor: "pointer",
};