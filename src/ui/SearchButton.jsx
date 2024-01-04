import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const SearchButton = ({ buttonClasses, iconClassses, ...props }) => {
	return (
		<button
			className={`flex items-center justify-center px-3 py-1.5 ${buttonClasses} `}
			{...props}
			aria-label='Wł./wył. wyszukiwanie'>
			<MagnifyingGlassIcon className={iconClassses}>
				SearchButton
			</MagnifyingGlassIcon>
		</button>
	)
}

export default SearchButton
