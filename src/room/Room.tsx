import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useState, useRef } from "react";
import { Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { TV, Desk, SewingMachine, DogBed, Shelf } from "./Furniture";
import { projects } from "../content/projects";

type Spot = {
  id: string;
  label: string;
  camera: [number, number, number];
  target: [number, number, number];
};

const spots: Spot[] = [
  { id: "tv", label: "projects", camera: [0, 1.8, -1.6], target: [0, 1.5, -4.4] },
  { id: "sewing", label: "crafts", camera: [-1.6, 2.2, -2.4], target: [-3.6, 1.9, -2.4] },
  { id: "shelf", label: "skills", camera: [2.6, 2.2, -2.2], target: [3.2, 2, -4.6] },
];

function CameraRig({ spot }: { spot: Spot | null }) {
  const { camera } = useThree();
  const controls = useRef<OrbitControlsImpl>(null);
  const home = useRef(new Vector3(7, 5, 8));
  const homeTarget = useRef(new Vector3(0, 1.5, 0));

  useFrame(() => {
    const goTo = spot ? new Vector3(...spot.camera) : home.current;
    const lookAt = spot ? new Vector3(...spot.target) : homeTarget.current;

    camera.position.lerp(goTo, 0.06);
    if (controls.current) {
      controls.current.target.lerp(lookAt, 0.06);
      controls.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controls}
      enabled={!spot}
      maxPolarAngle={Math.PI / 2.1}
      minDistance={3}
      maxDistance={14}
    />
  );
}

function Hotspot({
  position,
  onClick,
  label,
}: {
  position: [number, number, number];
  onClick: () => void;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.22, 16, 16]} />
      <meshStandardMaterial
        color={hovered ? "#FFB8D0" : "#C8B6FF"}
        emissive={hovered ? "#FFB8D0" : "#C8B6FF"}
        emissiveIntensity={0.6}
      />
      {hovered && (
        <Html center distanceFactor={8}>
          <div className="whitespace-nowrap rounded-full border-2 border-plum bg-white px-3 py-1 text-sm font-semibold text-plum">
            {label}
          </div>
        </Html>
      )}
    </mesh>
  );
}

function Walls() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#FFE8D9" />
      </mesh>
      <mesh position={[0, 3, -5]} receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#EDE6FF" />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-5, 3, 0]} receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#E2D8FA" />
      </mesh>
    </group>
  );
}

function Panel({ spot, onClose }: { spot: Spot; onClose: () => void }) {
  return (
    <div className="pointer-events-auto absolute right-8 top-8 w-80 max-w-[85vw] rounded-[2rem] border-4 border-plum bg-white p-6 shadow-[6px_6px_0_#3D3553]">
      <button
        onClick={onClose}
        className="absolute -right-3 -top-3 h-9 w-9 rounded-full border-4 border-plum bg-bubble font-bold text-plum"
      >
        ×
      </button>
      <h2 className="mb-4 text-2xl font-bold text-plum">{spot.label}</h2>

      {spot.id === "tv" && (
        <ul className="space-y-3">
          {projects.map((p) => (
            <li key={p.title} className="border-b-2 border-plum/10 pb-2">
              <p className="font-semibold text-plum">
                {p.emoji} {p.title}
              </p>
              <p className="text-sm text-plum/70">{p.blurb}</p>
            </li>
          ))}
        </ul>
      )}

      {spot.id === "sewing" && (
        <p className="text-plum/80">
          Craft projects go here. Photos of things you've sewn, what you made
          them from, and what went wrong the first time.
        </p>
      )}

      {spot.id === "shelf" && (
        <p className="text-plum/80">
          Skills go here, as candy in a jar. React, TypeScript, Python, Java,
          and whatever security tools you pick up.
        </p>
      )}
    </div>
  );
}

export default function Room() {
  const [spot, setSpot] = useState<Spot | null>(null);

  return (
    <div className="relative h-screen w-screen">
      <Canvas shadows camera={{ position: [7, 5, 8], fov: 45 }}>
        <color attach="background" args={["#FFF8F0"]} />
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        <Walls />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0.5]}>
          <circleGeometry args={[2.4, 40]} />
          <meshStandardMaterial color="#B8F2E6" />
        </mesh>

        <TV />
        <Desk />
        <SewingMachine />
        <DogBed />
        <Shelf />

        <Hotspot
          position={[0, 2.6, -4.4]}
          label="projects"
          onClick={() => setSpot(spots[0])}
        />
        <Hotspot
          position={[-3.6, 2.4, -2.4]}
          label="crafts"
          onClick={() => setSpot(spots[1])}
        />
        <Hotspot
          position={[3.2, 2.5, -4.6]}
          label="skills"
          onClick={() => setSpot(spots[2])}
        />

        <CameraRig spot={spot} />
      </Canvas>

      {spot && <Panel spot={spot} onClose={() => setSpot(null)} />}

      {!spot && (
        <p className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border-2 border-plum bg-white px-5 py-2 text-sm font-semibold text-plum">
          drag to look around · click a glowing dot
        </p>
      )}
    </div>
  );
}