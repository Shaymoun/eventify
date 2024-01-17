import { useLoaderData, useParams } from "react-router-dom"

const EventDetailPage = () => {
	const data = useLoaderData()
	const { poster, title, date, host, ongoingPeoples, price } = data.event
	return (
		<>
			<div className='min-h-dvh py-10 rounded-md'>
				<div className='flex flex-col justify-center items-center py-4 px-2 mx-auto bg-white rounded-2xl md:w-4/5 lg:w-96'>
					<div className='p-6'>
						<img
							src={poster}
							alt='Profile picture'
							className='rounded-md h-full'
						/>
					</div>
					<div className='my-8 *:py-2 text-xl text-center'>
						<h2>{title}</h2>
						<p>{date}</p>
						<p>Hosted by: {host}</p>
						<p>On going: {ongoingPeoples}</p>
						<p>Price: {price ? price : "Free"}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default EventDetailPage

export const loader = async ({ request, params }) => {
	const id = params.eventId
	const response = await fetch("http://localhost:8080/events/" + id)

	if (!response.ok) {
		throw json(
			{ message: "Could not fetch details for selected event." },
			{ status: 500 }
		)
	} else {
		return response
	}
}
