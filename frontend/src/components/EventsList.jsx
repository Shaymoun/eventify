import Event from "./Event"

const EventsList = ({ events }) => {
	return (
		<ul>
			{events.map(event => (
				<Event
					key={event.title}
					id={event.id}
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
