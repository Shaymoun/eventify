import React from "react"
import NavigationButton from "../ui/NavigationButton"
import { Link, NavLink } from "react-router-dom"
import SearchBar from "./SearchBar"
import SearchButton from "../ui/SearchButton"

const MobileNavigation = ({ mobileMenuOpen, toggleMenu, toggleSearchBar }) => {
	const navBarClasses = `z-10 fixed h-dvh w-full bg-primary-bg  ${
		mobileMenuOpen ? "" : "-translate-x-full"
	}`
	return (
		<>
			<div className='sm:block lg:hidden border-b-2 p-2 bg-primary-bg'>
				<header className='relative flex justify-between items-center overflow-x-hidden z-10 '>
					<NavigationButton
						mobileMenuOpen={mobileMenuOpen}
						toggleMenu={toggleMenu}
						className='px-3 py-1.5'
					/>
					<div className='px-6 py-2'>
						<Link to='/' className='text-2xl text-primary-color font-bold'>
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
			<div className={`${navBarClasses} transition-transform ease-in-out `}>
				<nav className='h-1/2 '>
					<ul className='flex flex-col justify-around items-center h-full w-full border-b-2 *:text-gray-500 text-lg font-semibold '>
						<NavLink to='/add-event' onClick={toggleMenu}>
							Add Event
						</NavLink>
						<NavLink to='/my-events' onClick={toggleMenu}>
							My Events
						</NavLink>
						<NavLink to='/profile' onClick={toggleMenu}>
							Profile
						</NavLink>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default MobileNavigation
