import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import NavigationButton from "../ui/NavigationButton"
import { EventifyContext } from "../store/eventify-context"
import SearchButton from "../ui/SearchButton"
import SearchBar from "./SearchBar"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

const MainNavigation = () => {
	const { darkMode, mobileMenuOpen, toggleMenu, toggleSearchBar } =
		useContext(EventifyContext)

	return (
		<>
			<MobileNavigation
				mobileMenuOpen={mobileMenuOpen}
				toggleMenu={toggleMenu}
				toggleSearchBar={toggleSearchBar}
			/>
			<DesktopNavigation
				mobileMenuOpen={mobileMenuOpen}
				toggleMenu={toggleMenu}
				toggleSearchBar={toggleSearchBar}
			/>
		</>
	)
}

export default MainNavigation
