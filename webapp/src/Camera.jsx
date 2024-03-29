import { OrbitControls } from "@react-three/drei";

export const Camera = () => {
  return (
    <OrbitControls
      enablePan={false}
      enableRotate={false}
      enableZoom={false}
      target={[0, 0, 0]}
      makeDefault={true}
    />
  );
};
