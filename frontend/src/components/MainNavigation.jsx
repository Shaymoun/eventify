import { useState } from "react"
import NavigationButton from "../ui/NavigationButton"
import SearchButton from "../ui/SearchButton"
import SearchBar from "./SearchBar"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

const MainNavigation = () => {
	const [isLogInFormVisible, setIsLogInFormVisible] = useState(false)

	const openLogInModal = () => {
		setIsLogInFormVisible(true)
	}
	const closeLogInModal = () => {
		setIsLogInFormVisible(false)
	}


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
