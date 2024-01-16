import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import Footer from "../components/Footer"

const RootLayout = () => {
	return (
		<div>
			<MainNavigation />
			<main className='bg-primary-bg'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default RootLayout
