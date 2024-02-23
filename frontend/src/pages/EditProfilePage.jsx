import { useState } from "react"
import Button from "../ui/Button"
import { useAuth } from "../store/auth-context"
import { Link } from "react-router-dom"

const EditProfilePage = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const { currentUser } = useAuth()
	function handleSubmit(e) {
		e.preventDefault()
	}
	return (
		<div className='flex flex-col mx-auto pt-10 lg:w-[800px] h-[70vh]'>
			<h2 className='text-2xl text-primary-color font-bold text-center px-4 py-2 md:text-4xl'>
				Edit Profile
			</h2>
			<div className='flex justify-center w-full p-4 mx-auto md:p-8 lg:items-center'>
				<form
					className='flex flex-col justify-around w-full'
					onSubmit={handleSubmit}>
					<div>
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
							id='loginemail'
							className='w-full rounded border-2 px-2 py-1 lg:px-4 lg:py-2'
							required
							onChange={e => setEmail(e.target.value)}
							defaultValue={currentUser.email}
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
							placeholder='Leave blank to keep the same'
						/>
					</div>
					<div>
						<label
							htmlFor='confirm-password'
							className='block py-2 text-xl font-semibold'>
							Confirm Password
						</label>
						<input
							type='confirm-password'
							name='confirm-password'
							id='confirm-password'
							className='w-full rounded border-2 px-2 py-1 lg:px-4 lg:py-2'
							required
							onChange={e => setConfirmPassword(e.target.value)}
							placeholder='Leave blank to keep the same'
						/>
					</div>
					<div className='flex justify-around w-full'>
						<Button disabled={loading} className='mt-4 w-36 lg:text-xl'>
							Edit
						</Button>
						<Link
							to='/profile'
							className='flex justify-center items-center mt-4 w-36 lg:text-xl bg-red-500 text-white rounded-md font-bold'>
							Cancel
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditProfilePage
