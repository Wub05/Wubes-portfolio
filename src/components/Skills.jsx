// SkillsSection.jsx

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { TextureLoader } from "three";
import { IMAGES } from "../assets/images";

// 🟢 Floating skill icon as 3D object
const SkillSphere = ({
  texture,
  label,
  isPaused,
  gridPosition,
  freePosition,
}) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Offset values for motion
  const offset = useRef({
    xOff: Math.random() * 1000,
    yOff: Math.random() * 1000,
    zOff: Math.random() * 1000,
    speed: 0.2 + Math.random() * 0.3,
  });

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      if (isPaused) {
        groupRef.current.position.set(...gridPosition);
        meshRef.current.rotation.set(0, 0, 0);
      } else {
        const { xOff, yOff, zOff, speed } = offset.current;
        const tf = t * speed;
        groupRef.current.position.x = freePosition[0] + Math.sin(tf + xOff) * 5;
        groupRef.current.position.y = freePosition[1] + Math.cos(tf + yOff) * 4;
        groupRef.current.position.z = freePosition[2] + Math.sin(tf + zOff) * 6;
      }

      // Make the icon face the camera at all times
      groupRef.current.lookAt(camera.position);
    }
  });

  return (
    <group ref={groupRef} position={freePosition}>
      <mesh
        ref={meshRef}
        scale={hovered ? [2.2, 2.2, 2.2] : [1.8, 1.8, 1.8]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <planeGeometry args={[2.5, 2.5]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>

      <Html distanceFactor={10} position={[0, -2.5, 0]} transform occlude>
        <p
          style={{ fontSize: "30px" }}
          className="text-white font-bold text-center bg-black/60 px-4 py-1 rounded-lg shadow-md pointer-events-none"
        >
          {label}
        </p>
      </Html>
    </group>
  );
};

// 🔵 Main Skills Section
const SkillsSection = ({ id }) => {
  const baseSkills = [
    { name: "AI Agents" },
    { name: "Bootstrap" },
    { name: "CSS3" },
    { name: "Express JS" },
    { name: "HTML5" },
    { name: "JavaScript" },
    { name: "jQuery" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "Next JS" },
    { name: "Node.js" },
    { name: "React JS" },
    { name: "React Native" },
    { name: "TailwindCSS" },
    { name: "TypeScript" },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [skillData, setSkillData] = useState([]);
  const textures = useLoader(TextureLoader, IMAGES);

  useEffect(() => {
    const columns = 4;
    const spacing = 12;

    const gridPositions = baseSkills.map((_, i) => {
      const row = Math.floor(i / columns);
      const col = i % columns;
      return [
        (col - (columns - 1) / 2) * spacing,
        ((Math.ceil(baseSkills.length / columns) - 1) / 2 - row) * spacing,
        0,
      ];
    });

    const initialData = baseSkills.map((skill, idx) => ({
      ...skill,
      texture: textures[idx],
      gridPosition: gridPositions[idx],
      freePosition: [
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
      ],
    }));

    setSkillData(initialData);
  }, [textures]);

  const handleCanvasClick = () => {
    if (isPaused) return;
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 60000);
  };

  return (
    <section id={id} className="py-24 text-white text-center relative z-10">
      <h2 className="text-5xl font-extrabold text-emerald-400 mb-16">Skills</h2>

      <div className="w-full h-[700px]">
        <Canvas
          camera={{ position: [0, 0, 50], fov: 50 }}
          shadows
          onClick={handleCanvasClick}
        >
          {/* Scene Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* Mouse control (rotating view) */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />

          {/* Render floating skills */}
          {skillData.map((skill) => (
            <SkillSphere
              key={skill.name}
              texture={skill.texture}
              label={skill.name}
              isPaused={isPaused}
              gridPosition={skill.gridPosition}
              freePosition={skill.freePosition}
            />
          ))}
        </Canvas>
      </div>
    </section>
  );
};

export default SkillsSection;
