import { useContext } from "react"
import SearchButton from "../ui/SearchButton"
import { EventifyContext } from "../store/eventify-context"

const SearchBar = () => {
	return (
		<search className='flex justify-center items-center bg-primary-bg px-2 h-16 lg:w-full lg:flex'>
			<form className='relative md:w-full xl:w-3/4'>
				<input
					type='text'
					name='event-name'
					className='border-y-2 border-l-2 px-2 py-2 rounded-l-lg w-1/2'
					placeholder='Search event'
				/>
				<input
					type='text'
					name='event-city'
					className='border-2 px-2 py-2 rounded-r-lg w-1/2'
					placeholder='City or zip code'
				/>
				<SearchButton
					iconClassses='h-6 w-6 text-white'
					buttonClasses='absolute inset-y-0 right-0 bg-green-400 rounded-r-lg'
				/>
			</form>
		</search>
	)
}

export default SearchBar
