import { json, redirect } from "react-router-dom"
import EventForm from "../components/EventForm"
import Button from "../ui/Button"

const AddEventPage = () => {
	return <EventForm method="POST"/>
}

export default AddEventPage

// export const action = async ({ request, params }) => {
// 	const data = await request.formData()

// 	const eventData = {
// 		title: data.get("title"),
// 		poster: data.get("poster"),
// 		date: data.get("date"),
// 		host: data.get("host"),
// 		ongoingPeoples: +data.get("maxpeoples"),
// 		price: +data.get("price"),
// 		description: data.get("description"),
// 	}

// 	const response = await fetch("http://localhost:8080/events", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(eventData),
// 	})

// 	if (!response.ok) {
// 		throw json({ message: "Could not save event." }, { status: 500 })
// 	}
// 	return redirect("/my-events")
// }
