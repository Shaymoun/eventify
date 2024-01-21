import { useContext, useState } from "react"
import SearchButton from "../ui/SearchButton"
import { Form, Link } from "react-router-dom"

const SearchBar = () => {
	const [search, setSearch] = useState({ keywords: "", location: "" })
	return (
		<search className='flex justify-center items-center bg-primary-bg px-2 h-16 lg:w-full lg:flex'>
			<Form className='relative md:w-full xl:w-3/4'>
				<input
					type='text'
					name='keywords'
					className='border-y-2 border-l-2 px-2 py-2 rounded-l-lg w-1/2'
					placeholder='Search event'
					onChange={e => {
						setSearch(state => {
							return { ...state, keywords: e.target.value }
						})
					}}
					value={search.keywords}
					required
				/>
				<input
					type='text'
					name='location'
					className='border-2 px-2 py-2 rounded-r-lg w-1/2'
					placeholder='City or zip code'
					onChange={e => {
						setSearch(state => {
							return { ...state, location: e.target.value }
						})
					}}
				/>
				<Link to={`search/${search.keywords}`}>
					<SearchButton
						iconClassses='h-6 w-6 text-white'
						buttonClasses='absolute inset-y-0 right-0 bg-green-400 rounded-r-lg'
					/>
				</Link>
			</Form>
		</search>
	)
}

export default SearchBar

