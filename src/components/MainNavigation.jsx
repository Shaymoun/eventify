import { NavLink } from "react-router-dom"
import { useContext } from "react"
import NavigationButton from "../ui/NavigationButton"
import { EventifyContext } from "../store/eventify-context"

const MainNavigation = () => {
	const { darkMode, mobileMenuOpen, toggleMenu } = useContext(EventifyContext)

	return (
		<header className='relative flex justify-between overflow-x-hidden bg-sky-500'>
			<div>LOGO</div>
			<nav
				className={`bg-sky-500 fixed inset-0 h-dvh z-[-1] ${
					mobileMenuOpen ? "" : "translate-x-full"
				}`}>
				<ul className='flex flex-col justify-around items-center h-full w-full'>
					<NavLink to='/profile'>Profile</NavLink>
					<NavLink to='/add-event'>Add Event</NavLink>
					<NavLink to='/my-events'>My Events</NavLink>
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
