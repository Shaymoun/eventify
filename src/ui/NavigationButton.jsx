import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const NavigationButton = ({ mobileMenuOpen, toggleMenu, ...props }) => {
	let icon = mobileMenuOpen ? (
		<XMarkIcon className='block h-6 w-6' />
	) : (
		<Bars3Icon className='block h-6 w-6' />
	)

	return (
		<button
			{...props}
			aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
			className=''
			onClick={toggleMenu}
			>
			{icon}
		</button>
	)
}

export default NavigationButton
