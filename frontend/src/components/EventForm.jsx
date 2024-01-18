import { useState } from "react"
import Button from "../ui/Button"

const EventForm = () => {
	const [isEventFree, setIsEventFree] = useState(true)
	return (
		<div className='flex justify-center py-4 sm:w-4/5 sm:mx-auto lg:w-[800px] lg:items-center lg:py-8'>
			<form
				action=''
				className='flex flex-col justify-around h-4/5 w-full px-4'>
				<div>
					<label htmlFor='name' className='block py-2 text-xl font-semibold'>
						Event title
					</label>
					<input
						type='text'
						name='title'
						id='name'
						className='w-full rounded border-2 text-lg px-2 py-1 lg:px-8 lg:py-4'
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
						className='w-full rounded border-2 text-lg px-2 py-1 lg:px-8 lg:py-4'
						required
					/>
				</div>
				<div>
					<label htmlFor='host' className='block py-2 text-xl font-semibold'>
						Host
					</label>
					<input
						type='text'
						name='host'
						id='host'
						className='w-full rounded border-2 text-lg px-2 py-1 lg:px-8 lg:py-4'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='maxpeoples'
						className='block py-2 text-xl font-semibold'>
						Maximum number of participants
					</label>
					<input
						type='number'
						name='maxpeoples'
						id='maxpeoples'
						min='1'
						className='w-full rounded border-2 text-lg px-2 py-1 lg:px-8 lg:py-4'
						required
					/>
				</div>
				<div>
					<p className='block py-2 text-xl font-semibold'>Price</p>
					<div className='flex items-center gap-4 my-1'>
						<div className='flex gap-1'>
							<input
								type='radio'
								id='free'
								name=''
								checked={isEventFree}
								onChange={() => {
									setIsEventFree(state => !state)
								}}
							/>
							<label htmlFor='free' className='block text-lg py-1'>
								Free
							</label>
						</div>
						<div className='flex gap-1'>
							<input
								type='radio'
								id='paid'
								name=''
								checked={!isEventFree}
								onChange={() => {
									setIsEventFree(state => !state)
								}}
							/>
							<label htmlFor='paid' className='block text-lg '>
								Paid
							</label>
						</div>

						<input
							type='number'
							name='price'
							id='price'
							min='0'
							defaultValue='0'
							className={`${
								isEventFree ? "hidden" : "block"
							} w-full rounded border-2  px-2 py-1 lg:px-8 lg:py-4 text-lg`}
							required
						/>
					</div>
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
						className='resize-y w-full rounded border-2 px-2 py-1 min-h-36 lg:px-8 lg:py-4'
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
