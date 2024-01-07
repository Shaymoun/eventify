import Button from "../ui/Button"
import {
	CheckCircleIcon,
	TicketIcon,
	CalendarDaysIcon,
} from "@heroicons/react/24/outline"

const Event = ({ title, poster, date, host, ongoingPeoples, price }) => {
	return (
		<li className='flex w-full justify-between bg-white my-4 p-4 lg:flex-row-reverse lg:justify-around'>
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
					<Button>Join</Button>
				</div>
			</div>

			<div className="hidden sm:flex items-center">
				<img src={poster} className='w-full h-20 rounded-md sm:h-36 lg:h-40' />
			</div>
		</li>
	)
}

export default Event
