import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import NavigationButton from "../ui/NavigationButton"
import { EventifyContext } from "../store/eventify-context"

const MainNavigation = () => {
	const { darkMode, mobileMenuOpen, toggleMenu } = useContext(EventifyContext)
	const navBarClasses = `bg-sky-500 fixed inset-0 h-dvh ${
		mobileMenuOpen ? "" : "translate-x-full"
	}`

	return (
		<header className='relative flex justify-between overflow-x-hidden bg-sky-500'>
			<div>
				<Link to='/'>LOGO</Link>
			</div>
			<nav className={navBarClasses}>
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
			<NavigationButton
				mobileMenuOpen={mobileMenuOpen}
				toggleMenu={toggleMenu}
			/>
		</header>
	)
}

export default MainNavigation
