import { NavLink } from "react-router-dom"
import { useContext } from "react"
import NavigationButton from "../ui/NavigationButton"
import { EventifyContext } from "../store/eventify-context"

const MainNavigation = () => {
	const { darkMode, mobileMenuOpen, toggleMenu } = useContext(EventifyContext)
	return (
		<header>
			<div className='logo'></div>
			<NavigationButton mobileMenuOpen={mobileMenuOpen} toggleMenu={toggleMenu}/>
			<nav>
				<ul>
					<NavLink to='/profile'>Profile</NavLink>
					<NavLink to='/add-event'>Add Event</NavLink>
					<NavLink to='/my-events'>My Events</NavLink>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
