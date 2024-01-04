import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home"
import RootLayout from "./pages/Root"
import ProfilePage from "./pages/Profile"
import AddEventPage from "./pages/AddEvent"

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "/profile", element: <ProfilePage /> },
				{ path: "/add-event", element: <AddEventPage /> },
				{ path: "/my-events", element: <ProfilePage /> },
			],
		},
	])
	return <RouterProvider router={router}></RouterProvider>
}

export default App
