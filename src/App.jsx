import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home"
import RootLayout from "./pages/Root"
import ProfilePage from "./pages/Profile"

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "/profile", element: <ProfilePage /> },
			],
		},
	])
	return <RouterProvider router={router}></RouterProvider>
}

export default App
