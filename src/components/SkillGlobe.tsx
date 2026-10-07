import { skill } from "@/internacionalization/skills";
import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Group } from "three";
import * as THREE from "three";

const SKILLS = skill()

function Globe() {
  const globeRef = useRef<Group>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.35, 1), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);
  const vertices = useMemo(() => {
    const positions = geometry.getAttribute("position");
    const unique = new Map<string, THREE.Vector3>();

    for (let index = 0; index < positions.count; index += 1) {
      const vertex = new THREE.Vector3().fromBufferAttribute(positions, index);
      unique.set(`${vertex.x.toFixed(2)}-${vertex.y.toFixed(2)}-${vertex.z.toFixed(2)}`, vertex);
    }

    return Array.from(unique.values()).slice(0, SKILLS.length);
  }, [geometry]);

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (globeRef.current && !activeSkill) globeRef.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={globeRef} rotation={[0.2, -0.35, 0.05]}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#0ab8e6" transparent opacity={0.5} />
      </lineSegments>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#06162e"
          emissive="#071f3f"
          emissiveIntensity={0.32}
          roughness={0.32}
          metalness={0.62}
          transparent
          opacity={0.72}
        />
      </mesh>

      {vertices.map((position, index) => {
        const skill = SKILLS[index] ?? `Skill ${index + 1}`;
        const isActive = activeSkill === skill;
        return (
          <group key={skill} position={position}>
            <mesh
              scale={isActive ? 1.65 : 1}
              onPointerEnter={(event) => {
                event.stopPropagation();
                setActiveSkill(skill);
                document.body.style.cursor = "crosshair";
              }}
              onPointerLeave={() => {
                setActiveSkill(null);
                document.body.style.cursor = "default";
              }}
            >
              <sphereGeometry args={[0.075, 12, 12]} />
              <meshBasicMaterial color={isActive ? "#93e9ff" : "#17c7f4"} />
            </mesh>
            {isActive && (
              <Html center distanceFactor={7} zIndexRange={[30, 0]}>
                <div className="skill-tooltip">{skill}</div>
              </Html>
            )}
          </group>
        );
      })}
    </group>
  );
}

export function SkillGlobe() {
  return (
    <div className="h-[420px] w-full md:h-[560px]" aria-label="Globo 3D interativo de tecnologias">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.4, 7], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} color="#4d9cff" />
        <pointLight position={[4, 3, 5]} intensity={18} color="#35d9ff" />
        <pointLight position={[-4, -2, -3]} intensity={12} color="#1452a4" />
        <Globe />
        <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.45} />
      </Canvas>
    </div>
  );
}