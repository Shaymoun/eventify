import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import EventifyContextProvider from "./store/eventify-context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<EventifyContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</EventifyContextProvider>
)
