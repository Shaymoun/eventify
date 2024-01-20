import { json, redirect } from "react-router-dom"
import EventForm from "../components/EventForm"
import Button from "../ui/Button"

const AddEventPage = () => {
	return <EventForm method="POST"/>
}

export default AddEventPage

