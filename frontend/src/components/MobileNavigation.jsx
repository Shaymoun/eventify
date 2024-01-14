import { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { EventifyContext } from "../store/eventify-context"
import SearchBar from "./SearchBar"
import NavigationButton from "../ui/NavigationButton"
import SearchButton from "../ui/SearchButton"
import Button from "../ui/Button"
import Modal from "../ui/Modal"
import LogInForm from "./LogInForm"

const MobileNavigation = ({
	isLogInFormVisible,
	openLogInModal,
	closeLogInModal,
}) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [searchBarOpen, setSearchBarOpen] = useState(false)
	const { isLoggedIn, logOut } = useContext(EventifyContext)

	const toggleMenu = () => {
		setMobileMenuOpen(menuState => !menuState)
	}

	const toggleSearchBar = () => {
		setSearchBarOpen(searchBarState => !searchBarState)
	}

	const navBarClasses = `z-10 fixed h-dvh w-full bg-primary-bg  ${
		mobileMenuOpen ? "" : "-translate-x-full"
	}`
	return (
		<>
			<div className='sm:block lg:hidden border-b-2 p-2 bg-primary-bg'>
				<header className='relative flex justify-between items-center overflow-x-hidden z-10 '>
					<NavigationButton
						mobileMenuOpen={mobileMenuOpen}
						toggleMenu={toggleMenu}
						className='px-3 py-1.5'
					/>
					<div className='px-6 py-2'>
						<Link to='/' className='text-2xl text-primary-color font-bold'>
							Eventify
						</Link>
					</div>
					<SearchButton
						onClick={toggleSearchBar}
						iconClassses='h-6 w-6'
						buttonClasses='px-3 py-1.5'
					/>
				</header>
				{searchBarOpen && <SearchBar />}
			</div>
			<div className={`${navBarClasses} transition-transform ease-in-out `}>
				{isLoggedIn && (
					<nav className='h-1/2 '>
						<ul className='flex flex-col justify-around items-center h-full w-full border-b-2 *:text-gray-500 text-lg font-semibold '>
							<NavLink to='/add-event' onClick={toggleMenu}>
								Add Event
							</NavLink>
							<NavLink to='/my-events' onClick={toggleMenu}>
								My Events
							</NavLink>
							<NavLink to='/profile' onClick={toggleMenu}>
								Profile
							</NavLink>
						</ul>
						<div className='flex w-full h-full justify-center items-start my-8'>
							<Button
								onClick={() => {
									logOut()
									toggleMenu()
								}}>
								Logout
							</Button>
						</div>
					</nav>
				)}
				{!isLoggedIn && (
					<div className='flex w-full h-full justify-center items-center'>
						<Button
							onClick={() => {
								openLogInModal()
								toggleMenu()
							}}>
							Login
						</Button>
					</div>
				)}
				<Modal open={isLogInFormVisible}>
					<LogInForm onClose={closeLogInModal} />
				</Modal>
			</div>
		</>
	)
}

export default MobileNavigation
