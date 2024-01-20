import { useState } from "react"
import Button from "../ui/Button"
import { Form, json, redirect, useNavigate } from "react-router-dom"

const EventForm = ({ method, event }) => {
	const [isEventPaid, setIsEventPaid] = useState(
		event ? event.price > 0 : false
	)
	const [maxNumOfPeoples, setMaxNumOfPeoples] = useState({
		isLimit: event ? event.maxPeoples > 0 : false,
		maxAmount: event ? event.maxPeoples : 0,
	})

	const navigate = useNavigate()

	const cancelHandler = () => {
		navigate("..")
	}

	return (
		<div className='flex justify-center pt-2 pb-6 sm:w-4/5 sm:mx-auto lg:w-[800px] lg:items-center lg:py-8'>
			<Form
				method={method}
				className='flex flex-col justify-around h-4/5 w-full px-4'>
				<div>
					<label htmlFor='title' className='block py-2 text-xl font-semibold'>
						Event title
					</label>
					<input
						type='text'
						name='title'
						id='title'
						className='w-full rounded border-2 text-lg px-2 py-1 lg:px-8 lg:py-4'
						required
						defaultValue={event ? event.title : ""}
					/>
				</div>

				<div>
					<label htmlFor='poster' className='block py-2 text-xl font-semibold'>
						Poster
					</label>
					<input
						type='text'
						name='poster'
						id='poster'
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
					<p className='block py-2 text-xl font-semibold'>
						Maximum number of participants
					</p>
					<div className='flex items-center gap-4 my-1'>
						<div className='flex gap-1'>
							<input
								type='radio'
								id='nolimit'
								name=''
								checked={!maxNumOfPeoples.isLimit}
								onChange={() => {
									setMaxNumOfPeoples(state => {
										return { ...state, isLimit: false }
									})
								}}
							/>
							<label htmlFor='free' className='block text-lg py-1'>
								No limit
							</label>
						</div>
						<div className='flex gap-1'>
							<input
								type='radio'
								id='limit'
								name=''
								checked={maxNumOfPeoples.isLimit}
								onChange={() => {
									setMaxNumOfPeoples(state => {
										return { ...state, isLimit: true }
									})
								}}
							/>
							<label htmlFor='paid' className='block text-lg '>
								Limit
							</label>
						</div>

						<input
							type='number'
							name='maxpeoples'
							id='maxpeoples'
							min={event ? event.ongoingPeoples : 0}
							className={`${
								!maxNumOfPeoples.isLimit ? "hidden" : "block"
							} w-20 rounded border-2 px-1 text-lg`}
							required
							onChange={e => {
								setMaxNumOfPeoples(state => {
									return { ...state, maxAmount: e.target.value }
								})
							}}
							defaultValue={event ? event.maxPeoples : 0}
						/>
						<div className='flex text-lg'>
							<p>
								{event ? "Users joined: " : ""}
								{event ? event.ongoingPeoples : ""}
							</p>
							<input
								disabled
								type='text'
								name='ongoingPeoples'
								id='ongoingPeoples'
								min='0'
								className={`${
									!maxNumOfPeoples.isLimit ? "hidden" : "block"
								} w-20 rounded px-1  bg-primary-bg`}
								defaultValue={event ? `/ ${event.maxPeoples}` : ""}
							/>
						</div>
					</div>
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
							} w-20 rounded border-2 px-1 text-lg`}
							required
							defaultValue={event ? event.price : 0}
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
					<button
						onClick={cancelHandler}
						type='button'
						className='mt-4 px-4 py-3 bg-gray-500 font-semibold text-white rounded-md lg:mx-auto lg:text-xl'>
						Cancel
					</button>
					<Button className='mt-4  lg:mx-auto lg:text-xl'>
						{method === "PATCH" ? "Save" : "Add event"}
					</Button>
				</div>
			</Form>
		</div>
	)
}

export default EventForm

export const action = async ({ request, params }) => {
	const method = request.method
	const data = await request.formData()
	const onGoing = method === "POST" ? 0 : +data.get("ongoingPeoples")

	const eventData = {
		title: data.get("title"),
		poster: data.get("poster"),
		date: data.get("date"),
		host: data.get("host"),
		ongoingPeoples: onGoing,
		price: +data.get("price"),
		maxPeoples: +data.get("maxpeoples"),
		description: data.get("description"),
	}

	let url = "http://localhost:8080/events"

	if (method === "PATCH") {
		const id = params.eventId
		url = "http://localhost:8080/events/" + id
	}

	const response = await fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(eventData),
	})

	if (!response.ok) {
		throw json({ message: "Could not save event." }, { status: 500 })
	}
	return redirect("/my-events")
}
