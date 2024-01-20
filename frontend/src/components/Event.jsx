import { Link, useLocation } from "react-router-dom"
import Button from "../ui/Button"
import {
	CheckCircleIcon,
	TicketIcon,
	CalendarDaysIcon,
} from "@heroicons/react/24/outline"

const Event = ({ id, title, poster, date, host, ongoingPeoples, price }) => {
	const location = useLocation()
	const path =
		location.pathname.split("/")[1] === "my-events" ? id : "/my-events/" + id
	console.log()
	return (
		<li>
			<Link to={path}>
				<div className='flex w-full justify-between bg-white my-4 p-4 lg:flex-row-reverse lg:justify-around'>
					<div className='flex flex-col w-full sm:w-3/4'>
						<h2 className='text-xl pb-2 font-semibold'>{title}</h2>
						<p className='text-lg py-1'>Hosted by: {host} </p>
						<p className='flex items-center py-2'>
							<CalendarDaysIcon className='inline-block w-6 h-6 mr-1' />
							{date}
						</p>
						<div className='flex justify-between py-1'>
							<div className='flex'>
								<div className='flex items-center'>
									<CheckCircleIcon className='inline-block w-6 h-6 mr-1' />
									<span>{ongoingPeoples} going </span>
								</div>
								<div className='flex items-center ml-2'>
									<TicketIcon className='inline-block w-6 h-6 mr-1' />
									<span>{price > 0 ? price : "Free"}</span>
								</div>
							</div>
						</div>
					</div>

					<div className='hidden sm:flex items-center w-48 h-48'>
						<img
							src={poster}
							className='bg-center bg-no-repeat rounded-md w-full'
						/>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default Event
