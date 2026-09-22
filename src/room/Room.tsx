import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Walls() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
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

function Rug() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0.5]}>
      <circleGeometry args={[2.4, 40]} />
      <meshStandardMaterial color="#B8F2E6" />
    </mesh>
  );
}

export default function Room() {
  return (
    <div className="h-screen w-screen">
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
        <Rug />

        <OrbitControls
          target={[0, 1.5, 0]}
          maxPolarAngle={Math.PI / 2.1}
          minDistance={4}
          maxDistance={14}
        />
      </Canvas>
    </div>
  );
}