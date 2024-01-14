import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children, open, onClose }) => {
	const dialog = useRef()

	useEffect(() => {
		if (open) {
			dialog.current.showModal()
		} else {
			dialog.current.close()
		}
	}, [open])

	return createPortal(
		<dialog className='fixed mx-auto my-auto w-full rounded-md p-2 backdrop:fixed backdrop:w-full backdrop:h-dvh backdrop:inset-0 backdrop:z-1 backdrop:bg-black/60 sm:w-[500px]' ref={dialog} onClose={onClose}>
			{open ? children : null}
		</dialog>,
		document.getElementById("overlays")
	)
}

export default Modal
