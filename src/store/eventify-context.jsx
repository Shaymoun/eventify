import { createContext, useState } from "react"

export const EventifyContext = createContext({
	darkMode: false,
	mobileMenuOpen: false,
	toggleMenu: () => {},
})

const EventifyContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMobileMenuOpen(menuState => !menuState)
	}

	const ctxValue = {
		darkMode,
		mobileMenuOpen,
		toggleMenu,
	}

	return (
		<EventifyContext.Provider value={ctxValue}>
			{children}
		</EventifyContext.Provider>
	)
}

export default EventifyContextProvider
