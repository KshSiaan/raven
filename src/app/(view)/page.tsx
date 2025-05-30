"use client";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>loading..</>;

  return (
    <div className="h-dvh w-dvw !py-12">
      <div
        className={`h-full w-full relative ${
          resolvedTheme === "light" ? "bg-zinc-50" : "bg-background"
        }`}
      >
        <Canvas camera={{ position: [0, 0, 0], fov: 35 }}>
          <mesh rotation={[-0.5, 0.5, 0]} position={[-3, -2, -5]}>
            <sphereGeometry args={[2.5, 24, 24]} />
            <meshBasicMaterial color="purple" wireframe />
          </mesh>
        </Canvas>
        <div className="absolute h-full w-full flex justify-center items-center top-0 left-0 overflow-hidden">
          <div className="absolute top-12 h-12 w-full -skew-4 bg-purple-300"></div>
          <div className="group size-[200px] hover:scale-105 transition-transform bg-zinc-200 rounded-full relative overflow-visible z-0">
            <Image
              src="/stuffs/black-a.svg"
              height={240}
              width={240}
              alt="futuristic-a"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 !size-[240px] z-10 pointer-events-none transition-all group-hover:rotate-12"
            />
            <Image
              src="/stuffs/black-b.svg"
              height={240}
              width={240}
              alt="futuristic-b"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 !size-[240px] z-10 pointer-events-none transition-all group-hover:-rotate-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
