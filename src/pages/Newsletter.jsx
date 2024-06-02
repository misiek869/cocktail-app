import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
	const formData = await request.formData()
	const data = Object.fromEntries(formData)

	try {
		const response = await axios.post(newsletterUrl, data)
		console.log(response)
		toast.success('success, check your email')
		return redirect('/')
	} catch (error) {
		console.log(error)
		toast.error(error?.response?.data?.msg)
		return error
	}
}

const Newsletter = () => {
	const navigation = useNavigation()
	const isSubmitting = navigation.state === 'submitting'

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
					required
					type='text'
					name='name'
					id='name'
				/>
			</div>
			{/* last name */}
			<div className='form-row'>
				<label className='form-label' htmlFor='lastName'>
					Last name
				</label>
				<input
					className='form-input'
					required
					type='text'
					name='lastName'
					id='lastName'
				/>
			</div>
			{/* email */}
			<div className='form-row'>
				<label className='form-label' htmlFor='email'>
					Email
				</label>
				<input
					className='form-input'
					required
					type='email'
					name='email'
					id='email'
				/>
			</div>
			<button
				className='btn'
				type='submit'
				style={{ marginTop: '0.25rem' }}
				disabled={isSubmitting}>
				{isSubmitting ? 'sumitting' : 'submit'}
			</button>
		</Form>
	)
}

export default Newsletter
