import React, { Suspense } from 'react'
import { Physics } from 'use-cannon'

import Light from '../components/Light'
import PoolTable from '../components/PoolTable'
import Cue from '../components/Cue'
import PoolBall from '../components/PoolBall'

import Constants from '../utils/Constants'

import zero from '../assets/textures/0.png'
import one from '../assets/textures/1.png'
import two from '../assets/textures/2.png'
import three from '../assets/textures/3.png'
import four from '../assets/textures/4.png'
import five from '../assets/textures/5.png'
import six from '../assets/textures/6.png'
import seven from '../assets/textures/7.png'
import eight from '../assets/textures/8.png'
import nine from '../assets/textures/9.png'
import ten from '../assets/textures/10.png'
import eleven from '../assets/textures/11.png'
import twelve from '../assets/textures/12.png'
import thirteen from '../assets/textures/13.png'
import fourteen from '../assets/textures/14.png'
import fifteen from '../assets/textures/15.png'

function Scene() {

	return (
		<object3D>
			{Constants.pointLightPositions.map((pos, i) => {
				const idx = i
				return (
					<Light
						key={idx}
						type="PointLight"
						color={0xffffff}
						intensity={0.2}
						distance={100}
						position={pos}
						castShadow
					/>
				)
			})}
			<Light type="AmbientLight" color={0xffffff} intensity={0.2} position={[ 0, 0, 0 ]} />
			<Physics gravity={[ 0, 0, -9 ]}>
				<Suspense fallback={null}>
					<PoolTable />
					<PoolBall position={[ 0, -16, 0 ]} textureURL={zero} />
					<PoolBall position={[ -1.01, 15, 0 ]} textureURL={one} />
					<PoolBall position={[ 1.01, 17, 0 ]} textureURL={two} />
					<PoolBall position={[ -0.51, 16, 0 ]} textureURL={three} />
					<PoolBall position={[ -1.01, 17, 0 ]} textureURL={four} />
					<PoolBall position={[ -2.02, 17, 0 ]} textureURL={five} />
					<PoolBall position={[ 1.53, 16, 0 ]} textureURL={six} />
					<PoolBall position={[ 0.51, 14, 0 ]} textureURL={seven} />
					<PoolBall position={[ 0, 15, 0 ]} textureURL={eight} />
					<PoolBall position={[ 0, 13, 0 ]} textureURL={nine} />
					<PoolBall position={[ 0.51, 16, 0 ]} textureURL={ten} />
					<PoolBall position={[ 2.02, 17, 0 ]} textureURL={eleven} />
					<PoolBall position={[ -0.51, 14, 0 ]} textureURL={twelve} />
					<PoolBall position={[ 0, 17, 0 ]} textureURL={thirteen} />
					<PoolBall position={[ -1.53, 16, 0 ]} textureURL={fourteen} />
					<PoolBall position={[ 1.01, 15, 0 ]} textureURL={fifteen} />
					<Cue position={[ 0, 0, 0 ]} />
				</Suspense>
			</Physics>
		</object3D>
	)
}

export default Scene
