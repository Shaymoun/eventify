import Button from "../ui/Button"
import { XMarkIcon } from "@heroicons/react/24/outline"

const LogInForm = () => {
	return (
		<>
			<div className='flex justify-end'>
				<button className="p-1">
					<XMarkIcon className='block h-6 w-6' />
				</button>
			</div>
			<h2 className='text-2xl text-primary-color font-bold text-center px-4 py-2 md:text-4xl'>
				Login
			</h2>
			<div className='flex justify-center w-full p-4 mx-auto md:p-8 lg:items-center'>
				<form action='' className='flex flex-col justify-around w-full'>
					<div>
						<label htmlFor='email' className='block py-2 text-xl font-semibold'>
							E-mail
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='w-full rounded border-2 px-2 py-1 lg:px-4 lg:py-2'
							required
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
							className='w-full rounded border-2 px-2 py-1 lg:px-4 lg:py-2'
							required
						/>
					</div>

					<Button className='mt-4 lg:w-96 lg:mx-auto lg:text-xl'>Login</Button>
				</form>
			</div>
		</>
	)
}

export default LogInForm
