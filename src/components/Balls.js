import React, { useMemo } from 'react'
import niceColors from 'nice-color-palettes'
import { useSphere } from 'use-cannon'
import { VertexColors, Color } from 'three'

// import tex00 from '../assets/textures/0.png'
// import tex01 from '../assets/textures/1.png'
// import tex02 from '../assets/textures/2.png'
// import tex03 from '../assets/textures/3.png'
// import tex04 from '../assets/textures/4.png'
// import tex05 from '../assets/textures/5.png'
// import tex06 from '../assets/textures/6.png'
// import tex07 from '../assets/textures/7.png'
// import tex08 from '../assets/textures/8.png'
// import tex09 from '../assets/textures/9.png'
// import tex10 from '../assets/textures/10.png'
// import tex11 from '../assets/textures/11.png'
// import tex12 from '../assets/textures/12.png'
// import tex13 from '../assets/textures/13.png'
// import tex14 from '../assets/textures/14.png'
// import tex15 from '../assets/textures/15.png'

export default function InstancedSpheres({ number = 1, positions = [ [ 0, 0, 0 ] ] }) {
	const [ ref ] = useSphere((index) => ({
		mass: 1,
		position: positions[index],
		rotation: [ Math.random() * Math.PI, Math.random(), Math.random() ],
		args: 0.5,
	}))
	const colors = useMemo(
		() => {
			const array = new Float32Array(number * 3)
			const color = new Color()
			for (let i = 0; i < number; i++)
				color.set(niceColors[17][Math.floor(Math.random() * 5)]).convertSRGBToLinear().toArray(array, i * 3)
			return array
		},
		[ number ]
	)

	return (
		<instancedMesh ref={ref} castShadow receiveShadow args={[ null, null, number ]}>
			<sphereBufferGeometry attach="geometry" args={[ 0.5, 32, 32 ]}>
				<instancedBufferAttribute attachObject={[ 'attributes', 'color' ]} args={[ colors, 3 ]} />
			</sphereBufferGeometry>
			<meshPhongMaterial attach="material" vertexColors={VertexColors} />
		</instancedMesh>
	)
}
