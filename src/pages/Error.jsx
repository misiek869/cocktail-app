import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Error'
import img from '../assets/not-found.svg'

const Error = () => {
	const error = useRouteError()
	console.log(error.status)

	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={img} alt='not found' />
					<h3>Opps!</h3>
					<p>The page that you are looking for probably does not exist</p>
					<Link to='/'>Back Home</Link>
				</div>
			</Wrapper>
		)
	}

	return (
		<Wrapper>
			<div>
				<h3>Something went wrong...</h3>
			</div>
		</Wrapper>
	)
}

export default Error
