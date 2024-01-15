import { useLoaderData } from "react-router-dom"
import EventsList from "../components/EventsList"
import Button from "../ui/Button"
import HomeHeader from "../components/HomeHeader"

const HomePage = () => {
	const data = useLoaderData()

	if (data.isError) {
		return (
			<HomeHeader>
				<section>
					<h3 className='text-2xl font-semibold mt-6 px-4'>Upcoming events:</h3>
					<p className="text-xl text-center pt-8">{data.message}</p>
				</section>
			</HomeHeader>
		)
	}

	const events = data.events
	
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
		return response
	}
}
