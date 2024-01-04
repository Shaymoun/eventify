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
			<div className='border-b-2 mb-1 p-2'>
				<header className='relative flex justify-between items-center overflow-x-hidden  '>
					<NavigationButton
						mobileMenuOpen={mobileMenuOpen}
						toggleMenu={toggleMenu}
					/>
					<div>
						<Link to='/'>LOGO</Link>
					</div>
					<SearchButton onClick={toggleSearchBar} iconClassses='h-6 w-6' />
				</header>
				<SearchBar />
			</div>
			<div className={navBarClasses}>
				<nav className="h-1/3">
					<ul className='flex flex-col justify-around items-center h-full w-full'>
						<NavLink to='/profile' onClick={toggleMenu}>
							Profile
						</NavLink>
						<NavLink to='/add-event' onClick={toggleMenu}>
							Add Event
						</NavLink>
						<NavLink to='/my-events' onClick={toggleMenu}>
							My Events
						</NavLink>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default MainNavigation
