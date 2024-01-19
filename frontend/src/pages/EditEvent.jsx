import { useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"
import Button from "../ui/Button"

const EditEventPage = () => {
	const data = useRouteLoaderData("event-detail")

	return <EventForm type='edit' event={data.event} />
}

export default EditEventPage
