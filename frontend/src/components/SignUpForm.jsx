import { useContext, useEffect, useState } from "react"
import Button from "../ui/Button"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useAuth } from "../store/auth-context"

const SignUpForm = ({ onClose, toggleAuthAction }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const { signup } = useAuth()

	const navigate = useNavigate()

	async function signUp(e) {
		e.preventDefault()
		if (password.trim().length < 6) {
			setError("Password must have at least 6 characters.")
			return
		}
		try {
			setError("")
			setLoading(true)
			await signup(email, password)
		} catch (error) {
			setError("Failed to create an account")
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
				Create your account
			</h2>
			<div className='flex justify-center w-full p-4 mx-auto md:p-8 lg:items-center'>
				<form className='flex flex-col justify-around w-full' onSubmit={signUp}>
					<div>
						{error && (
							<p className='text-lg text-red-600 font-semibold text-center'>
								{error}
							</p>
						)}
						<label
							htmlFor='email'
							className='block py-2 text-xl font-semibold '>
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
					<div>
						<label
							htmlFor='password'
							className='block py-2 text-xl font-semibold'>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							value={password}
							className='w-full rounded border-2 px-2 py-1 lg:px-4 lg:py-2'
							required
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<Button
						disabled={loading}
						className='mt-4 lg:w-96 lg:mx-auto lg:text-xl'>
						Register
					</Button>
					<a
						className='text-center mt-4 cursor-pointer font-semibold'
						onClick={() => {
							toggleAuthAction()
						}}>
						Already have account?
					</a>
				</form>
			</div>
		</>
	)
}

export default SignUpForm
