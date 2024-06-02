import React from 'react'
import { useLoaderData, Link, Navigate } from 'react-router-dom'
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

	if (!data) {
		return <Navigate to='/' />
	}

	const singleDrink = data.drinks[0]

	const ingridients = Object.entries(singleDrink)
		.filter(item => item[0].startsWith('strIngredient') && item[1] !== null)
		.map(item => item[1])

	const {
		strDrink: name,
		strDrinkThumb: image,
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
				<div className='drink-info'>
					<p>
						<span className='drink-data'>name:</span> {name}
					</p>
					<p>
						<span className='drink-data'>category:</span> {category}
					</p>
					<p>
						<span className='drink-data'>info:</span> {info}
					</p>
					<p>
						<span className='drink-data'>glass:</span> {glass}
					</p>
					<p>
						<span className='drink-data'>ingredients:</span>
						{ingridients.map((item, index) => {
							return (
								<span className='ing' key={index}>
									{item}
									{index < ingridients.length - 1 ? ', ' : ''}
								</span>
							)
						})}
					</p>
					<p>
						<span className='drink-data'>instructions:</span> {instructions}
					</p>
				</div>
			</div>
		</Wrapper>
	)
}

export default Cocktail
