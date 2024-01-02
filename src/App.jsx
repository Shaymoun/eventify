import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home"
import RootLayout from "./pages/Root"

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [{ path: "/", element: <HomePage /> }],
		},
	])
	return <RouterProvider router={router}></RouterProvider>
}

export default App
