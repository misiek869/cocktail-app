import { Form, redirect } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
	const formData = await request.formData()
	const data = Object.fromEntries(formData)
	const response = await axios.post(newsletterUrl, data)
	console.log(response)
	toast.success('success, check your email')
	return redirect('/')
}

const Newsletter = () => {
	return (
		<Form className='form' method='POST'>
			<h4 style={{ textAlign: 'center', marginBottom: '2rem' }}></h4>
			{/* name */}
			<div className='form-row'>
				<label className='form-label' htmlFor='name'>
					Name
				</label>
				<input
					className='form-input'
					// required
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
					// required
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
					// required
					type='email'
					name='email'
					id='email'
					defaultValue='test@test.com'
				/>
			</div>
			<button className='btn' type='submit' style={{ marginTop: '0.25rem' }}>
				Submit
			</button>
		</Form>
	)
}

export default Newsletter
