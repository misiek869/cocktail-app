import React from 'react'

const Newsletter = () => {
	return (
		<form className='form'>
			<h4 style={{ textAlign: 'center', marginBottom: '2rem' }}></h4>
			{/* name */}
			<div className='form-row'>
				<label className='form-label' htmlFor='name'>
					Name
				</label>
				<input
					className='form-input'
					type='text'
					name='name'
					id='name'
					defaultValue='john'
				/>
			</div>
			{/* last name */}
			<div className='form-row'>
				<label className='form-label' htmlFor='lastName'>
					Last name
				</label>
				<input
					className='form-input'
					type='text'
					name='lastName'
					id='lastName'
					defaultValue='smith'
				/>
			</div>
			{/* email */}
			<div className='form-row'>
				<label className='form-label' htmlFor='email'>
					Email
				</label>
				<input
					className='form-input'
					type='email'
					name='email'
					id='email'
					defaultValue='smith'
				/>
			</div>
		</form>
	)
}

export default Newsletter
