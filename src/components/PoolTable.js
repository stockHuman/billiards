import React, { useMemo } from 'react'
import { usePlane } from 'use-cannon'
import { useLoader } from 'react-three-fiber'
import {
	TextureLoader,
	RepeatWrapping,
	Shape,
	ExtrudeGeometry,
	BoxGeometry,
	MeshStandardMaterial,
	CylinderGeometry,
	MeshBasicMaterial,
} from 'three'

import playAreaTextureURL from '../assets/textures/cloth.jpg'
import edgeTextureUrl from '../assets/textures/hardwood_floor.jpg'

function Floor({ ...props }) {
	const [ ref ] = usePlane(() => ({ ...props }))
	const [ tex ] = useLoader(TextureLoader, [playAreaTextureURL])

	tex.wrapS = RepeatWrapping
	tex.wrapT = RepeatWrapping
	tex.offset.set(0, 0)
	tex.repeat.set(3, 6)

	return (
		<mesh ref={ref} receiveShadow>
			<boxBufferGeometry attach="geometry" args={props.args} />
			<meshStandardMaterial
					attach="material"
					color={0x42a8ff}
					roughness={0.4}
					metalness={0}
					bumpScale={1}
					map={tex}
				/>
		</mesh>
	)
}

function PoolTable() {
	const pocketPositions = [
		[ -12, 24, 0 ],
		[ 12, 24, 0 ],
		[ -12.5, 0, 0 ],
		[ 12.5, 0, 0 ],
		[ -12, -24, 0 ],
		[ 12, -24, 0 ],
	]
	const edgeSidePositions = [ [ -12.5, 12, 0.7 ], [ 12.5, 12, 0.7 ], [ -12.5, -12, 0.7 ], [ 12.5, -12, 0.7 ] ]
	const edgeTopPositions = [ [ 0, 24.5, 0.7 ], [ 0, -24.5, 0.7 ] ]
	const clothSidePositions = [ [ -12, 1, 0.2 ], [ 12, 1, 1.2 ], [ -12, -23, 0.2 ], [ 12, -23, 1.2 ] ]
	const clothTopPositions = [ [ -11, 24, 0.2 ], [ 11, -24, 0.2 ] ]

	const playAreaTexture = useMemo(() => new TextureLoader().load(playAreaTextureURL), [])

	playAreaTexture.wrapS = RepeatWrapping
	playAreaTexture.wrapT = RepeatWrapping
	playAreaTexture.offset.set(0, 0)
	playAreaTexture.repeat.set(3, 6)

	const playAreaMaterial = new MeshStandardMaterial({
		map: playAreaTexture,
		color: 0x42a8ff,
		roughness: 0.6,
		metalness: 0,
		bumpScale: 1,
	})

	const edgesTexture = useMemo(() => new TextureLoader().load(edgeTextureUrl), [])
	const edgeSideGeometry = new BoxGeometry(1, 22, 1)
	const edgeTopGeometry = new BoxGeometry(22, 1, 1)
	const edgeMaterial = new MeshStandardMaterial({ map: edgesTexture })

	const shape = new Shape()
	shape.moveTo(0, 0)
	shape.lineTo(0, 22)
	shape.lineTo(0.5, 21.2)
	shape.lineTo(0.5, 0.8)
	shape.lineTo(0, 0)

	const extrudeSettings = { steps: 1, depth: 1, bevelEnabled: false }
	const clothSideGeometry = new ExtrudeGeometry(shape, extrudeSettings)
	const pocketGeometry = new CylinderGeometry(1, 1, 1.4, 20)
	const pocketMaterial = new MeshBasicMaterial({ color: 0x000000 })

	return (
		<object3D position={[0,0,-1]}>
			<Floor args={[ 24, 48, 1 ]} position={[0,0,0]}/>
			{edgeSidePositions.map((pos, i) => (
				<mesh key={i} args={[ edgeSideGeometry, edgeMaterial ]} position={pos} />
			))}
			{edgeTopPositions.map((pos, i) => <mesh key={i} args={[ edgeTopGeometry, edgeMaterial ]} position={pos} />)}
			{clothSidePositions.map((pos, i) => (
				<mesh
					key={i}
					args={[ clothSideGeometry, playAreaMaterial ]}
					position={pos}
					rotation={i === 1 || i === 3 ? [ 0, 180 * Math.PI / 180, 0 ] : [ 0, 0, 0 ]}
				/>
			))}
			{clothTopPositions.map((pos, i) => (
				<mesh
					key={i}
					args={[ clothSideGeometry, playAreaMaterial ]}
					position={pos}
					rotation={i === 0 ? [ 0, 0, -90 * Math.PI / 180, 0 ] : [ 0, 0, 90 * Math.PI / 180, 0 ]}
				/>
			))}
			{pocketPositions.map((pos, i) => (
				<mesh key={i} args={[ pocketGeometry, pocketMaterial ]} position={pos} rotation={[ 1.5708, 0, 0 ]} />
			))}
		</object3D>
	)
}

export default PoolTable
