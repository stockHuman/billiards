import React from 'react'

function Light(props) {
	const { type } = props
	const LightType = type

	return <LightType {...props} />
}

export default Light
