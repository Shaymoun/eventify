import { useContext, useEffect, useState } from "react"
import Button from "../ui/Button"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { EventifyContext } from "../store/eventify-context"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth-context"

const LogInForm = ({ onClose, toggleAuthAction }) => {
	const { logIn } = useContext(EventifyContext) //logIn było dodane do onSubmit na form ponizej
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const { login } = useAuth()

	const navigate = useNavigate()

	async function signIn(e) {
		e.preventDefault()
		try {
			setError("")
			setLoading(true)
			await login(email, password)
		} catch (error) {
			setError("Failed to sign in. Check your e-mail and password.")
		}
		setLoading(false)
		onClose()
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setError("")
		}, 8000)
		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<>
			<div className='flex justify-end'>
				<button className='p-1' onClick={onClose}>
					<XMarkIcon className='block h-6 w-6' />
				</button>
			</div>
			<h2 className='text-2xl text-primary-color font-bold text-center px-4 py-2 md:text-4xl'>
				Login
			</h2>
			<div className='flex justify-center w-full p-4 mx-auto md:p-8 lg:items-center'>
				<form className='flex flex-col justify-around w-full' onSubmit={signIn}>
					<div>
						{error && (
							<p className='text-lg text-red-600 font-semibold text-center'>{error}</p>
						)}
						<label htmlFor='email' className='block py-2 text-xl font-semibold'>
							E-mail
						</label>
						<input
							type='email'
							name='email'
							id='loginemail'
							className='w-full rounded border-2 px-2 py-1 lg:px-4 lg:py-2'
							required
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label
							htmlFor='password'
							className='block py-2 text-xl font-semibold'>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='loginpassword'
							className='w-full rounded border-2 px-2 py-1 lg:px-4 lg:py-2'
							required
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<Button
						disabled={loading}
						className='mt-4 lg:w-96 lg:mx-auto lg:text-xl'>
						Login
					</Button>
					<a
						className='text-center mt-4 cursor-pointer font-semibold'
						onClick={() => {
							toggleAuthAction()
						}}>
						Need an account?
					</a>
				</form>
			</div>
		</>
	)
}

export default LogInForm
