import { Suspense, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useGLTF, useAnimations, Preload } from '@react-three/drei';

const GlobalAnimatedModel = ({ model, position, rotation, scale }) => {
  const group = useRef()
  const { scene, animations } = useGLTF(model);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
    return () => actions[names[0]].fadeOut(0.5)
  }, [actions]);

  return (
    <Suspense>
      <mesh position={position} rotation={rotation}>
        <group ref={group}>
          <primitive object={scene} scale={scale} />
          <Preload all />
        </group>
      </mesh>
    </Suspense>
  )
}

GlobalAnimatedModel.propTypes = {
  model: PropTypes.string.isRequired, // Tipo de dato y requerido
  position: PropTypes.arrayOf(PropTypes.number), // Array de números
  rotation: PropTypes.arrayOf(PropTypes.number), // Array de números
  scale: PropTypes.number, // Número
};

GlobalAnimatedModel.defaultProps = {
  position: [0, 0, 0], // Valor por defecto para position
  rotation: [0, 0, 0], // Valor por defecto para rotation
  scale: 1, // Valor por defecto para scale
};

export default GlobalAnimatedModel