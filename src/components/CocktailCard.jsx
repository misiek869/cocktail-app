import React from 'react'
import Wrapper from '../assets/wrappers/CocktailCard'
import { Link, useOutletContext } from 'react-router-dom'

const CocktailCard = ({ image, name, info, id, glass }) => {
	const data = useOutletContext()
	console.log(data)

	return (
		<Wrapper>
			<div className='img-container'>
				<img className='img' src={image} alt={name} />
			</div>
			<div className='footer'>
				<h4>{name}</h4>
				<h5>{glass}</h5>
				<p>{info}</p>
				<Link className='btn' to={`/cocktail/${id}`}>
					details
				</Link>
			</div>
		</Wrapper>
	)
}

export default CocktailCard
