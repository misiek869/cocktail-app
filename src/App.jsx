import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
	About,
	Cocktail,
	Error,
	HomeLayout,
	Landing,
	Newsletter,
} from './pages'

import { loader as landingLoader } from './pages/Landing'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: landingLoader,
			},
			{
				path: 'cocktail',
				element: <Cocktail />,
			},
			{
				path: 'newsletter',
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
