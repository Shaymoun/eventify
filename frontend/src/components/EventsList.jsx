import { useState } from "react"
import Event from "./Event"

const EventsList = ({ events }) => {
	const [eventsPrice, setEventsPrice] = useState("all")

	let filteredEvents

	if (eventsPrice === "all") {
		filteredEvents = events.filter(event => event)
	}

	if (eventsPrice === "free") {
		filteredEvents = events.filter(event => event.price === 0)
	}

	if (eventsPrice === "paid") {
		filteredEvents = events.filter(event => event.price > 0)
	}

	const changePriceEventHandler = e => {
		setEventsPrice(e.target.value)
	}
	return (
		<ul>
			<div className='py-4 mt-8'>
				<label htmlFor='price-select' className='text-lg font-semibold'>
					Price:
				</label>
				<select
					className='p-1 ml-2 rounded'
					id='price-select'
					onChange={changePriceEventHandler}>
					<option value='all'>All</option>
					<option value='free'>Free</option>
					<option value='paid'>Paid</option>
				</select>
			</div>
			{filteredEvents.map(event => (
				<Event
					key={event.title}
					id={event.id}
					title={event.title}
					poster={event.poster}
					date={event.date}
					host={event.host}
					ongoingPeoples={event.ongoingPeoples}
					maxPeoples={event.maxPeoples}
					price={event.price}
				/>
			))}
		</ul>
	)
}

export default EventsList
