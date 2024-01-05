import { Link, NavLink } from "react-router-dom"
import SearchBar from "./SearchBar"

const DesktopNavigation = ({
	mobileMenuOpen,
	toggleMenu,
	toggleSearchBar,
}) => {
	return (
		<div className='max-[1024px]:hidden lg:block border-b-2 p-2'>
			<header className='flex justify-around items-center overflow-x-hidden'>
				<div className='flex justify-between items-center px-6 py-2 w-1/2 lg:w-2/3 lg:gap-x-6 xl:w-1/2 xl:gap-x-2'>
					<Link to='/' className='text-3xl text-green-400 font-bold'>
						Eventify
					</Link>
					<SearchBar />
				</div>
				<nav className='w-1/2'>
					<ul className='flex flex-row justify-between items-center px-8 *:text-gray-500 text-md font-semibold lg:w-96 lg:ml-auto'>
						<NavLink
							to='/add-event'
							onClick={toggleMenu}
							className='hover:text-green-400 transition-colors duration-300 xl:text-xl'>
							Add Event
						</NavLink>
						<NavLink
							to='/my-events'
							onClick={toggleMenu}
							className='hover:text-green-400 transition-colors duration-300 xl:text-xl'>
							My Events
						</NavLink>
						<NavLink
							to='/profile'
							onClick={toggleMenu}
							className='hover:text-green-400 transition-colors duration-300 xl:text-xl'>
							Profile
						</NavLink>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default DesktopNavigation
