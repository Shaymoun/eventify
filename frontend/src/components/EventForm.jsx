import Button from "../ui/Button"

const EventForm = () => {
	return (
		<div className='flex justify-center py-8 sm:w-4/5 sm:mx-auto lg:w-[800px] lg:items-center lg:py-8'>
			<form action='' className='flex flex-col justify-around h-4/5 sm:w-full '>
				<div>
					<label htmlFor='name' className='block py-2 text-xl font-semibold'>
						Event title
					</label>
					<input
						type='text'
						name='title'
						id='name'
						className='w-full rounded border-2  px-2 py-1 lg:px-8 lg:py-4'
						required
					/>
				</div>

				<div>
					<label htmlFor='image' className='block py-2 text-xl font-semibold'>
						Image
					</label>
					<input
						type='text'
						name='image'
						id='image'
						className='w-full rounded border-2  px-2 py-1 lg:px-8 lg:py-4'
						required
					/>
				</div>
				<div>
					<label htmlFor='date' className='block py-2 text-xl font-semibold'>
						Date
					</label>
					<input
						type='date'
						name='date'
						id='date'
						className='w-full rounded border-2 px-2 py-1 lg:px-8 lg:py-4'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='description'
						className='block py-2 text-xl font-semibold'>
						Description
					</label>
					<textarea
						type='text'
						name='description'
						id='description'
						className='resize-y w-full rounded border-2 px-2 py-1 min-h-44 lg:px-8 lg:py-4'
						required
					/>
				</div>

				<Button className='mt-4 lg:w-96 lg:mx-auto lg:text-xl'>
					Add event
				</Button>
			</form>
		</div>
	)
}

export default EventForm
