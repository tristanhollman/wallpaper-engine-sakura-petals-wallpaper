import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Background } from "./Background";
import { Camera } from "./Camera";
import { FlyingPetals } from "./FlyingPetals";

export default function App() {
  return (
    <div className="main">
      <Canvas
        shadows
        camera={{ position: [0, 2, 10] }}
        className="backgroundCanvas"
      >
        <Suspense>
          <Background />
          <Camera />
          <FlyingPetals />
        </Suspense>
      </Canvas>
    </div>
  );
}
