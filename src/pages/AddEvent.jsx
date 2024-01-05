const AddEventPage = () => {
	return (
		<div className='flex justify-center py-2  h-svh'>
			<form action='' className='flex flex-col justify-between h-4/5 sm:w-full '>
				<div>
					<label htmlFor='name' className='block py-2 text-xl font-semibold'>
						Event title
					</label>
					<input
						type='text'
						name='title'
						id='name'
						className='w-full rounded border-2  px-2 py-1'
					/>
				</div>
				<div>
					<label htmlFor='description' className='block py-2 text-xl font-semibold'>
						Description
					</label>
					<textarea
						type='text'
						name='description'
						id='description'
						className='resize-y w-full rounded border-2 px-2 py-1 min-h-48'
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
						className='w-full rounded border-2 px-2 py-1'
					/>
				</div>
				<div>
					<label htmlFor='poster' className='block py-2 text-xl font-semibold'>
						Poster
					</label>
					<input type='file' name='poster' id='poster' className="z-[-1]py-1 mb-6 file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-green-400 file:text-white
      "/>
				</div>
				<button className='py-3 rounded bg-green-400 text-white font-bold mt-4'>
					Add event
				</button>
			</form>
		</div>
	)
}

export default AddEventPage
