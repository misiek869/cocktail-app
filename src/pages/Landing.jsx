import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'

const cocktailSearchUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchDrinksQery = searchTerm => {
	return {
		queryKey: ['search', searchTerm || 'all'],
		queryFn: async () => {
			const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
			return response.data.drinks
		},
	}
}

export const loader =
	queryClient =>
	async ({ request }) => {
		const url = new URL(request.url)
		const searchTerm = url.searchParams.get('search')
		await queryClient.ensureQueryData(searchDrinksQery(searchTerm))
		return { searchTerm }
	}

const Landing = () => {
	const { searchTerm } = useLoaderData()
	const { data: drinks } = useQuery(searchDrinksQery(searchTerm))
	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} />
		</>
	)
}

export default Landing
