import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import Footer from "../components/Footer"

const RootLayout = () => {
	return (
		<>
			<MainNavigation />
			<main className='bg-primary-bg'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default RootLayout
