const Button = ({ children, className, ...props }) => {
	let cssClasses = "py-3 px-6 rounded bg-green-400 text-white font-bold"
	return (
		<button className={cssClasses + " " + className} {...props}>
			{children}
		</button>
	)
}

export default Button
