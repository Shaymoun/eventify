import { useLoaderData } from "react-router-dom"
import EventsList from "../components/EventsList"

const MyEventsPage = () => {
	const data = useLoaderData()
	const myEvents = data.events
	return (
		<div className="p-8">
			<h3 className='text-2xl font-semibold mt-6 px-4'>Your events:</h3>
			<EventsList events={myEvents} />
		</div>
	)
}

export default MyEventsPage
