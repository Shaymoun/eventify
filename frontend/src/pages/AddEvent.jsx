import EventForm from "../components/EventForm"
import Button from "../ui/Button"

const AddEventPage = () => {
	return <EventForm />
}

export default AddEventPage

export const action = async () => {
	const response = await fetch("http://localhost:8080/events", {
		method: "POST",
		body: {},
	})
}
