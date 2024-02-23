import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../ui/Button"
import { useAuth } from "../store/auth-context"

const ForgotPassword = () => {
	const [email, setEmail] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState("")
	const { resetPassword } = useAuth()

	async function handleSubmit(e) {
		e.preventDefault()
		setMessage("")
		try {
			setError("")
			setLoading(true)
			await resetPassword(email)
			setMessage("Check your inbox for futher instructions.")
			setEmail("")
		} catch (error) {
			setError("Failed to reset password. Type your e-mail again.")
			setEmail("")
		}
		setLoading(false)
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMessage("")
			setError("")
		}, 8000)
		return () => {
			clearTimeout(timeout)
		}
	}, [])
	return (
		<div className='flex flex-col mx-auto pt-10 lg:w-[800px] h-[70vh]'>
			<h2 className='text-2xl text-primary-color font-bold text-center px-4 py-2 md:text-4xl'>
				Password Reset
			</h2>

			<div className='flex justify-center w-full p-4 mx-auto md:p-8 lg:items-center'>
				<form
					className='flex flex-col justify-around w-full'
					onSubmit={handleSubmit}>
					<div className='mb-8'>
						{message && (
							<p className='text-lg text-primary-color font-semibold text-center'>
								{message}
							</p>
						)}
						{error && (
							<p className='text-lg text-red-600 font-semibold text-center'>
								{error}
							</p>
						)}
						<label htmlFor='email' className='block py-2 text-xl font-semibold'>
							E-mail
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='w-full rounded border-2 px-2 py-1 lg:px-4 lg:py-2'
							value={email}
							required
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<Button className='mt-4 lg:w-96 lg:mx-auto lg:text-xl'>
						Reset Password
					</Button>
					<Link
						to='/'
						className='text-center mt-4 cursor-pointer font-semibold'>
						Back to homepage
					</Link>
				</form>
			</div>
		</div>
	)
}

export default ForgotPassword
