const Event = ({ poster, title, date, host, ongoingPeoples, price }) => {
	return (
		<li className='flex  w-full border-b-2'>
			<div className='w-1/4 p-4'>
				<img src={poster} className='h-full w-full ' />
			</div>
			<div className='flex flex-col w-3/4 p-2'>
				<p className='text-lg py-2'>{date}</p>
				<h2 className='text-2xl py-4 font-semibold'>{title}</h2>
				<p className='text-xl py-1'>Hosted by: {host} </p>
				<div className='flex flex-col'>
					<span>{ongoingPeoples} going </span>
					<span>{price > 0 ? price : "Free"}</span>
				</div>
				<div className='ml-auto'>
					<button>Join now</button>
				</div>
			</div>
		</li>
	)
}

export default Event
