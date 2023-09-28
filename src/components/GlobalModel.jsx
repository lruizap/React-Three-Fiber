import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useGLTF, Preload } from '@react-three/drei';

const GlobalModel = ({ model, position, rotation, scale }) => {
  const { scene } = useGLTF(model);

  return (
    <Suspense>
      <mesh position={position} rotation={rotation}>
        <primitive object={scene} scale={scale} />
        <Preload all />
      </mesh>
    </Suspense>
  );
};

GlobalModel.propTypes = {
  model: PropTypes.string.isRequired, // Tipo de dato y requerido
  position: PropTypes.arrayOf(PropTypes.number), // Array de números
  rotation: PropTypes.arrayOf(PropTypes.number), // Array de números
  scale: PropTypes.number, // Número
};

GlobalModel.defaultProps = {
  position: [0, 0, 0], // Valor por defecto para position
  rotation: [0, 0, 0], // Valor por defecto para rotation
  scale: 1, // Valor por defecto para scale
};

export default GlobalModel;