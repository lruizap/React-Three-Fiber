import { useGLTF, Preload } from '@react-three/drei';
import { Suspense } from 'react';

const Merry = ({ position }) => {
  const merry = useGLTF('/models/one_piece_-going_merry/scene.gltf');
  return (
    <Suspense>
      <mesh position={position}>
        <primitive object={merry.scene} />
        <Preload all />
      </mesh>
    </Suspense>
  );
};

export default Merry;