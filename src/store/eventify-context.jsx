import { createContext, useState } from "react"

export const EventifyContext = createContext({
	darkMode: false,
})

const EventifyContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false)

	const ctxValue = {
		darkMode,
	}

	return (
		<EventifyContext.Provider value={ctxValue}>
			{children}
		</EventifyContext.Provider>
	)
}

export default EventifyContextProvider
