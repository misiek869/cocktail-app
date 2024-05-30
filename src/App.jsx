import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
	About,
	Cocktail,
	Error,
	HomeLayout,
	Landing,
	Newsletter,
} from './pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
	},
	{
		path: 'about',
		element: <About />,
	},
])

function App() {
	return <RouterProvider router={router}></RouterProvider>
}

export default App
