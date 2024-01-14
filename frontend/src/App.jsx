import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/Home"
import RootLayout from "./pages/Root"
import ProfilePage from "./pages/Profile"
import AddEventPage from "./pages/AddEvent"
import MyEventsPage from "./pages/MyEvents"
import EventDetailPage from "./pages/EventDetail"
import EditEventPage from "./pages/EditEvent"

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: "profile", element: <ProfilePage /> },
				{
					path: "my-events",
					children: [
						{ index: true, element: <MyEventsPage /> },

						{ path: ":eventId", element: <EventDetailPage /> },
						{ path: ":eventId/edit", element: <EditEventPage /> },
					],
				},
				{ path: "add-event", element: <AddEventPage /> },
			],
		},
	])
	return <RouterProvider router={router}></RouterProvider>
}

export default App
