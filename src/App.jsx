import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <h2>home page</h2>,
	},
	{
		path: 'about',
		element: <h3>about:)</h3>,
	},
])

function App() {
	return <RouterProvider router={router}></RouterProvider>
}

export default App
