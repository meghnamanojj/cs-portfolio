type Props = { position?: [number, number, number] };

export function TV({ position = [0, 0, -4.4] }: Props) {
  return (
    <group position={position}>
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[2.4, 0.8, 1]} />
        <meshStandardMaterial color="#E8C9B0" />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow>
        <boxGeometry args={[2.6, 1.6, 0.35]} />
        <meshStandardMaterial color="#3D3553" />
      </mesh>
      <mesh position={[0, 1.5, 0.19]}>
        <planeGeometry args={[2.2, 1.2]} />
        <meshStandardMaterial
          color="#B8F2E6"
          emissive="#B8F2E6"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
}

export function Desk({ position = [-3.6, 0, -2] }: Props) {
  return (
    <group position={position}>
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[1.2, 0.12, 2.6] } />
        <meshStandardMaterial color="#E8C9B0" />
      </mesh>
      {[
        [-0.45, -1.15],
        [0.45, -1.15],
        [-0.45, 1.15],
        [0.45, 1.15],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.6, z]} castShadow>
          <boxGeometry args={[0.12, 1.2, 0.12]} />
          <meshStandardMaterial color="#D9B08C" />
        </mesh>
      ))}
    </group>
  );
}

export function SewingMachine({ position = [-3.6, 1.26, -2.4] }: Props) {
  return (
    <group position={position}>
      <mesh position={[0, 0.1, 0]} castShadow>
        <boxGeometry args={[0.9, 0.2, 0.4]} />
        <meshStandardMaterial color="#C8B6FF" />
      </mesh>
      <mesh position={[-0.28, 0.5, 0]} castShadow>
        <boxGeometry args={[0.24, 0.7, 0.34]} />
        <meshStandardMaterial color="#C8B6FF" />
      </mesh>
      <mesh position={[0.08, 0.78, 0]} castShadow>
        <boxGeometry args={[0.78, 0.22, 0.32]} />
        <meshStandardMaterial color="#C8B6FF" />
      </mesh>
      <mesh position={[0.36, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.34, 12]} />
        <meshStandardMaterial color="#3D3553" />
      </mesh>
    </group>
  );
}

export function DogBed({ position = [2.6, 0.12, 1.4] }: Props) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.85, 0.24, 24]} />
        <meshStandardMaterial color="#C8B6FF" />
      </mesh>
      <mesh position={[0, 0.13, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 0.06, 24]} />
        <meshStandardMaterial color="#FFD6BA" />
      </mesh>
    </group>
  );
}

export function Shelf({ position = [3.2, 1.8, -4.6] }: Props) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[1.8, 0.1, 0.5]} />
        <meshStandardMaterial color="#E8C9B0" />
      </mesh>
      <mesh position={[-0.4, 0.22, 0]} castShadow>
        <boxGeometry args={[0.16, 0.34, 0.3]} />
        <meshStandardMaterial color="#FFB8D0" />
      </mesh>
      <mesh position={[-0.2, 0.2, 0]} castShadow>
        <boxGeometry args={[0.14, 0.3, 0.3]} />
        <meshStandardMaterial color="#B8F2E6" />
      </mesh>
      <mesh position={[0.45, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.3, 20]} />
        <meshStandardMaterial color="#FFF8F0" />
      </mesh>
    </group>
  );
}