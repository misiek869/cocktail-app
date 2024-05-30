import React from 'react'
import { Link } from 'react-router-dom'

const HomeLayout = () => {
	return (
		<div>
			<h1>Homelayout</h1>
			<Link to='/about'>About</Link>
		</div>
	)
}

export default HomeLayout
