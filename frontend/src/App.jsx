import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage, { loader as HomeEventsLoader } from "./pages/Home"
import RootLayout from "./pages/Root"
import ProfilePage from "./pages/Profile"
import AddEventPage from "./pages/AddEvent"
import MyEventsPage from "./pages/MyEvents"
import EventDetailPage, {
	loader as EventDetailLoader,
	action as deleteEventAction,
} from "./pages/EventDetail"
import { action as changeEventAction } from "./components/EventForm"
import EditEventPage from "./pages/EditEvent"
import ErrorPage from "./pages/Error"
import SearchResults, { loader as searchedEvents } from "./pages/SearchResults"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import EditProfilePage from "./pages/EditProfilePage"

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <HomePage />,
					loader: HomeEventsLoader,
				},
				{
					path: "search/:id",
					element: <SearchResults />,
					loader: searchedEvents,
				},
				{
					path: "profile",
					element: (
						<PrivateRoute>
							<ProfilePage />
						</PrivateRoute>
					),
				},
				{
					path: "edit-profile",
					element: (
						<PrivateRoute>
							<EditProfilePage />
						</PrivateRoute>
					),
				},
				{
					path: "forgot",
					element: <ForgotPassword />,
				},
				{
					path: "my-events",
					children: [
						{
							index: true,
							element: (
								<PrivateRoute>
									<MyEventsPage />
								</PrivateRoute>
							),
							loader: HomeEventsLoader,
						},
						{
							path: ":eventId",
							id: "event-detail",
							loader: EventDetailLoader,
							children: [
								{
									index: true,
									element: <EventDetailPage />,
									action: deleteEventAction,
								},
								{
									path: "edit",
									element: (
										<PrivateRoute>
											<EditEventPage />
										</PrivateRoute>
									),
									action: changeEventAction,
								},
							],
						},
					],
				},
				{
					path: "add-event",
					element: (
						<PrivateRoute>
							<AddEventPage />
						</PrivateRoute>
					),
					action: changeEventAction,
				},
			],
		},
	])
	return <RouterProvider router={router}></RouterProvider>
}

export default App
