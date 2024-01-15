import { Link } from "react-router-dom"

const ErrorPage = () => {
	return (
		<div className='flex justify-center items-center'>
			<div className='text-center'>
				<h1 className='text-3xl py-4'>An error occured! 👀</h1>
				<p className='mb-10'>Something went wrong.😱 Try again later...</p>
				<p className='text-xl'>
					Click here 👉 <Link to='/' className="py-1 border-b-2 border-black">to return home page.</Link>
				</p>
			</div>
		</div>
	)
}

export default ErrorPage
