import { useLoaderData } from "react-router-dom"
import EventsList from "../components/EventsList"
import Button from "../ui/Button"
import HomeHeader from "../components/HomeHeader"
import { useEffect, useState } from "react"

const HomePage = () => {
	const data = useLoaderData()
	const events = data
	// const [homeEvents, setHomeEvents] = useState([])

	// useEffect(() => {
	// 	setHomeEvents(events)
	// },[])

	if (data.isError) {
		return (
			<HomeHeader>
				<section>
					<h3 className='text-2xl font-semibold mt-6 px-4'>Upcoming events:</h3>
					<p className='text-xl text-center pt-8'>{data.message}</p>
				</section>
			</HomeHeader>
		)
	}

	return (
		<>
			<HomeHeader>
				<section>
					<h3 className='text-2xl font-semibold mt-6 px-4'>Upcoming events:</h3>
					<EventsList events={events} />
				</section>
			</HomeHeader>
		</>
	)
}

export default HomePage

export const loader = async () => {
	const response = await fetch("http://localhost:8080/events")
	if (!response.ok) {
		return { isError: true, message: "Could not fetch events." }
	} else {
		const resData = await response.json()
		return resData.events
	}
}
