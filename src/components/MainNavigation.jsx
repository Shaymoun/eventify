import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import NavigationButton from "../ui/NavigationButton"
import { EventifyContext } from "../store/eventify-context"
import SearchButton from "../ui/SearchButton"
import SearchBar from "./SearchBar"

const MainNavigation = () => {
	const { darkMode, mobileMenuOpen, toggleMenu, toggleSearchBar } =
		useContext(EventifyContext)
	const navBarClasses = `fixed h-dvh w-full bg-white ${
		mobileMenuOpen ? "" : "-translate-x-full"
	}`

	return (
		<>
			{/* mobile */}
			<div className='sm:block lg:hidden border-b-2  p-2'>
				<header className='relative flex justify-between items-center overflow-x-hidden  '>
					<NavigationButton
						mobileMenuOpen={mobileMenuOpen}
						toggleMenu={toggleMenu}
						className='px-3 py-1.5'
					/>
					<div className='px-6 py-2'>
						<Link to='/' className='text-2xl text-green-400 font-bold'>
							Eventify
						</Link>
					</div>
					<SearchButton
						onClick={toggleSearchBar}
						iconClassses='h-6 w-6'
						buttonClasses='px-3 py-1.5'
					/>
				</header>
				<SearchBar />
			</div>
			<div className={`${navBarClasses} `}>
				<nav className='h-1/2 '>
					<ul className='flex flex-col justify-around items-center h-full w-full border-b-2 *:text-gray-500 text-lg font-semibold '>
						<NavLink
							to='/add-event'
							onClick={toggleMenu}
							className='hover:text-green-400 transition-colors duration-300'>
							Add Event
						</NavLink>
						<NavLink
							to='/my-events'
							onClick={toggleMenu}
							className='hover:text-green-400 transition-colors duration-300'>
							My Events
						</NavLink>
						<NavLink
							to='/profile'
							onClick={toggleMenu}
							className='hover:text-green-400 transition-colors duration-300'>
							Profile
						</NavLink>
					</ul>
				</nav>
			</div>

			{/* desktop */}
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
		</>
	)
}

export default MainNavigation
