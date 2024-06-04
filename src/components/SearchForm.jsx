import Wrapper from '../assets/wrappers/SearchForm'
import { Form, useNavigation } from 'react-router-dom'

const SearchForm = ({ searchTerm }) => {
	const navigation = useNavigation()
	const isSubmitting = navigation.state === 'submitting'

	return (
		<Wrapper>
			<Form className='form'>
				<input
					className='form-input'
					type='search'
					name='search'
					defaultValue={searchTerm}
				/>
				<button className='btn' type='submit' disabled={isSubmitting}>
					{isSubmitting ? 'Searching...' : 'Search'}
				</button>
			</Form>
		</Wrapper>
	)
}

export default SearchForm
