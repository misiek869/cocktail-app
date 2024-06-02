import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
	About,
	Cocktail,
	Error,
	HomeLayout,
	Landing,
	Newsletter,
	SinglePageError,
} from './pages'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/Newsletter'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader,
			},
			{
				path: 'cocktail/:id',
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader,
				element: <Cocktail />,
			},
			{
				path: 'newsletter',
				action: newsletterAction,
				element: <Newsletter />,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router}></RouterProvider>
}

export default App
