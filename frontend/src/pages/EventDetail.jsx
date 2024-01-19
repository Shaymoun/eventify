import { Link, useParams, useRouteLoaderData } from "react-router-dom"
import Button from "../ui/Button"

const EventDetailPage = () => {
	const data = useRouteLoaderData("event-detail")
	const { id, poster, title, date, host, ongoingPeoples, price, description } =
		data.event
	return (
		<>
			<div className='min-h-dvh py-10 rounded-md'>
				<div className='flex flex-col justify-center items-center py-4 px-2 mx-auto bg-white rounded-2xl md:w-3/5 md:p-8'>
					<div className='p-6'>
						<img
							src={poster}
							alt='Profile picture'
							className='rounded-md h-full'
						/>
					</div>
					<div className='my-8 *:p-2 text-2xl '>
						<h2>{title}</h2>
						<p>{date}</p>
						<p>Hosted by: {host}</p>
						<p>On going: {ongoingPeoples}</p>
						<p>Price: {price ? price : "Free"}</p>

						<p className='text-xl'>{description}</p>
					</div>
					<div className='flex gap-2'>
						<Button>
							<Link to='edit'>Edit</Link>
						</Button>
						<Button>
							<Link>Delete</Link>
						</Button>
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
