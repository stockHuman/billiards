import React from 'react'

export default function Cue({ setRef = {}, cueRef = {}, position = [ 0, 0, 0 ] }) {
	return (
		<mesh ref={setRef} cueBallRef={cueRef} speed={0.6} position={position} castShadow>
			<cylinderGeometry attach="geometry" args={[ 0.1, 0.15, 12, 32, 32 ]} />
			<meshPhongMaterial attach="material" color={0xffffff} />
		</mesh>
	)
}
