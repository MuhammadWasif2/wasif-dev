import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html} from "@react-three/drei";


// ✅ Fixed: useGLTF instead of useGltf
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf"); // ✅ Fixed typo "scence.gltf"
  return (
    <primitive
      object={earth.scene}
      scale={3.1}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};


    const CanvasLoader = () => (
        <Html center>
          <span style={{ color: "white" }}>Loading...</span>
        </Html>
      );

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
