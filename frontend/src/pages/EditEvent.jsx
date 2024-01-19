import { useLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"
import Button from "../ui/Button"

const EditEventPage = () => {
	const data = useLoaderData()

	return <EventForm type='edit' event={data.event} />
}

export default EditEventPage
