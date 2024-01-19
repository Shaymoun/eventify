import { useState } from "react"
import Button from "../ui/Button"

const EventForm = ({ event, type }) => {
	const [isEventPaid, setIsEventPaid] = useState(event ? event.price > 0 : false)
	return (
		<div className='flex justify-center pt-2 pb-6 sm:w-4/5 sm:mx-auto lg:w-[800px] lg:items-center lg:py-8'>
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
						defaultValue={event ? event.title : ""}
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
						defaultValue={event ? event.poster : ""}
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
						defaultValue={event ? event.host : ""}
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
						defaultValue={event ? event.ongoingPeoples : ""}
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
								checked={!isEventPaid}
								onChange={() => {
									setIsEventPaid(isPaid => !isPaid)
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
								checked={isEventPaid}
								onChange={() => {
									setIsEventPaid(isPaid => !isPaid)
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
							className={`${
								!isEventPaid ? "hidden" : "block"
							} w-full rounded border-2  px-2 py-1 lg:px-8 lg:py-4 text-lg`}
							required
							defaultValue={event ? event.price : ""}
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
						defaultValue={event ? event.date : ""}
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
						defaultValue={event ? event.description : ""}
					/>
				</div>
				<div className='flex gap-3 ml-auto'>
					<button className='mt-4 px-4 py-3 bg-gray-500 font-semibold text-white rounded-md lg:mx-auto lg:text-xl'>
						Cancel
					</button>
					<Button className='mt-4  lg:mx-auto lg:text-xl'>
						{type === "edit" ? "Save" : "Add event"}
					</Button>
				</div>
			</form>
		</div>
	)
}

export default EventForm
