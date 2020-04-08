import React, { useMemo } from 'react'
import { TextureLoader } from 'three'
import { useSphere } from 'use-cannon'

function PoolBall({ position=[0,0,0], textureURL = '' }) {
	const ballTexture = useMemo(() => new TextureLoader().load(textureURL), [ textureURL ])
	const [ ref ] = useSphere(() => ({
		mass: 1,
		position: position,
		rotation: [ Math.random() * Math.PI, Math.random(), Math.random() ],
		args: 0.5,
	}))

	return (
		<mesh ref={ref} position={position} castShadow>
			<sphereGeometry attach="geometry" args={[ 0.5, 64, 64 ]} />
			<meshStandardMaterial attach="material" color={0xffffff} roughness={0.25} metalness={0} map={ballTexture} />
		</mesh>
	)
}

export default PoolBall
