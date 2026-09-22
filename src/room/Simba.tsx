import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { Group } from "three";

const SPEED = 2.6;
const BOUNDS = 4.2;

export default function Simba() {
  const ref = useRef<Group>(null);
  const keys = useRef<Record<string, boolean>>({});
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.startsWith("Arrow")) e.preventDefault();
      keys.current[e.key] = true;
    };
    const up = (e: KeyboardEvent) => {
      keys.current[e.key] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useFrame((state, delta) => {
    const g = ref.current;
    if (!g) return;

    let dx = 0;
    let dz = 0;
    if (keys.current.ArrowUp) dz -= 1;
    if (keys.current.ArrowDown) dz += 1;
    if (keys.current.ArrowLeft) dx -= 1;
    if (keys.current.ArrowRight) dx += 1;

    const isMoving = dx !== 0 || dz !== 0;
    if (isMoving !== moving) setMoving(isMoving);

    if (isMoving) {
      const len = Math.hypot(dx, dz);
      g.position.x = Math.max(
        -BOUNDS,
        Math.min(BOUNDS, g.position.x + (dx / len) * SPEED * delta),
      );
      g.position.z = Math.max(
        -BOUNDS,
        Math.min(BOUNDS, g.position.z + (dz / len) * SPEED * delta),
      );

      const want = Math.atan2(dx, dz);
      let diff = want - g.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      g.rotation.y += diff * 0.2;

      g.position.y = Math.abs(Math.sin(state.clock.elapsedTime * 12)) * 0.09;
    } else {
      g.position.y += (0 - g.position.y) * 0.2;
    }
  });

  const fur = "#F0C48A";
  const furDark = "#D89A5A";

  return (
    <group ref={ref} position={[1.6, 0, 1.6]} scale={0.85}>
      <mesh position={[0, 0.34, 0]} castShadow>
        <sphereGeometry args={[0.3, 20, 20]} />
        <meshStandardMaterial color={fur} />
      </mesh>

      <mesh position={[0, 0.5, 0.26]} castShadow>
        <sphereGeometry args={[0.22, 20, 20]} />
        <meshStandardMaterial color={fur} />
      </mesh>

      <mesh position={[0, 0.47, 0.44]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={furDark} />
      </mesh>
      <mesh position={[0, 0.48, 0.53]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshStandardMaterial color="#3D3553" />
      </mesh>

      <mesh position={[-0.08, 0.55, 0.45]}>
        <sphereGeometry args={[0.032, 12, 12]} />
        <meshStandardMaterial color="#3D3553" />
      </mesh>
      <mesh position={[0.08, 0.55, 0.45]}>
        <sphereGeometry args={[0.032, 12, 12]} />
        <meshStandardMaterial color="#3D3553" />
      </mesh>

      {[-1, 1].map((side) => (
        <mesh
          key={side}
          position={[side * 0.15, 0.66, 0.2]}
          rotation={[0.2, 0, side * 0.3]}
          castShadow
        >
          <coneGeometry args={[0.09, 0.18, 12]} />
          <meshStandardMaterial color={furDark} />
        </mesh>
      ))}

      <mesh position={[0, 0.42, -0.3]} rotation={[0.6, 0, 0]} castShadow>
        <sphereGeometry args={[0.17, 16, 16]} />
        <meshStandardMaterial color={furDark} />
      </mesh>

      {[
        [-0.15, 0.18],
        [0.15, 0.18],
        [-0.15, -0.14],
        [0.15, -0.14],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.09, z]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.18, 10]} />
          <meshStandardMaterial color={fur} />
        </mesh>
      ))}
    </group>
  );
}