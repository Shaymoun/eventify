import { Link, NavLink } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import NavigationButton from "../ui/NavigationButton"
import { EventifyContext } from "../store/eventify-context"
import SearchButton from "../ui/SearchButton"
import SearchBar from "./SearchBar"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

const MainNavigation = () => {
	const [isLogInFormVisible, setIsLogInFormVisible] = useState(false)
	const { isLoggedIn, logIn, logOut } = useContext(EventifyContext)

	const openLogInModal = () => {
		setIsLogInFormVisible(true)
	}
	const closeLogInModal = () => {
		setIsLogInFormVisible(false)
	}
	useEffect(() => {
		const isLoggedIn = localStorage.getItem("isLoggedIn")
		if (isLoggedIn === "1") {
			logIn()
		} else {
			logOut()
		}
	}, [])

	return (
		<>
			<MobileNavigation
				isLogInFormVisible={isLogInFormVisible}
				openLogInModal={openLogInModal}
				closeLogInModal={closeLogInModal}
			/>
			<DesktopNavigation
				isLogInFormVisible={isLogInFormVisible}
				openLogInModal={openLogInModal}
				closeLogInModal={closeLogInModal}
			/>
		</>
	)
}

export default MainNavigation
