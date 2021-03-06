import React from 'react'

import { Canvas } from './GlobalStyles'
import Scene from './views/Scene'
import Controls from './components/Controls'

export default function App() {
	return (
		<Canvas
			shadowMap
			concurrent
			sRGB
			pixelRatio={window.devicePixelRatio}
			gl={{ clearColor: 0x151515 }}>
			<Scene />
			<Controls
				enableRotate
				enablePan
				maxDistance={100}
				minDistance={5}
				minPolarAngle={Math.PI / 6}
				maxPolarAngle={Math.PI / 2}
			/>
		</Canvas>
	)
}
