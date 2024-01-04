import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const NavigationButton = ({ mobileMenuOpen, toggleMenu, ...props }) => {
	let icon = mobileMenuOpen ? (
		<XMarkIcon className='block h-7 w-7' />
	) : (
		<Bars3Icon className='block h-7 w-7' />
	)

	return (
		<button
			{...props}
			aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
			onClick={toggleMenu}
			className='relative z-1 px-3 py-1.5'>
			{icon}
		</button>
	)
}

export default NavigationButton