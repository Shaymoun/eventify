import { useContext } from "react"
import SearchButton from "../ui/SearchButton"
import { EventifyContext } from "../store/eventify-context"

const SearchBar = () => {
	const { searchBarOpen } = useContext(EventifyContext)

	return (
		<search
			className={`flex justify-center items-center  bg-white px-1  ${
				searchBarOpen ? "block h-16" : "hidden h-0"
			}`}>
			<form className='relative'>
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
					iconClassses='h-6 w-6'
					buttonClasses='absolute inset-y-0 right-0 '
				/>
			</form>
		</search>
	)
}

export default SearchBar