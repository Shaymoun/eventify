import { createContext, useState } from "react"

export const EventifyContext = createContext({
	events: [],
	isLoggedIn: false,
	darkMode: false,
	logIn: () => {},
	logOut: () => {},
	updateEvents: () => {},
})

const EventifyContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [events, setEvents] = useState([])

	const logIn = () => {
		setIsLoggedIn(true)
		localStorage.setItem("isLoggedIn", "1")
	}
	const logOut = () => {
		setIsLoggedIn(false)
		localStorage.setItem("isLoggedIn", "0")
	}
	const updateEvents = events => {
		setEvents(events)
	}

	const ctxValue = {
		darkMode,
		isLoggedIn,
		logIn,
		logOut,
		events,
		updateEvents,
	}

	return (
		<EventifyContext.Provider value={ctxValue}>
			{children}
		</EventifyContext.Provider>
	)
}

export default EventifyContextProvider
