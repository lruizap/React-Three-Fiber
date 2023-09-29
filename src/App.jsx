import ThreeScene from './components/ThreeScene'
import { OrbitControls, Stars } from '@react-three/drei'

// Models

// import Sphere from './components/Sphere'
import Merry from './components/Merry'
import BlueCat from './components/BlueCat'
import Marshadow from './components/Marshadow'

import './App.css'
import GlobalAnimatedModel from './components/GlobalAnimatedModel'


const App = () => {
  return (
    <div className='divCanvas'>
      <ThreeScene >
        <color attach="background" args={['#161c24']} />

        {/* 
          <Sphere color="#00ff00" position={[-0.325, 4.34, -0.18]} />
          <Sphere color="#ff0000" position={[-5, -1, 0]} /> 
        */}

        <Merry position={[0, -2, 0]} />

        <BlueCat position={[-2.6, 0.058, -0.18]} />

        <Marshadow position={[1.7, -0.56, 0.25]} />

        <GlobalAnimatedModel model='/models/pokeball/scene.gltf' position={[6, -1, 0]} rotation={[0, Math.PI / 2, 0]} scale={1} />

        <ambientLight />

        <Stars count={1000} factor={5} />

        <OrbitControls autoRotate autoRotateSpeed={1} />
      </ThreeScene >
    </div >
  )
}

export default App