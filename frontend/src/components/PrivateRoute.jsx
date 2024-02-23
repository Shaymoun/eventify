import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth-context"
import { useEffect } from "react"

const PrivateRoute = ({ children }) => {
	const { currentUser } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (currentUser === null) {
			navigate("/", { replace: true })
		}
	}, [navigate, currentUser])
	return children
}

export default PrivateRoute
