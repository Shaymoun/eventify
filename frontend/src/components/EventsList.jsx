import Event from "./Event"

const events = [
	{
		title: "MeetJS - dołącz do społeczności wielbicieli JS'a",
		poster: "https://source.unsplash.com/random/300x300",
		date: new Date("2024-01-01").toISOString().split("T")[0],
		host: "Simon",
		ongoingPeoples: 30,
		price: 0,
	},
	{
		title: "Piwo z Benem",
		poster: "https://source.unsplash.com/random/300x300",
		date: new Date("2024-01-01").toISOString().split("T")[0],
		host: "Weronika",
		ongoingPeoples: 2,
		price: 0,
	},
	{
		title: "Mecz Wisła Kraków vs Cracovia Kraków",
		poster: "https://source.unsplash.com/random/300x300",
		date: new Date("2024-01-01").toISOString().split("T")[0],
		host: "Wisła",
		ongoingPeoples: 5550,
		price: 20,
	},
]

const EventsList = () => {
	return (
		<ul>
			{events.map(event => (
				<Event
					key={event.title}
					title={event.title}
					poster={event.poster}
					date={event.date}
					host={event.host}
					ongoingPeoples={event.ongoingPeoples}
					price={event.price}
				/>
			))}
		</ul>
	)
}

export default EventsList
