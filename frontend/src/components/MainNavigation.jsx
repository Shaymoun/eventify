import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import NavigationButton from "../ui/NavigationButton"
import { EventifyContext } from "../store/eventify-context"
import SearchButton from "../ui/SearchButton"
import SearchBar from "./SearchBar"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

const MainNavigation = () => {
	return (
		<>
			<MobileNavigation />
			<DesktopNavigation />
		</>
	)
}

export default MainNavigation
