import { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { EventifyContext } from "../store/eventify-context"
import SearchBar from "./SearchBar"
import LogInForm from "./LogInForm"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import SignUpForm from "./SignUpForm"
import { useAuth } from "../store/auth-context"

const DesktopNavigation = ({
	isLogInFormVisible,
	openLogInModal,
	closeLogInModal,
}) => {
	const { isLoggedIn, logOut } = useContext(EventifyContext)
	const [authAction, setAuthAction] = useState(true)
	const { logout, currentUser } = useAuth()
	const navigate = useNavigate()

	const toggleAuthAction = () => {
		setAuthAction(action => !action)
	}

	const setAuthActionCloseModal = () => {
		closeLogInModal()
		setAuthAction(true)
	}

	function handleLogout() {
		logout()
		navigate("/")
	}
	return (
		<div className='max-[1024px]:hidden lg:block border-b-2 p-2 bg-primary-bg'>
			<header className='flex justify-around items-center overflow-x-hidden'>
				<div className='flex justify-between items-center px-6 py-2 w-1/2 lg:w-2/3 lg:gap-x-6 xl:w-1/2 xl:gap-x-2'>
					<Link to='/' className='text-3xl text-primary-color font-bold '>
						Eventify
					</Link>
					<SearchBar />
				</div>
				<nav className='w-1/2'>
					{currentUser && (
						<div className='flex'>
							<ul className='flex flex-row justify-between items-center px-8 *:text-gray-500 text-md font-semibold lg:w-96 lg:ml-auto'>
								<NavLink
									to='/add-event'
									className='hover:text-primary-color transition-colors duration-300 xl:text-xl'>
									Add Event
								</NavLink>
								<NavLink
									to='/my-events'
									className='hover:text-primary-color transition-colors duration-300 xl:text-xl'>
									My Events
								</NavLink>
								<NavLink
									to='/profile'
									className='hover:text-primary-color transition-colors duration-300 xl:text-xl'>
									Profile
								</NavLink>
							</ul>
							<Button className='ml-auto mr-8' onClick={handleLogout}>
								Logout
							</Button>
						</div>
					)}
					{!currentUser && (
						<div className='flex'>
							<Button className='ml-auto mr-8' onClick={openLogInModal}>
								Login
							</Button>
						</div>
					)}
					<Modal open={isLogInFormVisible}>
						{authAction ? (
							<LogInForm
								onClose={setAuthActionCloseModal}
								toggleAuthAction={toggleAuthAction}
							/>
						) : (
							<SignUpForm
								onClose={setAuthActionCloseModal}
								toggleAuthAction={toggleAuthAction}
							/>
						)}
					</Modal>
				</nav>
			</header>
		</div>
	)
}

export default DesktopNavigation
