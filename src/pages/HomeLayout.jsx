import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
	const navigation = useNavigation()
	const isPageLoading = navigation.state === 'loading'

	const someValue = 'some value'

	return (
		<>
			<Navbar />
			<section className='page'>
				{isPageLoading ? (
					<div className='loading'></div>
				) : (
					<Outlet context={{ someValue }} />
				)}
			</section>
		</>
	)
}

export default HomeLayout
