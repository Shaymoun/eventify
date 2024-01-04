import { createContext, useState } from "react"

export const EventifyContext = createContext({
	darkMode: false,
	mobileMenuOpen: false,
	searchBarOpen: false,
	toggleMenu: () => {},
	toggleSearchBar: () => {},
})

const EventifyContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [searchBarOpen, setSearchBarOpen] = useState(false)

	const toggleMenu = () => {
		setMobileMenuOpen(menuState => !menuState)
	}

	const toggleSearchBar = () => {
		setSearchBarOpen(searchBarState => !searchBarState)
	}

	const ctxValue = {
		darkMode,
		mobileMenuOpen,
		searchBarOpen,
		toggleMenu,
		toggleSearchBar,
	}

	return (
		<EventifyContext.Provider value={ctxValue}>
			{children}
		</EventifyContext.Provider>
	)
}

export default EventifyContextProvider
