import { useLoaderData } from "react-router-dom"
import EventsList from "../components/EventsList"

const MyEventsPage = () => {
	const data = useLoaderData()
	const myEvents = data.events
	return (
		<>
			<EventsList events={myEvents} />
		</>
	)
}

export default MyEventsPage
