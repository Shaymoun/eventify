import { createContext, useState } from "react"

export const EventifyContext = createContext({
	isLoggedIn: false,
	darkMode: false,
	logIn: () => {},
	logOut: () => {},
})

const EventifyContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const logIn = () => {
		setIsLoggedIn(true)
		localStorage.setItem("isLoggedIn","1")
	}
	const logOut = () => {
		setIsLoggedIn(false)
		localStorage.setItem("isLoggedIn","0")
	}

	const ctxValue = {
		darkMode,
		isLoggedIn,
		logIn,
		logOut,
	}

	return (
		<EventifyContext.Provider value={ctxValue}>
			{children}
		</EventifyContext.Provider>
	)
}

export default EventifyContextProvider
