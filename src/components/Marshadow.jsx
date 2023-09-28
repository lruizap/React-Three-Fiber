import { Suspense, useEffect, useRef } from 'react';
import { useGLTF, useAnimations, Preload } from '@react-three/drei';

const Marshadow = ({ position }) => {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/marshadow/source/model.gltf');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
    return () => actions[names[0]].fadeOut(0.5)
  }, [actions]);

  return (
    <Suspense>
      <mesh position={position} rotation={[0, -Math.PI / 2, 0]}>
        <group ref={group}>
          <primitive object={scene} scale={0.3} />
          <Preload all />
        </group>
      </mesh>
    </Suspense>
  );
};

export default Marshadow;