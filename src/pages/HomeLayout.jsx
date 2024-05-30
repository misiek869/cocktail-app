import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
	return (
		<div>
			<h1>Homelayout</h1>
			<Outlet />
		</div>
	)
}

export default HomeLayout
