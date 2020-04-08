import React, { useRef } from 'react'
import { extend, useThree, useFrame } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

function Controls(props) {
	const ref = useRef()
	const { camera, gl } = useThree()
	camera.fov = 45
	camera.aspect = window.innerWidth / window.innerHeight
	camera.near = 0.1
	camera.far = 1000

	camera.up.set(0, 0, 1)
	camera.position.set(-5, 7, 5)

	useFrame(() => ref.current.update())

	return <orbitControls ref={ref} args={[ camera, gl.domElement ]} {...props} />
}

export default Controls
