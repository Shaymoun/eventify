import Event from "./Event"

const events = [
	{
		title: "MeetJS",
		host: "Simon",
		ongoingPeoples: 30,
		price: 0,
	},
	{
		title: "Piwo",
		host: "Weronika",
		ongoingPeoples: 2,
		price: 0,
	},
	{
		title: "Mecz",
		host: "Wisła",
		ongoingPeoples: 5550,
		price: 20,
	},
]

const EventsList = () => {
  return (
    <ul>{events.map(event => <Event />)}</ul>
  )
}

export default EventsList