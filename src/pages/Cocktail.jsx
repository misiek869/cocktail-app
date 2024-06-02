import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'

const singleCocktailUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async ({ params }) => {
	const { id } = params
	const response = await axios.get(`${singleCocktailUrl}${id}`)
	const { data } = response
	return { id, data }
}

const Cocktail = () => {
	const { id, data } = useLoaderData()

	const singleDrink = data.drinks[0]

	const {
		strDrink: name,
		strDrinkThumbnail: image,
		strAlcoholic: info,
		strCategory: category,
		strGlass: glass,
		strInstructions: instructions,
	} = singleDrink

	return (
		<Wrapper>
			<header>
				<Link className='btn' to='/'>
					Back Home
				</Link>
				<h3>{name}</h3>
			</header>
			<div className='drink'>
				<img className='img' src={image} alt={name} />
			</div>
		</Wrapper>
	)
}

export default Cocktail
