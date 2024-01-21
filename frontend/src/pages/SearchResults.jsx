import { useLoaderData } from "react-router-dom"
import EventsList from "../components/EventsList"

const SearchResults = () => {
	const data = useLoaderData()
	const events = data.events

	return (
		<>
			{events.length === 0 && <p>No events found.</p>}
			<EventsList events={events} />
		</>
	)
}

export default SearchResults

export const loader = async ({ request, params }) => {
	const phrase = params.id

	const response = await fetch("http://localhost:8080/search/" + phrase)
	if (!response.ok) {
		return { isError: true, message: "Could not fetch events." }
	} else {
		return response
	}
}
